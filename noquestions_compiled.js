if(!lt.util.load.provided_QMARK_('noquestions.core')) {
goog.provide('noquestions.core');
goog.require('cljs.core');
goog.require('lt.object');
goog.require('lt.object');
goog.require('lt.objs.files');
goog.require('lt.objs.files');
goog.require('lt.objs.document');
goog.require('lt.objs.document');
goog.require('lt.objs.editor.pool');
goog.require('lt.objs.editor.pool');

noquestions.core.__BEH__watched__DOT__delete = (function __BEH__watched__DOT__delete(ws,del){var temp__4090__auto__ = cljs.core.first.call(null,lt.objs.editor.pool.by_path.call(null,del));if(cljs.core.truth_(temp__4090__auto__))
{var ed = temp__4090__auto__;return lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"close.force","close.force",4409585383));
} else
{var open = cljs.core.filter.call(null,(function (p1__8357_SHARP_){var temp__4090__auto____$1 = new cljs.core.Keyword(null,"path","path",1017337751).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",1017141280).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,p1__8357_SHARP_)));if(cljs.core.truth_(temp__4090__auto____$1))
{var path = temp__4090__auto____$1;return cljs.core._EQ_.call(null,0,path.indexOf([cljs.core.str(del),cljs.core.str(lt.objs.files.separator)].join('')));
} else
{return false;
}
}),lt.object.by_tag.call(null,new cljs.core.Keyword(null,"editor","editor",4001043679)));var seq__8362 = cljs.core.seq.call(null,open);var chunk__8363 = null;var count__8364 = 0;var i__8365 = 0;while(true){
if((i__8365 < count__8364))
{var ed = cljs.core._nth.call(null,chunk__8363,i__8365);lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"close.force","close.force",4409585383));
{
var G__8366 = seq__8362;
var G__8367 = chunk__8363;
var G__8368 = count__8364;
var G__8369 = (i__8365 + 1);
seq__8362 = G__8366;
chunk__8363 = G__8367;
count__8364 = G__8368;
i__8365 = G__8369;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__8362);if(temp__4092__auto__)
{var seq__8362__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__8362__$1))
{var c__7526__auto__ = cljs.core.chunk_first.call(null,seq__8362__$1);{
var G__8370 = cljs.core.chunk_rest.call(null,seq__8362__$1);
var G__8371 = c__7526__auto__;
var G__8372 = cljs.core.count.call(null,c__7526__auto__);
var G__8373 = 0;
seq__8362 = G__8370;
chunk__8363 = G__8371;
count__8364 = G__8372;
i__8365 = G__8373;
continue;
}
} else
{var ed = cljs.core.first.call(null,seq__8362__$1);lt.object.raise.call(null,ed,new cljs.core.Keyword(null,"close.force","close.force",4409585383));
{
var G__8374 = cljs.core.next.call(null,seq__8362__$1);
var G__8375 = null;
var G__8376 = 0;
var G__8377 = 0;
seq__8362 = G__8374;
chunk__8363 = G__8375;
count__8364 = G__8376;
i__8365 = G__8377;
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
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("noquestions.core","watched.delete","noquestions.core/watched.delete",4080097318),new cljs.core.Keyword(null,"reaction","reaction",4441361819),noquestions.core.__BEH__watched__DOT__delete,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watched.delete","watched.delete",766354781),null], null), null));

noquestions.core.__BEH__watched__DOT__update = (function __BEH__watched__DOT__update(ws,f,stat){if(cljs.core.truth_(lt.objs.files.file_QMARK_.call(null,f)))
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
lt.object.behavior_STAR_.call(null,new cljs.core.Keyword("noquestions.core","watched.update","noquestions.core/watched.update",4568114436),new cljs.core.Keyword(null,"reaction","reaction",4441361819),noquestions.core.__BEH__watched__DOT__update,new cljs.core.Keyword(null,"triggers","triggers",2516997421),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"watched.update","watched.update",1262966907),null], null), null));

}

//# sourceMappingURL=