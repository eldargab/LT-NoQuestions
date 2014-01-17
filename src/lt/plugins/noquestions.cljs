(ns lt.plugins.noquestions
  (:require [lt.objs.editor.pool :as pool]
            [lt.objs.document :as doc]
            [lt.objs.files :as files]
            [lt.object :as object])
  (:require-macros [lt.macros :refer [behavior]]))


(behavior ::close-editor-on-watched-delete
          :triggers #{:watched.delete}
          :reaction (fn [ws del]
                      (if-let [ed (first (pool/by-path del))]
                        (object/raise ed :close.force)
                        (let [open (filter #(if-let  [path (-> @% :info :path)]
                                              (= 0 (.indexOf path (str del files/separator)))
                                              false)
                                           (object/by-tag :editor))]
                          (doseq [ed open]
                            (object/raise ed :close.force))))))

(behavior ::reload-editor-on-watched-update
          :triggers #{:watched.update}
          :reaction (fn [ws f stat]
                      (when (files/file? f)
                        (when-let [ed (first (pool/by-path f))]
                          (when-not (doc/check-mtime (doc/->stats f) stat)
                            (pool/reload ed))))))