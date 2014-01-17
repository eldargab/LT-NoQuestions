if(!lt.util.load.provided_QMARK_('lt.plugins.noquestions')) {
goog.provide('lt.plugins.noquestions');
goog.require('cljs.core');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.files');
goog.require('lt.objs.files');
goog.require('lt.objs.document');
goog.require('lt.objs.document');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.editor.pool');

lt.plugins.noquestions.__BEH__close_editor_on_watched_delete = (function __BEH__close_editor_on_watched_delete(ws,del){var temp__4090__auto__ = cljs.core.first.call(null,lt.objs.editor.pool.by_path.call(null,del));if(cljs.core.truth_(temp__4090__auto__))
{var ed = temp__4090__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"close.force","close.force",4409585383));
} else
{var open = cljs.core.filter.call(null,(function (p1__8280_SHARP_){var temp__4090__auto____$1 = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__8280_SHARP_)));if(cljs.core.truth_(temp__4090__auto____$1))
{var path = temp__4090__auto____$1;return cljs.core._EQ_.call(null,0,path.indexOf([cljs.core.str(del),cljs.core.str(lt.objs.files.separator)].join('')));
} else
{return false;
}
}),lt.object.by_tag.call(null,new cljs.core.Keyword(null,"editor","editor",4001043679)));var seq__8285 = cljs.core.seq.call(null,open);var chunk__8286 = null;var count__8287 = 0;var i__8288 = 0;while(true){
if((i__8288 < count__8287))
{var ed = cljs.core._nth.call(null,chunk__8286,i__8288);lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"close.force","close.force",4409585383));
{
var G__8289 = seq__8285;
var G__8290 = chunk__8286;
var G__8291 = count__8287;
var G__8292 = (i__8288 + 1);
seq__8285 = G__8289;
chunk__8286 = G__8290;
count__8287 = G__8291;
i__8288 = G__8292;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8285);if(temp__4092__auto__)
{var seq__8285__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8285__$1))
{var c__7470__auto__ = cljs.core.chunk_first.call(null,seq__8285__$1);{
var G__8293 = cljs.core.chunk_rest.call(null,seq__8285__$1);
var G__8294 = c__7470__auto__;
var G__8295 = cljs.core.count.call(null,c__7470__auto__);
var G__8296 = 0;
seq__8285 = G__8293;
chunk__8286 = G__8294;
count__8287 = G__8295;
i__8288 = G__8296;
continue;
}
} else
{var ed = cljs.core.first.call(null,seq__8285__$1);lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"close.force","close.force",4409585383));
{
var G__8297 = cljs.core.next.call(null,seq__8285__$1);
var G__8298 = null;
var G__8299 = 0;
var G__8300 = 0;
seq__8285 = G__8297;
chunk__8286 = G__8298;
count__8287 = G__8299;
i__8288 = G__8300;
continue;
}
}
} else
{return null;
}
}
break;
}
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.noquestions","close-editor-on-watched-delete","lt.plugins.noquestions/close-editor-on-watched-delete",2132016981),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.noquestions.__BEH__close_editor_on_watched_delete,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watched.delete","watched.delete",766354781),null], null), null));

lt.plugins.noquestions.__BEH__reload_editor_on_watched_update = (function __BEH__reload_editor_on_watched_update(ws,f,stat){if(cljs.core.truth_(lt.objs.files.file_QMARK_.call(null,f)))
{var temp__4092__auto__ = cljs.core.first.call(null,lt.objs.editor.pool.by_path.call(null,f));if(cljs.core.truth_(temp__4092__auto__))
{var ed = temp__4092__auto__;if(cljs.core.truth_(lt.objs.document.check_mtime.call(null,lt.objs.document.__GT_stats.call(null,f),stat)))
{return null;
} else
{return lt.objs.editor.pool.reload.call(null,ed);
}
} else
{return null;
}
} else
{return null;
}
});
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("lt.plugins.noquestions","reload-editor-on-watched-update","lt.plugins.noquestions/reload-editor-on-watched-update",3898885298),new cljs.core.Keyword(null,"reaction","reaction",4441361819),lt.plugins.noquestions.__BEH__reload_editor_on_watched_update,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watched.update","watched.update",1262966907),null], null), null));

}

//# sourceMappingURL=