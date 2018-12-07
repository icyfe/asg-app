var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
var Component = Component || function() {};
var definePlugin = definePlugin || function() {};
var requirePlugin = requirePlugin || function() {};
var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20180905_syb_scopedata*/global.__wcc_version__='v0.5vv_20180905_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
throw e;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
var value = $gdc( raw, "", 2 );
return value;
}
else
{
var value = $gdc( raw, "", 2 );
return value;
}
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
a = _da( node, attrname, opindex, a, o );
node.attr[attrname] = a;
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
a = _da( node, attrname, opindex, a, o );
node.attr[attrname] = a;
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, c){
p.extraAttr = {"t_action": a, "t_cid": c};
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules;
var p_={}
var cs
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'ded7d2de'])
Z([[7],[3,'isShow']])
Z([3,'handleProxy'])
Z([3,'_view data-v-fc63994a gotop'])
Z([[7],[3,'$k']])
Z([1,'Unl-0'])
Z([3,'#FF4040'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'tWH-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'04590597'])
Z([3,'30'])
Z([3,'gotop'])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'322f959d'])
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'3a42c3d5'])
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'0b724cc6'])
Z([3,'index'])
Z([3,'product'])
Z([[7],[3,'productList']])
Z(z[1])
Z([[7],[3,'renderImage']])
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'04590597'])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'70eb152e'])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'3e41bd7c'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'tabs']])
Z(z[1])
Z([[2,'>'],[[6],[[7],[3,'tabs']],[3,'length']],[1,0]])
Z([3,'handleProxy'])
Z([3,'_view data-v-cfa73574 wrap'])
Z([[7],[3,'$k']])
Z([[2,'+'],[1,'dIn-0-'],[[7],[3,'index']]])
Z([[7],[3,'index']])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[2,'+'],[[7],[3,'$kk']],[1,'7Al-0-']],[[7],[3,'index']]]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'04590597'])
Z([3,'28'])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'710e25c2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'710e25c2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'cd3868b0'])
Z([3,'1'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'mJn-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'3e41bd7c'])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'cd3868b0'])
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'714fa448'])
Z([3,'2'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'ITT-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'3e41bd7c'])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'714fa448'])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'ccdb15ca'])
Z([3,'0'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'Swp-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'3e41bd7c'])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'ccdb15ca'])
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'34cf1c86'])
Z([3,'3'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'9kR-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'3e41bd7c'])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'34cf1c86'])
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'5fcca011'])
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'5fcca011'])
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'a6075708'])
Z([3,'handleProxy'])
Z([3,'_scroll-view data-v-29a9da5a detail-container'])
Z([[7],[3,'$k']])
Z([1,'ctd-4'])
Z([3,'scroll'])
Z([[7],[3,'scrolltop']])
Z(z[1])
Z([3,'_view data-v-29a9da5a back'])
Z(z[3])
Z([1,'Mzf-0'])
Z([3,'#fff'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'e6t-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'04590597'])
Z([3,'18'])
Z([3,'arrow-left'])
Z([3,'_view data-v-29a9da5a container'])
Z([3,'#8a8a8a'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'MZC-2']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[13])
Z([3,'share'])
Z([3,'_view data-v-29a9da5a store-introduction'])
Z([3,'#fe1a34'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'FXq-3']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[13])
Z([3,'16'])
Z([3,'tmlogo'])
Z([3,'_view data-v-29a9da5a rank'])
Z([3,'#fe5e78'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'3it-4']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[13])
Z(z[25])
Z([3,'up-arrow'])
Z(z[28])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'Ff4-5']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[13])
Z(z[25])
Z(z[32])
Z(z[28])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'bTZ-6']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[13])
Z(z[25])
Z(z[32])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'W4I-8']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'0b724cc6'])
Z([3,'_view data-v-29a9da5a footer-container'])
Z(z[11])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'naz-9']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[13])
Z([3,'shoucang'])
Z(z[17])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'lCH-10']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[13])
Z(z[20])
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'a6075708'])
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'1091f44b'])
Z([3,'_view data-v-d31acb48 index-content'])
Z([3,'_view data-v-d31acb48 search-container'])
Z([3,'#bababa'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'Tc3-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'04590597'])
Z([3,'16'])
Z([3,'qrcode'])
Z(z[3])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'kmA-1']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[5])
Z([3,'15'])
Z([3,'search'])
Z(z[3])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'PQz-2']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[5])
Z(z[6])
Z([3,'message'])
Z([3,'handleProxy'])
Z([3,'_swiper data-v-d31acb48 index-swiper'])
Z([[7],[3,'tabIndex']])
Z([[7],[3,'$k']])
Z([1,'ydr-13'])
Z([[7],[3,'duration']])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'itemList']])
Z(z[25])
Z(z[18])
Z([3,'_scroll-view data-v-d31acb48 list'])
Z(z[21])
Z([[2,'+'],[1,'vKE-12-'],[[7],[3,'index']]])
Z([[7],[3,'globScrollTop']])
Z([3,'_view data-v-d31acb48 classification-container'])
Z([3,'_view data-v-d31acb48 item'])
Z([3,'#e5241f'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[2,'+'],[[7],[3,'$kk']],[1,'3DR-4-']],[[7],[3,'index']]]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[5])
Z([3,'35'])
Z([3,'on-lightning'])
Z(z[35])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[2,'+'],[[7],[3,'$kk']],[1,'VAs-5-']],[[7],[3,'index']]]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[5])
Z(z[38])
Z(z[39])
Z(z[35])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[2,'+'],[[7],[3,'$kk']],[1,'pgD-6-']],[[7],[3,'index']]]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[5])
Z(z[38])
Z(z[39])
Z(z[35])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[2,'+'],[[7],[3,'$kk']],[1,'C7U-7-']],[[7],[3,'index']]]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[5])
Z(z[38])
Z(z[39])
Z(z[35])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[2,'+'],[[7],[3,'$kk']],[1,'8PW-8-']],[[7],[3,'index']]]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[5])
Z(z[38])
Z(z[39])
Z(z[34])
Z(z[35])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[2,'+'],[[7],[3,'$kk']],[1,'xNo-9-']],[[7],[3,'index']]]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[5])
Z(z[38])
Z(z[39])
Z(z[35])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[2,'+'],[[7],[3,'$kk']],[1,'Qox-10-']],[[7],[3,'index']]]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[5])
Z(z[38])
Z(z[39])
Z(z[35])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[2,'+'],[[7],[3,'$kk']],[1,'CEU-11-']],[[7],[3,'index']]]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[5])
Z(z[38])
Z(z[39])
Z(z[35])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[2,'+'],[[7],[3,'$kk']],[1,'5FJ-12-']],[[7],[3,'index']]]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[5])
Z(z[38])
Z(z[39])
Z(z[35])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[2,'+'],[[7],[3,'$kk']],[1,'EtJ-13-']],[[7],[3,'index']]]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[5])
Z(z[38])
Z(z[39])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[2,'+'],[[7],[3,'$kk']],[1,'8AY-15-']],[[7],[3,'index']]]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'5'])
Z([3,'3a42c3d5'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[2,'+'],[[7],[3,'$kk']],[1,'X14-16-']],[[7],[3,'index']]]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'10'])
Z(z[88])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[2,'+'],[[7],[3,'$kk']],[1,'m9t-17-']],[[7],[3,'index']]]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'2'])
Z(z[88])
Z(z[18])
Z([3,'_view data-v-d31acb48 jg-wrap'])
Z(z[21])
Z([[2,'+'],[1,'cYp-5-'],[[7],[3,'index']]])
Z([3,'_view data-v-d31acb48 jgicon'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[2,'+'],[[7],[3,'$kk']],[1,'ssd-18-']],[[7],[3,'index']]]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[5])
Z([3,'12'])
Z([3,'uparrow'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[2,'+'],[[7],[3,'$kk']],[1,'Oaw-19-']],[[7],[3,'index']]]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[5])
Z(z[102])
Z([3,'downarrow'])
Z(z[18])
Z(z[96])
Z(z[21])
Z([[2,'+'],[1,'4WJ-9-'],[[7],[3,'index']]])
Z(z[99])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[2,'+'],[[7],[3,'$kk']],[1,'8WC-20-']],[[7],[3,'index']]]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[5])
Z(z[102])
Z(z[103])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[2,'+'],[[7],[3,'$kk']],[1,'OYI-21-']],[[7],[3,'index']]]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[5])
Z(z[102])
Z(z[107])
Z(z[18])
Z([3,'_view data-v-d31acb48 goods-container'])
Z(z[21])
Z([[2,'+'],[1,'8Px-10-'],[[7],[3,'index']]])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[2,'+'],[[7],[3,'$kk']],[1,'yrT-22-']],[[7],[3,'index']]]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'322f959d'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[2,'+'],[[7],[3,'$kk']],[1,'0hV-23-']],[[7],[3,'index']]]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[126])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[2,'+'],[[7],[3,'$kk']],[1,'nnG-24-']],[[7],[3,'index']]]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[126])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[2,'+'],[[7],[3,'$kk']],[1,'coh-25-']],[[7],[3,'index']]]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[126])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[2,'+'],[[7],[3,'$kk']],[1,'8YP-26-']],[[7],[3,'index']]]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[126])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[2,'+'],[[7],[3,'$kk']],[1,'7da-27-']],[[7],[3,'index']]]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[126])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[2,'+'],[[7],[3,'$kk']],[1,'v1w-28-']],[[7],[3,'index']]]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[126])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[2,'+'],[[7],[3,'$kk']],[1,'Fgc-29-']],[[7],[3,'index']]]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[126])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[2,'+'],[[7],[3,'$kk']],[1,'SQL-30-']],[[7],[3,'index']]]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[126])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[2,'+'],[[7],[3,'$kk']],[1,'8aW-31-']],[[7],[3,'index']]]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[126])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[2,'+'],[[7],[3,'$kk']],[1,'nd2-32-']],[[7],[3,'index']]]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[126])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[2,'+'],[[7],[3,'$kk']],[1,'HKY-33-']],[[7],[3,'index']]]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[126])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[2,'+'],[[7],[3,'$kk']],[1,'mjZ-34-']],[[7],[3,'index']]]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[126])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[2,'+'],[[7],[3,'$kk']],[1,'Gvt-35-']],[[7],[3,'index']]]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[126])
Z(z[18])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[2,'+'],[[7],[3,'$kk']],[1,'uxH-36-']],[[7],[3,'index']]]]]],[[8],'$root',[[7],[3,'$root']]]])
Z(z[21])
Z([[2,'+'],[1,'z4N-11-'],[[7],[3,'index']]])
Z([3,'ded7d2de'])
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'1091f44b'])
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'0b34a23c'])
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
function gz$gwx_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx_26)return __WXML_GLOBAL__.ops_cached.$gwx_26
__WXML_GLOBAL__.ops_cached.$gwx_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'0b34a23c'])
})(__WXML_GLOBAL__.ops_cached.$gwx_26);return __WXML_GLOBAL__.ops_cached.$gwx_26
}
function gz$gwx_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx_27)return __WXML_GLOBAL__.ops_cached.$gwx_27
__WXML_GLOBAL__.ops_cached.$gwx_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'46ee10f7'])
Z([3,'0'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'nMM-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'3e41bd7c'])
})(__WXML_GLOBAL__.ops_cached.$gwx_27);return __WXML_GLOBAL__.ops_cached.$gwx_27
}
function gz$gwx_28(){
if( __WXML_GLOBAL__.ops_cached.$gwx_28)return __WXML_GLOBAL__.ops_cached.$gwx_28
__WXML_GLOBAL__.ops_cached.$gwx_28=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'46ee10f7'])
})(__WXML_GLOBAL__.ops_cached.$gwx_28);return __WXML_GLOBAL__.ops_cached.$gwx_28
}
function gz$gwx_29(){
if( __WXML_GLOBAL__.ops_cached.$gwx_29)return __WXML_GLOBAL__.ops_cached.$gwx_29
__WXML_GLOBAL__.ops_cached.$gwx_29=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'3f02ebe2'])
Z([3,'1'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'0Mj-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'3e41bd7c'])
})(__WXML_GLOBAL__.ops_cached.$gwx_29);return __WXML_GLOBAL__.ops_cached.$gwx_29
}
function gz$gwx_30(){
if( __WXML_GLOBAL__.ops_cached.$gwx_30)return __WXML_GLOBAL__.ops_cached.$gwx_30
__WXML_GLOBAL__.ops_cached.$gwx_30=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'3f02ebe2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_30);return __WXML_GLOBAL__.ops_cached.$gwx_30
}
function gz$gwx_31(){
if( __WXML_GLOBAL__.ops_cached.$gwx_31)return __WXML_GLOBAL__.ops_cached.$gwx_31
__WXML_GLOBAL__.ops_cached.$gwx_31=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'76ca353e'])
Z([3,'3'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'tgP-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'3e41bd7c'])
})(__WXML_GLOBAL__.ops_cached.$gwx_31);return __WXML_GLOBAL__.ops_cached.$gwx_31
}
function gz$gwx_32(){
if( __WXML_GLOBAL__.ops_cached.$gwx_32)return __WXML_GLOBAL__.ops_cached.$gwx_32
__WXML_GLOBAL__.ops_cached.$gwx_32=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'76ca353e'])
})(__WXML_GLOBAL__.ops_cached.$gwx_32);return __WXML_GLOBAL__.ops_cached.$gwx_32
}
function gz$gwx_33(){
if( __WXML_GLOBAL__.ops_cached.$gwx_33)return __WXML_GLOBAL__.ops_cached.$gwx_33
__WXML_GLOBAL__.ops_cached.$gwx_33=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'47a1eac0'])
Z([3,'2'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'SHt-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'3e41bd7c'])
})(__WXML_GLOBAL__.ops_cached.$gwx_33);return __WXML_GLOBAL__.ops_cached.$gwx_33
}
function gz$gwx_34(){
if( __WXML_GLOBAL__.ops_cached.$gwx_34)return __WXML_GLOBAL__.ops_cached.$gwx_34
__WXML_GLOBAL__.ops_cached.$gwx_34=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'47a1eac0'])
})(__WXML_GLOBAL__.ops_cached.$gwx_34);return __WXML_GLOBAL__.ops_cached.$gwx_34
}
function gz$gwx_35(){
if( __WXML_GLOBAL__.ops_cached.$gwx_35)return __WXML_GLOBAL__.ops_cached.$gwx_35
__WXML_GLOBAL__.ops_cached.$gwx_35=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'6732171f'])
})(__WXML_GLOBAL__.ops_cached.$gwx_35);return __WXML_GLOBAL__.ops_cached.$gwx_35
}
function gz$gwx_36(){
if( __WXML_GLOBAL__.ops_cached.$gwx_36)return __WXML_GLOBAL__.ops_cached.$gwx_36
__WXML_GLOBAL__.ops_cached.$gwx_36=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'6732171f'])
})(__WXML_GLOBAL__.ops_cached.$gwx_36);return __WXML_GLOBAL__.ops_cached.$gwx_36
}
function gz$gwx_37(){
if( __WXML_GLOBAL__.ops_cached.$gwx_37)return __WXML_GLOBAL__.ops_cached.$gwx_37
__WXML_GLOBAL__.ops_cached.$gwx_37=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'81365b90'])
Z([3,'1'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'4TX-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'3e41bd7c'])
})(__WXML_GLOBAL__.ops_cached.$gwx_37);return __WXML_GLOBAL__.ops_cached.$gwx_37
}
function gz$gwx_38(){
if( __WXML_GLOBAL__.ops_cached.$gwx_38)return __WXML_GLOBAL__.ops_cached.$gwx_38
__WXML_GLOBAL__.ops_cached.$gwx_38=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'81365b90'])
})(__WXML_GLOBAL__.ops_cached.$gwx_38);return __WXML_GLOBAL__.ops_cached.$gwx_38
}
function gz$gwx_39(){
if( __WXML_GLOBAL__.ops_cached.$gwx_39)return __WXML_GLOBAL__.ops_cached.$gwx_39
__WXML_GLOBAL__.ops_cached.$gwx_39=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'7d5dea46'])
Z([3,'2'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'xWp-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'3e41bd7c'])
})(__WXML_GLOBAL__.ops_cached.$gwx_39);return __WXML_GLOBAL__.ops_cached.$gwx_39
}
function gz$gwx_40(){
if( __WXML_GLOBAL__.ops_cached.$gwx_40)return __WXML_GLOBAL__.ops_cached.$gwx_40
__WXML_GLOBAL__.ops_cached.$gwx_40=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'7d5dea46'])
})(__WXML_GLOBAL__.ops_cached.$gwx_40);return __WXML_GLOBAL__.ops_cached.$gwx_40
}
function gz$gwx_41(){
if( __WXML_GLOBAL__.ops_cached.$gwx_41)return __WXML_GLOBAL__.ops_cached.$gwx_41
__WXML_GLOBAL__.ops_cached.$gwx_41=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'75043d9a'])
Z([3,'0'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'SCl-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'3e41bd7c'])
})(__WXML_GLOBAL__.ops_cached.$gwx_41);return __WXML_GLOBAL__.ops_cached.$gwx_41
}
function gz$gwx_42(){
if( __WXML_GLOBAL__.ops_cached.$gwx_42)return __WXML_GLOBAL__.ops_cached.$gwx_42
__WXML_GLOBAL__.ops_cached.$gwx_42=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'75043d9a'])
})(__WXML_GLOBAL__.ops_cached.$gwx_42);return __WXML_GLOBAL__.ops_cached.$gwx_42
}
function gz$gwx_43(){
if( __WXML_GLOBAL__.ops_cached.$gwx_43)return __WXML_GLOBAL__.ops_cached.$gwx_43
__WXML_GLOBAL__.ops_cached.$gwx_43=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'318b3be6'])
Z([3,'3'])
Z([[9],[[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[10],[[6],[[7],[3,'$root']],[[2,'+'],[[7],[3,'$kk']],[1,'Gi4-0']]]]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'3e41bd7c'])
})(__WXML_GLOBAL__.ops_cached.$gwx_43);return __WXML_GLOBAL__.ops_cached.$gwx_43
}
function gz$gwx_44(){
if( __WXML_GLOBAL__.ops_cached.$gwx_44)return __WXML_GLOBAL__.ops_cached.$gwx_44
__WXML_GLOBAL__.ops_cached.$gwx_44=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'318b3be6'])
})(__WXML_GLOBAL__.ops_cached.$gwx_44);return __WXML_GLOBAL__.ops_cached.$gwx_44
}
function gz$gwx_45(){
if( __WXML_GLOBAL__.ops_cached.$gwx_45)return __WXML_GLOBAL__.ops_cached.$gwx_45
__WXML_GLOBAL__.ops_cached.$gwx_45=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'09ff6e29'])
})(__WXML_GLOBAL__.ops_cached.$gwx_45);return __WXML_GLOBAL__.ops_cached.$gwx_45
}
function gz$gwx_46(){
if( __WXML_GLOBAL__.ops_cached.$gwx_46)return __WXML_GLOBAL__.ops_cached.$gwx_46
__WXML_GLOBAL__.ops_cached.$gwx_46=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[9],[[10],[[6],[[7],[3,'$root']],[1,'0']]],[[8],'$root',[[7],[3,'$root']]]])
Z([3,'09ff6e29'])
})(__WXML_GLOBAL__.ops_cached.$gwx_46);return __WXML_GLOBAL__.ops_cached.$gwx_46
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);throw e;}
}}}()
var x=['./components/go-top.vue.wxml','/components/uni-icon.vue.wxml','./components/good-list.vue.wxml','./components/line.vue.wxml','./components/product-list.vue.wxml','./components/slots.wxml','/components/line.vue.wxml','/components/good-list.vue.wxml','/components/go-top.vue.wxml','/components/uni-tabbar.vue.wxml','/components/product-list.vue.wxml','./components/uni-icon.vue.wxml','./components/uni-load-more.vue.wxml','./components/uni-tabbar.vue.wxml','./pages/chat/chat.vue.wxml','./pages/chat/chat.wxml','/pages/chat/chat.vue.wxml','./pages/chat/friend-circle.vue.wxml','./pages/chat/friend-circle.wxml','/pages/chat/friend-circle.vue.wxml','./pages/chat/group.vue.wxml','./pages/chat/group.wxml','/pages/chat/group.vue.wxml','./pages/chat/index.vue.wxml','./pages/chat/index.wxml','/pages/chat/index.vue.wxml','./pages/chat/mail-list.vue.wxml','./pages/chat/mail-list.wxml','/pages/chat/mail-list.vue.wxml','./pages/common/good.vue.wxml','./pages/common/good.wxml','/pages/common/good.vue.wxml','./pages/common/goods-detail.vue.wxml','./pages/common/goods-detail.wxml','/pages/common/goods-detail.vue.wxml','./pages/index/index.vue.wxml','./pages/index/index.wxml','/pages/index/index.vue.wxml','./pages/index/user.vue.wxml','./pages/index/user.wxml','/pages/index/user.vue.wxml','./pages/school/index.vue.wxml','./pages/school/index.wxml','/pages/school/index.vue.wxml','./pages/school/pub-ma.vue.wxml','./pages/school/pub-ma.wxml','/pages/school/pub-ma.vue.wxml','./pages/school/recommend.vue.wxml','./pages/school/recommend.wxml','/pages/school/recommend.vue.wxml','./pages/school/school-knowlege.vue.wxml','./pages/school/school-knowlege.wxml','/pages/school/school-knowlege.vue.wxml','./pages/school/school.vue.wxml','./pages/school/school.wxml','/pages/school/school.vue.wxml','./pages/store/circle.vue.wxml','./pages/store/circle.wxml','/pages/store/circle.vue.wxml','./pages/store/customer.vue.wxml','./pages/store/customer.wxml','/pages/store/customer.vue.wxml','./pages/store/index.vue.wxml','./pages/store/index.wxml','/pages/store/index.vue.wxml','./pages/store/shopcar.vue.wxml','./pages/store/shopcar.wxml','/pages/store/shopcar.vue.wxml','./pages/store/store.vue.wxml','./pages/store/store.wxml','/pages/store/store.vue.wxml'];d_[x[0]]={}
d_[x[0]]["ded7d2de"]=function(e,s,r,gg){
var z=gz$gwx_1()
var b=x[0]+':ded7d2de'
r.wxVkey=b
gg.f=$gdc(f_["./components/go-top.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[0]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
if(_oz(z,1,e,s,gg)){oB.wxVkey=1
cs.push("./components/go-top.vue.wxml:view:3:4")
cs.push("./components/go-top.vue.wxml:view:3:4")
var xC=_mz(z,'view',['bindtap',2,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
var oD=_v()
_(xC,oD)
cs.push("./components/go-top.vue.wxml:template:4:6")
var fE=_oz(z,8,e,s,gg)
var cF=_gd(x[0],fE,e_,d_)
if(cF){
var hG=_1z(z,7,e,s,gg) || {}
var cur_globalf=gg.f
oD.wxXCkey=3
cF(hG,hG,oD,gg)
gg.f=cur_globalf
}
else _w(fE,x[0],4,111)
cs.pop()
cs.pop()
_(oB,xC)
cs.pop()
}
oB.wxXCkey=1
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=e_[x[0]].i
_ai(oB,x[1],e_,x[0],1,1)
oB.pop()
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[x[1]],ic:[]}
d_[x[2]]={}
d_[x[2]]["322f959d"]=function(e,s,r,gg){
var z=gz$gwx_2()
var b=x[2]+':322f959d'
r.wxVkey=b
gg.f=$gdc(f_["./components/good-list.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[2]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[2]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
d_[x[3]]["3a42c3d5"]=function(e,s,r,gg){
var z=gz$gwx_3()
var b=x[3]+':3a42c3d5'
r.wxVkey=b
gg.f=$gdc(f_["./components/line.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[3]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
return r
}
e_[x[3]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
d_[x[4]]["0b724cc6"]=function(e,s,r,gg){
var z=gz$gwx_4()
var b=x[4]+':0b724cc6'
r.wxVkey=b
gg.f=$gdc(f_["./components/product-list.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[4]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./components/product-list.vue.wxml:view:4:8")
var xC=function(fE,oD,cF,gg){
var oH=_v()
_(cF,oH)
if(_oz(z,5,fE,oD,gg)){oH.wxVkey=1
cs.push("./components/product-list.vue.wxml:image:6:12")
cs.pop()
}
oH.wxXCkey=1
return cF
}
oB.wxXCkey=2
_2z(z,3,xC,e,s,gg,oB,'product','index','index')
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
return r
}
e_[x[4]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
var hG=e_[x[5]].i
_ai(hG,x[1],e_,x[5],1,1)
_ai(hG,x[6],e_,x[5],2,2)
_ai(hG,x[7],e_,x[5],3,2)
_ai(hG,x[8],e_,x[5],4,2)
_ai(hG,x[9],e_,x[5],5,2)
_ai(hG,x[1],e_,x[5],6,2)
_ai(hG,x[10],e_,x[5],7,2)
_ai(hG,x[1],e_,x[5],8,2)
hG.pop()
hG.pop()
hG.pop()
hG.pop()
hG.pop()
hG.pop()
hG.pop()
hG.pop()
return r
}
e_[x[5]]={f:m4,j:[],i:[],ti:[x[1],x[6],x[7],x[8],x[9],x[1],x[10],x[1]],ic:[]}
d_[x[11]]={}
d_[x[11]]["04590597"]=function(e,s,r,gg){
var z=gz$gwx_6()
var b=x[11]+':04590597'
r.wxVkey=b
gg.f=$gdc(f_["./components/uni-icon.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[11]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
return r
}
e_[x[11]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
d_[x[12]]["70eb152e"]=function(e,s,r,gg){
var z=gz$gwx_7()
var b=x[12]+':70eb152e'
r.wxVkey=b
gg.f=$gdc(f_["./components/uni-load-more.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[12]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
return r
}
e_[x[12]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
d_[x[13]]["3e41bd7c"]=function(e,s,r,gg){
var z=gz$gwx_8()
var b=x[13]+':3e41bd7c'
r.wxVkey=b
gg.f=$gdc(f_["./components/uni-tabbar.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[13]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./components/uni-tabbar.vue.wxml:view:4:6")
var xC=function(fE,oD,cF,gg){
var oH=_v()
_(cF,oH)
if(_oz(z,5,fE,oD,gg)){oH.wxVkey=1
cs.push("./components/uni-tabbar.vue.wxml:view:4:6")
cs.push("./components/uni-tabbar.vue.wxml:view:4:6")
var cI=_mz(z,'view',['bindtap',6,'class',1,'data-comkey',2,'data-eventid',3,'key',4],[],fE,oD,gg)
var oJ=_v()
_(cI,oJ)
cs.push("./components/uni-tabbar.vue.wxml:template:5:8")
var lK=_oz(z,12,fE,oD,gg)
var aL=_gd(x[13],lK,e_,d_)
if(aL){
var tM=_1z(z,11,fE,oD,gg) || {}
var cur_globalf=gg.f
oJ.wxXCkey=3
aL(tM,tM,oJ,gg)
gg.f=cur_globalf
}
else _w(lK,x[13],5,91)
cs.pop()
cs.pop()
_(oH,cI)
cs.pop()
}
oH.wxXCkey=1
return cF
}
oB.wxXCkey=2
_2z(z,3,xC,e,s,gg,oB,'item','index','index')
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var lK=e_[x[13]].i
_ai(lK,x[1],e_,x[13],1,1)
lK.pop()
return r
}
e_[x[13]]={f:m7,j:[],i:[],ti:[x[1]],ic:[]}
d_[x[14]]={}
d_[x[14]]["710e25c2"]=function(e,s,r,gg){
var z=gz$gwx_9()
var b=x[14]+':710e25c2'
r.wxVkey=b
gg.f=$gdc(f_["./pages/chat/chat.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[14]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
return r
}
e_[x[14]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var eN=e_[x[15]].i
_ai(eN,x[16],e_,x[15],1,1)
var bO=_v()
_(r,bO)
cs.push("./pages/chat/chat.wxml:template:1:43")
var oP=_oz(z,1,e,s,gg)
var xQ=_gd(x[15],oP,e_,d_)
if(xQ){
var oR=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
bO.wxXCkey=3
xQ(oR,oR,bO,gg)
gg.f=cur_globalf
}
else _w(oP,x[15],1,55)
cs.pop()
eN.pop()
return r
}
e_[x[15]]={f:m9,j:[],i:[],ti:[x[16]],ic:[]}
d_[x[17]]={}
d_[x[17]]["cd3868b0"]=function(e,s,r,gg){
var z=gz$gwx_11()
var b=x[17]+':cd3868b0'
r.wxVkey=b
gg.f=$gdc(f_["./pages/chat/friend-circle.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[17]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./pages/chat/friend-circle.vue.wxml:template:8:6")
var xC=_oz(z,3,e,s,gg)
var oD=_gd(x[17],xC,e_,d_)
if(oD){
var fE=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[17],8,84)
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var cT=e_[x[17]].i
_ai(cT,x[9],e_,x[17],1,1)
cT.pop()
return r
}
e_[x[17]]={f:m10,j:[],i:[],ti:[x[9]],ic:[]}
d_[x[18]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
var oV=e_[x[18]].i
_ai(oV,x[19],e_,x[18],1,1)
var cW=_v()
_(r,cW)
cs.push("./pages/chat/friend-circle.wxml:template:1:52")
var oX=_oz(z,1,e,s,gg)
var lY=_gd(x[18],oX,e_,d_)
if(lY){
var aZ=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
cW.wxXCkey=3
lY(aZ,aZ,cW,gg)
gg.f=cur_globalf
}
else _w(oX,x[18],1,64)
cs.pop()
oV.pop()
return r
}
e_[x[18]]={f:m11,j:[],i:[],ti:[x[19]],ic:[]}
d_[x[20]]={}
d_[x[20]]["714fa448"]=function(e,s,r,gg){
var z=gz$gwx_13()
var b=x[20]+':714fa448'
r.wxVkey=b
gg.f=$gdc(f_["./pages/chat/group.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[20]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./pages/chat/group.vue.wxml:template:8:6")
var xC=_oz(z,3,e,s,gg)
var oD=_gd(x[20],xC,e_,d_)
if(oD){
var fE=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[20],8,84)
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var e2=e_[x[20]].i
_ai(e2,x[9],e_,x[20],1,1)
e2.pop()
return r
}
e_[x[20]]={f:m12,j:[],i:[],ti:[x[9]],ic:[]}
d_[x[21]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
var o4=e_[x[21]].i
_ai(o4,x[22],e_,x[21],1,1)
var x5=_v()
_(r,x5)
cs.push("./pages/chat/group.wxml:template:1:44")
var o6=_oz(z,1,e,s,gg)
var f7=_gd(x[21],o6,e_,d_)
if(f7){
var c8=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
x5.wxXCkey=3
f7(c8,c8,x5,gg)
gg.f=cur_globalf
}
else _w(o6,x[21],1,56)
cs.pop()
o4.pop()
return r
}
e_[x[21]]={f:m13,j:[],i:[],ti:[x[22]],ic:[]}
d_[x[23]]={}
d_[x[23]]["ccdb15ca"]=function(e,s,r,gg){
var z=gz$gwx_15()
var b=x[23]+':ccdb15ca'
r.wxVkey=b
gg.f=$gdc(f_["./pages/chat/index.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[23]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./pages/chat/index.vue.wxml:template:8:6")
var xC=_oz(z,3,e,s,gg)
var oD=_gd(x[23],xC,e_,d_)
if(oD){
var fE=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[23],8,84)
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
var o0=e_[x[23]].i
_ai(o0,x[9],e_,x[23],1,1)
o0.pop()
return r
}
e_[x[23]]={f:m14,j:[],i:[],ti:[x[9]],ic:[]}
d_[x[24]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
var oBB=e_[x[24]].i
_ai(oBB,x[25],e_,x[24],1,1)
var lCB=_v()
_(r,lCB)
cs.push("./pages/chat/index.wxml:template:1:44")
var aDB=_oz(z,1,e,s,gg)
var tEB=_gd(x[24],aDB,e_,d_)
if(tEB){
var eFB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
lCB.wxXCkey=3
tEB(eFB,eFB,lCB,gg)
gg.f=cur_globalf
}
else _w(aDB,x[24],1,56)
cs.pop()
oBB.pop()
return r
}
e_[x[24]]={f:m15,j:[],i:[],ti:[x[25]],ic:[]}
d_[x[26]]={}
d_[x[26]]["34cf1c86"]=function(e,s,r,gg){
var z=gz$gwx_17()
var b=x[26]+':34cf1c86'
r.wxVkey=b
gg.f=$gdc(f_["./pages/chat/mail-list.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[26]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./pages/chat/mail-list.vue.wxml:template:8:6")
var xC=_oz(z,3,e,s,gg)
var oD=_gd(x[26],xC,e_,d_)
if(oD){
var fE=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[26],8,84)
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
var oHB=e_[x[26]].i
_ai(oHB,x[9],e_,x[26],1,1)
oHB.pop()
return r
}
e_[x[26]]={f:m16,j:[],i:[],ti:[x[9]],ic:[]}
d_[x[27]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
var oJB=e_[x[27]].i
_ai(oJB,x[28],e_,x[27],1,1)
var fKB=_v()
_(r,fKB)
cs.push("./pages/chat/mail-list.wxml:template:1:48")
var cLB=_oz(z,1,e,s,gg)
var hMB=_gd(x[27],cLB,e_,d_)
if(hMB){
var oNB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
fKB.wxXCkey=3
hMB(oNB,oNB,fKB,gg)
gg.f=cur_globalf
}
else _w(cLB,x[27],1,60)
cs.pop()
oJB.pop()
return r
}
e_[x[27]]={f:m17,j:[],i:[],ti:[x[28]],ic:[]}
d_[x[29]]={}
d_[x[29]]["5fcca011"]=function(e,s,r,gg){
var z=gz$gwx_19()
var b=x[29]+':5fcca011'
r.wxVkey=b
gg.f=$gdc(f_["./pages/common/good.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[29]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
return r
}
e_[x[29]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[30]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
var lQB=e_[x[30]].i
_ai(lQB,x[31],e_,x[30],1,1)
var aRB=_v()
_(r,aRB)
cs.push("./pages/common/good.wxml:template:1:45")
var tSB=_oz(z,1,e,s,gg)
var eTB=_gd(x[30],tSB,e_,d_)
if(eTB){
var bUB=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
aRB.wxXCkey=3
eTB(bUB,bUB,aRB,gg)
gg.f=cur_globalf
}
else _w(tSB,x[30],1,57)
cs.pop()
lQB.pop()
return r
}
e_[x[30]]={f:m19,j:[],i:[],ti:[x[31]],ic:[]}
d_[x[32]]={}
d_[x[32]]["a6075708"]=function(e,s,r,gg){
var z=gz$gwx_21()
var b=x[32]+':a6075708'
r.wxVkey=b
gg.f=$gdc(f_["./pages/common/goods-detail.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[32]);return}
p_[b]=true
try{
cs.push("./pages/common/goods-detail.vue.wxml:scroll-view:4:4")
var oB=_mz(z,'scroll-view',['enableBackToTop',-1,'scrollY',-1,'bindscroll',1,'class',1,'data-comkey',2,'data-eventid',3,'ref',4,'scrollTop',5],[],e,s,gg)
cs.push("./pages/common/goods-detail.vue.wxml:view:7:10")
var xC=_mz(z,'view',['bindtap',7,'class',1,'data-comkey',2,'data-eventid',3],[],e,s,gg)
var oD=_v()
_(xC,oD)
cs.push("./pages/common/goods-detail.vue.wxml:template:8:12")
var fE=_oz(z,13,e,s,gg)
var cF=_gd(x[32],fE,e_,d_)
if(cF){
var hG=_1z(z,12,e,s,gg) || {}
var cur_globalf=gg.f
oD.wxXCkey=3
cF(hG,hG,oD,gg)
gg.f=cur_globalf
}
else _w(fE,x[32],8,119)
cs.pop()
cs.pop()
_(oB,xC)
cs.push("./pages/common/goods-detail.vue.wxml:view:21:6")
var oH=_n('view')
_rz(z,oH,'class',16,e,s,gg)
var cI=_v()
_(oH,cI)
cs.push("./pages/common/goods-detail.vue.wxml:template:42:12")
var oJ=_oz(z,19,e,s,gg)
var lK=_gd(x[32],oJ,e_,d_)
if(lK){
var aL=_1z(z,18,e,s,gg) || {}
var cur_globalf=gg.f
cI.wxXCkey=3
lK(aL,aL,cI,gg)
gg.f=cur_globalf
}
else _w(oJ,x[32],42,107)
cs.pop()
cs.push("./pages/common/goods-detail.vue.wxml:view:64:8")
var tM=_n('view')
_rz(z,tM,'class',21,e,s,gg)
var eN=_v()
_(tM,eN)
cs.push("./pages/common/goods-detail.vue.wxml:template:66:12")
var bO=_oz(z,24,e,s,gg)
var oP=_gd(x[32],bO,e_,d_)
if(oP){
var xQ=_1z(z,23,e,s,gg) || {}
var cur_globalf=gg.f
eN.wxXCkey=3
oP(xQ,xQ,eN,gg)
gg.f=cur_globalf
}
else _w(bO,x[32],66,118)
cs.pop()
cs.push("./pages/common/goods-detail.vue.wxml:view:69:10")
var oR=_n('view')
_rz(z,oR,'class',27,e,s,gg)
var fS=_v()
_(oR,fS)
cs.push("./pages/common/goods-detail.vue.wxml:template:73:14")
var cT=_oz(z,30,e,s,gg)
var hU=_gd(x[32],cT,e_,d_)
if(hU){
var oV=_1z(z,29,e,s,gg) || {}
var cur_globalf=gg.f
fS.wxXCkey=3
hU(oV,oV,fS,gg)
gg.f=cur_globalf
}
else _w(cT,x[32],73,122)
cs.pop()
var cW=_v()
_(oR,cW)
cs.push("./pages/common/goods-detail.vue.wxml:template:77:14")
var oX=_oz(z,35,e,s,gg)
var lY=_gd(x[32],oX,e_,d_)
if(lY){
var aZ=_1z(z,34,e,s,gg) || {}
var cur_globalf=gg.f
cW.wxXCkey=3
lY(aZ,aZ,cW,gg)
gg.f=cur_globalf
}
else _w(oX,x[32],77,122)
cs.pop()
var t1=_v()
_(oR,t1)
cs.push("./pages/common/goods-detail.vue.wxml:template:81:14")
var e2=_oz(z,40,e,s,gg)
var b3=_gd(x[32],e2,e_,d_)
if(b3){
var o4=_1z(z,39,e,s,gg) || {}
var cur_globalf=gg.f
t1.wxXCkey=3
b3(o4,o4,t1,gg)
gg.f=cur_globalf
}
else _w(e2,x[32],81,122)
cs.pop()
cs.pop()
_(tM,oR)
cs.pop()
_(oH,tM)
var x5=_v()
_(oH,x5)
cs.push("./pages/common/goods-detail.vue.wxml:template:90:8")
var o6=_oz(z,44,e,s,gg)
var f7=_gd(x[32],o6,e_,d_)
if(f7){
var c8=_1z(z,43,e,s,gg) || {}
var cur_globalf=gg.f
x5.wxXCkey=3
f7(c8,c8,x5,gg)
gg.f=cur_globalf
}
else _w(o6,x[32],90,74)
cs.pop()
cs.push("./pages/common/goods-detail.vue.wxml:view:92:8")
var h9=_n('view')
_rz(z,h9,'class',45,e,s,gg)
var o0=_v()
_(h9,o0)
cs.push("./pages/common/goods-detail.vue.wxml:template:96:14")
var cAB=_oz(z,48,e,s,gg)
var oBB=_gd(x[32],cAB,e_,d_)
if(oBB){
var lCB=_1z(z,47,e,s,gg) || {}
var cur_globalf=gg.f
o0.wxXCkey=3
oBB(lCB,lCB,o0,gg)
gg.f=cur_globalf
}
else _w(cAB,x[32],96,109)
cs.pop()
var aDB=_v()
_(h9,aDB)
cs.push("./pages/common/goods-detail.vue.wxml:template:102:14")
var tEB=_oz(z,52,e,s,gg)
var eFB=_gd(x[32],tEB,e_,d_)
if(eFB){
var bGB=_1z(z,51,e,s,gg) || {}
var cur_globalf=gg.f
aDB.wxXCkey=3
eFB(bGB,bGB,aDB,gg)
gg.f=cur_globalf
}
else _w(tEB,x[32],102,110)
cs.pop()
cs.pop()
_(oH,h9)
cs.pop()
_(oB,oH)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
var xWB=e_[x[32]].i
_ai(xWB,x[1],e_,x[32],1,1)
_ai(xWB,x[10],e_,x[32],2,2)
xWB.pop()
xWB.pop()
return r
}
e_[x[32]]={f:m20,j:[],i:[],ti:[x[1],x[10]],ic:[]}
d_[x[33]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
var fYB=e_[x[33]].i
_ai(fYB,x[34],e_,x[33],1,1)
var cZB=_v()
_(r,cZB)
cs.push("./pages/common/goods-detail.wxml:template:1:53")
var h1B=_oz(z,1,e,s,gg)
var o2B=_gd(x[33],h1B,e_,d_)
if(o2B){
var c3B=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
cZB.wxXCkey=3
o2B(c3B,c3B,cZB,gg)
gg.f=cur_globalf
}
else _w(h1B,x[33],1,65)
cs.pop()
fYB.pop()
return r
}
e_[x[33]]={f:m21,j:[],i:[],ti:[x[34]],ic:[]}
d_[x[35]]={}
d_[x[35]]["1091f44b"]=function(e,s,r,gg){
var z=gz$gwx_23()
var b=x[35]+':1091f44b'
r.wxVkey=b
gg.f=$gdc(f_["./pages/index/index.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[35]);return}
p_[b]=true
try{
cs.push("./pages/index/index.vue.wxml:view:6:4")
var oB=_n('view')
_rz(z,oB,'class',1,e,s,gg)
cs.push("./pages/index/index.vue.wxml:view:7:6")
var xC=_n('view')
_rz(z,xC,'class',2,e,s,gg)
var oD=_v()
_(xC,oD)
cs.push("./pages/index/index.vue.wxml:template:9:10")
var fE=_oz(z,5,e,s,gg)
var cF=_gd(x[35],fE,e_,d_)
if(cF){
var hG=_1z(z,4,e,s,gg) || {}
var cur_globalf=gg.f
oD.wxXCkey=3
cF(hG,hG,oD,gg)
gg.f=cur_globalf
}
else _w(fE,x[35],9,116)
cs.pop()
var oH=_v()
_(xC,oH)
cs.push("./pages/index/index.vue.wxml:template:12:10")
var cI=_oz(z,10,e,s,gg)
var oJ=_gd(x[35],cI,e_,d_)
if(oJ){
var lK=_1z(z,9,e,s,gg) || {}
var cur_globalf=gg.f
oH.wxXCkey=3
oJ(lK,lK,oH,gg)
gg.f=cur_globalf
}
else _w(cI,x[35],12,116)
cs.pop()
var aL=_v()
_(xC,aL)
cs.push("./pages/index/index.vue.wxml:template:14:10")
var tM=_oz(z,15,e,s,gg)
var eN=_gd(x[35],tM,e_,d_)
if(eN){
var bO=_1z(z,14,e,s,gg) || {}
var cur_globalf=gg.f
aL.wxXCkey=3
eN(bO,bO,aL,gg)
gg.f=cur_globalf
}
else _w(tM,x[35],14,117)
cs.pop()
cs.pop()
_(oB,xC)
cs.push("./pages/index/index.vue.wxml:swiper:21:8")
var oP=_mz(z,'swiper',['bindchange',18,'class',1,'current',2,'data-comkey',3,'data-eventid',4,'duration',5],[],e,s,gg)
var xQ=_v()
_(oP,xQ)
cs.push("./pages/index/index.vue.wxml:swiper-item:22:10")
var oR=function(cT,fS,hU,gg){
cs.push("./pages/index/index.vue.wxml:scroll-view:23:12")
var cW=_mz(z,'scroll-view',['scrollY',-1,'bindscroll',28,'class',1,'data-comkey',2,'data-eventid',3,'scrollTop',4],[],cT,fS,gg)
cs.push("./pages/index/index.vue.wxml:view:29:14")
var oX=_n('view')
_rz(z,oX,'class',33,cT,fS,gg)
cs.push("./pages/index/index.vue.wxml:view:30:16")
var lY=_n('view')
_rz(z,lY,'class',34,cT,fS,gg)
var aZ=_v()
_(lY,aZ)
cs.push("./pages/index/index.vue.wxml:template:32:20")
var t1=_oz(z,37,cT,fS,gg)
var e2=_gd(x[35],t1,e_,d_)
if(e2){
var b3=_1z(z,36,cT,fS,gg) || {}
var cur_globalf=gg.f
aZ.wxXCkey=3
e2(b3,b3,aZ,gg)
gg.f=cur_globalf
}
else _w(t1,x[35],32,139)
cs.pop()
var o4=_v()
_(lY,o4)
cs.push("./pages/index/index.vue.wxml:template:36:20")
var x5=_oz(z,42,cT,fS,gg)
var o6=_gd(x[35],x5,e_,d_)
if(o6){
var f7=_1z(z,41,cT,fS,gg) || {}
var cur_globalf=gg.f
o4.wxXCkey=3
o6(f7,f7,o4,gg)
gg.f=cur_globalf
}
else _w(x5,x[35],36,139)
cs.pop()
var c8=_v()
_(lY,c8)
cs.push("./pages/index/index.vue.wxml:template:40:20")
var h9=_oz(z,47,cT,fS,gg)
var o0=_gd(x[35],h9,e_,d_)
if(o0){
var cAB=_1z(z,46,cT,fS,gg) || {}
var cur_globalf=gg.f
c8.wxXCkey=3
o0(cAB,cAB,c8,gg)
gg.f=cur_globalf
}
else _w(h9,x[35],40,139)
cs.pop()
var oBB=_v()
_(lY,oBB)
cs.push("./pages/index/index.vue.wxml:template:44:20")
var lCB=_oz(z,52,cT,fS,gg)
var aDB=_gd(x[35],lCB,e_,d_)
if(aDB){
var tEB=_1z(z,51,cT,fS,gg) || {}
var cur_globalf=gg.f
oBB.wxXCkey=3
aDB(tEB,tEB,oBB,gg)
gg.f=cur_globalf
}
else _w(lCB,x[35],44,139)
cs.pop()
var eFB=_v()
_(lY,eFB)
cs.push("./pages/index/index.vue.wxml:template:48:20")
var bGB=_oz(z,57,cT,fS,gg)
var oHB=_gd(x[35],bGB,e_,d_)
if(oHB){
var xIB=_1z(z,56,cT,fS,gg) || {}
var cur_globalf=gg.f
eFB.wxXCkey=3
oHB(xIB,xIB,eFB,gg)
gg.f=cur_globalf
}
else _w(bGB,x[35],48,139)
cs.pop()
cs.pop()
_(oX,lY)
cs.push("./pages/index/index.vue.wxml:view:52:16")
var oJB=_n('view')
_rz(z,oJB,'class',60,cT,fS,gg)
var fKB=_v()
_(oJB,fKB)
cs.push("./pages/index/index.vue.wxml:template:54:20")
var cLB=_oz(z,63,cT,fS,gg)
var hMB=_gd(x[35],cLB,e_,d_)
if(hMB){
var oNB=_1z(z,62,cT,fS,gg) || {}
var cur_globalf=gg.f
fKB.wxXCkey=3
hMB(oNB,oNB,fKB,gg)
gg.f=cur_globalf
}
else _w(cLB,x[35],54,139)
cs.pop()
var cOB=_v()
_(oJB,cOB)
cs.push("./pages/index/index.vue.wxml:template:58:20")
var oPB=_oz(z,68,cT,fS,gg)
var lQB=_gd(x[35],oPB,e_,d_)
if(lQB){
var aRB=_1z(z,67,cT,fS,gg) || {}
var cur_globalf=gg.f
cOB.wxXCkey=3
lQB(aRB,aRB,cOB,gg)
gg.f=cur_globalf
}
else _w(oPB,x[35],58,140)
cs.pop()
var tSB=_v()
_(oJB,tSB)
cs.push("./pages/index/index.vue.wxml:template:62:20")
var eTB=_oz(z,73,cT,fS,gg)
var bUB=_gd(x[35],eTB,e_,d_)
if(bUB){
var oVB=_1z(z,72,cT,fS,gg) || {}
var cur_globalf=gg.f
tSB.wxXCkey=3
bUB(oVB,oVB,tSB,gg)
gg.f=cur_globalf
}
else _w(eTB,x[35],62,140)
cs.pop()
var xWB=_v()
_(oJB,xWB)
cs.push("./pages/index/index.vue.wxml:template:66:20")
var oXB=_oz(z,78,cT,fS,gg)
var fYB=_gd(x[35],oXB,e_,d_)
if(fYB){
var cZB=_1z(z,77,cT,fS,gg) || {}
var cur_globalf=gg.f
xWB.wxXCkey=3
fYB(cZB,cZB,xWB,gg)
gg.f=cur_globalf
}
else _w(oXB,x[35],66,140)
cs.pop()
var h1B=_v()
_(oJB,h1B)
cs.push("./pages/index/index.vue.wxml:template:70:20")
var o2B=_oz(z,83,cT,fS,gg)
var c3B=_gd(x[35],o2B,e_,d_)
if(c3B){
var o4B=_1z(z,82,cT,fS,gg) || {}
var cur_globalf=gg.f
h1B.wxXCkey=3
c3B(o4B,o4B,h1B,gg)
gg.f=cur_globalf
}
else _w(o2B,x[35],70,140)
cs.pop()
cs.pop()
_(oX,oJB)
cs.pop()
_(cW,oX)
var l5B=_v()
_(cW,l5B)
cs.push("./pages/index/index.vue.wxml:template:85:14")
var a6B=_oz(z,88,cT,fS,gg)
var t7B=_gd(x[35],a6B,e_,d_)
if(t7B){
var e8B=_1z(z,86,cT,fS,gg) || {}
var cur_globalf=gg.f
l5B.wxXCkey=3
t7B(e8B,e8B,l5B,gg)
gg.f=cur_globalf
}
else _w(a6B,x[35],85,99)
cs.pop()
var b9B=_v()
_(cW,b9B)
cs.push("./pages/index/index.vue.wxml:template:103:14")
var o0B=_oz(z,91,cT,fS,gg)
var xAC=_gd(x[35],o0B,e_,d_)
if(xAC){
var oBC=_1z(z,89,cT,fS,gg) || {}
var cur_globalf=gg.f
b9B.wxXCkey=3
xAC(oBC,oBC,b9B,gg)
gg.f=cur_globalf
}
else _w(o0B,x[35],103,100)
cs.pop()
var fCC=_v()
_(cW,fCC)
cs.push("./pages/index/index.vue.wxml:template:105:14")
var cDC=_oz(z,94,cT,fS,gg)
var hEC=_gd(x[35],cDC,e_,d_)
if(hEC){
var oFC=_1z(z,92,cT,fS,gg) || {}
var cur_globalf=gg.f
fCC.wxXCkey=3
hEC(oFC,oFC,fCC,gg)
gg.f=cur_globalf
}
else _w(cDC,x[35],105,99)
cs.pop()
cs.push("./pages/index/index.vue.wxml:view:110:16")
var cGC=_mz(z,'view',['bindtap',95,'class',1,'data-comkey',2,'data-eventid',3],[],cT,fS,gg)
cs.push("./pages/index/index.vue.wxml:view:112:18")
var oHC=_n('view')
_rz(z,oHC,'class',99,cT,fS,gg)
var lIC=_v()
_(oHC,lIC)
cs.push("./pages/index/index.vue.wxml:template:113:20")
var aJC=_oz(z,101,cT,fS,gg)
var tKC=_gd(x[35],aJC,e_,d_)
if(tKC){
var eLC=_1z(z,100,cT,fS,gg) || {}
var cur_globalf=gg.f
lIC.wxXCkey=3
tKC(eLC,eLC,lIC,gg)
gg.f=cur_globalf
}
else _w(aJC,x[35],113,119)
cs.pop()
var bMC=_v()
_(oHC,bMC)
cs.push("./pages/index/index.vue.wxml:template:114:20")
var oNC=_oz(z,105,cT,fS,gg)
var xOC=_gd(x[35],oNC,e_,d_)
if(xOC){
var oPC=_1z(z,104,cT,fS,gg) || {}
var cur_globalf=gg.f
bMC.wxXCkey=3
xOC(oPC,oPC,bMC,gg)
gg.f=cur_globalf
}
else _w(oNC,x[35],114,121)
cs.pop()
cs.pop()
_(cGC,oHC)
cs.pop()
_(cW,cGC)
cs.push("./pages/index/index.vue.wxml:view:122:16")
var fQC=_mz(z,'view',['bindtap',108,'class',1,'data-comkey',2,'data-eventid',3],[],cT,fS,gg)
cs.push("./pages/index/index.vue.wxml:view:124:18")
var cRC=_n('view')
_rz(z,cRC,'class',112,cT,fS,gg)
var hSC=_v()
_(cRC,hSC)
cs.push("./pages/index/index.vue.wxml:template:125:20")
var oTC=_oz(z,114,cT,fS,gg)
var cUC=_gd(x[35],oTC,e_,d_)
if(cUC){
var oVC=_1z(z,113,cT,fS,gg) || {}
var cur_globalf=gg.f
hSC.wxXCkey=3
cUC(oVC,oVC,hSC,gg)
gg.f=cur_globalf
}
else _w(oTC,x[35],125,119)
cs.pop()
var lWC=_v()
_(cRC,lWC)
cs.push("./pages/index/index.vue.wxml:template:126:20")
var aXC=_oz(z,118,cT,fS,gg)
var tYC=_gd(x[35],aXC,e_,d_)
if(tYC){
var eZC=_1z(z,117,cT,fS,gg) || {}
var cur_globalf=gg.f
lWC.wxXCkey=3
tYC(eZC,eZC,lWC,gg)
gg.f=cur_globalf
}
else _w(aXC,x[35],126,121)
cs.pop()
cs.pop()
_(fQC,cRC)
cs.pop()
_(cW,fQC)
cs.push("./pages/index/index.vue.wxml:view:130:14")
var b1C=_mz(z,'view',['bindtap',121,'class',1,'data-comkey',2,'data-eventid',3],[],cT,fS,gg)
var o2C=_v()
_(b1C,o2C)
cs.push("./pages/index/index.vue.wxml:template:131:16")
var x3C=_oz(z,126,cT,fS,gg)
var o4C=_gd(x[35],x3C,e_,d_)
if(o4C){
var f5C=_1z(z,125,cT,fS,gg) || {}
var cur_globalf=gg.f
o2C.wxXCkey=3
o4C(f5C,f5C,o2C,gg)
gg.f=cur_globalf
}
else _w(x3C,x[35],131,90)
cs.pop()
var c6C=_v()
_(b1C,c6C)
cs.push("./pages/index/index.vue.wxml:template:132:16")
var h7C=_oz(z,128,cT,fS,gg)
var o8C=_gd(x[35],h7C,e_,d_)
if(o8C){
var c9C=_1z(z,127,cT,fS,gg) || {}
var cur_globalf=gg.f
c6C.wxXCkey=3
o8C(c9C,c9C,c6C,gg)
gg.f=cur_globalf
}
else _w(h7C,x[35],132,90)
cs.pop()
var o0C=_v()
_(b1C,o0C)
cs.push("./pages/index/index.vue.wxml:template:133:16")
var lAD=_oz(z,130,cT,fS,gg)
var aBD=_gd(x[35],lAD,e_,d_)
if(aBD){
var tCD=_1z(z,129,cT,fS,gg) || {}
var cur_globalf=gg.f
o0C.wxXCkey=3
aBD(tCD,tCD,o0C,gg)
gg.f=cur_globalf
}
else _w(lAD,x[35],133,90)
cs.pop()
var eDD=_v()
_(b1C,eDD)
cs.push("./pages/index/index.vue.wxml:template:134:16")
var bED=_oz(z,132,cT,fS,gg)
var oFD=_gd(x[35],bED,e_,d_)
if(oFD){
var xGD=_1z(z,131,cT,fS,gg) || {}
var cur_globalf=gg.f
eDD.wxXCkey=3
oFD(xGD,xGD,eDD,gg)
gg.f=cur_globalf
}
else _w(bED,x[35],134,90)
cs.pop()
var oHD=_v()
_(b1C,oHD)
cs.push("./pages/index/index.vue.wxml:template:135:16")
var fID=_oz(z,134,cT,fS,gg)
var cJD=_gd(x[35],fID,e_,d_)
if(cJD){
var hKD=_1z(z,133,cT,fS,gg) || {}
var cur_globalf=gg.f
oHD.wxXCkey=3
cJD(hKD,hKD,oHD,gg)
gg.f=cur_globalf
}
else _w(fID,x[35],135,90)
cs.pop()
var oLD=_v()
_(b1C,oLD)
cs.push("./pages/index/index.vue.wxml:template:136:16")
var cMD=_oz(z,136,cT,fS,gg)
var oND=_gd(x[35],cMD,e_,d_)
if(oND){
var lOD=_1z(z,135,cT,fS,gg) || {}
var cur_globalf=gg.f
oLD.wxXCkey=3
oND(lOD,lOD,oLD,gg)
gg.f=cur_globalf
}
else _w(cMD,x[35],136,90)
cs.pop()
var aPD=_v()
_(b1C,aPD)
cs.push("./pages/index/index.vue.wxml:template:137:16")
var tQD=_oz(z,138,cT,fS,gg)
var eRD=_gd(x[35],tQD,e_,d_)
if(eRD){
var bSD=_1z(z,137,cT,fS,gg) || {}
var cur_globalf=gg.f
aPD.wxXCkey=3
eRD(bSD,bSD,aPD,gg)
gg.f=cur_globalf
}
else _w(tQD,x[35],137,90)
cs.pop()
var oTD=_v()
_(b1C,oTD)
cs.push("./pages/index/index.vue.wxml:template:138:16")
var xUD=_oz(z,140,cT,fS,gg)
var oVD=_gd(x[35],xUD,e_,d_)
if(oVD){
var fWD=_1z(z,139,cT,fS,gg) || {}
var cur_globalf=gg.f
oTD.wxXCkey=3
oVD(fWD,fWD,oTD,gg)
gg.f=cur_globalf
}
else _w(xUD,x[35],138,90)
cs.pop()
var cXD=_v()
_(b1C,cXD)
cs.push("./pages/index/index.vue.wxml:template:139:16")
var hYD=_oz(z,142,cT,fS,gg)
var oZD=_gd(x[35],hYD,e_,d_)
if(oZD){
var c1D=_1z(z,141,cT,fS,gg) || {}
var cur_globalf=gg.f
cXD.wxXCkey=3
oZD(c1D,c1D,cXD,gg)
gg.f=cur_globalf
}
else _w(hYD,x[35],139,90)
cs.pop()
var o2D=_v()
_(b1C,o2D)
cs.push("./pages/index/index.vue.wxml:template:140:16")
var l3D=_oz(z,144,cT,fS,gg)
var a4D=_gd(x[35],l3D,e_,d_)
if(a4D){
var t5D=_1z(z,143,cT,fS,gg) || {}
var cur_globalf=gg.f
o2D.wxXCkey=3
a4D(t5D,t5D,o2D,gg)
gg.f=cur_globalf
}
else _w(l3D,x[35],140,90)
cs.pop()
var e6D=_v()
_(b1C,e6D)
cs.push("./pages/index/index.vue.wxml:template:141:16")
var b7D=_oz(z,146,cT,fS,gg)
var o8D=_gd(x[35],b7D,e_,d_)
if(o8D){
var x9D=_1z(z,145,cT,fS,gg) || {}
var cur_globalf=gg.f
e6D.wxXCkey=3
o8D(x9D,x9D,e6D,gg)
gg.f=cur_globalf
}
else _w(b7D,x[35],141,90)
cs.pop()
var o0D=_v()
_(b1C,o0D)
cs.push("./pages/index/index.vue.wxml:template:142:16")
var fAE=_oz(z,148,cT,fS,gg)
var cBE=_gd(x[35],fAE,e_,d_)
if(cBE){
var hCE=_1z(z,147,cT,fS,gg) || {}
var cur_globalf=gg.f
o0D.wxXCkey=3
cBE(hCE,hCE,o0D,gg)
gg.f=cur_globalf
}
else _w(fAE,x[35],142,90)
cs.pop()
var oDE=_v()
_(b1C,oDE)
cs.push("./pages/index/index.vue.wxml:template:143:16")
var cEE=_oz(z,150,cT,fS,gg)
var oFE=_gd(x[35],cEE,e_,d_)
if(oFE){
var lGE=_1z(z,149,cT,fS,gg) || {}
var cur_globalf=gg.f
oDE.wxXCkey=3
oFE(lGE,lGE,oDE,gg)
gg.f=cur_globalf
}
else _w(cEE,x[35],143,90)
cs.pop()
var aHE=_v()
_(b1C,aHE)
cs.push("./pages/index/index.vue.wxml:template:144:16")
var tIE=_oz(z,152,cT,fS,gg)
var eJE=_gd(x[35],tIE,e_,d_)
if(eJE){
var bKE=_1z(z,151,cT,fS,gg) || {}
var cur_globalf=gg.f
aHE.wxXCkey=3
eJE(bKE,bKE,aHE,gg)
gg.f=cur_globalf
}
else _w(tIE,x[35],144,90)
cs.pop()
cs.pop()
_(cW,b1C)
var oLE=_v()
_(cW,oLE)
cs.push("./pages/index/index.vue.wxml:template:146:14")
var xME=_oz(z,157,cT,fS,gg)
var oNE=_gd(x[35],xME,e_,d_)
if(oNE){
var fOE=_1z(z,154,cT,fS,gg) || {}
var cur_globalf=gg.f
oLE.wxXCkey=3
oNE(fOE,fOE,oLE,gg)
gg.f=cur_globalf
}
else _w(xME,x[35],146,168)
cs.pop()
cs.pop()
_(hU,cW)
return hU
}
xQ.wxXCkey=2
_2z(z,26,oR,e,s,gg,xQ,'item','index','item')
cs.pop()
cs.pop()
_(oB,oP)
cs.pop()
_(r,oB)
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
var l5B=e_[x[35]].i
_ai(l5B,x[1],e_,x[35],1,1)
_ai(l5B,x[6],e_,x[35],2,2)
_ai(l5B,x[7],e_,x[35],3,2)
_ai(l5B,x[8],e_,x[35],4,2)
l5B.pop()
l5B.pop()
l5B.pop()
l5B.pop()
return r
}
e_[x[35]]={f:m22,j:[],i:[],ti:[x[1],x[6],x[7],x[8]],ic:[]}
d_[x[36]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
var t7B=e_[x[36]].i
_ai(t7B,x[37],e_,x[36],1,1)
var e8B=_v()
_(r,e8B)
cs.push("./pages/index/index.wxml:template:1:45")
var b9B=_oz(z,1,e,s,gg)
var o0B=_gd(x[36],b9B,e_,d_)
if(o0B){
var xAC=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
e8B.wxXCkey=3
o0B(xAC,xAC,e8B,gg)
gg.f=cur_globalf
}
else _w(b9B,x[36],1,57)
cs.pop()
t7B.pop()
return r
}
e_[x[36]]={f:m23,j:[],i:[],ti:[x[37]],ic:[]}
d_[x[38]]={}
d_[x[38]]["0b34a23c"]=function(e,s,r,gg){
var z=gz$gwx_25()
var b=x[38]+':0b34a23c'
r.wxVkey=b
gg.f=$gdc(f_["./pages/index/user.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[38]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
return r
}
e_[x[38]]={f:m24,j:[],i:[],ti:[],ic:[]}
d_[x[39]]={}
var m25=function(e,s,r,gg){
var z=gz$gwx_26()
var cDC=e_[x[39]].i
_ai(cDC,x[40],e_,x[39],1,1)
var hEC=_v()
_(r,hEC)
cs.push("./pages/index/user.wxml:template:1:44")
var oFC=_oz(z,1,e,s,gg)
var cGC=_gd(x[39],oFC,e_,d_)
if(cGC){
var oHC=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
hEC.wxXCkey=3
cGC(oHC,oHC,hEC,gg)
gg.f=cur_globalf
}
else _w(oFC,x[39],1,56)
cs.pop()
cDC.pop()
return r
}
e_[x[39]]={f:m25,j:[],i:[],ti:[x[40]],ic:[]}
d_[x[41]]={}
d_[x[41]]["46ee10f7"]=function(e,s,r,gg){
var z=gz$gwx_27()
var b=x[41]+':46ee10f7'
r.wxVkey=b
gg.f=$gdc(f_["./pages/school/index.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[41]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./pages/school/index.vue.wxml:template:8:6")
var xC=_oz(z,3,e,s,gg)
var oD=_gd(x[41],xC,e_,d_)
if(oD){
var fE=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[41],8,84)
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m26=function(e,s,r,gg){
var z=gz$gwx_27()
var aJC=e_[x[41]].i
_ai(aJC,x[9],e_,x[41],1,1)
aJC.pop()
return r
}
e_[x[41]]={f:m26,j:[],i:[],ti:[x[9]],ic:[]}
d_[x[42]]={}
var m27=function(e,s,r,gg){
var z=gz$gwx_28()
var eLC=e_[x[42]].i
_ai(eLC,x[43],e_,x[42],1,1)
var bMC=_v()
_(r,bMC)
cs.push("./pages/school/index.wxml:template:1:46")
var oNC=_oz(z,1,e,s,gg)
var xOC=_gd(x[42],oNC,e_,d_)
if(xOC){
var oPC=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
bMC.wxXCkey=3
xOC(oPC,oPC,bMC,gg)
gg.f=cur_globalf
}
else _w(oNC,x[42],1,58)
cs.pop()
eLC.pop()
return r
}
e_[x[42]]={f:m27,j:[],i:[],ti:[x[43]],ic:[]}
d_[x[44]]={}
d_[x[44]]["3f02ebe2"]=function(e,s,r,gg){
var z=gz$gwx_29()
var b=x[44]+':3f02ebe2'
r.wxVkey=b
gg.f=$gdc(f_["./pages/school/pub-ma.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[44]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./pages/school/pub-ma.vue.wxml:template:8:6")
var xC=_oz(z,3,e,s,gg)
var oD=_gd(x[44],xC,e_,d_)
if(oD){
var fE=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[44],8,84)
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m28=function(e,s,r,gg){
var z=gz$gwx_29()
var cRC=e_[x[44]].i
_ai(cRC,x[9],e_,x[44],1,1)
cRC.pop()
return r
}
e_[x[44]]={f:m28,j:[],i:[],ti:[x[9]],ic:[]}
d_[x[45]]={}
var m29=function(e,s,r,gg){
var z=gz$gwx_30()
var oTC=e_[x[45]].i
_ai(oTC,x[46],e_,x[45],1,1)
var cUC=_v()
_(r,cUC)
cs.push("./pages/school/pub-ma.wxml:template:1:47")
var oVC=_oz(z,1,e,s,gg)
var lWC=_gd(x[45],oVC,e_,d_)
if(lWC){
var aXC=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
cUC.wxXCkey=3
lWC(aXC,aXC,cUC,gg)
gg.f=cur_globalf
}
else _w(oVC,x[45],1,59)
cs.pop()
oTC.pop()
return r
}
e_[x[45]]={f:m29,j:[],i:[],ti:[x[46]],ic:[]}
d_[x[47]]={}
d_[x[47]]["76ca353e"]=function(e,s,r,gg){
var z=gz$gwx_31()
var b=x[47]+':76ca353e'
r.wxVkey=b
gg.f=$gdc(f_["./pages/school/recommend.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[47]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./pages/school/recommend.vue.wxml:template:8:6")
var xC=_oz(z,3,e,s,gg)
var oD=_gd(x[47],xC,e_,d_)
if(oD){
var fE=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[47],8,84)
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m30=function(e,s,r,gg){
var z=gz$gwx_31()
var eZC=e_[x[47]].i
_ai(eZC,x[9],e_,x[47],1,1)
eZC.pop()
return r
}
e_[x[47]]={f:m30,j:[],i:[],ti:[x[9]],ic:[]}
d_[x[48]]={}
var m31=function(e,s,r,gg){
var z=gz$gwx_32()
var o2C=e_[x[48]].i
_ai(o2C,x[49],e_,x[48],1,1)
var x3C=_v()
_(r,x3C)
cs.push("./pages/school/recommend.wxml:template:1:50")
var o4C=_oz(z,1,e,s,gg)
var f5C=_gd(x[48],o4C,e_,d_)
if(f5C){
var c6C=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
x3C.wxXCkey=3
f5C(c6C,c6C,x3C,gg)
gg.f=cur_globalf
}
else _w(o4C,x[48],1,62)
cs.pop()
o2C.pop()
return r
}
e_[x[48]]={f:m31,j:[],i:[],ti:[x[49]],ic:[]}
d_[x[50]]={}
d_[x[50]]["47a1eac0"]=function(e,s,r,gg){
var z=gz$gwx_33()
var b=x[50]+':47a1eac0'
r.wxVkey=b
gg.f=$gdc(f_["./pages/school/school-knowlege.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[50]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./pages/school/school-knowlege.vue.wxml:template:8:6")
var xC=_oz(z,3,e,s,gg)
var oD=_gd(x[50],xC,e_,d_)
if(oD){
var fE=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[50],8,84)
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m32=function(e,s,r,gg){
var z=gz$gwx_33()
var o8C=e_[x[50]].i
_ai(o8C,x[9],e_,x[50],1,1)
o8C.pop()
return r
}
e_[x[50]]={f:m32,j:[],i:[],ti:[x[9]],ic:[]}
d_[x[51]]={}
var m33=function(e,s,r,gg){
var z=gz$gwx_34()
var o0C=e_[x[51]].i
_ai(o0C,x[52],e_,x[51],1,1)
var lAD=_v()
_(r,lAD)
cs.push("./pages/school/school-knowlege.wxml:template:1:56")
var aBD=_oz(z,1,e,s,gg)
var tCD=_gd(x[51],aBD,e_,d_)
if(tCD){
var eDD=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
lAD.wxXCkey=3
tCD(eDD,eDD,lAD,gg)
gg.f=cur_globalf
}
else _w(aBD,x[51],1,68)
cs.pop()
o0C.pop()
return r
}
e_[x[51]]={f:m33,j:[],i:[],ti:[x[52]],ic:[]}
d_[x[53]]={}
d_[x[53]]["6732171f"]=function(e,s,r,gg){
var z=gz$gwx_35()
var b=x[53]+':6732171f'
r.wxVkey=b
gg.f=$gdc(f_["./pages/school/school.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[53]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m34=function(e,s,r,gg){
var z=gz$gwx_35()
return r
}
e_[x[53]]={f:m34,j:[],i:[],ti:[],ic:[]}
d_[x[54]]={}
var m35=function(e,s,r,gg){
var z=gz$gwx_36()
var xGD=e_[x[54]].i
_ai(xGD,x[55],e_,x[54],1,1)
var oHD=_v()
_(r,oHD)
cs.push("./pages/school/school.wxml:template:1:47")
var fID=_oz(z,1,e,s,gg)
var cJD=_gd(x[54],fID,e_,d_)
if(cJD){
var hKD=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
oHD.wxXCkey=3
cJD(hKD,hKD,oHD,gg)
gg.f=cur_globalf
}
else _w(fID,x[54],1,59)
cs.pop()
xGD.pop()
return r
}
e_[x[54]]={f:m35,j:[],i:[],ti:[x[55]],ic:[]}
d_[x[56]]={}
d_[x[56]]["81365b90"]=function(e,s,r,gg){
var z=gz$gwx_37()
var b=x[56]+':81365b90'
r.wxVkey=b
gg.f=$gdc(f_["./pages/store/circle.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[56]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./pages/store/circle.vue.wxml:template:4:6")
var xC=_oz(z,3,e,s,gg)
var oD=_gd(x[56],xC,e_,d_)
if(oD){
var fE=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[56],4,84)
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m36=function(e,s,r,gg){
var z=gz$gwx_37()
var cMD=e_[x[56]].i
_ai(cMD,x[9],e_,x[56],1,1)
cMD.pop()
return r
}
e_[x[56]]={f:m36,j:[],i:[],ti:[x[9]],ic:[]}
d_[x[57]]={}
var m37=function(e,s,r,gg){
var z=gz$gwx_38()
var lOD=e_[x[57]].i
_ai(lOD,x[58],e_,x[57],1,1)
var aPD=_v()
_(r,aPD)
cs.push("./pages/store/circle.wxml:template:1:46")
var tQD=_oz(z,1,e,s,gg)
var eRD=_gd(x[57],tQD,e_,d_)
if(eRD){
var bSD=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
aPD.wxXCkey=3
eRD(bSD,bSD,aPD,gg)
gg.f=cur_globalf
}
else _w(tQD,x[57],1,58)
cs.pop()
lOD.pop()
return r
}
e_[x[57]]={f:m37,j:[],i:[],ti:[x[58]],ic:[]}
d_[x[59]]={}
d_[x[59]]["7d5dea46"]=function(e,s,r,gg){
var z=gz$gwx_39()
var b=x[59]+':7d5dea46'
r.wxVkey=b
gg.f=$gdc(f_["./pages/store/customer.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[59]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./pages/store/customer.vue.wxml:template:8:6")
var xC=_oz(z,3,e,s,gg)
var oD=_gd(x[59],xC,e_,d_)
if(oD){
var fE=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[59],8,84)
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m38=function(e,s,r,gg){
var z=gz$gwx_39()
var xUD=e_[x[59]].i
_ai(xUD,x[9],e_,x[59],1,1)
xUD.pop()
return r
}
e_[x[59]]={f:m38,j:[],i:[],ti:[x[9]],ic:[]}
d_[x[60]]={}
var m39=function(e,s,r,gg){
var z=gz$gwx_40()
var fWD=e_[x[60]].i
_ai(fWD,x[61],e_,x[60],1,1)
var cXD=_v()
_(r,cXD)
cs.push("./pages/store/customer.wxml:template:1:48")
var hYD=_oz(z,1,e,s,gg)
var oZD=_gd(x[60],hYD,e_,d_)
if(oZD){
var c1D=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
cXD.wxXCkey=3
oZD(c1D,c1D,cXD,gg)
gg.f=cur_globalf
}
else _w(hYD,x[60],1,60)
cs.pop()
fWD.pop()
return r
}
e_[x[60]]={f:m39,j:[],i:[],ti:[x[61]],ic:[]}
d_[x[62]]={}
d_[x[62]]["75043d9a"]=function(e,s,r,gg){
var z=gz$gwx_41()
var b=x[62]+':75043d9a'
r.wxVkey=b
gg.f=$gdc(f_["./pages/store/index.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[62]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./pages/store/index.vue.wxml:template:8:6")
var xC=_oz(z,3,e,s,gg)
var oD=_gd(x[62],xC,e_,d_)
if(oD){
var fE=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[62],8,84)
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m40=function(e,s,r,gg){
var z=gz$gwx_41()
var l3D=e_[x[62]].i
_ai(l3D,x[9],e_,x[62],1,1)
l3D.pop()
return r
}
e_[x[62]]={f:m40,j:[],i:[],ti:[x[9]],ic:[]}
d_[x[63]]={}
var m41=function(e,s,r,gg){
var z=gz$gwx_42()
var t5D=e_[x[63]].i
_ai(t5D,x[64],e_,x[63],1,1)
var e6D=_v()
_(r,e6D)
cs.push("./pages/store/index.wxml:template:1:45")
var b7D=_oz(z,1,e,s,gg)
var o8D=_gd(x[63],b7D,e_,d_)
if(o8D){
var x9D=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
e6D.wxXCkey=3
o8D(x9D,x9D,e6D,gg)
gg.f=cur_globalf
}
else _w(b7D,x[63],1,57)
cs.pop()
t5D.pop()
return r
}
e_[x[63]]={f:m41,j:[],i:[],ti:[x[64]],ic:[]}
d_[x[65]]={}
d_[x[65]]["318b3be6"]=function(e,s,r,gg){
var z=gz$gwx_43()
var b=x[65]+':318b3be6'
r.wxVkey=b
gg.f=$gdc(f_["./pages/store/shopcar.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[65]);return}
p_[b]=true
try{
var oB=_v()
_(r,oB)
cs.push("./pages/store/shopcar.vue.wxml:template:8:6")
var xC=_oz(z,3,e,s,gg)
var oD=_gd(x[65],xC,e_,d_)
if(oD){
var fE=_1z(z,2,e,s,gg) || {}
var cur_globalf=gg.f
oB.wxXCkey=3
oD(fE,fE,oB,gg)
gg.f=cur_globalf
}
else _w(xC,x[65],8,84)
cs.pop()
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m42=function(e,s,r,gg){
var z=gz$gwx_43()
var fAE=e_[x[65]].i
_ai(fAE,x[9],e_,x[65],1,1)
fAE.pop()
return r
}
e_[x[65]]={f:m42,j:[],i:[],ti:[x[9]],ic:[]}
d_[x[66]]={}
var m43=function(e,s,r,gg){
var z=gz$gwx_44()
var hCE=e_[x[66]].i
_ai(hCE,x[67],e_,x[66],1,1)
var oDE=_v()
_(r,oDE)
cs.push("./pages/store/shopcar.wxml:template:1:47")
var cEE=_oz(z,1,e,s,gg)
var oFE=_gd(x[66],cEE,e_,d_)
if(oFE){
var lGE=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
oDE.wxXCkey=3
oFE(lGE,lGE,oDE,gg)
gg.f=cur_globalf
}
else _w(cEE,x[66],1,59)
cs.pop()
hCE.pop()
return r
}
e_[x[66]]={f:m43,j:[],i:[],ti:[x[67]],ic:[]}
d_[x[68]]={}
d_[x[68]]["09ff6e29"]=function(e,s,r,gg){
var z=gz$gwx_45()
var b=x[68]+':09ff6e29'
r.wxVkey=b
gg.f=$gdc(f_["./pages/store/store.vue.wxml"],"",1)
if(p_[b]){_wl(b,x[68]);return}
p_[b]=true
try{
}catch(err){
p_[b]=false
throw err
}
p_[b]=false
return r
}
var m44=function(e,s,r,gg){
var z=gz$gwx_45()
return r
}
e_[x[68]]={f:m44,j:[],i:[],ti:[],ic:[]}
d_[x[69]]={}
var m45=function(e,s,r,gg){
var z=gz$gwx_46()
var eJE=e_[x[69]].i
_ai(eJE,x[70],e_,x[69],1,1)
var bKE=_v()
_(r,bKE)
cs.push("./pages/store/store.wxml:template:1:45")
var oLE=_oz(z,1,e,s,gg)
var xME=_gd(x[69],oLE,e_,d_)
if(xME){
var oNE=_1z(z,0,e,s,gg) || {}
var cur_globalf=gg.f
bKE.wxXCkey=3
xME(oNE,oNE,bKE,gg)
gg.f=cur_globalf
}
else _w(oLE,x[69],1,57)
cs.pop()
eJE.pop()
return r
}
e_[x[69]]={f:m45,j:[],i:[],ti:[x[70]],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
cs=[]
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(cs, env);
console.log(err)
throw err
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/index/index","pages/store/index","pages/store/store","pages/store/circle","pages/store/customer","pages/store/shopcar","pages/chat/index","pages/chat/chat","pages/chat/friend-circle","pages/chat/group","pages/chat/mail-list","pages/school/school","pages/school/index","pages/school/pub-ma","pages/school/recommend","pages/school/school-knowlege","pages/index/user","pages/common/good","pages/common/goods-detail"],"window":{"navigationStyle":"custom"},"tabBar":{"color":"#333","selectedColor":"#ff0000","borderStyle":"black","backgroundColor":"#ffffff","list":[{"pagePath":"pages/index/index","iconPath":"./static/bar/home.png","selectedIconPath":"./static/bar/selecthome.png","text":"首页"},{"pagePath":"pages/store/store","iconPath":"static/bar/store.png","selectedIconPath":"static/bar/selectstore.png","text":"商城"},{"pagePath":"pages/chat/chat","iconPath":"static/bar/lts.png","selectedIconPath":"static/bar/selcetlts.png","text":"聊天"},{"pagePath":"pages/school/school","iconPath":"static/bar/sch.png","selectedIconPath":"static/bar/selectsch.png","text":"学院"},{"pagePath":"pages/index/user","iconPath":"static/bar/user.png","selectedIconPath":"static/bar/selectuser.png","text":"个人"}]},"networkTimeout":{},"debug":false,"functionalPages":false,"subPackages":[],"workers":"","preloadRule":{},"requiredBackgroundModes":[],"plugins":{},"resizable":false,"navigateToMiniProgramAppIdList":[],"usingComponents":{}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');



define('common/manifest.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	var parentJsonpFunction = global["webpackJsonp"];
/******/ 	global["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [], result;
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/ 		if(executeModules) {
/******/ 			for(i=0; i < executeModules.length; i++) {
/******/ 				result = __webpack_require__(__webpack_require__.s = executeModules[i]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	};
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// objects to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		21: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/ })
/************************************************************************/
/******/ ([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
global.webpackJsonp([1],{

/***/ 0:
/***/ (function(module, exports) {

eval("/* globals __VUE_SSR_CONTEXT__ */\n\n// this module is a runtime utility for cleaner component module output and will\n// be included in the final webpack user bundle\n\nmodule.exports = function normalizeComponent (\n  rawScriptExports,\n  compiledTemplate,\n  injectStyles,\n  scopeId,\n  moduleIdentifier /* server only */\n) {\n  var esModule\n  var scriptExports = rawScriptExports = rawScriptExports || {}\n\n  // ES6 modules interop\n  var type = typeof rawScriptExports.default\n  if (type === 'object' || type === 'function') {\n    esModule = rawScriptExports\n    scriptExports = rawScriptExports.default\n  }\n\n  // Vue.extend constructor export interop\n  var options = typeof scriptExports === 'function'\n    ? scriptExports.options\n    : scriptExports\n\n  // render functions\n  if (compiledTemplate) {\n    options.render = compiledTemplate.render\n    options.staticRenderFns = compiledTemplate.staticRenderFns\n  }\n\n  // scopedId\n  if (scopeId) {\n    options._scopeId = scopeId\n  }\n\n  var hook\n  if (moduleIdentifier) { // server build\n    hook = function (context) {\n      // 2.3 injection\n      context =\n        context || // cached call\n        (this.$vnode && this.$vnode.ssrContext) || // stateful\n        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional\n      // 2.2 with runInNewContext: true\n      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {\n        context = __VUE_SSR_CONTEXT__\n      }\n      // inject component styles\n      if (injectStyles) {\n        injectStyles.call(this, context)\n      }\n      // register component module identifier for async chunk inferrence\n      if (context && context._registeredComponents) {\n        context._registeredComponents.add(moduleIdentifier)\n      }\n    }\n    // used by ssr in case component is cached and beforeCreate\n    // never gets called\n    options._ssrRegister = hook\n  } else if (injectStyles) {\n    hook = injectStyles\n  }\n\n  if (hook) {\n    var functional = options.functional\n    var existing = functional\n      ? options.render\n      : options.beforeCreate\n    if (!functional) {\n      // inject component registration as beforeCreate hook\n      options.beforeCreate = existing\n        ? [].concat(existing, hook)\n        : [hook]\n    } else {\n      // register for functioal component in vue file\n      options.render = function renderWithStyleInjection (h, context) {\n        hook.call(context)\n        return existing(h, context)\n      }\n    }\n  }\n\n  return {\n    esModule: esModule,\n    exports: scriptExports,\n    options: options\n  }\n}\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./lib/mpvue-loader/lib/component-normalizer.js\n// module id = 0\n// module chunks = 1\n\n");

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default =\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nfunction (App) {var _ref;\n  return _ref = {\n    // 页面的初始数据\n    data: {\n      $root: {} },\n\n\n    // mp lifecycle for vue\n    // 生命周期函数--监听页面加载\n    onLoad: function onLoad(query) {\n      //页面加载的时候\n      var app = new _vue2.default(App);\n      // 挂载Vue对象到page上\n      this.$vm = app;\n      var rootVueVM = app.$root;\n      rootVueVM.__wxWebviewId__ = this.__wxWebviewId__; //fixed by xxxxxx(createIntersectionObserver)\n\n      //初始化mp对象\n      if (!rootVueVM.$mp) {\n        rootVueVM.$mp = {};\n      }\n      var mp = rootVueVM.$mp;\n      mp.mpType = 'page';\n      mp.page = this;\n      mp.query = query;\n      mp.status = 'load';\n      //mount 要在 mp.status = 'load';赋值之后，不然mount方法会重复添加微信Page\n      //具体原因参考mpvue核心库源码，_initMP方法\n      app.$mount();\n    },\n\n    handleProxy: function handleProxy(e) {\n      var rootVueVM = getRootVueVm(this);\n      return rootVueVM.$handleProxyWithVue(e);\n    },\n\n    // 生命周期函数--监听页面显示\n    onShow: function onShow() {\n      var rootVueVM = getRootVueVm(this);\n      var mp = rootVueVM.$mp;\n      mp.status = 'show';\n      callHook$1(rootVueVM, 'onShow');\n      //   // 只有页面需要 setData\n      rootVueVM.$nextTick(function () {\n        rootVueVM._initDataToMP();\n      });\n    },\n\n    // 生命周期函数--监听页面初次渲染完成\n    onReady: function onReady() {\n      var rootVueVM = getRootVueVm(this);\n      var mp = rootVueVM.$mp;\n      mp.status = 'ready';\n      callHook$1(rootVueVM, 'onReady');\n    },\n\n    // 生命周期函数--监听页面隐藏\n    onHide: function onHide() {\n      var rootVueVM = getRootVueVm(this);\n      var mp = rootVueVM.$mp;\n      mp.status = 'hide';\n      callHook$1(rootVueVM, 'onHide');\n    },\n\n    // 生命周期函数--监听页面卸载\n    onUnload: function onUnload() {\n      var rootVueVM = getRootVueVm(this);\n      callHook$1(rootVueVM, 'onUnload');\n      rootVueVM.$destroy();\n    },\n\n    // 页面相关事件处理函数--监听用户下拉动作\n    onPullDownRefresh: function onPullDownRefresh() {\n      var rootVueVM = getRootVueVm(this);\n      callHook$1(rootVueVM, 'onPullDownRefresh');\n    },\n\n    // 页面上拉触底事件的处理函数\n    onReachBottom: function onReachBottom() {\n      var rootVueVM = getRootVueVm(this);\n      callHook$1(rootVueVM, 'onReachBottom');\n    },\n\n    // Do something when page scroll\n    onPageScroll: function onPageScroll(options) {\n      var rootVueVM = getRootVueVm(this);\n      callHook$1(rootVueVM, 'onPageScroll', options);\n    },\n\n    // 当前是 tab 页时，点击 tab 时触发\n    onTabItemTap: function onTabItemTap(options) {\n      var rootVueVM = getRootVueVm(this);\n      callHook$1(rootVueVM, 'onTabItemTap', options);\n    } }, _defineProperty(_ref, 'onPullDownRefresh',\n  function onPullDownRefresh() {\n    var rootVueVM = getRootVueVm(this);\n    callHook$1(rootVueVM, 'onPullDownRefresh');\n  }), _defineProperty(_ref, 'onReachBottom',\n\n\n  function onReachBottom() {\n    var rootVueVM = getRootVueVm(this);\n    callHook$1(rootVueVM, 'onReachBottom');\n  }), _defineProperty(_ref, 'onShareAppMessage',\n\n\n  App.onShareAppMessage ?\n  function (options) {\n    var rootVueVM = getRootVueVm(this);\n    return callHook$1(rootVueVM, 'onShareAppMessage', options);\n  } : null), _defineProperty(_ref, 'onPageScroll',\n\n\n  function onPageScroll(options) {\n    var rootVueVM = getRootVueVm(this);\n    callHook$1(rootVueVM, 'onPageScroll', options);\n  }), _defineProperty(_ref, 'onTabItemTap',\n\n\n  function onTabItemTap(options) {\n    var rootVueVM = getRootVueVm(this);\n    callHook$1(rootVueVM, 'onTabItemTap', options);\n  }), _defineProperty(_ref, 'onNavigationBarButtonTap',\n\n\n  function onNavigationBarButtonTap(options) {\n    var rootVueVM = getRootVueVm(this);\n    callHook$1(rootVueVM, \"onNavigationBarButtonTap\", options);\n  }), _defineProperty(_ref, 'onBackPress',\n  function onBackPress() {\n    var rootVueVM = getRootVueVm(this);\n    return callHook$1(rootVueVM, \"onBackPress\");\n  }), _ref;\n\n};var _vue = __webpack_require__(4);var _vue2 = _interopRequireDefault(_vue);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}function callHook$1(vm, hook, params) {var handlers = vm.$options[hook];if (hook === 'onError' && handlers) {handlers = [handlers];}var ret;if (handlers) {for (var i = 0, j = handlers.length; i < j; i++) {try {ret = handlers[i].call(vm, params);} catch (e) {handleError(e, vm, hook + \" hook\");}}}if (vm._hasHookEvent) {vm.$emit('hook:' + hook);} // for child\n  if (vm.$children.length) {vm.$children.forEach(function (v) {return callHook$1(v, hook, params);});}return ret;}function getRootVueVm(page) {return page.$vm.$root;}\n\n//////////////////\n// WEBPACK FOOTER\n// ./lib/mpvue-page-factory/index.js\n// module id = 1\n// module chunks = 1\n\n");

/***/ }),

/***/ 126:
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader!./lib/css-var-loader.js!./node_modules/css-loader?{\"minimize\":false,\"sourceMap\":false}!./lib/mpvue-loader/lib/style-compiler?{\"vue\":true,\"id\":\"data-v-f7b29232\",\"scoped\":true,\"hasInlineConfig\":false}!./lib/css-upx-loader.js?{\"baseDpr\":1,\"rpxUnit\":1}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./node_modules/postcss-loader/lib?{\"config\":{\"path\":\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//.postcssrc.js\"},\"sourceMap\":true}!./node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!./lib/mpvue-loader/lib/selector.js?type=styles&index=0!D:/project/asgapp/components/product-list.vue\n// module id = 126\n// module chunks = 1\n\n");

/***/ }),

/***/ 127:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default =\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n{\n\tdata: function data() {\n\t\treturn {\n\t\t\tproductList: [{\n\t\t\t\timage: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product1.jpg',\n\t\t\t\ttitle: 'Apple iPhone X 256GB 深空灰色 移动联通电信4G手机',\n\t\t\t\toriginalPrice: 9999,\n\t\t\t\tfavourPrice: 8888,\n\t\t\t\ttip: '自营' },\n\n\t\t\t{\n\t\t\t\timage: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product2.jpg',\n\t\t\t\ttitle: 'Apple iPad 平板电脑 2018年新款9.7英寸',\n\t\t\t\toriginalPrice: 3499,\n\t\t\t\tfavourPrice: 3399,\n\t\t\t\ttip: '优惠' },\n\n\t\t\t{\n\t\t\t\timage: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product3.jpg',\n\t\t\t\ttitle: 'Apple MacBook Pro 13.3英寸笔记本电脑（2017款Core i5处理器/8GB内存/256GB硬盘 MupxT2CH/A）',\n\t\t\t\toriginalPrice: 12999,\n\t\t\t\tfavourPrice: 10688,\n\t\t\t\ttip: '秒杀' },\n\n\t\t\t{\n\t\t\t\timage: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product4.jpg',\n\t\t\t\ttitle: 'Kindle Paperwhite电纸书阅读器 电子书墨水屏 6英寸wifi 黑色',\n\t\t\t\toriginalPrice: 999,\n\t\t\t\tfavourPrice: 958,\n\t\t\t\ttip: '秒杀' },\n\n\t\t\t{\n\t\t\t\timage: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product5.jpg',\n\t\t\t\ttitle: '微软（Microsoft）新Surface Pro 二合一平板电脑笔记本 12.3英寸（i5 8G内存 256G存储）',\n\t\t\t\toriginalPrice: 8888,\n\t\t\t\tfavourPrice: 8288,\n\t\t\t\ttip: '优惠' },\n\n\t\t\t{\n\t\t\t\timage: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product6.jpg',\n\t\t\t\ttitle: 'Apple Watch Series 3智能手表（GPS款 42毫米 深空灰色铝金属表壳 黑色运动型表带 MQL12CH/A）',\n\t\t\t\toriginalPrice: 2899,\n\t\t\t\tfavourPrice: 2799,\n\t\t\t\ttip: '自营' }],\n\n\n\t\t\trenderImage: true };\n\n\t},\n\tmethods: {} };\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/babel-loader/lib?{\"babelrc\":false,\"retainLines\":true,\"presets\":[[\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-preset-env\",{\"modules\":\"commonjs\",\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"not ie <= 8\"]}}],\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-preset-stage-2\"],\"plugins\":[[\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-runtime\",{\"helpers\":false,\"polyfill\":false,\"regenerator\":true,\"moduleName\":\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-runtime\"}],\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-decorators-legacy\"]}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=script&index=0!D:/project/asgapp/components/product-list.vue\n// module id = 127\n// module chunks = 1\n\n//# sourceURL=uni-app:///components/product-list.vue?e853");

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('view', {\n    staticClass: \"page\"\n  }, [_c('view', {\n    staticClass: \"uni-product-list\"\n  }, _vm._l((_vm.productList), function(product, index) {\n    return _c('view', {\n      key: index,\n      staticClass: \"uni-product\"\n    }, [_c('view', {\n      staticClass: \"image-view\"\n    }, [(_vm.renderImage) ? _c('image', {\n      staticClass: \"uni-product-image\",\n      attrs: {\n        \"src\": product.image\n      }\n    }) : _vm._e()]), _c('view', {\n      staticClass: \"uni-product-title\"\n    }, [_vm._v(_vm._s(product.title))]), _c('view', {\n      staticClass: \"uni-product-price\"\n    }, [_c('text', {\n      staticClass: \"uni-product-price-favour\"\n    }, [_vm._v(\"￥\" + _vm._s(product.originalPrice))]), _c('text', {\n      staticClass: \"uni-product-price-original\"\n    }, [_vm._v(\"￥\" + _vm._s(product.favourPrice))])]), _vm._m(0, true)])\n  }))])\n}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('view', {\n    staticClass: \"uni-product-price\"\n  }, [_c('text', {\n    staticClass: \"small-gray\"\n  }, [_vm._v(\"202002人已购\")]), _c('text', {\n    staticClass: \"uni-product-tip\"\n  }, [_vm._v(\"5元券\")])])\n}]\nrender._withStripped = true\nvar esExports = { render: render, staticRenderFns: staticRenderFns }\n/* harmony default export */ __webpack_exports__[\"a\"] = (esExports);\nif (false) {\n  module.hot.accept()\n  if (module.hot.data) {\n     require(\"vue-hot-reload-api\").rerender(\"data-v-f7b29232\", esExports)\n  }\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./lib/mpvue-loader/lib/template-compiler?{\"id\":\"data-v-f7b29232\",\"hasScoped\":true,\"preserveWhitespace\":false}!./lib/preprocessor-loader.js?{\"type\":\"html\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=template&index=0!D:/project/asgapp/components/product-list.vue\n// module id = 128\n// module chunks = 1\n\n");

/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(20);\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/babel-runtime/regenerator/index.js\n// module id = 19\n// module chunks = 1\n\n");

/***/ }),

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_uni_tabbar_vue__ = __webpack_require__(44);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_uni_tabbar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_uni_tabbar_vue__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_cfa73574_hasScoped_true_preserveWhitespace_false_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_uni_tabbar_vue__ = __webpack_require__(45);\nvar disposed = false\nfunction injectStyle (ssrContext) {\n  if (disposed) return\n  __webpack_require__(43)\n}\nvar normalizeComponent = __webpack_require__(0)\n/* script */\n\n/* template */\n\n/* styles */\nvar __vue_styles__ = injectStyle\n/* scopeId */\nvar __vue_scopeId__ = \"data-v-cfa73574\"\n/* moduleIdentifier (server only) */\nvar __vue_module_identifier__ = null\nvar Component = normalizeComponent(\n  __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_uni_tabbar_vue___default.a,\n  __WEBPACK_IMPORTED_MODULE_1__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_cfa73574_hasScoped_true_preserveWhitespace_false_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_uni_tabbar_vue__[\"a\" /* default */],\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"..\\\\..\\\\..\\\\..\\\\..\\\\project\\\\asgapp\\\\components\\\\uni-tabbar.vue\"\nif (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== \"default\" && key.substr(0, 2) !== \"__\"})) {console.error(\"named exports are not supported in *.vue files.\")}\nif (Component.options.functional) {console.error(\"[vue-loader] uni-tabbar.vue: functional components are not supported with templates, they should use render functions.\")}\n\n/* hot reload */\nif (false) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-cfa73574\", Component.options)\n  } else {\n    hotAPI.reload(\"data-v-cfa73574\", Component.options)\n  }\n  module.hot.dispose(function (data) {\n    disposed = true\n  })\n})()}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component.exports);\n\n\n//////////////////\n// WEBPACK FOOTER\n// D:/project/asgapp/components/uni-tabbar.vue\n// module id = 2\n// module chunks = 1\n\n");

/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * Copyright (c) 2014-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n// This method of obtaining a reference to the global object needs to be\n// kept identical to the way it is obtained in runtime.js\nvar g = (function() { return this })() || Function(\"return this\")();\n\n// Use `getOwnPropertyNames` because not all browsers support calling\n// `hasOwnProperty` on the global `self` object in a worker. See #183.\nvar hadRuntime = g.regeneratorRuntime &&\n  Object.getOwnPropertyNames(g).indexOf(\"regeneratorRuntime\") >= 0;\n\n// Save the old regeneratorRuntime in case it needs to be restored later.\nvar oldRuntime = hadRuntime && g.regeneratorRuntime;\n\n// Force reevalutation of runtime.js.\ng.regeneratorRuntime = undefined;\n\nmodule.exports = __webpack_require__(21);\n\nif (hadRuntime) {\n  // Restore the original runtime.\n  g.regeneratorRuntime = oldRuntime;\n} else {\n  // Remove the global property added by runtime.js.\n  try {\n    delete g.regeneratorRuntime;\n  } catch(e) {\n    g.regeneratorRuntime = undefined;\n  }\n}\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/regenerator-runtime/runtime-module.js\n// module id = 20\n// module chunks = 1\n\n");

/***/ }),

/***/ 21:
/***/ (function(module, exports) {

eval("/**\n * Copyright (c) 2014-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\n!(function(global) {\n  \"use strict\";\n\n  var Op = Object.prototype;\n  var hasOwn = Op.hasOwnProperty;\n  var undefined; // More compressible than void 0.\n  var $Symbol = typeof Symbol === \"function\" ? Symbol : {};\n  var iteratorSymbol = $Symbol.iterator || \"@@iterator\";\n  var asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\";\n  var toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\";\n\n  var inModule = typeof module === \"object\";\n  var runtime = global.regeneratorRuntime;\n  if (runtime) {\n    if (inModule) {\n      // If regeneratorRuntime is defined globally and we're in a module,\n      // make the exports object identical to regeneratorRuntime.\n      module.exports = runtime;\n    }\n    // Don't bother evaluating the rest of this file if the runtime was\n    // already defined globally.\n    return;\n  }\n\n  // Define the runtime globally (as expected by generated code) as either\n  // module.exports (if we're in a module) or a new, empty object.\n  runtime = global.regeneratorRuntime = inModule ? module.exports : {};\n\n  function wrap(innerFn, outerFn, self, tryLocsList) {\n    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.\n    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;\n    var generator = Object.create(protoGenerator.prototype);\n    var context = new Context(tryLocsList || []);\n\n    // The ._invoke method unifies the implementations of the .next,\n    // .throw, and .return methods.\n    generator._invoke = makeInvokeMethod(innerFn, self, context);\n\n    return generator;\n  }\n  runtime.wrap = wrap;\n\n  // Try/catch helper to minimize deoptimizations. Returns a completion\n  // record like context.tryEntries[i].completion. This interface could\n  // have been (and was previously) designed to take a closure to be\n  // invoked without arguments, but in all the cases we care about we\n  // already have an existing method we want to call, so there's no need\n  // to create a new function object. We can even get away with assuming\n  // the method takes exactly one argument, since that happens to be true\n  // in every case, so we don't have to touch the arguments object. The\n  // only additional allocation required is the completion record, which\n  // has a stable shape and so hopefully should be cheap to allocate.\n  function tryCatch(fn, obj, arg) {\n    try {\n      return { type: \"normal\", arg: fn.call(obj, arg) };\n    } catch (err) {\n      return { type: \"throw\", arg: err };\n    }\n  }\n\n  var GenStateSuspendedStart = \"suspendedStart\";\n  var GenStateSuspendedYield = \"suspendedYield\";\n  var GenStateExecuting = \"executing\";\n  var GenStateCompleted = \"completed\";\n\n  // Returning this object from the innerFn has the same effect as\n  // breaking out of the dispatch switch statement.\n  var ContinueSentinel = {};\n\n  // Dummy constructor functions that we use as the .constructor and\n  // .constructor.prototype properties for functions that return Generator\n  // objects. For full spec compliance, you may wish to configure your\n  // minifier not to mangle the names of these two functions.\n  function Generator() {}\n  function GeneratorFunction() {}\n  function GeneratorFunctionPrototype() {}\n\n  // This is a polyfill for %IteratorPrototype% for environments that\n  // don't natively support it.\n  var IteratorPrototype = {};\n  IteratorPrototype[iteratorSymbol] = function () {\n    return this;\n  };\n\n  var getProto = Object.getPrototypeOf;\n  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));\n  if (NativeIteratorPrototype &&\n      NativeIteratorPrototype !== Op &&\n      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {\n    // This environment has a native %IteratorPrototype%; use it instead\n    // of the polyfill.\n    IteratorPrototype = NativeIteratorPrototype;\n  }\n\n  var Gp = GeneratorFunctionPrototype.prototype =\n    Generator.prototype = Object.create(IteratorPrototype);\n  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;\n  GeneratorFunctionPrototype.constructor = GeneratorFunction;\n  GeneratorFunctionPrototype[toStringTagSymbol] =\n    GeneratorFunction.displayName = \"GeneratorFunction\";\n\n  // Helper for defining the .next, .throw, and .return methods of the\n  // Iterator interface in terms of a single ._invoke method.\n  function defineIteratorMethods(prototype) {\n    [\"next\", \"throw\", \"return\"].forEach(function(method) {\n      prototype[method] = function(arg) {\n        return this._invoke(method, arg);\n      };\n    });\n  }\n\n  runtime.isGeneratorFunction = function(genFun) {\n    var ctor = typeof genFun === \"function\" && genFun.constructor;\n    return ctor\n      ? ctor === GeneratorFunction ||\n        // For the native GeneratorFunction constructor, the best we can\n        // do is to check its .name property.\n        (ctor.displayName || ctor.name) === \"GeneratorFunction\"\n      : false;\n  };\n\n  runtime.mark = function(genFun) {\n    if (Object.setPrototypeOf) {\n      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);\n    } else {\n      genFun.__proto__ = GeneratorFunctionPrototype;\n      if (!(toStringTagSymbol in genFun)) {\n        genFun[toStringTagSymbol] = \"GeneratorFunction\";\n      }\n    }\n    genFun.prototype = Object.create(Gp);\n    return genFun;\n  };\n\n  // Within the body of any async function, `await x` is transformed to\n  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test\n  // `hasOwn.call(value, \"__await\")` to determine if the yielded value is\n  // meant to be awaited.\n  runtime.awrap = function(arg) {\n    return { __await: arg };\n  };\n\n  function AsyncIterator(generator) {\n    function invoke(method, arg, resolve, reject) {\n      var record = tryCatch(generator[method], generator, arg);\n      if (record.type === \"throw\") {\n        reject(record.arg);\n      } else {\n        var result = record.arg;\n        var value = result.value;\n        if (value &&\n            typeof value === \"object\" &&\n            hasOwn.call(value, \"__await\")) {\n          return Promise.resolve(value.__await).then(function(value) {\n            invoke(\"next\", value, resolve, reject);\n          }, function(err) {\n            invoke(\"throw\", err, resolve, reject);\n          });\n        }\n\n        return Promise.resolve(value).then(function(unwrapped) {\n          // When a yielded Promise is resolved, its final value becomes\n          // the .value of the Promise<{value,done}> result for the\n          // current iteration. If the Promise is rejected, however, the\n          // result for this iteration will be rejected with the same\n          // reason. Note that rejections of yielded Promises are not\n          // thrown back into the generator function, as is the case\n          // when an awaited Promise is rejected. This difference in\n          // behavior between yield and await is important, because it\n          // allows the consumer to decide what to do with the yielded\n          // rejection (swallow it and continue, manually .throw it back\n          // into the generator, abandon iteration, whatever). With\n          // await, by contrast, there is no opportunity to examine the\n          // rejection reason outside the generator function, so the\n          // only option is to throw it from the await expression, and\n          // let the generator function handle the exception.\n          result.value = unwrapped;\n          resolve(result);\n        }, reject);\n      }\n    }\n\n    var previousPromise;\n\n    function enqueue(method, arg) {\n      function callInvokeWithMethodAndArg() {\n        return new Promise(function(resolve, reject) {\n          invoke(method, arg, resolve, reject);\n        });\n      }\n\n      return previousPromise =\n        // If enqueue has been called before, then we want to wait until\n        // all previous Promises have been resolved before calling invoke,\n        // so that results are always delivered in the correct order. If\n        // enqueue has not been called before, then it is important to\n        // call invoke immediately, without waiting on a callback to fire,\n        // so that the async generator function has the opportunity to do\n        // any necessary setup in a predictable way. This predictability\n        // is why the Promise constructor synchronously invokes its\n        // executor callback, and why async functions synchronously\n        // execute code before the first await. Since we implement simple\n        // async functions in terms of async generators, it is especially\n        // important to get this right, even though it requires care.\n        previousPromise ? previousPromise.then(\n          callInvokeWithMethodAndArg,\n          // Avoid propagating failures to Promises returned by later\n          // invocations of the iterator.\n          callInvokeWithMethodAndArg\n        ) : callInvokeWithMethodAndArg();\n    }\n\n    // Define the unified helper method that is used to implement .next,\n    // .throw, and .return (see defineIteratorMethods).\n    this._invoke = enqueue;\n  }\n\n  defineIteratorMethods(AsyncIterator.prototype);\n  AsyncIterator.prototype[asyncIteratorSymbol] = function () {\n    return this;\n  };\n  runtime.AsyncIterator = AsyncIterator;\n\n  // Note that simple async functions are implemented on top of\n  // AsyncIterator objects; they just return a Promise for the value of\n  // the final result produced by the iterator.\n  runtime.async = function(innerFn, outerFn, self, tryLocsList) {\n    var iter = new AsyncIterator(\n      wrap(innerFn, outerFn, self, tryLocsList)\n    );\n\n    return runtime.isGeneratorFunction(outerFn)\n      ? iter // If outerFn is a generator, return the full iterator.\n      : iter.next().then(function(result) {\n          return result.done ? result.value : iter.next();\n        });\n  };\n\n  function makeInvokeMethod(innerFn, self, context) {\n    var state = GenStateSuspendedStart;\n\n    return function invoke(method, arg) {\n      if (state === GenStateExecuting) {\n        throw new Error(\"Generator is already running\");\n      }\n\n      if (state === GenStateCompleted) {\n        if (method === \"throw\") {\n          throw arg;\n        }\n\n        // Be forgiving, per 25.3.3.3.3 of the spec:\n        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume\n        return doneResult();\n      }\n\n      context.method = method;\n      context.arg = arg;\n\n      while (true) {\n        var delegate = context.delegate;\n        if (delegate) {\n          var delegateResult = maybeInvokeDelegate(delegate, context);\n          if (delegateResult) {\n            if (delegateResult === ContinueSentinel) continue;\n            return delegateResult;\n          }\n        }\n\n        if (context.method === \"next\") {\n          // Setting context._sent for legacy support of Babel's\n          // function.sent implementation.\n          context.sent = context._sent = context.arg;\n\n        } else if (context.method === \"throw\") {\n          if (state === GenStateSuspendedStart) {\n            state = GenStateCompleted;\n            throw context.arg;\n          }\n\n          context.dispatchException(context.arg);\n\n        } else if (context.method === \"return\") {\n          context.abrupt(\"return\", context.arg);\n        }\n\n        state = GenStateExecuting;\n\n        var record = tryCatch(innerFn, self, context);\n        if (record.type === \"normal\") {\n          // If an exception is thrown from innerFn, we leave state ===\n          // GenStateExecuting and loop back for another invocation.\n          state = context.done\n            ? GenStateCompleted\n            : GenStateSuspendedYield;\n\n          if (record.arg === ContinueSentinel) {\n            continue;\n          }\n\n          return {\n            value: record.arg,\n            done: context.done\n          };\n\n        } else if (record.type === \"throw\") {\n          state = GenStateCompleted;\n          // Dispatch the exception by looping back around to the\n          // context.dispatchException(context.arg) call above.\n          context.method = \"throw\";\n          context.arg = record.arg;\n        }\n      }\n    };\n  }\n\n  // Call delegate.iterator[context.method](context.arg) and handle the\n  // result, either by returning a { value, done } result from the\n  // delegate iterator, or by modifying context.method and context.arg,\n  // setting context.delegate to null, and returning the ContinueSentinel.\n  function maybeInvokeDelegate(delegate, context) {\n    var method = delegate.iterator[context.method];\n    if (method === undefined) {\n      // A .throw or .return when the delegate iterator has no .throw\n      // method always terminates the yield* loop.\n      context.delegate = null;\n\n      if (context.method === \"throw\") {\n        if (delegate.iterator.return) {\n          // If the delegate iterator has a return method, give it a\n          // chance to clean up.\n          context.method = \"return\";\n          context.arg = undefined;\n          maybeInvokeDelegate(delegate, context);\n\n          if (context.method === \"throw\") {\n            // If maybeInvokeDelegate(context) changed context.method from\n            // \"return\" to \"throw\", let that override the TypeError below.\n            return ContinueSentinel;\n          }\n        }\n\n        context.method = \"throw\";\n        context.arg = new TypeError(\n          \"The iterator does not provide a 'throw' method\");\n      }\n\n      return ContinueSentinel;\n    }\n\n    var record = tryCatch(method, delegate.iterator, context.arg);\n\n    if (record.type === \"throw\") {\n      context.method = \"throw\";\n      context.arg = record.arg;\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    var info = record.arg;\n\n    if (! info) {\n      context.method = \"throw\";\n      context.arg = new TypeError(\"iterator result is not an object\");\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    if (info.done) {\n      // Assign the result of the finished delegate to the temporary\n      // variable specified by delegate.resultName (see delegateYield).\n      context[delegate.resultName] = info.value;\n\n      // Resume execution at the desired location (see delegateYield).\n      context.next = delegate.nextLoc;\n\n      // If context.method was \"throw\" but the delegate handled the\n      // exception, let the outer generator proceed normally. If\n      // context.method was \"next\", forget context.arg since it has been\n      // \"consumed\" by the delegate iterator. If context.method was\n      // \"return\", allow the original .return call to continue in the\n      // outer generator.\n      if (context.method !== \"return\") {\n        context.method = \"next\";\n        context.arg = undefined;\n      }\n\n    } else {\n      // Re-yield the result returned by the delegate method.\n      return info;\n    }\n\n    // The delegate iterator is finished, so forget it and continue with\n    // the outer generator.\n    context.delegate = null;\n    return ContinueSentinel;\n  }\n\n  // Define Generator.prototype.{next,throw,return} in terms of the\n  // unified ._invoke helper method.\n  defineIteratorMethods(Gp);\n\n  Gp[toStringTagSymbol] = \"Generator\";\n\n  // A Generator should always return itself as the iterator object when the\n  // @@iterator function is called on it. Some browsers' implementations of the\n  // iterator prototype chain incorrectly implement this, causing the Generator\n  // object to not be returned from this call. This ensures that doesn't happen.\n  // See https://github.com/facebook/regenerator/issues/274 for more details.\n  Gp[iteratorSymbol] = function() {\n    return this;\n  };\n\n  Gp.toString = function() {\n    return \"[object Generator]\";\n  };\n\n  function pushTryEntry(locs) {\n    var entry = { tryLoc: locs[0] };\n\n    if (1 in locs) {\n      entry.catchLoc = locs[1];\n    }\n\n    if (2 in locs) {\n      entry.finallyLoc = locs[2];\n      entry.afterLoc = locs[3];\n    }\n\n    this.tryEntries.push(entry);\n  }\n\n  function resetTryEntry(entry) {\n    var record = entry.completion || {};\n    record.type = \"normal\";\n    delete record.arg;\n    entry.completion = record;\n  }\n\n  function Context(tryLocsList) {\n    // The root entry object (effectively a try statement without a catch\n    // or a finally block) gives us a place to store values thrown from\n    // locations where there is no enclosing try statement.\n    this.tryEntries = [{ tryLoc: \"root\" }];\n    tryLocsList.forEach(pushTryEntry, this);\n    this.reset(true);\n  }\n\n  runtime.keys = function(object) {\n    var keys = [];\n    for (var key in object) {\n      keys.push(key);\n    }\n    keys.reverse();\n\n    // Rather than returning an object with a next method, we keep\n    // things simple and return the next function itself.\n    return function next() {\n      while (keys.length) {\n        var key = keys.pop();\n        if (key in object) {\n          next.value = key;\n          next.done = false;\n          return next;\n        }\n      }\n\n      // To avoid creating an additional object, we just hang the .value\n      // and .done properties off the next function object itself. This\n      // also ensures that the minifier will not anonymize the function.\n      next.done = true;\n      return next;\n    };\n  };\n\n  function values(iterable) {\n    if (iterable) {\n      var iteratorMethod = iterable[iteratorSymbol];\n      if (iteratorMethod) {\n        return iteratorMethod.call(iterable);\n      }\n\n      if (typeof iterable.next === \"function\") {\n        return iterable;\n      }\n\n      if (!isNaN(iterable.length)) {\n        var i = -1, next = function next() {\n          while (++i < iterable.length) {\n            if (hasOwn.call(iterable, i)) {\n              next.value = iterable[i];\n              next.done = false;\n              return next;\n            }\n          }\n\n          next.value = undefined;\n          next.done = true;\n\n          return next;\n        };\n\n        return next.next = next;\n      }\n    }\n\n    // Return an iterator with no values.\n    return { next: doneResult };\n  }\n  runtime.values = values;\n\n  function doneResult() {\n    return { value: undefined, done: true };\n  }\n\n  Context.prototype = {\n    constructor: Context,\n\n    reset: function(skipTempReset) {\n      this.prev = 0;\n      this.next = 0;\n      // Resetting context._sent for legacy support of Babel's\n      // function.sent implementation.\n      this.sent = this._sent = undefined;\n      this.done = false;\n      this.delegate = null;\n\n      this.method = \"next\";\n      this.arg = undefined;\n\n      this.tryEntries.forEach(resetTryEntry);\n\n      if (!skipTempReset) {\n        for (var name in this) {\n          // Not sure about the optimal order of these conditions:\n          if (name.charAt(0) === \"t\" &&\n              hasOwn.call(this, name) &&\n              !isNaN(+name.slice(1))) {\n            this[name] = undefined;\n          }\n        }\n      }\n    },\n\n    stop: function() {\n      this.done = true;\n\n      var rootEntry = this.tryEntries[0];\n      var rootRecord = rootEntry.completion;\n      if (rootRecord.type === \"throw\") {\n        throw rootRecord.arg;\n      }\n\n      return this.rval;\n    },\n\n    dispatchException: function(exception) {\n      if (this.done) {\n        throw exception;\n      }\n\n      var context = this;\n      function handle(loc, caught) {\n        record.type = \"throw\";\n        record.arg = exception;\n        context.next = loc;\n\n        if (caught) {\n          // If the dispatched exception was caught by a catch block,\n          // then let that catch block handle the exception normally.\n          context.method = \"next\";\n          context.arg = undefined;\n        }\n\n        return !! caught;\n      }\n\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        var record = entry.completion;\n\n        if (entry.tryLoc === \"root\") {\n          // Exception thrown outside of any try block that could handle\n          // it, so set the completion value of the entire function to\n          // throw the exception.\n          return handle(\"end\");\n        }\n\n        if (entry.tryLoc <= this.prev) {\n          var hasCatch = hasOwn.call(entry, \"catchLoc\");\n          var hasFinally = hasOwn.call(entry, \"finallyLoc\");\n\n          if (hasCatch && hasFinally) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            } else if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else if (hasCatch) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            }\n\n          } else if (hasFinally) {\n            if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else {\n            throw new Error(\"try statement without catch or finally\");\n          }\n        }\n      }\n    },\n\n    abrupt: function(type, arg) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc <= this.prev &&\n            hasOwn.call(entry, \"finallyLoc\") &&\n            this.prev < entry.finallyLoc) {\n          var finallyEntry = entry;\n          break;\n        }\n      }\n\n      if (finallyEntry &&\n          (type === \"break\" ||\n           type === \"continue\") &&\n          finallyEntry.tryLoc <= arg &&\n          arg <= finallyEntry.finallyLoc) {\n        // Ignore the finally entry if control is not jumping to a\n        // location outside the try/catch block.\n        finallyEntry = null;\n      }\n\n      var record = finallyEntry ? finallyEntry.completion : {};\n      record.type = type;\n      record.arg = arg;\n\n      if (finallyEntry) {\n        this.method = \"next\";\n        this.next = finallyEntry.finallyLoc;\n        return ContinueSentinel;\n      }\n\n      return this.complete(record);\n    },\n\n    complete: function(record, afterLoc) {\n      if (record.type === \"throw\") {\n        throw record.arg;\n      }\n\n      if (record.type === \"break\" ||\n          record.type === \"continue\") {\n        this.next = record.arg;\n      } else if (record.type === \"return\") {\n        this.rval = this.arg = record.arg;\n        this.method = \"return\";\n        this.next = \"end\";\n      } else if (record.type === \"normal\" && afterLoc) {\n        this.next = afterLoc;\n      }\n\n      return ContinueSentinel;\n    },\n\n    finish: function(finallyLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.finallyLoc === finallyLoc) {\n          this.complete(entry.completion, entry.afterLoc);\n          resetTryEntry(entry);\n          return ContinueSentinel;\n        }\n      }\n    },\n\n    \"catch\": function(tryLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc === tryLoc) {\n          var record = entry.completion;\n          if (record.type === \"throw\") {\n            var thrown = record.arg;\n            resetTryEntry(entry);\n          }\n          return thrown;\n        }\n      }\n\n      // The context.catch method must only be called with a location\n      // argument that corresponds to a known catch block.\n      throw new Error(\"illegal catch attempt\");\n    },\n\n    delegateYield: function(iterable, resultName, nextLoc) {\n      this.delegate = {\n        iterator: values(iterable),\n        resultName: resultName,\n        nextLoc: nextLoc\n      };\n\n      if (this.method === \"next\") {\n        // Deliberately forget the last sent value so that we don't\n        // accidentally pass it on to the delegate.\n        this.arg = undefined;\n      }\n\n      return ContinueSentinel;\n    }\n  };\n})(\n  // In sloppy mode, unbound `this` refers to the global object, fallback to\n  // Function constructor if we're in global strict mode. That is sadly a form\n  // of indirect eval which violates Content Security Policy.\n  (function() { return this })() || Function(\"return this\")()\n);\n\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/regenerator-runtime/runtime.js\n// module id = 21\n// module chunks = 1\n\n");

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });var isFn = function isFn(v) {\n  return typeof v === 'function';\n};\n\nvar handlePromise = function handlePromise(promise) {\n  return promise.then(function (data) {\n    return [null, data];\n  }).catch(function (err) {\n    return [err];\n  });\n};\n\nvar REGEX = /^on|^create|Sync$|Manager$|^pause/;\nvar API_NORMAL_LIST = ['os', 'stopRecord', 'stopVoice', 'stopBackgroundAudio', 'stopPullDownRefresh', 'hideKeyboard', 'hideToast', 'hideLoading', 'showNavigationBarLoading', 'hideNavigationBarLoading', 'canIUse', 'navigateBack', 'closeSocket', 'pageScrollTo', 'drawCanvas'];\n\nvar shouldPromise = function shouldPromise(name) {\n  if (REGEX.test(name) && name !== 'createBLEConnection') {\n    return false;\n  }\n  if (~API_NORMAL_LIST.indexOf(name)) {\n    return false;\n  }\n  return true;\n};\n\nvar promisify = function promisify(api) {\n  return function () {\n    for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {\n      params[_key - 1] = arguments[_key];\n    }\n\n    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n    if (isFn(options.success) || isFn(options.fail) || isFn(options.complete)) {\n      return api.apply(undefined, [options].concat(params));\n    }\n    return handlePromise(new Promise(function (resolve, reject) {\n      api.apply(undefined, [Object.assign({}, options, {\n        success: resolve,\n        fail: reject })].\n      concat(params));\n      /* eslint-disable no-extend-native */\n      Promise.prototype.finally = function (callback) {\n        var promise = this.constructor;\n        return this.then(function (value) {\n          return promise.resolve(callback()).then(function () {\n            return value;\n          });\n        }, function (reason) {\n          return promise.resolve(callback()).then(function () {\n            throw reason;\n          });\n        });\n      };\n    }));\n  };\n};\n\nvar EPS = 1e-4;\nvar BASE_DEVICE_WIDTH = 750;\nvar isIOS = false;\nvar deviceWidth = 0;\nvar deviceDPR = 0;\n\nfunction checkDeviceWidth() {\n  var _wx$getSystemInfoSync = wx.getSystemInfoSync(),\n  platform = _wx$getSystemInfoSync.platform,\n  pixelRatio = _wx$getSystemInfoSync.pixelRatio,\n  windowWidth = _wx$getSystemInfoSync.windowWidth;\n\n  deviceWidth = windowWidth;\n  deviceDPR = pixelRatio;\n  isIOS = platform === 'ios';\n}\n\nfunction transformUpx(number, newDeviceWidth) {\n  if (deviceWidth === 0) {\n    checkDeviceWidth();\n  }\n\n  if (number === 0) {\n    return 0;\n  }\n\n  number = number / BASE_DEVICE_WIDTH * (newDeviceWidth || deviceWidth);\n  number = Math.floor(number + EPS);\n\n  if (number === 0) {\n    if (deviceDPR === 1 || !isIOS) {\n      return 1;\n    } else {\n      return 0.5;\n    }\n  }\n  return number;\n}\n\nvar uni = {};\n\nvar baseUni = {\n  os: {\n    plus: true } };\n\n\n\nif (typeof Proxy !== 'undefined') {\n  uni = new Proxy({}, {\n    get: function get(target, name) {\n      if (baseUni.hasOwnProperty(name)) {\n        return baseUni[name];\n      }\n      if (name === 'upx2px') {\n        return transformUpx;\n      }\n      if (!wx.hasOwnProperty(name)) {\n        return;\n      }\n      if (shouldPromise(name)) {\n        return promisify(wx[name]);\n      }\n      return wx[name];\n    } });\n\n} else {\n  uni.upx2px = transformUpx;\n\n  Object.keys(baseUni).forEach(function (key) {\n    uni[key] = baseUni[key];\n  });\n\n  Object.keys(wx).forEach(function (key) {\n    if (wx.hasOwnProperty(key)) {\n      if (shouldPromise(key)) {\n        uni[key] = promisify(wx[key]);\n      } else {\n        uni[key] = wx[key];\n      }\n    }\n  });\n}\n\nvar uni$1 = uni;exports.default =\n\nuni$1;\n\n//////////////////\n// WEBPACK FOOTER\n// ./lib/uni.app-plus.js\n// module id = 3\n// module chunks = 1\n\n");

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {// fix env\r\ntry {\r\n    if (!global) global = {}\r\n    global.process = global.process || {}\r\n    global.process.env = global.process.env || {}\r\n    global.App = global.App || App\r\n    global.Page = global.Page || Page\r\n    global.Component = global.Component || Component\r\n    global.getApp = global.getApp || getApp\r\n} catch (e) {}\r\n\r\n;(function(global, factory) {\r\n     true\r\n        ? (module.exports = factory())\r\n        : typeof define === \"function\" && define.amd\r\n            ? define(factory)\r\n            : (global.Vue = factory())\r\n})(this, function() {\r\n    \"use strict\"\r\n\r\n    //fixed by xxxxxx\r\n    function calcDiff(holder, key, newObj, oldObj) {\r\n        if (newObj === oldObj || newObj === undefined) {\r\n            return\r\n        }\r\n\r\n        if (newObj == null || oldObj == null || typeof newObj !== typeof oldObj) {\r\n            holder[key] = newObj\r\n        } else if (Array.isArray(newObj) && Array.isArray(oldObj)) {\r\n            if (newObj.length === oldObj.length) {\r\n                for (var i = 0, len = newObj.length; i < len; ++i) {\r\n                    calcDiff(holder, key + \"[\" + i + \"]\", newObj[i], oldObj[i])\r\n                }\r\n            } else {\r\n                holder[key] = newObj\r\n            }\r\n        } else if (typeof newObj === \"object\" && typeof oldObj === \"object\") {\r\n            var newKeys = Object.keys(newObj)\r\n            var oldKeys = Object.keys(oldObj)\r\n\r\n            if (newKeys.length !== oldKeys.length) {\r\n                holder[key] = newObj\r\n            } else {\r\n                var allKeysSet = Object.create(null)\r\n                for (var i = 0, len = newKeys.length; i < len; ++i) {\r\n                    allKeysSet[newKeys[i]] = true\r\n                    allKeysSet[oldKeys[i]] = true\r\n                }\r\n                if (Object.keys(allKeysSet).length !== newKeys.length) {\r\n                    holder[key] = newObj\r\n                } else {\r\n                    for (var i = 0, len = newKeys.length; i < len; ++i) {\r\n                        var k = newKeys[i]\r\n                        calcDiff(holder, key + \".\" + k, newObj[k], oldObj[k])\r\n                    }\r\n                }\r\n            }\r\n        } else if (newObj !== oldObj) {\r\n            holder[key] = newObj\r\n        }\r\n    }\r\n\r\n    function diff(newObj, oldObj) {\r\n        var keys = Object.keys(newObj)\r\n        var diffResult = {}\r\n        for (var i = 0, len = keys.length; i < len; ++i) {\r\n            var k = keys[i]\r\n            var oldKeyPath = k.split(\".\")\r\n            var oldValue = oldObj[oldKeyPath[0]]\r\n            for (var j = 1, jlen = oldKeyPath.length; j < jlen && oldValue !== undefined; ++j) {\r\n                oldValue = oldValue[oldKeyPath[j]]\r\n            }\r\n            calcDiff(diffResult, k, newObj[k], oldValue)\r\n        }\r\n        return diffResult\r\n    }\r\n\r\n    /*  */\r\n\r\n    // these helpers produces better vm code in JS engines due to their\r\n    // explicitness and function inlining\r\n    function isUndef(v) {\r\n        return v === undefined || v === null\r\n    }\r\n\r\n    function isDef(v) {\r\n        return v !== undefined && v !== null\r\n    }\r\n\r\n    function isTrue(v) {\r\n        return v === true\r\n    }\r\n\r\n    function isFalse(v) {\r\n        return v === false\r\n    }\r\n\r\n    /**\r\n     * Check if value is primitive\r\n     */\r\n    function isPrimitive(value) {\r\n        return typeof value === \"string\" || typeof value === \"number\"\r\n    }\r\n\r\n    /**\r\n     * Quick object check - this is primarily used to tell\r\n     * Objects from primitive values when we know the value\r\n     * is a JSON-compliant type.\r\n     */\r\n    function isObject(obj) {\r\n        return obj !== null && typeof obj === \"object\"\r\n    }\r\n\r\n    var _toString = Object.prototype.toString\r\n\r\n    /**\r\n     * Strict object type check. Only returns true\r\n     * for plain JavaScript objects.\r\n     */\r\n    function isPlainObject(obj) {\r\n        return _toString.call(obj) === \"[object Object]\"\r\n    }\r\n\r\n    function isRegExp(v) {\r\n        return _toString.call(v) === \"[object RegExp]\"\r\n    }\r\n\r\n    /**\r\n     * Check if val is a valid array index.\r\n     */\r\n    function isValidArrayIndex(val) {\r\n        var n = parseFloat(val)\r\n        return n >= 0 && Math.floor(n) === n && isFinite(val)\r\n    }\r\n\r\n    /**\r\n     * Convert a value to a string that is actually rendered.\r\n     */\r\n    function toString(val) {\r\n        return val == null\r\n            ? \"\"\r\n            : typeof val === \"object\"\r\n                ? JSON.stringify(val, null, 2)\r\n                : String(val)\r\n    }\r\n\r\n    /**\r\n     * Convert a input value to a number for persistence.\r\n     * If the conversion fails, return original string.\r\n     */\r\n    function toNumber(val) {\r\n        var n = parseFloat(val)\r\n        return isNaN(n) ? val : n\r\n    }\r\n\r\n    /**\r\n     * Make a map and return a function for checking if a key\r\n     * is in that map.\r\n     */\r\n    function makeMap(str, expectsLowerCase) {\r\n        var map = Object.create(null)\r\n        var list = str.split(\",\")\r\n        for (var i = 0; i < list.length; i++) {\r\n            map[list[i]] = true\r\n        }\r\n        return expectsLowerCase\r\n            ? function(val) {\r\n                  return map[val.toLowerCase()]\r\n              }\r\n            : function(val) {\r\n                  return map[val]\r\n              }\r\n    }\r\n\r\n    /**\r\n     * Check if a tag is a built-in tag.\r\n     */\r\n    var isBuiltInTag = makeMap(\"slot,component\", true)\r\n\r\n    /**\r\n     * Check if a attribute is a reserved attribute.\r\n     */\r\n    var isReservedAttribute = makeMap(\"key,ref,slot,is\")\r\n\r\n    /**\r\n     * Remove an item from an array\r\n     */\r\n    function remove(arr, item) {\r\n        if (arr.length) {\r\n            var index = arr.indexOf(item)\r\n            if (index > -1) {\r\n                return arr.splice(index, 1)\r\n            }\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Check whether the object has the property.\r\n     */\r\n    var hasOwnProperty = Object.prototype.hasOwnProperty\r\n\r\n    function hasOwn(obj, key) {\r\n        return hasOwnProperty.call(obj, key)\r\n    }\r\n\r\n    /**\r\n     * Create a cached version of a pure function.\r\n     */\r\n    function cached(fn) {\r\n        var cache = Object.create(null)\r\n        return function cachedFn(str) {\r\n            var hit = cache[str]\r\n            return hit || (cache[str] = fn(str))\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Camelize a hyphen-delimited string.\r\n     */\r\n    var camelizeRE = /-(\\w)/g\r\n    var camelize = cached(function(str) {\r\n        return str.replace(camelizeRE, function(_, c) {\r\n            return c ? c.toUpperCase() : \"\"\r\n        })\r\n    })\r\n\r\n    /**\r\n     * Capitalize a string.\r\n     */\r\n    var capitalize = cached(function(str) {\r\n        return str.charAt(0).toUpperCase() + str.slice(1)\r\n    })\r\n\r\n    /**\r\n     * Hyphenate a camelCase string.\r\n     */\r\n    var hyphenateRE = /([^-])([A-Z])/g\r\n    var hyphenate = cached(function(str) {\r\n        return str\r\n            .replace(hyphenateRE, \"$1-$2\")\r\n            .replace(hyphenateRE, \"$1-$2\")\r\n            .toLowerCase()\r\n    })\r\n\r\n    /**\r\n     * Simple bind, faster than native\r\n     */\r\n    function bind(fn, ctx) {\r\n        function boundFn(a) {\r\n            var l = arguments.length\r\n            return l ? (l > 1 ? fn.apply(ctx, arguments) : fn.call(ctx, a)) : fn.call(ctx)\r\n        }\r\n        // record original fn length\r\n        boundFn._length = fn.length\r\n        return boundFn\r\n    }\r\n\r\n    /**\r\n     * Convert an Array-like object to a real Array.\r\n     */\r\n    function toArray(list, start) {\r\n        start = start || 0\r\n        var i = list.length - start\r\n        var ret = new Array(i)\r\n        while (i--) {\r\n            ret[i] = list[i + start]\r\n        }\r\n        return ret\r\n    }\r\n\r\n    /**\r\n     * Mix properties into target object.\r\n     */\r\n    function extend(to, _from) {\r\n        for (var key in _from) {\r\n            to[key] = _from[key]\r\n        }\r\n        return to\r\n    }\r\n\r\n    /**\r\n     * Merge an Array of Objects into a single Object.\r\n     */\r\n    function toObject(arr) {\r\n        var res = {}\r\n        for (var i = 0; i < arr.length; i++) {\r\n            if (arr[i]) {\r\n                extend(res, arr[i])\r\n            }\r\n        }\r\n        return res\r\n    }\r\n\r\n    /**\r\n     * Perform no operation.\r\n     * Stubbing args to make Flow happy without leaving useless transpiled code\r\n     * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)\r\n     */\r\n    function noop(a, b, c) {}\r\n\r\n    /**\r\n     * Always return false.\r\n     */\r\n    var no = function(a, b, c) {\r\n        return false\r\n    }\r\n\r\n    /**\r\n     * Return same value\r\n     */\r\n    var identity = function(_) {\r\n        return _\r\n    }\r\n\r\n    /**\r\n     * Generate a static keys string from compiler modules.\r\n     */\r\n\r\n    /**\r\n     * Check if two values are loosely equal - that is,\r\n     * if they are plain objects, do they have the same shape?\r\n     */\r\n    function looseEqual(a, b) {\r\n        var isObjectA = isObject(a)\r\n        var isObjectB = isObject(b)\r\n        if (isObjectA && isObjectB) {\r\n            try {\r\n                return JSON.stringify(a) === JSON.stringify(b)\r\n            } catch (e) {\r\n                // possible circular reference\r\n                return a === b\r\n            }\r\n        } else if (!isObjectA && !isObjectB) {\r\n            return String(a) === String(b)\r\n        } else {\r\n            return false\r\n        }\r\n    }\r\n\r\n    function looseIndexOf(arr, val) {\r\n        for (var i = 0; i < arr.length; i++) {\r\n            if (looseEqual(arr[i], val)) {\r\n                return i\r\n            }\r\n        }\r\n        return -1\r\n    }\r\n\r\n    /**\r\n     * Ensure a function is called only once.\r\n     */\r\n    function once(fn) {\r\n        var called = false\r\n        return function() {\r\n            if (!called) {\r\n                called = true\r\n                fn.apply(this, arguments)\r\n            }\r\n        }\r\n    }\r\n\r\n    var SSR_ATTR = \"data-server-rendered\"\r\n\r\n    var ASSET_TYPES = [\"component\", \"directive\", \"filter\"]\r\n\r\n    var LIFECYCLE_HOOKS = [\r\n        \"beforeCreate\",\r\n        \"created\",\r\n        \"beforeMount\",\r\n        \"mounted\",\r\n        \"beforeUpdate\",\r\n        \"updated\",\r\n        \"beforeDestroy\",\r\n        \"destroyed\",\r\n        \"activated\",\r\n        \"deactivated\",\r\n        \"onLaunch\",\r\n        \"onLoad\",\r\n        \"onShow\",\r\n        \"onReady\",\r\n        \"onHide\",\r\n        \"onUnload\",\r\n        \"onPullDownRefresh\",\r\n        \"onReachBottom\",\r\n        \"onShareAppMessage\",\r\n        \"onPageScroll\",\r\n        \"onTabItemTap\",\r\n        \"attached\",\r\n        \"ready\",\r\n        \"moved\",\r\n        \"detached\",\r\n        \"onUniNViewMessage\", //fixed by xxxxxx\r\n        \"onNavigationBarButtonTap\", //fixed by xxxxxx\n        \"onBackPress\",//fixed by xxxxxx\r\n    ]\r\n\r\n    /*  */\r\n\r\n    var config = {\r\n        /**\r\n         * Option merge strategies (used in core/util/options)\r\n         */\r\n        optionMergeStrategies: Object.create(null),\r\n\r\n        /**\r\n         * Whether to suppress warnings.\r\n         */\r\n        silent: false,\r\n\r\n        /**\r\n         * Show production mode tip message on boot?\r\n         */\r\n        productionTip: \"production\" !== \"production\",\r\n\r\n        /**\r\n         * Whether to enable devtools\r\n         */\r\n        devtools: \"production\" !== \"production\",\r\n\r\n        /**\r\n         * Whether to record perf\r\n         */\r\n        performance: false,\r\n\r\n        /**\r\n         * Error handler for watcher errors\r\n         */\r\n        errorHandler: null,\r\n\r\n        /**\r\n         * Warn handler for watcher warns\r\n         */\r\n        warnHandler: null,\r\n\r\n        /**\r\n         * Ignore certain custom elements\r\n         */\r\n        ignoredElements: [],\r\n\r\n        /**\r\n         * Custom user key aliases for v-on\r\n         */\r\n        keyCodes: Object.create(null),\r\n\r\n        /**\r\n         * Check if a tag is reserved so that it cannot be registered as a\r\n         * component. This is platform-dependent and may be overwritten.\r\n         */\r\n        isReservedTag: no,\r\n\r\n        /**\r\n         * Check if an attribute is reserved so that it cannot be used as a component\r\n         * prop. This is platform-dependent and may be overwritten.\r\n         */\r\n        isReservedAttr: no,\r\n\r\n        /**\r\n         * Check if a tag is an unknown element.\r\n         * Platform-dependent.\r\n         */\r\n        isUnknownElement: no,\r\n\r\n        /**\r\n         * Get the namespace of an element\r\n         */\r\n        getTagNamespace: noop,\r\n\r\n        /**\r\n         * Parse the real tag name for the specific platform.\r\n         */\r\n        parsePlatformTagName: identity,\r\n\r\n        /**\r\n         * Check if an attribute must be bound using property, e.g. value\r\n         * Platform-dependent.\r\n         */\r\n        mustUseProp: no,\r\n\r\n        /**\r\n         * Exposed for legacy reasons\r\n         */\r\n        _lifecycleHooks: LIFECYCLE_HOOKS\r\n    }\r\n\r\n    /*  */\r\n\r\n    var emptyObject = Object.freeze({})\r\n\r\n    /**\r\n     * Check if a string starts with $ or _\r\n     */\r\n    function isReserved(str) {\r\n        var c = (str + \"\").charCodeAt(0)\r\n        return c === 0x24 || c === 0x5f\r\n    }\r\n\r\n    /**\r\n     * Define a property.\r\n     */\r\n    function def(obj, key, val, enumerable) {\r\n        Object.defineProperty(obj, key, {\r\n            value: val,\r\n            enumerable: !!enumerable,\r\n            writable: true,\r\n            configurable: true\r\n        })\r\n    }\r\n\r\n    /**\r\n     * Parse simple path.\r\n     */\r\n    var bailRE = /[^\\w.$]/\r\n\r\n    function parsePath(path) {\r\n        if (bailRE.test(path)) {\r\n            return\r\n        }\r\n        var segments = path.split(\".\")\r\n        return function(obj) {\r\n            for (var i = 0; i < segments.length; i++) {\r\n                if (!obj) {\r\n                    return\r\n                }\r\n                obj = obj[segments[i]]\r\n            }\r\n            return obj\r\n        }\r\n    }\r\n\r\n    /*  */\r\n\r\n    var warn = noop\r\n\r\n    var formatComponentName = null // work around flow check\r\n\r\n    /*  */\r\n\r\n    function handleError(err, vm, info) {\r\n        if (config.errorHandler) {\r\n            config.errorHandler.call(null, err, vm, info)\r\n        } else {\r\n            if (inBrowser && typeof console !== \"undefined\") {\r\n                console.error(err)\r\n            } else {\r\n                throw err\r\n            }\r\n        }\r\n    }\r\n\r\n    /*  */\r\n\r\n    // can we use __proto__?\r\n    var hasProto = \"__proto__\" in {}\r\n\r\n    // Browser environment sniffing\r\n    var inBrowser = typeof window !== \"undefined\"\r\n    var UA = [\"mpvue-runtime\"].join()\r\n    var isIE = UA && /msie|trident/.test(UA)\r\n    var isIE9 = UA && UA.indexOf(\"msie 9.0\") > 0\r\n    var isEdge = UA && UA.indexOf(\"edge/\") > 0\r\n    var isAndroid = UA && UA.indexOf(\"android\") > 0\r\n    var isIOS = UA && /iphone|ipad|ipod|ios/.test(UA)\r\n    var isChrome = UA && /chrome\\/\\d+/.test(UA) && !isEdge\r\n\r\n    // Firefix has a \"watch\" function on Object.prototype...\r\n    var nativeWatch = {}.watch\r\n\r\n    var supportsPassive = false\r\n    if (inBrowser) {\r\n        try {\r\n            var opts = {}\r\n            Object.defineProperty(opts, \"passive\", {\r\n                get: function get() {\r\n                    /* istanbul ignore next */\r\n                    supportsPassive = true\r\n                }\r\n            }) // https://github.com/facebook/flow/issues/285\r\n            window.addEventListener(\"test-passive\", null, opts)\r\n        } catch (e) {}\r\n    }\r\n\r\n    // this needs to be lazy-evaled because vue may be required before\r\n    // vue-server-renderer can set VUE_ENV\r\n    var _isServer\r\n    var isServerRendering = function() {\r\n        if (_isServer === undefined) {\r\n            /* istanbul ignore if */\r\n            if (!inBrowser && typeof global !== \"undefined\") {\r\n                // detect presence of vue-server-renderer and avoid\r\n                // Webpack shimming the process\r\n                _isServer = global[\"process\"].env.VUE_ENV === \"server\"\r\n            } else {\r\n                _isServer = false\r\n            }\r\n        }\r\n        return _isServer\r\n    }\r\n\r\n    // detect devtools\r\n    var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__\r\n\r\n    /* istanbul ignore next */\r\n    function isNative(Ctor) {\r\n        return typeof Ctor === \"function\" && /native code/.test(Ctor.toString())\r\n    }\r\n\r\n    var hasSymbol =\r\n        typeof Symbol !== \"undefined\" &&\r\n        isNative(Symbol) &&\r\n        typeof Reflect !== \"undefined\" &&\r\n        isNative(Reflect.ownKeys)\r\n\r\n    /**\r\n     * Defer a task to execute it asynchronously.\r\n     */\r\n    var nextTick = (function() {\r\n        var callbacks = []\r\n        var pending = false\r\n        var timerFunc\r\n\r\n        function nextTickHandler() {\r\n            pending = false\r\n            var copies = callbacks.slice(0)\r\n            callbacks.length = 0\r\n            for (var i = 0; i < copies.length; i++) {\r\n                copies[i]()\r\n            }\r\n        }\r\n\r\n        // the nextTick behavior leverages the microtask queue, which can be accessed\r\n        // via either native Promise.then or MutationObserver.\r\n        // MutationObserver has wider support, however it is seriously bugged in\r\n        // UIWebView in iOS >= 9.3.3 when triggered in touch event handlers. It\r\n        // completely stops working after triggering a few times... so, if native\r\n        // Promise is available, we will use it:\r\n        /* istanbul ignore if */\r\n        if (typeof Promise !== \"undefined\" && isNative(Promise)) {\r\n            var p = Promise.resolve()\r\n            var logError = function(err) {\r\n                console.error(err)\r\n            }\r\n            timerFunc = function() {\r\n                p.then(nextTickHandler).catch(logError)\r\n                // in problematic UIWebViews, Promise.then doesn't completely break, but\r\n                // it can get stuck in a weird state where callbacks are pushed into the\r\n                // microtask queue but the queue isn't being flushed, until the browser\r\n                // needs to do some other work, e.g. handle a timer. Therefore we can\r\n                // \"force\" the microtask queue to be flushed by adding an empty timer.\r\n                if (isIOS) {\r\n                    setTimeout(noop)\r\n                }\r\n            }\r\n            // } else if (typeof MutationObserver !== 'undefined' && (\r\n            //   isNative(MutationObserver) ||\r\n            //   // PhantomJS and iOS 7.x\r\n            //   MutationObserver.toString() === '[object MutationObserverConstructor]'\r\n            // )) {\r\n            //   // use MutationObserver where native Promise is not available,\r\n            //   // e.g. PhantomJS IE11, iOS7, Android 4.4\r\n            //   var counter = 1\r\n            //   var observer = new MutationObserver(nextTickHandler)\r\n            //   var textNode = document.createTextNode(String(counter))\r\n            //   observer.observe(textNode, {\r\n            //     characterData: true\r\n            //   })\r\n            //   timerFunc = () => {\r\n            //     counter = (counter + 1) % 2\r\n            //     textNode.data = String(counter)\r\n            //   }\r\n        } else {\r\n            // fallback to setTimeout\r\n            /* istanbul ignore next */\r\n            timerFunc = function() {\r\n                setTimeout(nextTickHandler, 0)\r\n            }\r\n        }\r\n\r\n        return function queueNextTick(cb, ctx) {\r\n            var _resolve\r\n            callbacks.push(function() {\r\n                if (cb) {\r\n                    try {\r\n                        cb.call(ctx)\r\n                    } catch (e) {\r\n                        handleError(e, ctx, \"nextTick\")\r\n                    }\r\n                } else if (_resolve) {\r\n                    _resolve(ctx)\r\n                }\r\n            })\r\n            if (!pending) {\r\n                pending = true\r\n                timerFunc()\r\n            }\r\n            if (!cb && typeof Promise !== \"undefined\") {\r\n                return new Promise(function(resolve, reject) {\r\n                    _resolve = resolve\r\n                })\r\n            }\r\n        }\r\n    })()\r\n\r\n    var _Set\r\n    /* istanbul ignore if */\r\n    if (typeof Set !== \"undefined\" && isNative(Set)) {\r\n        // use native Set when available.\r\n        _Set = Set\r\n    } else {\r\n        // a non-standard Set polyfill that only works with primitive keys.\r\n        _Set = (function() {\r\n            function Set() {\r\n                this.set = Object.create(null)\r\n            }\r\n            Set.prototype.has = function has(key) {\r\n                return this.set[key] === true\r\n            }\r\n            Set.prototype.add = function add(key) {\r\n                this.set[key] = true\r\n            }\r\n            Set.prototype.clear = function clear() {\r\n                this.set = Object.create(null)\r\n            }\r\n\r\n            return Set\r\n        })()\r\n    }\r\n\r\n    /*  */\r\n\r\n    var uid$1 = 0\r\n\r\n    /**\r\n     * A dep is an observable that can have multiple\r\n     * directives subscribing to it.\r\n     */\r\n    var Dep = function Dep() {\r\n        this.id = uid$1++\r\n        this.subs = []\r\n    }\r\n\r\n    Dep.prototype.addSub = function addSub(sub) {\r\n        this.subs.push(sub)\r\n    }\r\n\r\n    Dep.prototype.removeSub = function removeSub(sub) {\r\n        remove(this.subs, sub)\r\n    }\r\n\r\n    Dep.prototype.depend = function depend() {\r\n        if (Dep.target) {\r\n            Dep.target.addDep(this)\r\n        }\r\n    }\r\n\r\n    Dep.prototype.notify = function notify() {\r\n        // stabilize the subscriber list first\r\n        var subs = this.subs.slice()\r\n        for (var i = 0, l = subs.length; i < l; i++) {\r\n            subs[i].update()\r\n        }\r\n    }\r\n\r\n    // the current target watcher being evaluated.\r\n    // this is globally unique because there could be only one\r\n    // watcher being evaluated at any time.\r\n    Dep.target = null\r\n    var targetStack = []\r\n\r\n    function pushTarget(_target) {\r\n        if (Dep.target) {\r\n            targetStack.push(Dep.target)\r\n        }\r\n        Dep.target = _target\r\n    }\r\n\r\n    function popTarget() {\r\n        Dep.target = targetStack.pop()\r\n    }\r\n\r\n    /*\r\n     * not type checking this file because flow doesn't play well with\r\n     * dynamically accessing methods on Array prototype\r\n     */\r\n\r\n    var arrayProto = Array.prototype\r\n    var arrayMethods = Object.create(arrayProto)\r\n    ;[\"push\", \"pop\", \"shift\", \"unshift\", \"splice\", \"sort\", \"reverse\"].forEach(function(method) {\r\n        // cache original method\r\n        var original = arrayProto[method]\r\n        def(arrayMethods, method, function mutator() {\r\n            var args = [],\r\n                len = arguments.length\r\n            while (len--) args[len] = arguments[len]\r\n\r\n            var result = original.apply(this, args)\r\n            var ob = this.__ob__\r\n            var inserted\r\n            switch (method) {\r\n                case \"push\":\r\n                case \"unshift\":\r\n                    inserted = args\r\n                    break\r\n                case \"splice\":\r\n                    inserted = args.slice(2)\r\n                    break\r\n            }\r\n            if (inserted) {\r\n                ob.observeArray(inserted)\r\n            }\r\n            // notify change\r\n            ob.dep.notify()\r\n            return result\r\n        })\r\n    })\r\n\r\n    /*  */\r\n\r\n    var arrayKeys = Object.getOwnPropertyNames(arrayMethods)\r\n\r\n    /**\r\n     * By default, when a reactive property is set, the new value is\r\n     * also converted to become reactive. However when passing down props,\r\n     * we don't want to force conversion because the value may be a nested value\r\n     * under a frozen data structure. Converting it would defeat the optimization.\r\n     */\r\n    var observerState = {\r\n        shouldConvert: true\r\n    }\r\n\r\n    /**\r\n     * Observer class that are attached to each observed\r\n     * object. Once attached, the observer converts target\r\n     * object's property keys into getter/setters that\r\n     * collect dependencies and dispatches updates.\r\n     */\r\n    var Observer = function Observer(value) {\r\n        this.value = value\r\n        this.dep = new Dep()\r\n        this.vmCount = 0\r\n        def(value, \"__ob__\", this)\r\n        if (Array.isArray(value)) {\r\n            var augment = hasProto ? protoAugment : copyAugment\r\n            augment(value, arrayMethods, arrayKeys)\r\n            this.observeArray(value)\r\n        } else {\r\n            this.walk(value)\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Walk through each property and convert them into\r\n     * getter/setters. This method should only be called when\r\n     * value type is Object.\r\n     */\r\n    Observer.prototype.walk = function walk(obj) {\r\n        var keys = Object.keys(obj)\r\n        for (var i = 0; i < keys.length; i++) {\r\n            defineReactive$$1(obj, keys[i], obj[keys[i]])\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Observe a list of Array items.\r\n     */\r\n    Observer.prototype.observeArray = function observeArray(items) {\r\n        for (var i = 0, l = items.length; i < l; i++) {\r\n            observe(items[i])\r\n        }\r\n    }\r\n\r\n    // helpers\r\n\r\n    /**\r\n     * Augment an target Object or Array by intercepting\r\n     * the prototype chain using __proto__\r\n     */\r\n    function protoAugment(target, src, keys) {\r\n        /* eslint-disable no-proto */\r\n        target.__proto__ = src\r\n        /* eslint-enable no-proto */\r\n    }\r\n\r\n    /**\r\n     * Augment an target Object or Array by defining\r\n     * hidden properties.\r\n     */\r\n    /* istanbul ignore next */\r\n    function copyAugment(target, src, keys) {\r\n        for (var i = 0, l = keys.length; i < l; i++) {\r\n            var key = keys[i]\r\n            def(target, key, src[key])\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Attempt to create an observer instance for a value,\r\n     * returns the new observer if successfully observed,\r\n     * or the existing observer if the value already has one.\r\n     */\r\n    function observe(value, asRootData) {\r\n        if (!isObject(value)) {\r\n            return\r\n        }\r\n        var ob\r\n        if (hasOwn(value, \"__ob__\") && value.__ob__ instanceof Observer) {\r\n            ob = value.__ob__\r\n        } else if (\r\n            observerState.shouldConvert &&\r\n            !isServerRendering() &&\r\n            (Array.isArray(value) || isPlainObject(value)) &&\r\n            Object.isExtensible(value) &&\r\n            !value._isVue\r\n        ) {\r\n            ob = new Observer(value)\r\n        }\r\n        if (asRootData && ob) {\r\n            ob.vmCount++\r\n        }\r\n        return ob\r\n    }\r\n\r\n    /**\r\n     * Define a reactive property on an Object.\r\n     */\r\n    function defineReactive$$1(obj, key, val, customSetter, shallow) {\r\n        var dep = new Dep()\r\n\r\n        var property = Object.getOwnPropertyDescriptor(obj, key)\r\n        if (property && property.configurable === false) {\r\n            return\r\n        }\r\n\r\n        // cater for pre-defined getter/setters\r\n        var getter = property && property.get\r\n        var setter = property && property.set\r\n\r\n        var childOb = !shallow && observe(val)\r\n        Object.defineProperty(obj, key, {\r\n            enumerable: true,\r\n            configurable: true,\r\n            get: function reactiveGetter() {\r\n                var value = getter ? getter.call(obj) : val\r\n                if (Dep.target) {\r\n                    dep.depend()\r\n                    if (childOb) {\r\n                        childOb.dep.depend()\r\n                    }\r\n                    if (Array.isArray(value)) {\r\n                        dependArray(value)\r\n                    }\r\n                }\r\n                return value\r\n            },\r\n            set: function reactiveSetter(newVal) {\r\n                var value = getter ? getter.call(obj) : val\r\n                /* eslint-disable no-self-compare */\r\n                if (newVal === value || (newVal !== newVal && value !== value)) {\r\n                    return\r\n                }\r\n                /* eslint-enable no-self-compare */\r\n                if (false) {\r\n                    customSetter()\r\n                }\r\n                if (setter) {\r\n                    setter.call(obj, newVal)\r\n                } else {\r\n                    val = newVal\r\n                }\r\n                childOb = !shallow && observe(newVal)\r\n                dep.notify()\r\n            }\r\n        })\r\n    }\r\n\r\n    /**\r\n     * Set a property on an object. Adds the new property and\r\n     * triggers change notification if the property doesn't\r\n     * already exist.\r\n     */\r\n    function set(target, key, val) {\r\n        if (Array.isArray(target) && isValidArrayIndex(key)) {\r\n            target.length = Math.max(target.length, key)\r\n            target.splice(key, 1, val)\r\n            return val\r\n        }\r\n        if (hasOwn(target, key)) {\r\n            target[key] = val\r\n            return val\r\n        }\r\n        var ob = target.__ob__\r\n        if (target._isVue || (ob && ob.vmCount)) {\r\n            \"production\" !== \"production\" &&\r\n                warn(\r\n                    \"Avoid adding reactive properties to a Vue instance or its root $data \" +\r\n                        \"at runtime - declare it upfront in the data option.\"\r\n                )\r\n            return val\r\n        }\r\n        if (!ob) {\r\n            target[key] = val\r\n            return val\r\n        }\r\n        defineReactive$$1(ob.value, key, val)\r\n        ob.dep.notify()\r\n        return val\r\n    }\r\n\r\n    /**\r\n     * Delete a property and trigger change if necessary.\r\n     */\r\n    function del(target, key) {\r\n        if (Array.isArray(target) && isValidArrayIndex(key)) {\r\n            target.splice(key, 1)\r\n            return\r\n        }\r\n        var ob = target.__ob__\r\n        if (target._isVue || (ob && ob.vmCount)) {\r\n            \"production\" !== \"production\" &&\r\n                warn(\r\n                    \"Avoid deleting properties on a Vue instance or its root $data \" +\r\n                        \"- just set it to null.\"\r\n                )\r\n            return\r\n        }\r\n        if (!hasOwn(target, key)) {\r\n            return\r\n        }\r\n        delete target[key]\r\n        if (!ob) {\r\n            return\r\n        }\r\n        ob.dep.notify()\r\n    }\r\n\r\n    /**\r\n     * Collect dependencies on array elements when the array is touched, since\r\n     * we cannot intercept array element access like property getters.\r\n     */\r\n    function dependArray(value) {\r\n        for (var e = void 0, i = 0, l = value.length; i < l; i++) {\r\n            e = value[i]\r\n            e && e.__ob__ && e.__ob__.dep.depend()\r\n            if (Array.isArray(e)) {\r\n                dependArray(e)\r\n            }\r\n        }\r\n    }\r\n\r\n    /*  */\r\n\r\n    /**\r\n     * Option overwriting strategies are functions that handle\r\n     * how to merge a parent option value and a child option\r\n     * value into the final value.\r\n     */\r\n    var strats = config.optionMergeStrategies\r\n\r\n    /**\r\n     * Options with restrictions\r\n     */\r\n    /**\r\n     * Helper that recursively merges two data objects together.\r\n     */\r\n    function mergeData(to, from) {\r\n        if (!from) {\r\n            return to\r\n        }\r\n        var key, toVal, fromVal\r\n        var keys = Object.keys(from)\r\n        for (var i = 0; i < keys.length; i++) {\r\n            key = keys[i]\r\n            toVal = to[key]\r\n            fromVal = from[key]\r\n            if (!hasOwn(to, key)) {\r\n                set(to, key, fromVal)\r\n            } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {\r\n                mergeData(toVal, fromVal)\r\n            }\r\n        }\r\n        return to\r\n    }\r\n\r\n    /**\r\n     * Data\r\n     */\r\n    function mergeDataOrFn(parentVal, childVal, vm) {\r\n        if (!vm) {\r\n            // in a Vue.extend merge, both should be functions\r\n            if (!childVal) {\r\n                return parentVal\r\n            }\r\n            if (!parentVal) {\r\n                return childVal\r\n            }\r\n            // when parentVal & childVal are both present,\r\n            // we need to return a function that returns the\r\n            // merged result of both functions... no need to\r\n            // check if parentVal is a function here because\r\n            // it has to be a function to pass previous merges.\r\n            return function mergedDataFn() {\r\n                return mergeData(\r\n                    typeof childVal === \"function\" ? childVal.call(this) : childVal,\r\n                    parentVal.call(this)\r\n                )\r\n            }\r\n        } else if (parentVal || childVal) {\r\n            return function mergedInstanceDataFn() {\r\n                // instance merge\r\n                var instanceData = typeof childVal === \"function\" ? childVal.call(vm) : childVal\r\n                var defaultData = typeof parentVal === \"function\" ? parentVal.call(vm) : undefined\r\n                if (instanceData) {\r\n                    return mergeData(instanceData, defaultData)\r\n                } else {\r\n                    return defaultData\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    strats.data = function(parentVal, childVal, vm) {\r\n        if (!vm) {\r\n            if (childVal && typeof childVal !== \"function\") {\r\n                \"production\" !== \"production\" &&\r\n                    warn(\r\n                        'The \"data\" option should be a function ' +\r\n                            \"that returns a per-instance value in component \" +\r\n                            \"definitions.\",\r\n                        vm\r\n                    )\r\n\r\n                return parentVal\r\n            }\r\n            return mergeDataOrFn.call(this, parentVal, childVal)\r\n        }\r\n\r\n        return mergeDataOrFn(parentVal, childVal, vm)\r\n    }\r\n\r\n    /**\r\n     * Hooks and props are merged as arrays.\r\n     */\r\n    function mergeHook(parentVal, childVal) {\r\n        return childVal\r\n            ? parentVal\r\n                ? parentVal.concat(childVal)\r\n                : Array.isArray(childVal)\r\n                    ? childVal\r\n                    : [childVal]\r\n            : parentVal\r\n    }\r\n\r\n    LIFECYCLE_HOOKS.forEach(function(hook) {\r\n        strats[hook] = mergeHook\r\n    })\r\n\r\n    /**\r\n     * Assets\r\n     *\r\n     * When a vm is present (instance creation), we need to do\r\n     * a three-way merge between constructor options, instance\r\n     * options and parent options.\r\n     */\r\n    function mergeAssets(parentVal, childVal) {\r\n        var res = Object.create(parentVal || null)\r\n        return childVal ? extend(res, childVal) : res\r\n    }\r\n\r\n    ASSET_TYPES.forEach(function(type) {\r\n        strats[type + \"s\"] = mergeAssets\r\n    })\r\n\r\n    /**\r\n     * Watchers.\r\n     *\r\n     * Watchers hashes should not overwrite one\r\n     * another, so we merge them as arrays.\r\n     */\r\n    strats.watch = function(parentVal, childVal) {\r\n        // work around Firefox's Object.prototype.watch...\r\n        if (parentVal === nativeWatch) {\r\n            parentVal = undefined\r\n        }\r\n        if (childVal === nativeWatch) {\r\n            childVal = undefined\r\n        }\r\n        /* istanbul ignore if */\r\n        if (!childVal) {\r\n            return Object.create(parentVal || null)\r\n        }\r\n        if (!parentVal) {\r\n            return childVal\r\n        }\r\n        var ret = {}\r\n        extend(ret, parentVal)\r\n        for (var key in childVal) {\r\n            var parent = ret[key]\r\n            var child = childVal[key]\r\n            if (parent && !Array.isArray(parent)) {\r\n                parent = [parent]\r\n            }\r\n            ret[key] = parent ? parent.concat(child) : Array.isArray(child) ? child : [child]\r\n        }\r\n        return ret\r\n    }\r\n\r\n    /**\r\n     * Other object hashes.\r\n     */\r\n    strats.props = strats.methods = strats.inject = strats.computed = function(\r\n        parentVal,\r\n        childVal\r\n    ) {\r\n        if (!childVal) {\r\n            return Object.create(parentVal || null)\r\n        }\r\n        if (!parentVal) {\r\n            return childVal\r\n        }\r\n        var ret = Object.create(null)\r\n        extend(ret, parentVal)\r\n        extend(ret, childVal)\r\n        return ret\r\n    }\r\n    strats.provide = mergeDataOrFn\r\n\r\n    /**\r\n     * Default strategy.\r\n     */\r\n    var defaultStrat = function(parentVal, childVal) {\r\n        return childVal === undefined ? parentVal : childVal\r\n    }\r\n\r\n    /**\r\n     * Ensure all props option syntax are normalized into the\r\n     * Object-based format.\r\n     */\r\n    function normalizeProps(options) {\r\n        var props = options.props\r\n        if (!props) {\r\n            return\r\n        }\r\n        var res = {}\r\n        var i, val, name\r\n        if (Array.isArray(props)) {\r\n            i = props.length\r\n            while (i--) {\r\n                val = props[i]\r\n                if (typeof val === \"string\") {\r\n                    name = camelize(val)\r\n                    res[name] = {\r\n                        type: null\r\n                    }\r\n                } else {\r\n                }\r\n            }\r\n        } else if (isPlainObject(props)) {\r\n            for (var key in props) {\r\n                val = props[key]\r\n                name = camelize(key)\r\n                res[name] = isPlainObject(val)\r\n                    ? val\r\n                    : {\r\n                          type: val\r\n                      }\r\n            }\r\n        }\r\n        options.props = res\r\n    }\r\n\r\n    /**\r\n     * Normalize all injections into Object-based format\r\n     */\r\n    function normalizeInject(options) {\r\n        var inject = options.inject\r\n        if (Array.isArray(inject)) {\r\n            var normalized = (options.inject = {})\r\n            for (var i = 0; i < inject.length; i++) {\r\n                normalized[inject[i]] = inject[i]\r\n            }\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Normalize raw function directives into object format.\r\n     */\r\n    function normalizeDirectives(options) {\r\n        var dirs = options.directives\r\n        if (dirs) {\r\n            for (var key in dirs) {\r\n                var def = dirs[key]\r\n                if (typeof def === \"function\") {\r\n                    dirs[key] = {\r\n                        bind: def,\r\n                        update: def\r\n                    }\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Merge two option objects into a new one.\r\n     * Core utility used in both instantiation and inheritance.\r\n     */\r\n    function mergeOptions(parent, child, vm) {\r\n        if (typeof child === \"function\") {\r\n            child = child.options\r\n        }\r\n\r\n        normalizeProps(child)\r\n        normalizeInject(child)\r\n        normalizeDirectives(child)\r\n        var extendsFrom = child.extends\r\n        if (extendsFrom) {\r\n            parent = mergeOptions(parent, extendsFrom, vm)\r\n        }\r\n        if (child.mixins) {\r\n            for (var i = 0, l = child.mixins.length; i < l; i++) {\r\n                parent = mergeOptions(parent, child.mixins[i], vm)\r\n            }\r\n        }\r\n        var options = {}\r\n        var key\r\n        for (key in parent) {\r\n            mergeField(key)\r\n        }\r\n        for (key in child) {\r\n            if (!hasOwn(parent, key)) {\r\n                mergeField(key)\r\n            }\r\n        }\r\n\r\n        function mergeField(key) {\r\n            var strat = strats[key] || defaultStrat\r\n            options[key] = strat(parent[key], child[key], vm, key)\r\n        }\r\n        return options\r\n    }\r\n\r\n    /**\r\n     * Resolve an asset.\r\n     * This function is used because child instances need access\r\n     * to assets defined in its ancestor chain.\r\n     */\r\n    function resolveAsset(options, type, id, warnMissing) {\r\n        /* istanbul ignore if */\r\n        if (typeof id !== \"string\") {\r\n            return\r\n        }\r\n        var assets = options[type]\r\n        // check local registration variations first\r\n        if (hasOwn(assets, id)) {\r\n            return assets[id]\r\n        }\r\n        var camelizedId = camelize(id)\r\n        if (hasOwn(assets, camelizedId)) {\r\n            return assets[camelizedId]\r\n        }\r\n        var PascalCaseId = capitalize(camelizedId)\r\n        if (hasOwn(assets, PascalCaseId)) {\r\n            return assets[PascalCaseId]\r\n        }\r\n        // fallback to prototype chain\r\n        var res = assets[id] || assets[camelizedId] || assets[PascalCaseId]\r\n        if (false) {\r\n            warn(\"Failed to resolve \" + type.slice(0, -1) + \": \" + id, options)\r\n        }\r\n        return res\r\n    }\r\n\r\n    /*  */\r\n\r\n    function validateProp(key, propOptions, propsData, vm) {\r\n        var prop = propOptions[key]\r\n        var absent = !hasOwn(propsData, key)\r\n        var value = propsData[key]\r\n        // handle boolean props\r\n        if (isType(Boolean, prop.type)) {\r\n            if (absent && !hasOwn(prop, \"default\")) {\r\n                value = false\r\n            } else if (!isType(String, prop.type) && (value === \"\" || value === hyphenate(key))) {\r\n                value = true\r\n            }\r\n        }\r\n        // check default value\r\n        if (value === undefined) {\r\n            value = getPropDefaultValue(vm, prop, key)\r\n            // since the default value is a fresh copy,\r\n            // make sure to observe it.\r\n            var prevShouldConvert = observerState.shouldConvert\r\n            observerState.shouldConvert = true\r\n            observe(value)\r\n            observerState.shouldConvert = prevShouldConvert\r\n        }\r\n        return value\r\n    }\r\n\r\n    /**\r\n     * Get the default value of a prop.\r\n     */\r\n    function getPropDefaultValue(vm, prop, key) {\r\n        // no default, return undefined\r\n        if (!hasOwn(prop, \"default\")) {\r\n            return undefined\r\n        }\r\n        var def = prop.default\r\n        // warn against non-factory defaults for Object & Array\r\n        if (false) {\r\n            warn(\r\n                'Invalid default value for prop \"' +\r\n                    key +\r\n                    '\": ' +\r\n                    \"Props with type Object/Array must use a factory function \" +\r\n                    \"to return the default value.\",\r\n                vm\r\n            )\r\n        }\r\n        // the raw prop value was also undefined from previous render,\r\n        // return previous default value to avoid unnecessary watcher trigger\r\n        if (\r\n            vm &&\r\n            vm.$options.propsData &&\r\n            vm.$options.propsData[key] === undefined &&\r\n            vm._props[key] !== undefined\r\n        ) {\r\n            return vm._props[key]\r\n        }\r\n        // call factory function for non-Function types\r\n        // a value is Function if its prototype is function even across different execution context\r\n        return typeof def === \"function\" && getType(prop.type) !== \"Function\" ? def.call(vm) : def\r\n    }\r\n\r\n    /**\r\n     * Use function string name to check built-in types,\r\n     * because a simple equality check will fail when running\r\n     * across different vms / iframes.\r\n     */\r\n    function getType(fn) {\r\n        var match = fn && fn.toString().match(/^\\s*function (\\w+)/)\r\n        return match ? match[1] : \"\"\r\n    }\r\n\r\n    function isType(type, fn) {\r\n        if (!Array.isArray(fn)) {\r\n            return getType(fn) === getType(type)\r\n        }\r\n        for (var i = 0, len = fn.length; i < len; i++) {\r\n            if (getType(fn[i]) === getType(type)) {\r\n                return true\r\n            }\r\n        }\r\n        /* istanbul ignore next */\r\n        return false\r\n    }\r\n\r\n    /*  */\r\n\r\n    /* not type checking this file because flow doesn't play well with Proxy */\r\n\r\n    var mark\r\n    var measure\r\n\r\n    /*  */\r\n\r\n    var VNode = function VNode(\r\n        tag,\r\n        data,\r\n        children,\r\n        text,\r\n        elm,\r\n        context,\r\n        componentOptions,\r\n        asyncFactory\r\n    ) {\r\n        this.tag = tag\r\n        this.data = data\r\n        this.children = children\r\n        this.text = text\r\n        this.elm = elm\r\n        this.ns = undefined\r\n        this.context = context\r\n        this.functionalContext = undefined\r\n        this.key = data && data.key\r\n        this.componentOptions = componentOptions\r\n        this.componentInstance = undefined\r\n        this.parent = undefined\r\n        this.raw = false\r\n        this.isStatic = false\r\n        this.isRootInsert = true\r\n        this.isComment = false\r\n        this.isCloned = false\r\n        this.isOnce = false\r\n        this.asyncFactory = asyncFactory\r\n        this.asyncMeta = undefined\r\n        this.isAsyncPlaceholder = false\r\n    }\r\n\r\n    var prototypeAccessors = {\r\n        child: {}\r\n    }\r\n\r\n    // DEPRECATED: alias for componentInstance for backwards compat.\r\n    /* istanbul ignore next */\r\n    prototypeAccessors.child.get = function() {\r\n        return this.componentInstance\r\n    }\r\n\r\n    Object.defineProperties(VNode.prototype, prototypeAccessors)\r\n\r\n    var createEmptyVNode = function(text) {\r\n        if (text === void 0) text = \"\"\r\n\r\n        var node = new VNode()\r\n        node.text = text\r\n        node.isComment = true\r\n        return node\r\n    }\r\n\r\n    function createTextVNode(val) {\r\n        return new VNode(undefined, undefined, undefined, String(val))\r\n    }\r\n\r\n    // optimized shallow clone\r\n    // used for static nodes and slot nodes because they may be reused across\r\n    // multiple renders, cloning them avoids errors when DOM manipulations rely\r\n    // on their elm reference.\r\n    function cloneVNode(vnode) {\r\n        var cloned = new VNode(\r\n            vnode.tag,\r\n            vnode.data,\r\n            vnode.children,\r\n            vnode.text,\r\n            vnode.elm,\r\n            vnode.context,\r\n            vnode.componentOptions,\r\n            vnode.asyncFactory\r\n        )\r\n        cloned.ns = vnode.ns\r\n        cloned.isStatic = vnode.isStatic\r\n        cloned.key = vnode.key\r\n        cloned.isComment = vnode.isComment\r\n        cloned.isCloned = true\r\n        return cloned\r\n    }\r\n\r\n    function cloneVNodes(vnodes) {\r\n        var len = vnodes.length\r\n        var res = new Array(len)\r\n        for (var i = 0; i < len; i++) {\r\n            res[i] = cloneVNode(vnodes[i])\r\n        }\r\n        return res\r\n    }\r\n\r\n    /*  */\r\n\r\n    var normalizeEvent = cached(function(name) {\r\n        var passive = name.charAt(0) === \"&\"\r\n        name = passive ? name.slice(1) : name\r\n        var once$$1 = name.charAt(0) === \"~\" // Prefixed last, checked first\r\n        name = once$$1 ? name.slice(1) : name\r\n        var capture = name.charAt(0) === \"!\"\r\n        name = capture ? name.slice(1) : name\r\n        return {\r\n            name: name,\r\n            once: once$$1,\r\n            capture: capture,\r\n            passive: passive\r\n        }\r\n    })\r\n\r\n    function createFnInvoker(fns) {\r\n        function invoker() {\r\n            var arguments$1 = arguments\r\n\r\n            var fns = invoker.fns\r\n            if (Array.isArray(fns)) {\r\n                var cloned = fns.slice()\r\n                for (var i = 0; i < cloned.length; i++) {\r\n                    cloned[i].apply(null, arguments$1)\r\n                }\r\n            } else {\r\n                // return handler return value for single handlers\r\n                return fns.apply(null, arguments)\r\n            }\r\n        }\r\n        invoker.fns = fns\r\n        return invoker\r\n    }\r\n\r\n    function updateListeners(on, oldOn, add, remove$$1, vm) {\r\n        var name, cur, old, event\r\n        for (name in on) {\r\n            cur = on[name]\r\n            old = oldOn[name]\r\n            event = normalizeEvent(name)\r\n            if (isUndef(cur)) {\r\n                \"production\" !== \"production\" &&\r\n                    warn('Invalid handler for event \"' + event.name + '\": got ' + String(cur), vm)\r\n            } else if (isUndef(old)) {\r\n                if (isUndef(cur.fns)) {\r\n                    cur = on[name] = createFnInvoker(cur)\r\n                }\r\n                add(event.name, cur, event.once, event.capture, event.passive)\r\n            } else if (cur !== old) {\r\n                old.fns = cur\r\n                on[name] = old\r\n            }\r\n        }\r\n        for (name in oldOn) {\r\n            if (isUndef(on[name])) {\r\n                event = normalizeEvent(name)\r\n                remove$$1(event.name, oldOn[name], event.capture)\r\n            }\r\n        }\r\n    }\r\n\r\n    /*  */\r\n\r\n    /*  */\r\n\r\n    function extractPropsFromVNodeData(data, Ctor, tag) {\r\n        // we are only extracting raw values here.\r\n        // validation and default values are handled in the child\r\n        // component itself.\r\n        var propOptions = Ctor.options.props\r\n        if (isUndef(propOptions)) {\r\n            return\r\n        }\r\n        var res = {}\r\n        var attrs = data.attrs\r\n        var props = data.props\r\n        if (isDef(attrs) || isDef(props)) {\r\n            for (var key in propOptions) {\r\n                var altKey = hyphenate(key)\r\n                checkProp(res, props, key, altKey, true) ||\r\n                    checkProp(res, attrs, key, altKey, false)\r\n            }\r\n        }\r\n        return res\r\n    }\r\n\r\n    function checkProp(res, hash, key, altKey, preserve) {\r\n        if (isDef(hash)) {\r\n            if (hasOwn(hash, key)) {\r\n                res[key] = hash[key]\r\n                if (!preserve) {\r\n                    delete hash[key]\r\n                }\r\n                return true\r\n            } else if (hasOwn(hash, altKey)) {\r\n                res[key] = hash[altKey]\r\n                if (!preserve) {\r\n                    delete hash[altKey]\r\n                }\r\n                return true\r\n            }\r\n        }\r\n        return false\r\n    }\r\n\r\n    /*  */\r\n\r\n    // The template compiler attempts to minimize the need for normalization by\r\n    // statically analyzing the template at compile time.\r\n    //\r\n    // For plain HTML markup, normalization can be completely skipped because the\r\n    // generated render function is guaranteed to return Array<VNode>. There are\r\n    // two cases where extra normalization is needed:\r\n\r\n    // 1. When the children contains components - because a functional component\r\n    // may return an Array instead of a single root. In this case, just a simple\r\n    // normalization is needed - if any child is an Array, we flatten the whole\r\n    // thing with Array.prototype.concat. It is guaranteed to be only 1-level deep\r\n    // because functional components already normalize their own children.\r\n    function simpleNormalizeChildren(children) {\r\n        for (var i = 0; i < children.length; i++) {\r\n            if (Array.isArray(children[i])) {\r\n                return Array.prototype.concat.apply([], children)\r\n            }\r\n        }\r\n        return children\r\n    }\r\n\r\n    // 2. When the children contains constructs that always generated nested Arrays,\r\n    // e.g. <template>, <slot>, v-for, or when the children is provided by user\r\n    // with hand-written render functions / JSX. In such cases a full normalization\r\n    // is needed to cater to all possible types of children values.\r\n    function normalizeChildren(children) {\r\n        return isPrimitive(children)\r\n            ? [createTextVNode(children)]\r\n            : Array.isArray(children)\r\n                ? normalizeArrayChildren(children)\r\n                : undefined\r\n    }\r\n\r\n    function isTextNode(node) {\r\n        return isDef(node) && isDef(node.text) && isFalse(node.isComment)\r\n    }\r\n\r\n    function normalizeArrayChildren(children, nestedIndex) {\r\n        var res = []\r\n        var i, c, last\r\n        for (i = 0; i < children.length; i++) {\r\n            c = children[i]\r\n            if (isUndef(c) || typeof c === \"boolean\") {\r\n                continue\r\n            }\r\n            last = res[res.length - 1]\r\n            //  nested\r\n            if (Array.isArray(c)) {\r\n                res.push.apply(res, normalizeArrayChildren(c, (nestedIndex || \"\") + \"_\" + i))\r\n            } else if (isPrimitive(c)) {\r\n                if (isTextNode(last)) {\r\n                    // merge adjacent text nodes\r\n                    // this is necessary for SSR hydration because text nodes are\r\n                    // essentially merged when rendered to HTML strings\r\n                    last.text += String(c)\r\n                } else if (c !== \"\") {\r\n                    // convert primitive to vnode\r\n                    res.push(createTextVNode(c))\r\n                }\r\n            } else {\r\n                if (isTextNode(c) && isTextNode(last)) {\r\n                    // merge adjacent text nodes\r\n                    res[res.length - 1] = createTextVNode(last.text + c.text)\r\n                } else {\r\n                    // default key for nested array children (likely generated by v-for)\r\n                    if (\r\n                        isTrue(children._isVList) &&\r\n                        isDef(c.tag) &&\r\n                        isUndef(c.key) &&\r\n                        isDef(nestedIndex)\r\n                    ) {\r\n                        c.key = \"__vlist\" + nestedIndex + \"_\" + i + \"__\"\r\n                    }\r\n                    res.push(c)\r\n                }\r\n            }\r\n        }\r\n        return res\r\n    }\r\n\r\n    /*  */\r\n\r\n    function ensureCtor(comp, base) {\r\n        if (comp.__esModule && comp.default) {\r\n            comp = comp.default\r\n        }\r\n        return isObject(comp) ? base.extend(comp) : comp\r\n    }\r\n\r\n    function createAsyncPlaceholder(factory, data, context, children, tag) {\r\n        var node = createEmptyVNode()\r\n        node.asyncFactory = factory\r\n        node.asyncMeta = {\r\n            data: data,\r\n            context: context,\r\n            children: children,\r\n            tag: tag\r\n        }\r\n        return node\r\n    }\r\n\r\n    function resolveAsyncComponent(factory, baseCtor, context) {\r\n        if (isTrue(factory.error) && isDef(factory.errorComp)) {\r\n            return factory.errorComp\r\n        }\r\n\r\n        if (isDef(factory.resolved)) {\r\n            return factory.resolved\r\n        }\r\n\r\n        if (isTrue(factory.loading) && isDef(factory.loadingComp)) {\r\n            return factory.loadingComp\r\n        }\r\n\r\n        if (isDef(factory.contexts)) {\r\n            // already pending\r\n            factory.contexts.push(context)\r\n        } else {\r\n            var contexts = (factory.contexts = [context])\r\n            var sync = true\r\n\r\n            var forceRender = function() {\r\n                for (var i = 0, l = contexts.length; i < l; i++) {\r\n                    contexts[i].$forceUpdate()\r\n                }\r\n            }\r\n\r\n            var resolve = once(function(res) {\r\n                // cache resolved\r\n                factory.resolved = ensureCtor(res, baseCtor)\r\n                // invoke callbacks only if this is not a synchronous resolve\r\n                // (async resolves are shimmed as synchronous during SSR)\r\n                if (!sync) {\r\n                    forceRender()\r\n                }\r\n            })\r\n\r\n            var reject = once(function(reason) {\r\n                \"production\" !== \"production\" &&\r\n                    warn(\r\n                        \"Failed to resolve async component: \" +\r\n                            String(factory) +\r\n                            (reason ? \"\\nReason: \" + reason : \"\")\r\n                    )\r\n                if (isDef(factory.errorComp)) {\r\n                    factory.error = true\r\n                    forceRender()\r\n                }\r\n            })\r\n\r\n            var res = factory(resolve, reject)\r\n\r\n            if (isObject(res)) {\r\n                if (typeof res.then === \"function\") {\r\n                    // () => Promise\r\n                    if (isUndef(factory.resolved)) {\r\n                        res.then(resolve, reject)\r\n                    }\r\n                } else if (isDef(res.component) && typeof res.component.then === \"function\") {\r\n                    res.component.then(resolve, reject)\r\n\r\n                    if (isDef(res.error)) {\r\n                        factory.errorComp = ensureCtor(res.error, baseCtor)\r\n                    }\r\n\r\n                    if (isDef(res.loading)) {\r\n                        factory.loadingComp = ensureCtor(res.loading, baseCtor)\r\n                        if (res.delay === 0) {\r\n                            factory.loading = true\r\n                        } else {\r\n                            setTimeout(function() {\r\n                                if (isUndef(factory.resolved) && isUndef(factory.error)) {\r\n                                    factory.loading = true\r\n                                    forceRender()\r\n                                }\r\n                            }, res.delay || 200)\r\n                        }\r\n                    }\r\n\r\n                    if (isDef(res.timeout)) {\r\n                        setTimeout(function() {\r\n                            if (isUndef(factory.resolved)) {\r\n                                reject(null)\r\n                            }\r\n                        }, res.timeout)\r\n                    }\r\n                }\r\n            }\r\n\r\n            sync = false\r\n            // return in case resolved synchronously\r\n            return factory.loading ? factory.loadingComp : factory.resolved\r\n        }\r\n    }\r\n\r\n    /*  */\r\n\r\n    function getFirstComponentChild(children) {\r\n        if (Array.isArray(children)) {\r\n            for (var i = 0; i < children.length; i++) {\r\n                var c = children[i]\r\n                if (isDef(c) && isDef(c.componentOptions)) {\r\n                    return c\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    /*  */\r\n\r\n    /*  */\r\n\r\n    function initEvents(vm) {\r\n        vm._events = Object.create(null)\r\n        vm._hasHookEvent = false\r\n        // init parent attached events\r\n        var listeners = vm.$options._parentListeners\r\n        if (listeners) {\r\n            updateComponentListeners(vm, listeners)\r\n        }\r\n    }\r\n\r\n    var target\r\n\r\n    function add(event, fn, once$$1) {\r\n        if (once$$1) {\r\n            target.$once(event, fn)\r\n        } else {\r\n            target.$on(event, fn)\r\n        }\r\n    }\r\n\r\n    function remove$1(event, fn) {\r\n        target.$off(event, fn)\r\n    }\r\n\r\n    function updateComponentListeners(vm, listeners, oldListeners) {\r\n        target = vm\r\n        updateListeners(listeners, oldListeners || {}, add, remove$1, vm)\r\n    }\r\n\r\n    function eventsMixin(Vue) {\r\n        var hookRE = /^hook:/\r\n        Vue.prototype.$on = function(event, fn) {\r\n            var this$1 = this\r\n\r\n            var vm = this\r\n            if (Array.isArray(event)) {\r\n                for (var i = 0, l = event.length; i < l; i++) {\r\n                    this$1.$on(event[i], fn)\r\n                }\r\n            } else {\r\n                ;(vm._events[event] || (vm._events[event] = [])).push(fn)\r\n                // optimize hook:event cost by using a boolean flag marked at registration\r\n                // instead of a hash lookup\r\n                if (hookRE.test(event)) {\r\n                    vm._hasHookEvent = true\r\n                }\r\n            }\r\n            return vm\r\n        }\r\n\r\n        Vue.prototype.$once = function(event, fn) {\r\n            var vm = this\r\n\r\n            function on() {\r\n                vm.$off(event, on)\r\n                fn.apply(vm, arguments)\r\n            }\r\n            on.fn = fn\r\n            vm.$on(event, on)\r\n            return vm\r\n        }\r\n\r\n        Vue.prototype.$off = function(event, fn) {\r\n            var this$1 = this\r\n\r\n            var vm = this\r\n            // all\r\n            if (!arguments.length) {\r\n                vm._events = Object.create(null)\r\n                return vm\r\n            }\r\n            // array of events\r\n            if (Array.isArray(event)) {\r\n                for (var i$1 = 0, l = event.length; i$1 < l; i$1++) {\r\n                    this$1.$off(event[i$1], fn)\r\n                }\r\n                return vm\r\n            }\r\n            // specific event\r\n            var cbs = vm._events[event]\r\n            if (!cbs) {\r\n                return vm\r\n            }\r\n            if (arguments.length === 1) {\r\n                vm._events[event] = null\r\n                return vm\r\n            }\r\n            // specific handler\r\n            var cb\r\n            var i = cbs.length\r\n            while (i--) {\r\n                cb = cbs[i]\r\n                if (cb === fn || cb.fn === fn) {\r\n                    cbs.splice(i, 1)\r\n                    break\r\n                }\r\n            }\r\n            return vm\r\n        }\r\n\r\n        Vue.prototype.$emit = function(event) {\r\n            var vm = this\r\n            var cbs = vm._events[event]\r\n            if (cbs) {\r\n                cbs = cbs.length > 1 ? toArray(cbs) : cbs\r\n                var args = toArray(arguments, 1)\r\n                for (var i = 0, l = cbs.length; i < l; i++) {\r\n                    try {\r\n                        cbs[i].apply(vm, args)\r\n                    } catch (e) {\r\n                        handleError(e, vm, 'event handler for \"' + event + '\"')\r\n                    }\r\n                }\r\n            }\r\n            return vm\r\n        }\r\n    }\r\n\r\n    /*  */\r\n\r\n    /**\r\n     * Runtime helper for resolving raw children VNodes into a slot object.\r\n     */\r\n    function resolveSlots(children, context) {\r\n        var slots = {}\r\n        if (!children) {\r\n            return slots\r\n        }\r\n        var defaultSlot = []\r\n        for (var i = 0, l = children.length; i < l; i++) {\r\n            var child = children[i]\r\n            // named slots should only be respected if the vnode was rendered in the\r\n            // same context.\r\n            if (\r\n                (child.context === context || child.functionalContext === context) &&\r\n                child.data &&\r\n                child.data.slot != null\r\n            ) {\r\n                var name = child.data.slot\r\n                var slot = slots[name] || (slots[name] = [])\r\n                if (child.tag === \"template\") {\r\n                    slot.push.apply(slot, child.children)\r\n                } else {\r\n                    slot.push(child)\r\n                }\r\n            } else {\r\n                defaultSlot.push(child)\r\n            }\r\n        }\r\n        // ignore whitespace\r\n        if (!defaultSlot.every(isWhitespace)) {\r\n            slots.default = defaultSlot\r\n        }\r\n        return slots\r\n    }\r\n\r\n    function isWhitespace(node) {\r\n        return node.isComment || node.text === \" \"\r\n    }\r\n\r\n    function resolveScopedSlots(\r\n        fns, // see flow/vnode\r\n        res\r\n    ) {\r\n        res = res || {}\r\n        for (var i = 0; i < fns.length; i++) {\r\n            if (Array.isArray(fns[i])) {\r\n                resolveScopedSlots(fns[i], res)\r\n            } else {\r\n                res[fns[i].key] = fns[i].fn\r\n            }\r\n        }\r\n        return res\r\n    }\r\n\r\n    /*  */\r\n\r\n    var activeInstance = null\r\n\r\n    function initLifecycle(vm) {\r\n        var options = vm.$options\r\n\r\n        // locate first non-abstract parent\r\n        var parent = options.parent\r\n        if (parent && !options.abstract) {\r\n            while (parent.$options.abstract && parent.$parent) {\r\n                parent = parent.$parent\r\n            }\r\n            parent.$children.push(vm)\r\n        }\r\n\r\n        vm.$parent = parent\r\n        vm.$root = parent ? parent.$root : vm\r\n\r\n        vm.$children = []\r\n        vm.$refs = {}\r\n\r\n        vm._watcher = null\r\n        vm._inactive = null\r\n        vm._directInactive = false\r\n        vm._isMounted = false\r\n        vm._isDestroyed = false\r\n        vm._isBeingDestroyed = false\r\n    }\r\n\r\n    function lifecycleMixin(Vue) {\r\n        Vue.prototype._update = function(vnode, hydrating) {\r\n            var vm = this\r\n            if (vm._isMounted) {\r\n                callHook(vm, \"beforeUpdate\")\r\n            }\r\n            var prevEl = vm.$el\r\n            var prevVnode = vm._vnode\r\n            var prevActiveInstance = activeInstance\r\n            activeInstance = vm\r\n            vm._vnode = vnode\r\n            // Vue.prototype.__patch__ is injected in entry points\r\n            // based on the rendering backend used.\r\n            if (!prevVnode) {\r\n                // initial render\r\n                vm.$el = vm.__patch__(\r\n                    vm.$el,\r\n                    vnode,\r\n                    hydrating,\r\n                    false /* removeOnly */,\r\n                    vm.$options._parentElm,\r\n                    vm.$options._refElm\r\n                )\r\n                // no need for the ref nodes after initial patch\r\n                // this prevents keeping a detached DOM tree in memory (#5851)\r\n                vm.$options._parentElm = vm.$options._refElm = null\r\n            } else {\r\n                // updates\r\n                vm.$el = vm.__patch__(prevVnode, vnode)\r\n            }\r\n            activeInstance = prevActiveInstance\r\n            // update __vue__ reference\r\n            if (prevEl) {\r\n                prevEl.__vue__ = null\r\n            }\r\n            if (vm.$el) {\r\n                vm.$el.__vue__ = vm\r\n            }\r\n            // if parent is an HOC, update its $el as well\r\n            if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {\r\n                vm.$parent.$el = vm.$el\r\n            }\r\n            // updated hook is called by the scheduler to ensure that children are\r\n            // updated in a parent's updated hook.\r\n        }\r\n\r\n        Vue.prototype.$forceUpdate = function() {\r\n            var vm = this\r\n            if (vm._watcher) {\r\n                vm._watcher.update()\r\n            }\r\n        }\r\n\r\n        Vue.prototype.$destroy = function() {\r\n            var vm = this\r\n            if (vm._isBeingDestroyed) {\r\n                return\r\n            }\r\n            callHook(vm, \"beforeDestroy\")\r\n            vm._isBeingDestroyed = true\r\n            // remove self from parent\r\n            var parent = vm.$parent\r\n            if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {\r\n                remove(parent.$children, vm)\r\n            }\r\n            // teardown watchers\r\n            if (vm._watcher) {\r\n                vm._watcher.teardown()\r\n            }\r\n            var i = vm._watchers.length\r\n            while (i--) {\r\n                vm._watchers[i].teardown()\r\n            }\r\n            // remove reference from data ob\r\n            // frozen object may not have observer.\r\n            if (vm._data.__ob__) {\r\n                vm._data.__ob__.vmCount--\r\n            }\r\n            // call the last hook...\r\n            vm._isDestroyed = true\r\n            // invoke destroy hooks on current rendered tree\r\n            vm.__patch__(vm._vnode, null)\r\n            // fire destroyed hook\r\n            callHook(vm, \"destroyed\")\r\n            // turn off all instance listeners.\r\n            vm.$off()\r\n            // remove __vue__ reference\r\n            if (vm.$el) {\r\n                vm.$el.__vue__ = null\r\n            }\r\n        }\r\n    }\r\n\r\n    function mountComponent(vm, el, hydrating) {\r\n        vm.$el = el\r\n        if (!vm.$options.render) {\r\n            vm.$options.render = createEmptyVNode\r\n        }\r\n        callHook(vm, \"beforeMount\")\r\n\r\n        var updateComponent\r\n        /* istanbul ignore if */\r\n        if (false) {\r\n            updateComponent = function() {\r\n                var name = vm._name\r\n                var id = vm._uid\r\n                var startTag = \"vue-perf-start:\" + id\r\n                var endTag = \"vue-perf-end:\" + id\r\n\r\n                mark(startTag)\r\n                var vnode = vm._render()\r\n                mark(endTag)\r\n                measure(name + \" render\", startTag, endTag)\r\n\r\n                mark(startTag)\r\n                vm._update(vnode, hydrating)\r\n                mark(endTag)\r\n                measure(name + \" patch\", startTag, endTag)\r\n            }\r\n        } else {\r\n            updateComponent = function() {\r\n                vm._update(vm._render(), hydrating)\r\n            }\r\n        }\r\n\r\n        vm._watcher = new Watcher(vm, updateComponent, noop)\r\n        hydrating = false\r\n\r\n        // manually mounted instance, call mounted on self\r\n        // mounted is called for render-created child components in its inserted hook\r\n        if (vm.$vnode == null) {\r\n            vm._isMounted = true\r\n            callHook(vm, \"mounted\")\r\n        }\r\n        return vm\r\n    }\r\n\r\n    function updateChildComponent(vm, propsData, listeners, parentVnode, renderChildren) {\r\n        var hasChildren = !!(\r\n            renderChildren || // has new static slots\r\n            vm.$options._renderChildren || // has old static slots\r\n            parentVnode.data.scopedSlots || // has new scoped slots\r\n            vm.$scopedSlots !== emptyObject\r\n        ) // has old scoped slots\r\n\r\n        vm.$options._parentVnode = parentVnode\r\n        vm.$vnode = parentVnode // update vm's placeholder node without re-render\r\n\r\n        if (vm._vnode) {\r\n            // update child tree's parent\r\n            vm._vnode.parent = parentVnode\r\n        }\r\n        vm.$options._renderChildren = renderChildren\r\n\r\n        // update $attrs and $listensers hash\r\n        // these are also reactive so they may trigger child update if the child\r\n        // used them during render\r\n        vm.$attrs = parentVnode.data && parentVnode.data.attrs\r\n        vm.$listeners = listeners\r\n\r\n        // update props\r\n        if (propsData && vm.$options.props) {\r\n            observerState.shouldConvert = false\r\n            var props = vm._props\r\n            var propKeys = vm.$options._propKeys || []\r\n            for (var i = 0; i < propKeys.length; i++) {\r\n                var key = propKeys[i]\r\n                props[key] = validateProp(key, vm.$options.props, propsData, vm)\r\n            }\r\n            observerState.shouldConvert = true\r\n            // keep a copy of raw propsData\r\n            vm.$options.propsData = propsData\r\n        }\r\n\r\n        // update listeners\r\n        if (listeners) {\r\n            var oldListeners = vm.$options._parentListeners\r\n            vm.$options._parentListeners = listeners\r\n            updateComponentListeners(vm, listeners, oldListeners)\r\n        }\r\n        // resolve slots + force update if has children\r\n        if (hasChildren) {\r\n            vm.$slots = resolveSlots(renderChildren, parentVnode.context)\r\n            vm.$forceUpdate()\r\n        }\r\n    }\r\n\r\n    function isInInactiveTree(vm) {\r\n        while (vm && (vm = vm.$parent)) {\r\n            if (vm._inactive) {\r\n                return true\r\n            }\r\n        }\r\n        return false\r\n    }\r\n\r\n    function activateChildComponent(vm, direct) {\r\n        if (direct) {\r\n            vm._directInactive = false\r\n            if (isInInactiveTree(vm)) {\r\n                return\r\n            }\r\n        } else if (vm._directInactive) {\r\n            return\r\n        }\r\n        if (vm._inactive || vm._inactive === null) {\r\n            vm._inactive = false\r\n            for (var i = 0; i < vm.$children.length; i++) {\r\n                activateChildComponent(vm.$children[i])\r\n            }\r\n            callHook(vm, \"activated\")\r\n        }\r\n    }\r\n\r\n    function deactivateChildComponent(vm, direct) {\r\n        if (direct) {\r\n            vm._directInactive = true\r\n            if (isInInactiveTree(vm)) {\r\n                return\r\n            }\r\n        }\r\n        if (!vm._inactive) {\r\n            vm._inactive = true\r\n            for (var i = 0; i < vm.$children.length; i++) {\r\n                deactivateChildComponent(vm.$children[i])\r\n            }\r\n            callHook(vm, \"deactivated\")\r\n        }\r\n    }\r\n\r\n    function callHook(vm, hook) {\r\n        var handlers = vm.$options[hook]\r\n        if (handlers) {\r\n            for (var i = 0, j = handlers.length; i < j; i++) {\r\n                try {\r\n                    handlers[i].call(vm)\r\n                } catch (e) {\r\n                    handleError(e, vm, hook + \" hook\")\r\n                }\r\n            }\r\n        }\r\n        if (vm._hasHookEvent) {\r\n            vm.$emit(\"hook:\" + hook)\r\n        }\r\n    }\r\n\r\n    /*  */\r\n\r\n    var MAX_UPDATE_COUNT = 100\r\n\r\n    var queue = []\r\n    var activatedChildren = []\r\n    var has = {}\r\n    var circular = {}\r\n    var waiting = false\r\n    var flushing = false\r\n    var index = 0\r\n\r\n    /**\r\n     * Reset the scheduler's state.\r\n     */\r\n    function resetSchedulerState() {\r\n        index = queue.length = activatedChildren.length = 0\r\n        has = {}\r\n        waiting = flushing = false\r\n    }\r\n\r\n    /**\r\n     * Flush both queues and run the watchers.\r\n     */\r\n    function flushSchedulerQueue() {\r\n        flushing = true\r\n        var watcher, id\r\n\r\n        // Sort queue before flush.\r\n        // This ensures that:\r\n        // 1. Components are updated from parent to child. (because parent is always\r\n        //    created before the child)\r\n        // 2. A component's user watchers are run before its render watcher (because\r\n        //    user watchers are created before the render watcher)\r\n        // 3. If a component is destroyed during a parent component's watcher run,\r\n        //    its watchers can be skipped.\r\n        queue.sort(function(a, b) {\r\n            return a.id - b.id\r\n        })\r\n\r\n        // do not cache length because more watchers might be pushed\r\n        // as we run existing watchers\r\n        for (index = 0; index < queue.length; index++) {\r\n            watcher = queue[index]\r\n            id = watcher.id\r\n            has[id] = null\r\n            watcher.run()\r\n            // in dev build, check and stop circular updates.\r\n            if (false) {\r\n                circular[id] = (circular[id] || 0) + 1\r\n                if (circular[id] > MAX_UPDATE_COUNT) {\r\n                    warn(\r\n                        \"You may have an infinite update loop \" +\r\n                            (watcher.user\r\n                                ? 'in watcher with expression \"' + watcher.expression + '\"'\r\n                                : \"in a component render function.\"),\r\n                        watcher.vm\r\n                    )\r\n                    break\r\n                }\r\n            }\r\n        }\r\n\r\n        // keep copies of post queues before resetting state\r\n        var activatedQueue = activatedChildren.slice()\r\n        var updatedQueue = queue.slice()\r\n\r\n        resetSchedulerState()\r\n\r\n        // call component updated and activated hooks\r\n        callActivatedHooks(activatedQueue)\r\n        callUpdatedHooks(updatedQueue)\r\n\r\n        // devtool hook\r\n        /* istanbul ignore if */\r\n        if (devtools && config.devtools) {\r\n            devtools.emit(\"flush\")\r\n        }\r\n    }\r\n\r\n    function callUpdatedHooks(queue) {\r\n        var i = queue.length\r\n        while (i--) {\r\n            var watcher = queue[i]\r\n            var vm = watcher.vm\r\n            if (vm._watcher === watcher && vm._isMounted) {\r\n                callHook(vm, \"updated\")\r\n            }\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Queue a kept-alive component that was activated during patch.\r\n     * The queue will be processed after the entire tree has been patched.\r\n     */\r\n    function queueActivatedComponent(vm) {\r\n        // setting _inactive to false here so that a render function can\r\n        // rely on checking whether it's in an inactive tree (e.g. router-view)\r\n        vm._inactive = false\r\n        activatedChildren.push(vm)\r\n    }\r\n\r\n    function callActivatedHooks(queue) {\r\n        for (var i = 0; i < queue.length; i++) {\r\n            queue[i]._inactive = true\r\n            activateChildComponent(queue[i], true /* true */)\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Push a watcher into the watcher queue.\r\n     * Jobs with duplicate IDs will be skipped unless it's\r\n     * pushed when the queue is being flushed.\r\n     */\r\n    function queueWatcher(watcher) {\r\n        var id = watcher.id\r\n        if (has[id] == null) {\r\n            has[id] = true\r\n            if (!flushing) {\r\n                queue.push(watcher)\r\n            } else {\r\n                // if already flushing, splice the watcher based on its id\r\n                // if already past its id, it will be run next immediately.\r\n                var i = queue.length - 1\r\n                while (i > index && queue[i].id > watcher.id) {\r\n                    i--\r\n                }\r\n                queue.splice(i + 1, 0, watcher)\r\n            }\r\n            // queue the flush\r\n            if (!waiting) {\r\n                waiting = true\r\n                nextTick(flushSchedulerQueue)\r\n            }\r\n        }\r\n    }\r\n\r\n    /*  */\r\n\r\n    var uid$2 = 0\r\n\r\n    /**\r\n     * A watcher parses an expression, collects dependencies,\r\n     * and fires callback when the expression value changes.\r\n     * This is used for both the $watch() api and directives.\r\n     */\r\n    var Watcher = function Watcher(vm, expOrFn, cb, options) {\r\n        this.vm = vm\r\n        vm._watchers.push(this)\r\n        // options\r\n        if (options) {\r\n            this.deep = !!options.deep\r\n            this.user = !!options.user\r\n            this.lazy = !!options.lazy\r\n            this.sync = !!options.sync\r\n        } else {\r\n            this.deep = this.user = this.lazy = this.sync = false\r\n        }\r\n        this.cb = cb\r\n        this.id = ++uid$2 // uid for batching\r\n        this.active = true\r\n        this.dirty = this.lazy // for lazy watchers\r\n        this.deps = []\r\n        this.newDeps = []\r\n        this.depIds = new _Set()\r\n        this.newDepIds = new _Set()\r\n        this.expression = \"\"\r\n        // parse expression for getter\r\n        if (typeof expOrFn === \"function\") {\r\n            this.getter = expOrFn\r\n        } else {\r\n            this.getter = parsePath(expOrFn)\r\n            if (!this.getter) {\r\n                this.getter = function() {}\r\n                \"production\" !== \"production\" &&\r\n                    warn(\r\n                        'Failed watching path: \"' +\r\n                            expOrFn +\r\n                            '\" ' +\r\n                            \"Watcher only accepts simple dot-delimited paths. \" +\r\n                            \"For full control, use a function instead.\",\r\n                        vm\r\n                    )\r\n            }\r\n        }\r\n        this.value = this.lazy ? undefined : this.get()\r\n    }\r\n\r\n    /**\r\n     * Evaluate the getter, and re-collect dependencies.\r\n     */\r\n    Watcher.prototype.get = function get() {\r\n        pushTarget(this)\r\n        var value\r\n        var vm = this.vm\r\n        try {\r\n            value = this.getter.call(vm, vm)\r\n        } catch (e) {\r\n            if (this.user) {\r\n                handleError(e, vm, 'getter for watcher \"' + this.expression + '\"')\r\n            } else {\r\n                throw e\r\n            }\r\n        } finally {\r\n            // \"touch\" every property so they are all tracked as\r\n            // dependencies for deep watching\r\n            if (this.deep) {\r\n                traverse(value)\r\n            }\r\n            popTarget()\r\n            this.cleanupDeps()\r\n        }\r\n        return value\r\n    }\r\n\r\n    /**\r\n     * Add a dependency to this directive.\r\n     */\r\n    Watcher.prototype.addDep = function addDep(dep) {\r\n        var id = dep.id\r\n        if (!this.newDepIds.has(id)) {\r\n            this.newDepIds.add(id)\r\n            this.newDeps.push(dep)\r\n            if (!this.depIds.has(id)) {\r\n                dep.addSub(this)\r\n            }\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Clean up for dependency collection.\r\n     */\r\n    Watcher.prototype.cleanupDeps = function cleanupDeps() {\r\n        var this$1 = this\r\n\r\n        var i = this.deps.length\r\n        while (i--) {\r\n            var dep = this$1.deps[i]\r\n            if (!this$1.newDepIds.has(dep.id)) {\r\n                dep.removeSub(this$1)\r\n            }\r\n        }\r\n        var tmp = this.depIds\r\n        this.depIds = this.newDepIds\r\n        this.newDepIds = tmp\r\n        this.newDepIds.clear()\r\n        tmp = this.deps\r\n        this.deps = this.newDeps\r\n        this.newDeps = tmp\r\n        this.newDeps.length = 0\r\n    }\r\n\r\n    /**\r\n     * Subscriber interface.\r\n     * Will be called when a dependency changes.\r\n     */\r\n    Watcher.prototype.update = function update() {\r\n        /* istanbul ignore else */\r\n        if (this.lazy) {\r\n            this.dirty = true\r\n        } else if (this.sync) {\r\n            this.run()\r\n        } else {\r\n            queueWatcher(this)\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Scheduler job interface.\r\n     * Will be called by the scheduler.\r\n     */\r\n    Watcher.prototype.run = function run() {\r\n        if (this.active) {\r\n            var value = this.get()\r\n            if (\r\n                value !== this.value ||\r\n                // Deep watchers and watchers on Object/Arrays should fire even\r\n                // when the value is the same, because the value may\r\n                // have mutated.\r\n                isObject(value) ||\r\n                this.deep\r\n            ) {\r\n                // set new value\r\n                var oldValue = this.value\r\n                this.value = value\r\n                if (this.user) {\r\n                    try {\r\n                        this.cb.call(this.vm, value, oldValue)\r\n                    } catch (e) {\r\n                        handleError(e, this.vm, 'callback for watcher \"' + this.expression + '\"')\r\n                    }\r\n                } else {\r\n                    this.cb.call(this.vm, value, oldValue)\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Evaluate the value of the watcher.\r\n     * This only gets called for lazy watchers.\r\n     */\r\n    Watcher.prototype.evaluate = function evaluate() {\r\n        this.value = this.get()\r\n        this.dirty = false\r\n    }\r\n\r\n    /**\r\n     * Depend on all deps collected by this watcher.\r\n     */\r\n    Watcher.prototype.depend = function depend() {\r\n        var this$1 = this\r\n\r\n        var i = this.deps.length\r\n        while (i--) {\r\n            this$1.deps[i].depend()\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Remove self from all dependencies' subscriber list.\r\n     */\r\n    Watcher.prototype.teardown = function teardown() {\r\n        var this$1 = this\r\n\r\n        if (this.active) {\r\n            // remove self from vm's watcher list\r\n            // this is a somewhat expensive operation so we skip it\r\n            // if the vm is being destroyed.\r\n            if (!this.vm._isBeingDestroyed) {\r\n                remove(this.vm._watchers, this)\r\n            }\r\n            var i = this.deps.length\r\n            while (i--) {\r\n                this$1.deps[i].removeSub(this$1)\r\n            }\r\n            this.active = false\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Recursively traverse an object to evoke all converted\r\n     * getters, so that every nested property inside the object\r\n     * is collected as a \"deep\" dependency.\r\n     */\r\n    var seenObjects = new _Set()\r\n\r\n    function traverse(val) {\r\n        seenObjects.clear()\r\n        _traverse(val, seenObjects)\r\n    }\r\n\r\n    function _traverse(val, seen) {\r\n        var i, keys\r\n        var isA = Array.isArray(val)\r\n        if ((!isA && !isObject(val)) || !Object.isExtensible(val)) {\r\n            return\r\n        }\r\n        if (val.__ob__) {\r\n            var depId = val.__ob__.dep.id\r\n            if (seen.has(depId)) {\r\n                return\r\n            }\r\n            seen.add(depId)\r\n        }\r\n        if (isA) {\r\n            i = val.length\r\n            while (i--) {\r\n                _traverse(val[i], seen)\r\n            }\r\n        } else {\r\n            keys = Object.keys(val)\r\n            i = keys.length\r\n            while (i--) {\r\n                _traverse(val[keys[i]], seen)\r\n            }\r\n        }\r\n    }\r\n\r\n    /*  */\r\n\r\n    var sharedPropertyDefinition = {\r\n        enumerable: true,\r\n        configurable: true,\r\n        get: noop,\r\n        set: noop\r\n    }\r\n\r\n    function proxy(target, sourceKey, key) {\r\n        sharedPropertyDefinition.get = function proxyGetter() {\r\n            return this[sourceKey][key]\r\n        }\r\n        sharedPropertyDefinition.set = function proxySetter(val) {\r\n            this[sourceKey][key] = val\r\n        }\r\n        Object.defineProperty(target, key, sharedPropertyDefinition)\r\n    }\r\n\r\n    function initState(vm) {\r\n        vm._watchers = []\r\n        var opts = vm.$options\r\n        if (opts.props) {\r\n            initProps(vm, opts.props)\r\n        }\r\n        if (opts.methods) {\r\n            initMethods(vm, opts.methods)\r\n        }\r\n        if (opts.data) {\r\n            initData(vm)\r\n        } else {\r\n            observe((vm._data = {}), true /* asRootData */)\r\n        }\r\n        if (opts.computed) {\r\n            initComputed(vm, opts.computed)\r\n        }\r\n        if (opts.watch && opts.watch !== nativeWatch) {\r\n            initWatch(vm, opts.watch)\r\n        }\r\n    }\r\n\r\n    function checkOptionType(vm, name) {\r\n        var option = vm.$options[name]\r\n        if (!isPlainObject(option)) {\r\n            warn('component option \"' + name + '\" should be an object.', vm)\r\n        }\r\n    }\r\n\r\n    function initProps(vm, propsOptions) {\r\n        var propsData = vm.$options.propsData || {}\r\n        var props = (vm._props = {})\r\n        // cache prop keys so that future props updates can iterate using Array\r\n        // instead of dynamic object key enumeration.\r\n        var keys = (vm.$options._propKeys = [])\r\n        var isRoot = !vm.$parent\r\n        // root instance props should be converted\r\n        observerState.shouldConvert = isRoot\r\n        var loop = function(key) {\r\n            keys.push(key)\r\n            var value = validateProp(key, propsOptions, propsData, vm)\r\n            /* istanbul ignore else */\r\n            {\r\n                defineReactive$$1(props, key, value)\r\n            }\r\n            // static props are already proxied on the component's prototype\r\n            // during Vue.extend(). We only need to proxy props defined at\r\n            // instantiation here.\r\n            if (!(key in vm)) {\r\n                proxy(vm, \"_props\", key)\r\n            }\r\n        }\r\n\r\n        for (var key in propsOptions) loop(key)\r\n        observerState.shouldConvert = true\r\n    }\r\n\r\n    function initData(vm) {\r\n        var data = vm.$options.data\r\n        data = vm._data = typeof data === \"function\" ? getData(data, vm) : data || {}\r\n        if (!isPlainObject(data)) {\r\n            data = {}\r\n            \"production\" !== \"production\" &&\r\n                warn(\r\n                    \"data functions should return an object:\\n\" +\r\n                        \"https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function\",\r\n                    vm\r\n                )\r\n        }\r\n        // proxy data on instance\r\n        var keys = Object.keys(data)\r\n        var props = vm.$options.props\r\n        var methods = vm.$options.methods\r\n        var i = keys.length\r\n        while (i--) {\r\n            var key = keys[i]\r\n            if (props && hasOwn(props, key)) {\r\n                \"production\" !== \"production\" &&\r\n                    warn(\r\n                        'The data property \"' +\r\n                            key +\r\n                            '\" is already declared as a prop. ' +\r\n                            \"Use prop default value instead.\",\r\n                        vm\r\n                    )\r\n            } else if (!isReserved(key)) {\r\n                proxy(vm, \"_data\", key)\r\n            }\r\n        }\r\n        // observe data\r\n        observe(data, true /* asRootData */)\r\n    }\r\n\r\n    function getData(data, vm) {\r\n        try {\r\n            return data.call(vm)\r\n        } catch (e) {\r\n            handleError(e, vm, \"data()\")\r\n            return {}\r\n        }\r\n    }\r\n\r\n    var computedWatcherOptions = {\r\n        lazy: true\r\n    }\r\n\r\n    function initComputed(vm, computed) {\r\n        \"production\" !== \"production\" && checkOptionType(vm, \"computed\")\r\n        var watchers = (vm._computedWatchers = Object.create(null))\r\n\r\n        for (var key in computed) {\r\n            var userDef = computed[key]\r\n            var getter = typeof userDef === \"function\" ? userDef : userDef.get\r\n            watchers[key] = new Watcher(vm, getter, noop, computedWatcherOptions)\r\n\r\n            // component-defined computed properties are already defined on the\r\n            // component prototype. We only need to define computed properties defined\r\n            // at instantiation here.\r\n            if (!(key in vm)) {\r\n                defineComputed(vm, key, userDef)\r\n            } else {\r\n            }\r\n        }\r\n    }\r\n\r\n    function defineComputed(target, key, userDef) {\r\n        if (typeof userDef === \"function\") {\r\n            sharedPropertyDefinition.get = createComputedGetter(key)\r\n            sharedPropertyDefinition.set = noop\r\n        } else {\r\n            sharedPropertyDefinition.get = userDef.get\r\n                ? userDef.cache !== false\r\n                    ? createComputedGetter(key)\r\n                    : userDef.get\r\n                : noop\r\n            sharedPropertyDefinition.set = userDef.set ? userDef.set : noop\r\n        }\r\n        Object.defineProperty(target, key, sharedPropertyDefinition)\r\n    }\r\n\r\n    function createComputedGetter(key) {\r\n        return function computedGetter() {\r\n            var watcher = this._computedWatchers && this._computedWatchers[key]\r\n            if (watcher) {\r\n                if (watcher.dirty) {\r\n                    watcher.evaluate()\r\n                }\r\n                if (Dep.target) {\r\n                    watcher.depend()\r\n                }\r\n                return watcher.value\r\n            }\r\n        }\r\n    }\r\n\r\n    function initMethods(vm, methods) {\r\n        \"production\" !== \"production\" && checkOptionType(vm, \"methods\")\r\n        var props = vm.$options.props\r\n        for (var key in methods) {\r\n            vm[key] = methods[key] == null ? noop : bind(methods[key], vm)\r\n        }\r\n    }\r\n\r\n    function initWatch(vm, watch) {\r\n        \"production\" !== \"production\" && checkOptionType(vm, \"watch\")\r\n        for (var key in watch) {\r\n            var handler = watch[key]\r\n            if (Array.isArray(handler)) {\r\n                for (var i = 0; i < handler.length; i++) {\r\n                    createWatcher(vm, key, handler[i])\r\n                }\r\n            } else {\r\n                createWatcher(vm, key, handler)\r\n            }\r\n        }\r\n    }\r\n\r\n    function createWatcher(vm, keyOrFn, handler, options) {\r\n        if (isPlainObject(handler)) {\r\n            options = handler\r\n            handler = handler.handler\r\n        }\r\n        if (typeof handler === \"string\") {\r\n            handler = vm[handler]\r\n        }\r\n        return vm.$watch(keyOrFn, handler, options)\r\n    }\r\n\r\n    function stateMixin(Vue) {\r\n        // flow somehow has problems with directly declared definition object\r\n        // when using Object.defineProperty, so we have to procedurally build up\r\n        // the object here.\r\n        var dataDef = {}\r\n        dataDef.get = function() {\r\n            return this._data\r\n        }\r\n        var propsDef = {}\r\n        propsDef.get = function() {\r\n            return this._props\r\n        }\r\n        Object.defineProperty(Vue.prototype, \"$data\", dataDef)\r\n        Object.defineProperty(Vue.prototype, \"$props\", propsDef)\r\n\r\n        Vue.prototype.$set = set\r\n        Vue.prototype.$delete = del\r\n\r\n        Vue.prototype.$watch = function(expOrFn, cb, options) {\r\n            var vm = this\r\n            if (isPlainObject(cb)) {\r\n                return createWatcher(vm, expOrFn, cb, options)\r\n            }\r\n            options = options || {}\r\n            options.user = true\r\n            var watcher = new Watcher(vm, expOrFn, cb, options)\r\n            if (options.immediate) {\r\n                cb.call(vm, watcher.value)\r\n            }\r\n            return function unwatchFn() {\r\n                watcher.teardown()\r\n            }\r\n        }\r\n    }\r\n\r\n    /*  */\r\n\r\n    function initProvide(vm) {\r\n        var provide = vm.$options.provide\r\n        if (provide) {\r\n            vm._provided = typeof provide === \"function\" ? provide.call(vm) : provide\r\n        }\r\n    }\r\n\r\n    function initInjections(vm) {\r\n        var result = resolveInject(vm.$options.inject, vm)\r\n        if (result) {\r\n            observerState.shouldConvert = false\r\n            Object.keys(result).forEach(function(key) {\r\n                /* istanbul ignore else */\r\n                {\r\n                    defineReactive$$1(vm, key, result[key])\r\n                }\r\n            })\r\n            observerState.shouldConvert = true\r\n        }\r\n    }\r\n\r\n    function resolveInject(inject, vm) {\r\n        if (inject) {\r\n            // inject is :any because flow is not smart enough to figure out cached\r\n            var result = Object.create(null)\r\n            var keys = hasSymbol ? Reflect.ownKeys(inject) : Object.keys(inject)\r\n\r\n            for (var i = 0; i < keys.length; i++) {\r\n                var key = keys[i]\r\n                var provideKey = inject[key]\r\n                var source = vm\r\n                while (source) {\r\n                    if (source._provided && provideKey in source._provided) {\r\n                        result[key] = source._provided[provideKey]\r\n                        break\r\n                    }\r\n                    source = source.$parent\r\n                }\r\n                if (false) {\r\n                    warn('Injection \"' + key + '\" not found', vm)\r\n                }\r\n            }\r\n            return result\r\n        }\r\n    }\r\n\r\n    /*  */\r\n\r\n    function createFunctionalComponent(Ctor, propsData, data, context, children) {\r\n        var props = {}\r\n        var propOptions = Ctor.options.props\r\n        if (isDef(propOptions)) {\r\n            for (var key in propOptions) {\r\n                props[key] = validateProp(key, propOptions, propsData || {})\r\n            }\r\n        } else {\r\n            if (isDef(data.attrs)) {\r\n                mergeProps(props, data.attrs)\r\n            }\r\n            if (isDef(data.props)) {\r\n                mergeProps(props, data.props)\r\n            }\r\n        }\r\n        // ensure the createElement function in functional components\r\n        // gets a unique context - this is necessary for correct named slot check\r\n        var _context = Object.create(context)\r\n        var h = function(a, b, c, d) {\r\n            return createElement(_context, a, b, c, d, true)\r\n        }\r\n        var vnode = Ctor.options.render.call(null, h, {\r\n            data: data,\r\n            props: props,\r\n            children: children,\r\n            parent: context,\r\n            listeners: data.on || {},\r\n            injections: resolveInject(Ctor.options.inject, context),\r\n            slots: function() {\r\n                return resolveSlots(children, context)\r\n            }\r\n        })\r\n        if (vnode instanceof VNode) {\r\n            vnode.functionalContext = context\r\n            vnode.functionalOptions = Ctor.options\r\n            if (data.slot) {\r\n                ;(vnode.data || (vnode.data = {})).slot = data.slot\r\n            }\r\n        }\r\n        return vnode\r\n    }\r\n\r\n    function mergeProps(to, from) {\r\n        for (var key in from) {\r\n            to[camelize(key)] = from[key]\r\n        }\r\n    }\r\n\r\n    /*  */\r\n\r\n    // hooks to be invoked on component VNodes during patch\r\n    var componentVNodeHooks = {\r\n        init: function init(vnode, hydrating, parentElm, refElm) {\r\n            if (!vnode.componentInstance || vnode.componentInstance._isDestroyed) {\r\n                var child = (vnode.componentInstance = createComponentInstanceForVnode(\r\n                    vnode,\r\n                    activeInstance,\r\n                    parentElm,\r\n                    refElm\r\n                ))\r\n                child.$mount(hydrating ? vnode.elm : undefined, hydrating)\r\n            } else if (vnode.data.keepAlive) {\r\n                // kept-alive components, treat as a patch\r\n                var mountedNode = vnode // work around flow\r\n                componentVNodeHooks.prepatch(mountedNode, mountedNode)\r\n            }\r\n        },\r\n\r\n        prepatch: function prepatch(oldVnode, vnode) {\r\n            var options = vnode.componentOptions\r\n            var child = (vnode.componentInstance = oldVnode.componentInstance)\r\n            updateChildComponent(\r\n                child,\r\n                options.propsData, // updated props\r\n                options.listeners, // updated listeners\r\n                vnode, // new parent vnode\r\n                options.children // new children\r\n            )\r\n        },\r\n\r\n        insert: function insert(vnode) {\r\n            var context = vnode.context\r\n            var componentInstance = vnode.componentInstance\r\n\r\n            if (!componentInstance._isMounted) {\r\n                componentInstance._isMounted = true\r\n                callHook(componentInstance, \"mounted\")\r\n            }\r\n            if (vnode.data.keepAlive) {\r\n                if (context._isMounted) {\r\n                    // vue-router#1212\r\n                    // During updates, a kept-alive component's child components may\r\n                    // change, so directly walking the tree here may call activated hooks\r\n                    // on incorrect children. Instead we push them into a queue which will\r\n                    // be processed after the whole patch process ended.\r\n                    queueActivatedComponent(componentInstance)\r\n                } else {\r\n                    activateChildComponent(componentInstance, true /* direct */)\r\n                }\r\n            }\r\n        },\r\n\r\n        destroy: function destroy(vnode) {\r\n            var componentInstance = vnode.componentInstance\r\n            if (!componentInstance._isDestroyed) {\r\n                if (!vnode.data.keepAlive) {\r\n                    componentInstance.$destroy()\r\n                } else {\r\n                    deactivateChildComponent(componentInstance, true /* direct */)\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    var hooksToMerge = Object.keys(componentVNodeHooks)\r\n\r\n    function createComponent(Ctor, data, context, children, tag) {\r\n        if (isUndef(Ctor)) {\r\n            return\r\n        }\r\n\r\n        var baseCtor = context.$options._base\r\n\r\n        // plain options object: turn it into a constructor\r\n        if (isObject(Ctor)) {\r\n            Ctor = baseCtor.extend(Ctor)\r\n        }\r\n\r\n        // if at this stage it's not a constructor or an async component factory,\r\n        // reject.\r\n        if (typeof Ctor !== \"function\") {\r\n            return\r\n        }\r\n\r\n        // async component\r\n        var asyncFactory\r\n        if (isUndef(Ctor.cid)) {\r\n            asyncFactory = Ctor\r\n            Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context)\r\n            if (Ctor === undefined) {\r\n                // return a placeholder node for async component, which is rendered\r\n                // as a comment node but preserves all the raw information for the node.\r\n                // the information will be used for async server-rendering and hydration.\r\n                return createAsyncPlaceholder(asyncFactory, data, context, children, tag)\r\n            }\r\n        }\r\n\r\n        data = data || {}\r\n\r\n        // resolve constructor options in case global mixins are applied after\r\n        // component constructor creation\r\n        resolveConstructorOptions(Ctor)\r\n\r\n        // transform component v-model data into props & events\r\n        if (isDef(data.model)) {\r\n            transformModel(Ctor.options, data)\r\n        }\r\n\r\n        // extract props\r\n        var propsData = extractPropsFromVNodeData(data, Ctor, tag)\r\n\r\n        // functional component\r\n        if (isTrue(Ctor.options.functional)) {\r\n            return createFunctionalComponent(Ctor, propsData, data, context, children)\r\n        }\r\n\r\n        // keep listeners\r\n        var listeners = data.on\r\n\r\n        if (isTrue(Ctor.options.abstract)) {\r\n            // abstract components do not keep anything\r\n            // other than props & listeners & slot\r\n\r\n            // work around flow\r\n            var slot = data.slot\r\n            data = {}\r\n            if (slot) {\r\n                data.slot = slot\r\n            }\r\n        }\r\n\r\n        // merge component management hooks onto the placeholder node\r\n        mergeHooks(data)\r\n\r\n        // return a placeholder vnode\r\n        var name = Ctor.options.name || tag\r\n        var vnode = new VNode(\r\n            \"vue-component-\" + Ctor.cid + (name ? \"-\" + name : \"\"),\r\n            data,\r\n            undefined,\r\n            undefined,\r\n            undefined,\r\n            context,\r\n            {\r\n                Ctor: Ctor,\r\n                propsData: propsData,\r\n                listeners: listeners,\r\n                tag: tag,\r\n                children: children\r\n            },\r\n            asyncFactory\r\n        )\r\n        return vnode\r\n    }\r\n\r\n    function createComponentInstanceForVnode(\r\n        vnode, // we know it's MountedComponentVNode but flow doesn't\r\n        parent, // activeInstance in lifecycle state\r\n        parentElm,\r\n        refElm\r\n    ) {\r\n        var vnodeComponentOptions = vnode.componentOptions\r\n        var options = {\r\n            _isComponent: true,\r\n            parent: parent,\r\n            propsData: vnodeComponentOptions.propsData,\r\n            _componentTag: vnodeComponentOptions.tag,\r\n            _parentVnode: vnode,\r\n            _parentListeners: vnodeComponentOptions.listeners,\r\n            _renderChildren: vnodeComponentOptions.children,\r\n            _parentElm: parentElm || null,\r\n            _refElm: refElm || null\r\n        }\r\n        // check inline-template render functions\r\n        var inlineTemplate = vnode.data.inlineTemplate\r\n        if (isDef(inlineTemplate)) {\r\n            options.render = inlineTemplate.render\r\n            options.staticRenderFns = inlineTemplate.staticRenderFns\r\n        }\r\n        return new vnodeComponentOptions.Ctor(options)\r\n    }\r\n\r\n    function mergeHooks(data) {\r\n        if (!data.hook) {\r\n            data.hook = {}\r\n        }\r\n        for (var i = 0; i < hooksToMerge.length; i++) {\r\n            var key = hooksToMerge[i]\r\n            var fromParent = data.hook[key]\r\n            var ours = componentVNodeHooks[key]\r\n            data.hook[key] = fromParent ? mergeHook$1(ours, fromParent) : ours\r\n        }\r\n    }\r\n\r\n    function mergeHook$1(one, two) {\r\n        return function(a, b, c, d) {\r\n            one(a, b, c, d)\r\n            two(a, b, c, d)\r\n        }\r\n    }\r\n\r\n    // transform component v-model info (value and callback) into\r\n    // prop and event handler respectively.\r\n    function transformModel(options, data) {\r\n        var prop = (options.model && options.model.prop) || \"value\"\r\n        var event = (options.model && options.model.event) || \"input\"\r\n        ;(data.props || (data.props = {}))[prop] = data.model.value\r\n        var on = data.on || (data.on = {})\r\n        if (isDef(on[event])) {\r\n            on[event] = [data.model.callback].concat(on[event])\r\n        } else {\r\n            on[event] = data.model.callback\r\n        }\r\n    }\r\n\r\n    /*  */\r\n\r\n    var SIMPLE_NORMALIZE = 1\r\n    var ALWAYS_NORMALIZE = 2\r\n\r\n    // wrapper function for providing a more flexible interface\r\n    // without getting yelled at by flow\r\n    function createElement(context, tag, data, children, normalizationType, alwaysNormalize) {\r\n        if (Array.isArray(data) || isPrimitive(data)) {\r\n            normalizationType = children\r\n            children = data\r\n            data = undefined\r\n        }\r\n        if (isTrue(alwaysNormalize)) {\r\n            normalizationType = ALWAYS_NORMALIZE\r\n        }\r\n        return _createElement(context, tag, data, children, normalizationType)\r\n    }\r\n\r\n    function _createElement(context, tag, data, children, normalizationType) {\r\n        if (isDef(data) && isDef(data.__ob__)) {\r\n            \"production\" !== \"production\" &&\r\n                warn(\r\n                    \"Avoid using observed data object as vnode data: \" +\r\n                        JSON.stringify(data) +\r\n                        \"\\n\" +\r\n                        \"Always create fresh vnode data objects in each render!\",\r\n                    context\r\n                )\r\n            return createEmptyVNode()\r\n        }\r\n        // object syntax in v-bind\r\n        if (isDef(data) && isDef(data.is)) {\r\n            tag = data.is\r\n        }\r\n        if (!tag) {\r\n            // in case of component :is set to falsy value\r\n            return createEmptyVNode()\r\n        }\r\n        // warn against non-primitive key\r\n        if (\r\n            false\r\n        ) {\r\n            warn(\r\n                \"Avoid using non-primitive value as key, \" + \"use string/number value instead.\",\r\n                context\r\n            )\r\n        }\r\n        // support single function children as default scoped slot\r\n        if (Array.isArray(children) && typeof children[0] === \"function\") {\r\n            data = data || {}\r\n            data.scopedSlots = {\r\n                default: children[0]\r\n            }\r\n            children.length = 0\r\n        }\r\n        if (normalizationType === ALWAYS_NORMALIZE) {\r\n            children = normalizeChildren(children)\r\n        } else if (normalizationType === SIMPLE_NORMALIZE) {\r\n            children = simpleNormalizeChildren(children)\r\n        }\r\n        var vnode, ns\r\n        if (typeof tag === \"string\") {\r\n            var Ctor\r\n            ns = config.getTagNamespace(tag)\r\n            if (config.isReservedTag(tag)) {\r\n                // platform built-in elements\r\n                vnode = new VNode(\r\n                    config.parsePlatformTagName(tag),\r\n                    data,\r\n                    children,\r\n                    undefined,\r\n                    undefined,\r\n                    context\r\n                )\r\n            } else if (isDef((Ctor = resolveAsset(context.$options, \"components\", tag)))) {\r\n                // component\r\n                vnode = createComponent(Ctor, data, context, children, tag)\r\n            } else {\r\n                // unknown or unlisted namespaced elements\r\n                // check at runtime because it may get assigned a namespace when its\r\n                // parent normalizes children\r\n                vnode = new VNode(tag, data, children, undefined, undefined, context)\r\n            }\r\n        } else {\r\n            // direct component options / constructor\r\n            vnode = createComponent(tag, data, context, children)\r\n        }\r\n        if (isDef(vnode)) {\r\n            if (ns) {\r\n                applyNS(vnode, ns)\r\n            }\r\n            return vnode\r\n        } else {\r\n            return createEmptyVNode()\r\n        }\r\n    }\r\n\r\n    function applyNS(vnode, ns) {\r\n        vnode.ns = ns\r\n        if (vnode.tag === \"foreignObject\") {\r\n            // use default namespace inside foreignObject\r\n            return\r\n        }\r\n        if (isDef(vnode.children)) {\r\n            for (var i = 0, l = vnode.children.length; i < l; i++) {\r\n                var child = vnode.children[i]\r\n                if (isDef(child.tag) && isUndef(child.ns)) {\r\n                    applyNS(child, ns)\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    /*  */\r\n\r\n    /**\r\n     * Runtime helper for rendering v-for lists.\r\n     */\r\n    function renderList(val, render) {\r\n        var ret, i, l, keys, key\r\n        if (Array.isArray(val) || typeof val === \"string\") {\r\n            ret = new Array(val.length)\r\n            for (i = 0, l = val.length; i < l; i++) {\r\n                ret[i] = render(val[i], i)\r\n            }\r\n        } else if (typeof val === \"number\") {\r\n            ret = new Array(val)\r\n            for (i = 0; i < val; i++) {\r\n                ret[i] = render(i + 1, i)\r\n            }\r\n        } else if (isObject(val)) {\r\n            keys = Object.keys(val)\r\n            ret = new Array(keys.length)\r\n            for (i = 0, l = keys.length; i < l; i++) {\r\n                key = keys[i]\r\n                ret[i] = render(val[key], key, i)\r\n            }\r\n        }\r\n        if (isDef(ret)) {\r\n            ret._isVList = true\r\n        }\r\n        return ret\r\n    }\r\n\r\n    /*  */\r\n\r\n    /**\r\n     * Runtime helper for rendering <slot>\r\n     */\r\n    function renderSlot(name, fallback, props, bindObject) {\r\n        var scopedSlotFn = this.$scopedSlots[name]\r\n        if (scopedSlotFn) {\r\n            // scoped slot\r\n            props = props || {}\r\n            if (bindObject) {\r\n                props = extend(extend({}, bindObject), props)\r\n            }\r\n            return scopedSlotFn(props) || fallback\r\n        } else {\r\n            var slotNodes = this.$slots[name]\r\n            // warn duplicate slot usage\r\n            if (slotNodes && \"production\" !== \"production\") {\r\n                slotNodes._rendered &&\r\n                    warn(\r\n                        'Duplicate presence of slot \"' +\r\n                            name +\r\n                            '\" found in the same render tree ' +\r\n                            \"- this will likely cause render errors.\",\r\n                        this\r\n                    )\r\n                slotNodes._rendered = true\r\n            }\r\n            return slotNodes || fallback\r\n        }\r\n    }\r\n\r\n    /*  */\r\n\r\n    /**\r\n     * Runtime helper for resolving filters\r\n     */\r\n    function resolveFilter(id) {\r\n        return resolveAsset(this.$options, \"filters\", id, true) || identity\r\n    }\r\n\r\n    /*  */\r\n\r\n    /**\r\n     * Runtime helper for checking keyCodes from config.\r\n     */\r\n    function checkKeyCodes(eventKeyCode, key, builtInAlias) {\r\n        var keyCodes = config.keyCodes[key] || builtInAlias\r\n        if (Array.isArray(keyCodes)) {\r\n            return keyCodes.indexOf(eventKeyCode) === -1\r\n        } else {\r\n            return keyCodes !== eventKeyCode\r\n        }\r\n    }\r\n\r\n    /*  */\r\n\r\n    /**\r\n     * Runtime helper for merging v-bind=\"object\" into a VNode's data.\r\n     */\r\n    function bindObjectProps(data, tag, value, asProp, isSync) {\r\n        if (value) {\r\n            if (!isObject(value)) {\r\n                \"production\" !== \"production\" &&\r\n                    warn(\"v-bind without argument expects an Object or Array value\", this)\r\n            } else {\r\n                if (Array.isArray(value)) {\r\n                    value = toObject(value)\r\n                }\r\n                var hash\r\n                var loop = function(key) {\r\n                    if (key === \"class\" || key === \"style\" || isReservedAttribute(key)) {\r\n                        hash = data\r\n                    } else {\r\n                        var type = data.attrs && data.attrs.type\r\n                        hash =\r\n                            asProp || config.mustUseProp(tag, type, key)\r\n                                ? data.domProps || (data.domProps = {})\r\n                                : data.attrs || (data.attrs = {})\r\n                    }\r\n                    if (!(key in hash)) {\r\n                        hash[key] = value[key]\r\n\r\n                        if (isSync) {\r\n                            var on = data.on || (data.on = {})\r\n                            on[\"update:\" + key] = function($event) {\r\n                                value[key] = $event\r\n                            }\r\n                        }\r\n                    }\r\n                }\r\n\r\n                for (var key in value) loop(key)\r\n            }\r\n        }\r\n        return data\r\n    }\r\n\r\n    /*  */\r\n\r\n    /**\r\n     * Runtime helper for rendering static trees.\r\n     */\r\n    function renderStatic(index, isInFor) {\r\n        var tree = this._staticTrees[index]\r\n        // if has already-rendered static tree and not inside v-for,\r\n        // we can reuse the same tree by doing a shallow clone.\r\n        if (tree && !isInFor) {\r\n            return Array.isArray(tree) ? cloneVNodes(tree) : cloneVNode(tree)\r\n        }\r\n        // otherwise, render a fresh tree.\r\n        tree = this._staticTrees[index] = this.$options.staticRenderFns[index].call(\r\n            this._renderProxy\r\n        )\r\n        markStatic(tree, \"__static__\" + index, false)\r\n        return tree\r\n    }\r\n\r\n    /**\r\n     * Runtime helper for v-once.\r\n     * Effectively it means marking the node as static with a unique key.\r\n     */\r\n    function markOnce(tree, index, key) {\r\n        markStatic(tree, \"__once__\" + index + (key ? \"_\" + key : \"\"), true)\r\n        return tree\r\n    }\r\n\r\n    function markStatic(tree, key, isOnce) {\r\n        if (Array.isArray(tree)) {\r\n            for (var i = 0; i < tree.length; i++) {\r\n                if (tree[i] && typeof tree[i] !== \"string\") {\r\n                    markStaticNode(tree[i], key + \"_\" + i, isOnce)\r\n                }\r\n            }\r\n        } else {\r\n            markStaticNode(tree, key, isOnce)\r\n        }\r\n    }\r\n\r\n    function markStaticNode(node, key, isOnce) {\r\n        node.isStatic = true\r\n        node.key = key\r\n        node.isOnce = isOnce\r\n    }\r\n\r\n    /*  */\r\n\r\n    function bindObjectListeners(data, value) {\r\n        if (value) {\r\n            if (!isPlainObject(value)) {\r\n                \"production\" !== \"production\" &&\r\n                    warn(\"v-on without argument expects an Object value\", this)\r\n            } else {\r\n                var on = (data.on = data.on ? extend({}, data.on) : {})\r\n                for (var key in value) {\r\n                    var existing = on[key]\r\n                    var ours = value[key]\r\n                    on[key] = existing ? [].concat(ours, existing) : ours\r\n                }\r\n            }\r\n        }\r\n        return data\r\n    }\r\n\r\n    /*  */\r\n\r\n    function initRender(vm) {\r\n        vm._vnode = null // the root of the child tree\r\n        vm._staticTrees = null\r\n        var parentVnode = (vm.$vnode = vm.$options._parentVnode) // the placeholder node in parent tree\r\n        var renderContext = parentVnode && parentVnode.context\r\n        vm.$slots = resolveSlots(vm.$options._renderChildren, renderContext)\r\n        vm.$scopedSlots = emptyObject\r\n        // bind the createElement fn to this instance\r\n        // so that we get proper render context inside it.\r\n        // args order: tag, data, children, normalizationType, alwaysNormalize\r\n        // internal version is used by render functions compiled from templates\r\n        vm._c = function(a, b, c, d) {\r\n            return createElement(vm, a, b, c, d, false)\r\n        }\r\n        // normalization is always applied for the public version, used in\r\n        // user-written render functions.\r\n        vm.$createElement = function(a, b, c, d) {\r\n            return createElement(vm, a, b, c, d, true)\r\n        }\r\n\r\n        // $attrs & $listeners are exposed for easier HOC creation.\r\n        // they need to be reactive so that HOCs using them are always updated\r\n        var parentData = parentVnode && parentVnode.data\r\n        /* istanbul ignore else */\r\n        {\r\n            defineReactive$$1(vm, \"$attrs\", parentData && parentData.attrs, null, true)\r\n            defineReactive$$1(vm, \"$listeners\", parentData && parentData.on, null, true)\r\n        }\r\n    }\r\n\r\n    function renderMixin(Vue) {\r\n        Vue.prototype.$nextTick = function(fn) {\r\n            return nextTick(fn, this)\r\n        }\r\n\r\n        Vue.prototype._render = function() {\r\n            var vm = this\r\n            var ref = vm.$options\r\n            var render = ref.render\r\n            var staticRenderFns = ref.staticRenderFns\r\n            var _parentVnode = ref._parentVnode\r\n\r\n            if (vm._isMounted) {\r\n                // clone slot nodes on re-renders\r\n                for (var key in vm.$slots) {\r\n                    vm.$slots[key] = cloneVNodes(vm.$slots[key])\r\n                }\r\n            }\r\n\r\n            vm.$scopedSlots = (_parentVnode && _parentVnode.data.scopedSlots) || emptyObject\r\n\r\n            if (staticRenderFns && !vm._staticTrees) {\r\n                vm._staticTrees = []\r\n            }\r\n            // set parent vnode. this allows render functions to have access\r\n            // to the data on the placeholder node.\r\n            vm.$vnode = _parentVnode\r\n            // render self\r\n            var vnode\r\n            try {\r\n                vnode = render.call(vm._renderProxy, vm.$createElement)\r\n            } catch (e) {\r\n                handleError(e, vm, \"render function\")\r\n                // return error render result,\r\n                // or previous vnode to prevent render error causing blank component\r\n                /* istanbul ignore else */\r\n                {\r\n                    vnode = vm._vnode\r\n                }\r\n            }\r\n            // return empty vnode in case the render function errored out\r\n            if (!(vnode instanceof VNode)) {\r\n                if (false) {\r\n                    warn(\r\n                        \"Multiple root nodes returned from render function. Render function \" +\r\n                            \"should return a single root node.\",\r\n                        vm\r\n                    )\r\n                }\r\n                vnode = createEmptyVNode()\r\n            }\r\n            // set parent\r\n            vnode.parent = _parentVnode\r\n            return vnode\r\n        }\r\n\r\n        // internal render helpers.\r\n        // these are exposed on the instance prototype to reduce generated render\r\n        // code size.\r\n        Vue.prototype._o = markOnce\r\n        Vue.prototype._n = toNumber\r\n        Vue.prototype._s = toString\r\n        Vue.prototype._l = renderList\r\n        Vue.prototype._t = renderSlot\r\n        Vue.prototype._q = looseEqual\r\n        Vue.prototype._i = looseIndexOf\r\n        Vue.prototype._m = renderStatic\r\n        Vue.prototype._f = resolveFilter\r\n        Vue.prototype._k = checkKeyCodes\r\n        Vue.prototype._b = bindObjectProps\r\n        Vue.prototype._v = createTextVNode\r\n        Vue.prototype._e = createEmptyVNode\r\n        Vue.prototype._u = resolveScopedSlots\r\n        Vue.prototype._g = bindObjectListeners\r\n    }\r\n\r\n    /*  */\r\n\r\n    var uid = 0\r\n\r\n    function initMixin(Vue) {\r\n        Vue.prototype._init = function(options) {\r\n            var vm = this\r\n            // a uid\r\n            vm._uid = uid++\r\n\r\n            var startTag, endTag\r\n            /* istanbul ignore if */\r\n            if (false) {\r\n                startTag = \"vue-perf-init:\" + vm._uid\r\n                endTag = \"vue-perf-end:\" + vm._uid\r\n                mark(startTag)\r\n            }\r\n\r\n            // a flag to avoid this being observed\r\n            vm._isVue = true\r\n            // merge options\r\n            if (options && options._isComponent) {\r\n                // optimize internal component instantiation\r\n                // since dynamic options merging is pretty slow, and none of the\r\n                // internal component options needs special treatment.\r\n                initInternalComponent(vm, options)\r\n            } else {\r\n                vm.$options = mergeOptions(\r\n                    resolveConstructorOptions(vm.constructor),\r\n                    options || {},\r\n                    vm\r\n                )\r\n            }\r\n            /* istanbul ignore else */\r\n            {\r\n                vm._renderProxy = vm\r\n            }\r\n            // expose real self\r\n            vm._self = vm\r\n            initLifecycle(vm)\r\n            initEvents(vm)\r\n            initRender(vm)\r\n            callHook(vm, \"beforeCreate\")\r\n            initInjections(vm) // resolve injections before data/props\r\n            initState(vm)\r\n            initProvide(vm) // resolve provide after data/props\r\n            callHook(vm, \"created\")\r\n\r\n            /* istanbul ignore if */\r\n            if (false) {\r\n                vm._name = formatComponentName(vm, false)\r\n                mark(endTag)\r\n                measure(vm._name + \" init\", startTag, endTag)\r\n            }\r\n\r\n            if (vm.$options.el) {\r\n                vm.$mount(vm.$options.el)\r\n            }\r\n        }\r\n    }\r\n\r\n    function initInternalComponent(vm, options) {\r\n        var opts = (vm.$options = Object.create(vm.constructor.options))\r\n        // doing this because it's faster than dynamic enumeration.\r\n        opts.parent = options.parent\r\n        opts.propsData = options.propsData\r\n        opts._parentVnode = options._parentVnode\r\n        opts._parentListeners = options._parentListeners\r\n        opts._renderChildren = options._renderChildren\r\n        opts._componentTag = options._componentTag\r\n        opts._parentElm = options._parentElm\r\n        opts._refElm = options._refElm\r\n        if (options.render) {\r\n            opts.render = options.render\r\n            opts.staticRenderFns = options.staticRenderFns\r\n        }\r\n    }\r\n\r\n    function resolveConstructorOptions(Ctor) {\r\n        var options = Ctor.options\r\n        if (Ctor.super) {\r\n            var superOptions = resolveConstructorOptions(Ctor.super)\r\n            var cachedSuperOptions = Ctor.superOptions\r\n            if (superOptions !== cachedSuperOptions) {\r\n                // super option changed,\r\n                // need to resolve new options.\r\n                Ctor.superOptions = superOptions\r\n                // check if there are any late-modified/attached options (#4976)\r\n                var modifiedOptions = resolveModifiedOptions(Ctor)\r\n                // update base extend options\r\n                if (modifiedOptions) {\r\n                    extend(Ctor.extendOptions, modifiedOptions)\r\n                }\r\n                options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions)\r\n                if (options.name) {\r\n                    options.components[options.name] = Ctor\r\n                }\r\n            }\r\n        }\r\n        return options\r\n    }\r\n\r\n    function resolveModifiedOptions(Ctor) {\r\n        var modified\r\n        var latest = Ctor.options\r\n        var extended = Ctor.extendOptions\r\n        var sealed = Ctor.sealedOptions\r\n        for (var key in latest) {\r\n            if (latest[key] !== sealed[key]) {\r\n                if (!modified) {\r\n                    modified = {}\r\n                }\r\n                modified[key] = dedupe(latest[key], extended[key], sealed[key])\r\n            }\r\n        }\r\n        return modified\r\n    }\r\n\r\n    function dedupe(latest, extended, sealed) {\r\n        // compare latest and sealed to ensure lifecycle hooks won't be duplicated\r\n        // between merges\r\n        if (Array.isArray(latest)) {\r\n            var res = []\r\n            sealed = Array.isArray(sealed) ? sealed : [sealed]\r\n            extended = Array.isArray(extended) ? extended : [extended]\r\n            for (var i = 0; i < latest.length; i++) {\r\n                // push original options and not sealed options to exclude duplicated options\r\n                if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {\r\n                    res.push(latest[i])\r\n                }\r\n            }\r\n            return res\r\n        } else {\r\n            return latest\r\n        }\r\n    }\r\n\r\n    function Vue$3(options) {\r\n        if (false) {\r\n            warn(\"Vue is a constructor and should be called with the `new` keyword\")\r\n        }\r\n        this._init(options)\r\n    }\r\n\r\n    initMixin(Vue$3)\r\n    stateMixin(Vue$3)\r\n    eventsMixin(Vue$3)\r\n    lifecycleMixin(Vue$3)\r\n    renderMixin(Vue$3)\r\n\r\n    /*  */\r\n\r\n    function initUse(Vue) {\r\n        Vue.use = function(plugin) {\r\n            var installedPlugins = this._installedPlugins || (this._installedPlugins = [])\r\n            if (installedPlugins.indexOf(plugin) > -1) {\r\n                return this\r\n            }\r\n\r\n            // additional parameters\r\n            var args = toArray(arguments, 1)\r\n            args.unshift(this)\r\n            if (typeof plugin.install === \"function\") {\r\n                plugin.install.apply(plugin, args)\r\n            } else if (typeof plugin === \"function\") {\r\n                plugin.apply(null, args)\r\n            }\r\n            installedPlugins.push(plugin)\r\n            return this\r\n        }\r\n    }\r\n\r\n    /*  */\r\n\r\n    function initMixin$1(Vue) {\r\n        Vue.mixin = function(mixin) {\r\n            this.options = mergeOptions(this.options, mixin)\r\n            return this\r\n        }\r\n    }\r\n\r\n    /*  */\r\n\r\n    function initExtend(Vue) {\r\n        /**\r\n         * Each instance constructor, including Vue, has a unique\r\n         * cid. This enables us to create wrapped \"child\r\n         * constructors\" for prototypal inheritance and cache them.\r\n         */\r\n        Vue.cid = 0\r\n        var cid = 1\r\n\r\n        /**\r\n         * Class inheritance\r\n         */\r\n        Vue.extend = function(extendOptions) {\r\n            extendOptions = extendOptions || {}\r\n            var Super = this\r\n            var SuperId = Super.cid\r\n            var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {})\r\n            if (cachedCtors[SuperId]) {\r\n                return cachedCtors[SuperId]\r\n            }\r\n\r\n            var name = extendOptions.name || Super.options.name\r\n            var Sub = function VueComponent(options) {\r\n                this._init(options)\r\n            }\r\n            Sub.prototype = Object.create(Super.prototype)\r\n            Sub.prototype.constructor = Sub\r\n            Sub.cid = cid++\r\n            Sub.options = mergeOptions(Super.options, extendOptions)\r\n            Sub[\"super\"] = Super\r\n\r\n            // For props and computed properties, we define the proxy getters on\r\n            // the Vue instances at extension time, on the extended prototype. This\r\n            // avoids Object.defineProperty calls for each instance created.\r\n            if (Sub.options.props) {\r\n                initProps$1(Sub)\r\n            }\r\n            if (Sub.options.computed) {\r\n                initComputed$1(Sub)\r\n            }\r\n\r\n            // allow further extension/mixin/plugin usage\r\n            Sub.extend = Super.extend\r\n            Sub.mixin = Super.mixin\r\n            Sub.use = Super.use\r\n\r\n            // create asset registers, so extended classes\r\n            // can have their private assets too.\r\n            ASSET_TYPES.forEach(function(type) {\r\n                Sub[type] = Super[type]\r\n            })\r\n            // enable recursive self-lookup\r\n            if (name) {\r\n                Sub.options.components[name] = Sub\r\n            }\r\n\r\n            // keep a reference to the super options at extension time.\r\n            // later at instantiation we can check if Super's options have\r\n            // been updated.\r\n            Sub.superOptions = Super.options\r\n            Sub.extendOptions = extendOptions\r\n            Sub.sealedOptions = extend({}, Sub.options)\r\n\r\n            // cache constructor\r\n            cachedCtors[SuperId] = Sub\r\n            return Sub\r\n        }\r\n    }\r\n\r\n    function initProps$1(Comp) {\r\n        var props = Comp.options.props\r\n        for (var key in props) {\r\n            proxy(Comp.prototype, \"_props\", key)\r\n        }\r\n    }\r\n\r\n    function initComputed$1(Comp) {\r\n        var computed = Comp.options.computed\r\n        for (var key in computed) {\r\n            defineComputed(Comp.prototype, key, computed[key])\r\n        }\r\n    }\r\n\r\n    /*  */\r\n\r\n    function initAssetRegisters(Vue) {\r\n        /**\r\n         * Create asset registration methods.\r\n         */\r\n        ASSET_TYPES.forEach(function(type) {\r\n            Vue[type] = function(id, definition) {\r\n                if (!definition) {\r\n                    return this.options[type + \"s\"][id]\r\n                } else {\r\n                    /* istanbul ignore if */\r\n                    if (type === \"component\" && isPlainObject(definition)) {\r\n                        definition.name = definition.name || id\r\n                        definition = this.options._base.extend(definition)\r\n                    }\r\n                    if (type === \"directive\" && typeof definition === \"function\") {\r\n                        definition = {\r\n                            bind: definition,\r\n                            update: definition\r\n                        }\r\n                    }\r\n                    this.options[type + \"s\"][id] = definition\r\n                    return definition\r\n                }\r\n            }\r\n        })\r\n    }\r\n\r\n    /*  */\r\n\r\n    var patternTypes = [String, RegExp, Array]\r\n\r\n    function getComponentName(opts) {\r\n        return opts && (opts.Ctor.options.name || opts.tag)\r\n    }\r\n\r\n    function matches(pattern, name) {\r\n        if (Array.isArray(pattern)) {\r\n            return pattern.indexOf(name) > -1\r\n        } else if (typeof pattern === \"string\") {\r\n            return pattern.split(\",\").indexOf(name) > -1\r\n        } else if (isRegExp(pattern)) {\r\n            return pattern.test(name)\r\n        }\r\n        /* istanbul ignore next */\r\n        return false\r\n    }\r\n\r\n    function pruneCache(cache, current, filter) {\r\n        for (var key in cache) {\r\n            var cachedNode = cache[key]\r\n            if (cachedNode) {\r\n                var name = getComponentName(cachedNode.componentOptions)\r\n                if (name && !filter(name)) {\r\n                    if (cachedNode !== current) {\r\n                        pruneCacheEntry(cachedNode)\r\n                    }\r\n                    cache[key] = null\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n    function pruneCacheEntry(vnode) {\r\n        if (vnode) {\r\n            vnode.componentInstance.$destroy()\r\n        }\r\n    }\r\n\r\n    var KeepAlive = {\r\n        name: \"keep-alive\",\r\n        abstract: true,\r\n\r\n        props: {\r\n            include: patternTypes,\r\n            exclude: patternTypes\r\n        },\r\n\r\n        created: function created() {\r\n            this.cache = Object.create(null)\r\n        },\r\n\r\n        destroyed: function destroyed() {\r\n            var this$1 = this\r\n\r\n            for (var key in this$1.cache) {\r\n                pruneCacheEntry(this$1.cache[key])\r\n            }\r\n        },\r\n\r\n        watch: {\r\n            include: function include(val) {\r\n                pruneCache(this.cache, this._vnode, function(name) {\r\n                    return matches(val, name)\r\n                })\r\n            },\r\n            exclude: function exclude(val) {\r\n                pruneCache(this.cache, this._vnode, function(name) {\r\n                    return !matches(val, name)\r\n                })\r\n            }\r\n        },\r\n\r\n        render: function render() {\r\n            var vnode = getFirstComponentChild(this.$slots.default)\r\n            var componentOptions = vnode && vnode.componentOptions\r\n            if (componentOptions) {\r\n                // check pattern\r\n                var name = getComponentName(componentOptions)\r\n                if (\r\n                    name &&\r\n                    ((this.include && !matches(this.include, name)) ||\r\n                        (this.exclude && matches(this.exclude, name)))\r\n                ) {\r\n                    return vnode\r\n                }\r\n                var key =\r\n                    vnode.key == null\r\n                        ? // same constructor may get registered as different local components\r\n                          // so cid alone is not enough (#3269)\r\n                          componentOptions.Ctor.cid +\r\n                          (componentOptions.tag ? \"::\" + componentOptions.tag : \"\")\r\n                        : vnode.key\r\n                if (this.cache[key]) {\r\n                    vnode.componentInstance = this.cache[key].componentInstance\r\n                } else {\r\n                    this.cache[key] = vnode\r\n                }\r\n                vnode.data.keepAlive = true\r\n            }\r\n            return vnode\r\n        }\r\n    }\r\n\r\n    var builtInComponents = {\r\n        KeepAlive: KeepAlive\r\n    }\r\n\r\n    /*  */\r\n\r\n    function initGlobalAPI(Vue) {\r\n        // config\r\n        var configDef = {}\r\n        configDef.get = function() {\r\n            return config\r\n        }\r\n        Object.defineProperty(Vue, \"config\", configDef)\r\n\r\n        // exposed util methods.\r\n        // NOTE: these are not considered part of the public API - avoid relying on\r\n        // them unless you are aware of the risk.\r\n        Vue.util = {\r\n            warn: warn,\r\n            extend: extend,\r\n            mergeOptions: mergeOptions,\r\n            defineReactive: defineReactive$$1\r\n        }\r\n\r\n        Vue.set = set\r\n        Vue.delete = del\r\n        Vue.nextTick = nextTick\r\n\r\n        Vue.options = Object.create(null)\r\n        ASSET_TYPES.forEach(function(type) {\r\n            Vue.options[type + \"s\"] = Object.create(null)\r\n        })\r\n\r\n        // this is used to identify the \"base\" constructor to extend all plain-object\r\n        // components with in Weex's multi-instance scenarios.\r\n        Vue.options._base = Vue\r\n\r\n        extend(Vue.options.components, builtInComponents)\r\n\r\n        initUse(Vue)\r\n        initMixin$1(Vue)\r\n        initExtend(Vue)\r\n        initAssetRegisters(Vue)\r\n    }\r\n\r\n    initGlobalAPI(Vue$3)\r\n\r\n    Object.defineProperty(Vue$3.prototype, \"$isServer\", {\r\n        get: isServerRendering\r\n    })\r\n\r\n    Object.defineProperty(Vue$3.prototype, \"$ssrContext\", {\r\n        get: function get() {\r\n            /* istanbul ignore next */\r\n            return this.$vnode && this.$vnode.ssrContext\r\n        }\r\n    })\r\n\r\n    Vue$3.version = \"2.4.1\"\r\n    Vue$3.mpvueVersion = \"1.0.12\"\r\n\r\n    /* globals renderer */\r\n\r\n    var isReservedTag = makeMap(\r\n        \"template,script,style,element,content,slot,link,meta,svg,view,\" +\r\n            \"a,div,img,image,text,span,richtext,input,switch,textarea,spinner,select,\" +\r\n            \"slider,slider-neighbor,indicator,trisition,trisition-group,canvas,\" +\r\n            \"list,cell,header,loading,loading-indicator,refresh,scrollable,scroller,\" +\r\n            \"video,web,embed,tabbar,tabheader,datepicker,timepicker,marquee,countdown\",\r\n        true\r\n    )\r\n\r\n    // these are reserved for web because they are directly compiled away\r\n    // during template compilation\r\n    var isReservedAttr = makeMap(\"style,class\")\r\n\r\n    // Elements that you can, intentionally, leave open (and which close themselves)\r\n    // more flexable than web\r\n    var canBeLeftOpenTag = makeMap(\r\n        \"web,spinner,switch,video,textarea,canvas,\" + \"indicator,marquee,countdown\",\r\n        true\r\n    )\r\n\r\n    var isUnaryTag = makeMap(\"embed,img,image,input,link,meta\", true)\r\n\r\n    function mustUseProp() {\r\n        /* console.log('mustUseProp') */\r\n    }\r\n\r\n    function getTagNamespace() {\r\n        /* console.log('getTagNamespace') */\r\n    }\r\n\r\n    function isUnknownElement() {\r\n        /* console.log('isUnknownElement') */\r\n    }\r\n\r\n    function getComKey(vm) {\r\n        return vm && vm.$attrs ? vm.$attrs[\"mpcomid\"] : \"0\"\r\n    }\r\n\r\n    // 用于小程序的 event type 到 web 的 event\r\n    var eventTypeMap = {\r\n        tap: [\"tap\", \"click\"],\r\n        touchstart: [\"touchstart\"],\r\n        touchmove: [\"touchmove\"],\r\n        touchcancel: [\"touchcancel\"],\r\n        touchend: [\"touchend\"],\r\n        longtap: [\"longtap\"],\r\n        input: [\"input\"],\r\n        blur: [\"change\", \"blur\"],\r\n        submit: [\"submit\"],\r\n        focus: [\"focus\"],\r\n        scrolltoupper: [\"scrolltoupper\"],\r\n        scrolltolower: [\"scrolltolower\"],\r\n        scroll: [\"scroll\"]\r\n    }\r\n\r\n    /*  */\r\n\r\n    // import { namespaceMap } from 'mp/util/index'\r\n\r\n    var obj = {}\r\n\r\n    function createElement$1(tagName, vnode) {\r\n        return obj\r\n    }\r\n\r\n    function createElementNS(namespace, tagName) {\r\n        return obj\r\n    }\r\n\r\n    function createTextNode(text) {\r\n        return obj\r\n    }\r\n\r\n    function createComment(text) {\r\n        return obj\r\n    }\r\n\r\n    function insertBefore(parentNode, newNode, referenceNode) {}\r\n\r\n    function removeChild(node, child) {}\r\n\r\n    function appendChild(node, child) {}\r\n\r\n    function parentNode(node) {\r\n        return obj\r\n    }\r\n\r\n    function nextSibling(node) {\r\n        return obj\r\n    }\r\n\r\n    function tagName(node) {\r\n        return \"div\"\r\n    }\r\n\r\n    function setTextContent(node, text) {\r\n        return obj\r\n    }\r\n\r\n    function setAttribute(node, key, val) {\r\n        return obj\r\n    }\r\n\r\n    var nodeOps = Object.freeze({\r\n        createElement: createElement$1,\r\n        createElementNS: createElementNS,\r\n        createTextNode: createTextNode,\r\n        createComment: createComment,\r\n        insertBefore: insertBefore,\r\n        removeChild: removeChild,\r\n        appendChild: appendChild,\r\n        parentNode: parentNode,\r\n        nextSibling: nextSibling,\r\n        tagName: tagName,\r\n        setTextContent: setTextContent,\r\n        setAttribute: setAttribute\r\n    })\r\n\r\n    /*  */\r\n\r\n    var ref = {\r\n        create: function create(_, vnode) {\r\n            registerRef(vnode)\r\n        },\r\n        update: function update(oldVnode, vnode) {\r\n            if (oldVnode.data.ref !== vnode.data.ref) {\r\n                registerRef(oldVnode, true)\r\n                registerRef(vnode)\r\n            }\r\n        },\r\n        destroy: function destroy(vnode) {\r\n            registerRef(vnode, true)\r\n        }\r\n    }\r\n\r\n    function registerRef(vnode, isRemoval) {\r\n        var key = vnode.data.ref\r\n        if (!key) {\r\n            return\r\n        }\r\n\r\n        var vm = vnode.context\r\n        var ref = vnode.componentInstance || vnode.elm\r\n        var refs = vm.$refs\r\n        if (isRemoval) {\r\n            if (Array.isArray(refs[key])) {\r\n                remove(refs[key], ref)\r\n            } else if (refs[key] === ref) {\r\n                refs[key] = undefined\r\n            }\r\n        } else {\r\n            if (vnode.data.refInFor) {\r\n                if (!Array.isArray(refs[key])) {\r\n                    refs[key] = [ref]\r\n                } else if (refs[key].indexOf(ref) < 0) {\r\n                    // $flow-disable-line\r\n                    refs[key].push(ref)\r\n                }\r\n            } else {\r\n                refs[key] = ref\r\n            }\r\n        }\r\n    }\r\n\r\n    /**\r\n     * Virtual DOM patching algorithm based on Snabbdom by\r\n     * Simon Friis Vindum (@paldepind)\r\n     * Licensed under the MIT License\r\n     * https://github.com/paldepind/snabbdom/blob/master/LICENSE\r\n     *\r\n     * modified by Evan You (@yyx990803)\r\n     *\r\n\r\n    /*\r\n     * Not type-checking this because this file is perf-critical and the cost\r\n     * of making flow understand it is not worth it.\r\n     */\r\n\r\n    var emptyNode = new VNode(\"\", {}, [])\r\n\r\n    var hooks = [\"create\", \"activate\", \"update\", \"remove\", \"destroy\"]\r\n\r\n    function sameVnode(a, b) {\r\n        return (\r\n            a.key === b.key &&\r\n            ((a.tag === b.tag &&\r\n                a.isComment === b.isComment &&\r\n                isDef(a.data) === isDef(b.data) &&\r\n                sameInputType(a, b)) ||\r\n                (isTrue(a.isAsyncPlaceholder) &&\r\n                    a.asyncFactory === b.asyncFactory &&\r\n                    isUndef(b.asyncFactory.error)))\r\n        )\r\n    }\r\n\r\n    // Some browsers do not support dynamically changing type for <input>\r\n    // so they need to be treated as different nodes\r\n    function sameInputType(a, b) {\r\n        if (a.tag !== \"input\") {\r\n            return true\r\n        }\r\n        var i\r\n        var typeA = isDef((i = a.data)) && isDef((i = i.attrs)) && i.type\r\n        var typeB = isDef((i = b.data)) && isDef((i = i.attrs)) && i.type\r\n        return typeA === typeB\r\n    }\r\n\r\n    function createKeyToOldIdx(children, beginIdx, endIdx) {\r\n        var i, key\r\n        var map = {}\r\n        for (i = beginIdx; i <= endIdx; ++i) {\r\n            key = children[i].key\r\n            if (isDef(key)) {\r\n                map[key] = i\r\n            }\r\n        }\r\n        return map\r\n    }\r\n\r\n    function createPatchFunction(backend) {\r\n        var i, j\r\n        var cbs = {}\r\n\r\n        var modules = backend.modules\r\n        var nodeOps = backend.nodeOps\r\n\r\n        for (i = 0; i < hooks.length; ++i) {\r\n            cbs[hooks[i]] = []\r\n            for (j = 0; j < modules.length; ++j) {\r\n                if (isDef(modules[j][hooks[i]])) {\r\n                    cbs[hooks[i]].push(modules[j][hooks[i]])\r\n                }\r\n            }\r\n        }\r\n\r\n        function emptyNodeAt(elm) {\r\n            return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)\r\n        }\r\n\r\n        function createRmCb(childElm, listeners) {\r\n            function remove$$1() {\r\n                if (--remove$$1.listeners === 0) {\r\n                    removeNode(childElm)\r\n                }\r\n            }\r\n            remove$$1.listeners = listeners\r\n            return remove$$1\r\n        }\r\n\r\n        function removeNode(el) {\r\n            var parent = nodeOps.parentNode(el)\r\n            // element may have already been removed due to v-html / v-text\r\n            if (isDef(parent)) {\r\n                nodeOps.removeChild(parent, el)\r\n            }\r\n        }\r\n\r\n        var inPre = 0\r\n\r\n        function createElm(vnode, insertedVnodeQueue, parentElm, refElm, nested) {\r\n            vnode.isRootInsert = !nested // for transition enter check\r\n            if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {\r\n                return\r\n            }\r\n\r\n            var data = vnode.data\r\n            var children = vnode.children\r\n            var tag = vnode.tag\r\n            if (isDef(tag)) {\r\n                vnode.elm = vnode.ns\r\n                    ? nodeOps.createElementNS(vnode.ns, tag)\r\n                    : nodeOps.createElement(tag, vnode)\r\n                setScope(vnode)\r\n\r\n                /* istanbul ignore if */\r\n                {\r\n                    createChildren(vnode, children, insertedVnodeQueue)\r\n                    if (isDef(data)) {\r\n                        invokeCreateHooks(vnode, insertedVnodeQueue)\r\n                    }\r\n                    insert(parentElm, vnode.elm, refElm)\r\n                }\r\n\r\n                if (false) {\r\n                    inPre--\r\n                }\r\n            } else if (isTrue(vnode.isComment)) {\r\n                vnode.elm = nodeOps.createComment(vnode.text)\r\n                insert(parentElm, vnode.elm, refElm)\r\n            } else {\r\n                vnode.elm = nodeOps.createTextNode(vnode.text)\r\n                insert(parentElm, vnode.elm, refElm)\r\n            }\r\n        }\r\n\r\n        function createComponent(vnode, insertedVnodeQueue, parentElm, refElm) {\r\n            var i = vnode.data\r\n            if (isDef(i)) {\r\n                var isReactivated = isDef(vnode.componentInstance) && i.keepAlive\r\n                if (isDef((i = i.hook)) && isDef((i = i.init))) {\r\n                    i(vnode, false /* hydrating */, parentElm, refElm)\r\n                }\r\n                // after calling the init hook, if the vnode is a child component\r\n                // it should've created a child instance and mounted it. the child\r\n                // component also has set the placeholder vnode's elm.\r\n                // in that case we can just return the element and be done.\r\n                if (isDef(vnode.componentInstance)) {\r\n                    initComponent(vnode, insertedVnodeQueue)\r\n                    if (isTrue(isReactivated)) {\r\n                        reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm)\r\n                    }\r\n                    return true\r\n                }\r\n            }\r\n        }\r\n\r\n        function initComponent(vnode, insertedVnodeQueue) {\r\n            if (isDef(vnode.data.pendingInsert)) {\r\n                insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert)\r\n                vnode.data.pendingInsert = null\r\n            }\r\n            vnode.elm = vnode.componentInstance.$el\r\n            if (isPatchable(vnode)) {\r\n                invokeCreateHooks(vnode, insertedVnodeQueue)\r\n                setScope(vnode)\r\n            } else {\r\n                // empty component root.\r\n                // skip all element-related modules except for ref (#3455)\r\n                registerRef(vnode)\r\n                // make sure to invoke the insert hook\r\n                insertedVnodeQueue.push(vnode)\r\n            }\r\n        }\r\n\r\n        function reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm) {\r\n            var i\r\n            // hack for #4339: a reactivated component with inner transition\r\n            // does not trigger because the inner node's created hooks are not called\r\n            // again. It's not ideal to involve module-specific logic in here but\r\n            // there doesn't seem to be a better way to do it.\r\n            var innerNode = vnode\r\n            while (innerNode.componentInstance) {\r\n                innerNode = innerNode.componentInstance._vnode\r\n                if (isDef((i = innerNode.data)) && isDef((i = i.transition))) {\r\n                    for (i = 0; i < cbs.activate.length; ++i) {\r\n                        cbs.activate[i](emptyNode, innerNode)\r\n                    }\r\n                    insertedVnodeQueue.push(innerNode)\r\n                    break\r\n                }\r\n            }\r\n            // unlike a newly created component,\r\n            // a reactivated keep-alive component doesn't insert itself\r\n            insert(parentElm, vnode.elm, refElm)\r\n        }\r\n\r\n        function insert(parent, elm, ref$$1) {\r\n            if (isDef(parent)) {\r\n                if (isDef(ref$$1)) {\r\n                    if (ref$$1.parentNode === parent) {\r\n                        nodeOps.insertBefore(parent, elm, ref$$1)\r\n                    }\r\n                } else {\r\n                    nodeOps.appendChild(parent, elm)\r\n                }\r\n            }\r\n        }\r\n\r\n        function createChildren(vnode, children, insertedVnodeQueue) {\r\n            if (Array.isArray(children)) {\r\n                for (var i = 0; i < children.length; ++i) {\r\n                    createElm(children[i], insertedVnodeQueue, vnode.elm, null, true)\r\n                }\r\n            } else if (isPrimitive(vnode.text)) {\r\n                nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(vnode.text))\r\n            }\r\n        }\r\n\r\n        function isPatchable(vnode) {\r\n            while (vnode.componentInstance) {\r\n                vnode = vnode.componentInstance._vnode\r\n            }\r\n            return isDef(vnode.tag)\r\n        }\r\n\r\n        function invokeCreateHooks(vnode, insertedVnodeQueue) {\r\n            for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {\r\n                cbs.create[i$1](emptyNode, vnode)\r\n            }\r\n            i = vnode.data.hook // Reuse variable\r\n            if (isDef(i)) {\r\n                if (isDef(i.create)) {\r\n                    i.create(emptyNode, vnode)\r\n                }\r\n                if (isDef(i.insert)) {\r\n                    insertedVnodeQueue.push(vnode)\r\n                }\r\n            }\r\n        }\r\n\r\n        // set scope id attribute for scoped CSS.\r\n        // this is implemented as a special case to avoid the overhead\r\n        // of going through the normal attribute patching process.\r\n        function setScope(vnode) {\r\n            var i\r\n            var ancestor = vnode\r\n            while (ancestor) {\r\n                if (isDef((i = ancestor.context)) && isDef((i = i.$options._scopeId))) {\r\n                    nodeOps.setAttribute(vnode.elm, i, \"\")\r\n                }\r\n                ancestor = ancestor.parent\r\n            }\r\n            // for slot content they should also get the scopeId from the host instance.\r\n            if (\r\n                isDef((i = activeInstance)) &&\r\n                i !== vnode.context &&\r\n                isDef((i = i.$options._scopeId))\r\n            ) {\r\n                nodeOps.setAttribute(vnode.elm, i, \"\")\r\n            }\r\n        }\r\n\r\n        function addVnodes(parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {\r\n            for (; startIdx <= endIdx; ++startIdx) {\r\n                createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm)\r\n            }\r\n        }\r\n\r\n        function invokeDestroyHook(vnode) {\r\n            var i, j\r\n            var data = vnode.data\r\n            if (isDef(data)) {\r\n                if (isDef((i = data.hook)) && isDef((i = i.destroy))) {\r\n                    i(vnode)\r\n                }\r\n                for (i = 0; i < cbs.destroy.length; ++i) {\r\n                    cbs.destroy[i](vnode)\r\n                }\r\n            }\r\n            if (isDef((i = vnode.children))) {\r\n                for (j = 0; j < vnode.children.length; ++j) {\r\n                    invokeDestroyHook(vnode.children[j])\r\n                }\r\n            }\r\n        }\r\n\r\n        function removeVnodes(parentElm, vnodes, startIdx, endIdx) {\r\n            for (; startIdx <= endIdx; ++startIdx) {\r\n                var ch = vnodes[startIdx]\r\n                if (isDef(ch)) {\r\n                    if (isDef(ch.tag)) {\r\n                        removeAndInvokeRemoveHook(ch)\r\n                        invokeDestroyHook(ch)\r\n                    } else {\r\n                        // Text node\r\n                        removeNode(ch.elm)\r\n                    }\r\n                }\r\n            }\r\n        }\r\n\r\n        function removeAndInvokeRemoveHook(vnode, rm) {\r\n            if (isDef(rm) || isDef(vnode.data)) {\r\n                var i\r\n                var listeners = cbs.remove.length + 1\r\n                if (isDef(rm)) {\r\n                    // we have a recursively passed down rm callback\r\n                    // increase the listeners count\r\n                    rm.listeners += listeners\r\n                } else {\r\n                    // directly removing\r\n                    rm = createRmCb(vnode.elm, listeners)\r\n                }\r\n                // recursively invoke hooks on child component root node\r\n                if (\r\n                    isDef((i = vnode.componentInstance)) &&\r\n                    isDef((i = i._vnode)) &&\r\n                    isDef(i.data)\r\n                ) {\r\n                    removeAndInvokeRemoveHook(i, rm)\r\n                }\r\n                for (i = 0; i < cbs.remove.length; ++i) {\r\n                    cbs.remove[i](vnode, rm)\r\n                }\r\n                if (isDef((i = vnode.data.hook)) && isDef((i = i.remove))) {\r\n                    i(vnode, rm)\r\n                } else {\r\n                    rm()\r\n                }\r\n            } else {\r\n                removeNode(vnode.elm)\r\n            }\r\n        }\r\n\r\n        function updateChildren(parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {\r\n            var oldStartIdx = 0\r\n            var newStartIdx = 0\r\n            var oldEndIdx = oldCh.length - 1\r\n            var oldStartVnode = oldCh[0]\r\n            var oldEndVnode = oldCh[oldEndIdx]\r\n            var newEndIdx = newCh.length - 1\r\n            var newStartVnode = newCh[0]\r\n            var newEndVnode = newCh[newEndIdx]\r\n            var oldKeyToIdx, idxInOld, elmToMove, refElm\r\n\r\n            // removeOnly is a special flag used only by <transition-group>\r\n            // to ensure removed elements stay in correct relative positions\r\n            // during leaving transitions\r\n            var canMove = !removeOnly\r\n\r\n            while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {\r\n                if (isUndef(oldStartVnode)) {\r\n                    oldStartVnode = oldCh[++oldStartIdx] // Vnode has been moved left\r\n                } else if (isUndef(oldEndVnode)) {\r\n                    oldEndVnode = oldCh[--oldEndIdx]\r\n                } else if (sameVnode(oldStartVnode, newStartVnode)) {\r\n                    patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue)\r\n                    oldStartVnode = oldCh[++oldStartIdx]\r\n                    newStartVnode = newCh[++newStartIdx]\r\n                } else if (sameVnode(oldEndVnode, newEndVnode)) {\r\n                    patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue)\r\n                    oldEndVnode = oldCh[--oldEndIdx]\r\n                    newEndVnode = newCh[--newEndIdx]\r\n                } else if (sameVnode(oldStartVnode, newEndVnode)) {\r\n                    // Vnode moved right\r\n                    patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue)\r\n                    canMove &&\r\n                        nodeOps.insertBefore(\r\n                            parentElm,\r\n                            oldStartVnode.elm,\r\n                            nodeOps.nextSibling(oldEndVnode.elm)\r\n                        )\r\n                    oldStartVnode = oldCh[++oldStartIdx]\r\n                    newEndVnode = newCh[--newEndIdx]\r\n                } else if (sameVnode(oldEndVnode, newStartVnode)) {\r\n                    // Vnode moved left\r\n                    patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue)\r\n                    canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm)\r\n                    oldEndVnode = oldCh[--oldEndIdx]\r\n                    newStartVnode = newCh[++newStartIdx]\r\n                } else {\r\n                    if (isUndef(oldKeyToIdx)) {\r\n                        oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx)\r\n                    }\r\n                    idxInOld = isDef(newStartVnode.key) ? oldKeyToIdx[newStartVnode.key] : null\r\n                    if (isUndef(idxInOld)) {\r\n                        // New element\r\n                        createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm)\r\n                        newStartVnode = newCh[++newStartIdx]\r\n                    } else {\r\n                        elmToMove = oldCh[idxInOld]\r\n                        /* istanbul ignore if */\r\n                        if (false) {\r\n                            warn(\r\n                                \"It seems there are duplicate keys that is causing an update error. \" +\r\n                                    \"Make sure each v-for item has a unique key.\"\r\n                            )\r\n                        }\r\n                        if (sameVnode(elmToMove, newStartVnode)) {\r\n                            patchVnode(elmToMove, newStartVnode, insertedVnodeQueue)\r\n                            oldCh[idxInOld] = undefined\r\n                            canMove &&\r\n                                nodeOps.insertBefore(parentElm, elmToMove.elm, oldStartVnode.elm)\r\n                            newStartVnode = newCh[++newStartIdx]\r\n                        } else {\r\n                            // same key but different element. treat as new element\r\n                            createElm(\r\n                                newStartVnode,\r\n                                insertedVnodeQueue,\r\n                                parentElm,\r\n                                oldStartVnode.elm\r\n                            )\r\n                            newStartVnode = newCh[++newStartIdx]\r\n                        }\r\n                    }\r\n                }\r\n            }\r\n            if (oldStartIdx > oldEndIdx) {\r\n                refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm\r\n                addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue)\r\n            } else if (newStartIdx > newEndIdx) {\r\n                removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx)\r\n            }\r\n        }\r\n\r\n        function patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly) {\r\n            if (oldVnode === vnode) {\r\n                return\r\n            }\r\n\r\n            var elm = (vnode.elm = oldVnode.elm)\r\n\r\n            if (isTrue(oldVnode.isAsyncPlaceholder)) {\r\n                if (isDef(vnode.asyncFactory.resolved)) {\r\n                    hydrate(oldVnode.elm, vnode, insertedVnodeQueue)\r\n                } else {\r\n                    vnode.isAsyncPlaceholder = true\r\n                }\r\n                return\r\n            }\r\n\r\n            // reuse element for static trees.\r\n            // note we only do this if the vnode is cloned -\r\n            // if the new node is not cloned it means the render functions have been\r\n            // reset by the hot-reload-api and we need to do a proper re-render.\r\n            if (\r\n                isTrue(vnode.isStatic) &&\r\n                isTrue(oldVnode.isStatic) &&\r\n                vnode.key === oldVnode.key &&\r\n                (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))\r\n            ) {\r\n                vnode.componentInstance = oldVnode.componentInstance\r\n                return\r\n            }\r\n\r\n            var i\r\n            var data = vnode.data\r\n            if (isDef(data) && isDef((i = data.hook)) && isDef((i = i.prepatch))) {\r\n                i(oldVnode, vnode)\r\n            }\r\n\r\n            var oldCh = oldVnode.children\r\n            var ch = vnode.children\r\n            if (isDef(data) && isPatchable(vnode)) {\r\n                for (i = 0; i < cbs.update.length; ++i) {\r\n                    cbs.update[i](oldVnode, vnode)\r\n                }\r\n                if (isDef((i = data.hook)) && isDef((i = i.update))) {\r\n                    i(oldVnode, vnode)\r\n                }\r\n            }\r\n            if (isUndef(vnode.text)) {\r\n                if (isDef(oldCh) && isDef(ch)) {\r\n                    if (oldCh !== ch) {\r\n                        updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly)\r\n                    }\r\n                } else if (isDef(ch)) {\r\n                    if (isDef(oldVnode.text)) {\r\n                        nodeOps.setTextContent(elm, \"\")\r\n                    }\r\n                    addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue)\r\n                } else if (isDef(oldCh)) {\r\n                    removeVnodes(elm, oldCh, 0, oldCh.length - 1)\r\n                } else if (isDef(oldVnode.text)) {\r\n                    nodeOps.setTextContent(elm, \"\")\r\n                }\r\n            } else if (oldVnode.text !== vnode.text) {\r\n                nodeOps.setTextContent(elm, vnode.text)\r\n            }\r\n            if (isDef(data)) {\r\n                if (isDef((i = data.hook)) && isDef((i = i.postpatch))) {\r\n                    i(oldVnode, vnode)\r\n                }\r\n            }\r\n        }\r\n\r\n        function invokeInsertHook(vnode, queue, initial) {\r\n            // delay insert hooks for component root nodes, invoke them after the\r\n            // element is really inserted\r\n            if (isTrue(initial) && isDef(vnode.parent)) {\r\n                vnode.parent.data.pendingInsert = queue\r\n            } else {\r\n                for (var i = 0; i < queue.length; ++i) {\r\n                    queue[i].data.hook.insert(queue[i])\r\n                }\r\n            }\r\n        }\r\n\r\n        var bailed = false\r\n        // list of modules that can skip create hook during hydration because they\r\n        // are already rendered on the client or has no need for initialization\r\n        var isRenderedModule = makeMap(\"attrs,style,class,staticClass,staticStyle,key\")\r\n\r\n        // Note: this is a browser-only function so we can assume elms are DOM nodes.\r\n        function hydrate(elm, vnode, insertedVnodeQueue) {\r\n            if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {\r\n                vnode.elm = elm\r\n                vnode.isAsyncPlaceholder = true\r\n                return true\r\n            }\r\n            vnode.elm = elm\r\n            var tag = vnode.tag\r\n            var data = vnode.data\r\n            var children = vnode.children\r\n            if (isDef(data)) {\r\n                if (isDef((i = data.hook)) && isDef((i = i.init))) {\r\n                    i(vnode, true /* hydrating */)\r\n                }\r\n                if (isDef((i = vnode.componentInstance))) {\r\n                    // child component. it should have hydrated its own tree.\r\n                    initComponent(vnode, insertedVnodeQueue)\r\n                    return true\r\n                }\r\n            }\r\n            if (isDef(tag)) {\r\n                if (isDef(children)) {\r\n                    // empty element, allow client to pick up and populate children\r\n                    if (!elm.hasChildNodes()) {\r\n                        createChildren(vnode, children, insertedVnodeQueue)\r\n                    } else {\r\n                        var childrenMatch = true\r\n                        var childNode = elm.firstChild\r\n                        for (var i$1 = 0; i$1 < children.length; i$1++) {\r\n                            if (\r\n                                !childNode ||\r\n                                !hydrate(childNode, children[i$1], insertedVnodeQueue)\r\n                            ) {\r\n                                childrenMatch = false\r\n                                break\r\n                            }\r\n                            childNode = childNode.nextSibling\r\n                        }\r\n                        // if childNode is not null, it means the actual childNodes list is\r\n                        // longer than the virtual children list.\r\n                        if (!childrenMatch || childNode) {\r\n                            if (\r\n                                false\r\n                            ) {\r\n                                bailed = true\r\n                                console.warn(\"Parent: \", elm)\r\n                                console.warn(\r\n                                    \"Mismatching childNodes vs. VNodes: \",\r\n                                    elm.childNodes,\r\n                                    children\r\n                                )\r\n                            }\r\n                            return false\r\n                        }\r\n                    }\r\n                }\r\n                if (isDef(data)) {\r\n                    for (var key in data) {\r\n                        if (!isRenderedModule(key)) {\r\n                            invokeCreateHooks(vnode, insertedVnodeQueue)\r\n                            break\r\n                        }\r\n                    }\r\n                }\r\n            } else if (elm.data !== vnode.text) {\r\n                elm.data = vnode.text\r\n            }\r\n            return true\r\n        }\r\n\r\n        return function patch(oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {\r\n            if (isUndef(vnode)) {\r\n                if (isDef(oldVnode)) {\r\n                    invokeDestroyHook(oldVnode)\r\n                }\r\n                return\r\n            }\r\n\r\n            var isInitialPatch = false\r\n            var insertedVnodeQueue = []\r\n\r\n            if (isUndef(oldVnode)) {\r\n                // empty mount (likely as component), create new root element\r\n                isInitialPatch = true\r\n                createElm(vnode, insertedVnodeQueue, parentElm, refElm)\r\n            } else {\r\n                var isRealElement = isDef(oldVnode.nodeType)\r\n                if (!isRealElement && sameVnode(oldVnode, vnode)) {\r\n                    // patch existing root node\r\n                    patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly)\r\n                } else {\r\n                    if (isRealElement) {\r\n                        // mounting to a real element\r\n                        // check if this is server-rendered content and if we can perform\r\n                        // a successful hydration.\r\n                        if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {\r\n                            oldVnode.removeAttribute(SSR_ATTR)\r\n                            hydrating = true\r\n                        }\r\n                        if (isTrue(hydrating)) {\r\n                            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {\r\n                                invokeInsertHook(vnode, insertedVnodeQueue, true)\r\n                                return oldVnode\r\n                            } else {\r\n                            }\r\n                        }\r\n                        // either not server-rendered, or hydration failed.\r\n                        // create an empty node and replace it\r\n                        oldVnode = emptyNodeAt(oldVnode)\r\n                    }\r\n                    // replacing existing element\r\n                    var oldElm = oldVnode.elm\r\n                    var parentElm$1 = nodeOps.parentNode(oldElm)\r\n                    createElm(\r\n                        vnode,\r\n                        insertedVnodeQueue,\r\n                        // extremely rare edge case: do not insert if old element is in a\r\n                        // leaving transition. Only happens when combining transition +\r\n                        // keep-alive + HOCs. (#4590)\r\n                        oldElm._leaveCb ? null : parentElm$1,\r\n                        nodeOps.nextSibling(oldElm)\r\n                    )\r\n\r\n                    if (isDef(vnode.parent)) {\r\n                        // component root element replaced.\r\n                        // update parent placeholder node element, recursively\r\n                        var ancestor = vnode.parent\r\n                        while (ancestor) {\r\n                            ancestor.elm = vnode.elm\r\n                            ancestor = ancestor.parent\r\n                        }\r\n                        if (isPatchable(vnode)) {\r\n                            for (var i = 0; i < cbs.create.length; ++i) {\r\n                                cbs.create[i](emptyNode, vnode.parent)\r\n                            }\r\n                        }\r\n                    }\r\n\r\n                    if (isDef(parentElm$1)) {\r\n                        removeVnodes(parentElm$1, [oldVnode], 0, 0)\r\n                    } else if (isDef(oldVnode.tag)) {\r\n                        invokeDestroyHook(oldVnode)\r\n                    }\r\n                }\r\n            }\r\n\r\n            invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch)\r\n            return vnode.elm\r\n        }\r\n    }\r\n\r\n    /*  */\r\n\r\n    // import baseModules from 'core/vdom/modules/index'\r\n    // const platformModules = []\r\n    // import platformModules from 'web/runtime/modules/index'\r\n\r\n    // the directive module should be applied last, after all\r\n    // built-in modules have been applied.\r\n    // const modules = platformModules.concat(baseModules)\r\n    var modules = [ref]\r\n\r\n    var corePatch = createPatchFunction({\r\n        nodeOps: nodeOps,\r\n        modules: modules\r\n    })\r\n\r\n    function patch() {\r\n        corePatch.apply(this, arguments)\r\n        this.$updateDataToMP()\r\n    }\r\n\r\n    function callHook$1(vm, hook, params) {\r\n        var handlers = vm.$options[hook]\r\n        if (hook === \"onError\" && handlers) {\r\n            handlers = [handlers]\r\n        }\r\n\r\n        var ret\r\n        if (handlers) {\r\n            for (var i = 0, j = handlers.length; i < j; i++) {\r\n                try {\r\n                    ret = handlers[i].call(vm, params)\r\n                } catch (e) {\r\n                    handleError(e, vm, hook + \" hook\")\r\n                }\r\n            }\r\n        }\r\n        if (vm._hasHookEvent) {\r\n            vm.$emit(\"hook:\" + hook)\r\n        }\r\n\r\n        // for child\r\n        if (vm.$children.length) {\r\n            vm.$children.forEach(function(v) {\r\n                return callHook$1(v, hook, params)\r\n            })\r\n        }\r\n\r\n        return ret\r\n    }\r\n\r\n    // mpType 小程序实例的类型，可能的值是 'app', 'page'\r\n    // rootVueVM 是 vue 的根组件实例，子组件中访问 this.$root 可得\r\n    function getGlobalData(app, rootVueVM) {\r\n        var mp = rootVueVM.$mp\r\n        if (app && app.globalData) {\r\n            mp.appOptions = app.globalData.appOptions\r\n        }\r\n    }\r\n\r\n    // 格式化 properties 属性，并给每个属性加上 observer 方法\r\n\r\n    // properties 的 一些类型 https://developers.weixin.qq.com/miniprogram/dev/framework/custom-component/component.html\r\n    // properties: {\r\n    //   paramA: Number,\r\n    //   myProperty: { // 属性名\r\n    //     type: String, // 类型（必填），目前接受的类型包括：String, Number, Boolean, Object, Array, null（表示任意类型）\r\n    //     value: '', // 属性初始值（可选），如果未指定则会根据类型选择一个\r\n    //     observer: function(newVal, oldVal, changedPath) {\r\n    //        // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'\r\n    //        // 通常 newVal 就是新设置的数据， oldVal 是旧数据\r\n    //     }\r\n    //   },\r\n    // }\r\n\r\n    // props 的一些类型 https://cn.vuejs.org/v2/guide/components-props.html#ad\r\n    // props: {\r\n    //   // 基础的类型检查 (`null` 匹配任何类型)\r\n    //   propA: Number,\r\n    //   // 多个可能的类型\r\n    //   propB: [String, Number],\r\n    //   // 必填的字符串\r\n    //   propC: {\r\n    //     type: String,\r\n    //     required: true\r\n    //   },\r\n    //   // 带有默认值的数字\r\n    //   propD: {\r\n    //     type: Number,\r\n    //     default: 100\r\n    //   },\r\n    //   // 带有默认值的对象\r\n    //   propE: {\r\n    //     type: Object,\r\n    //     // 对象或数组且一定会从一个工厂函数返回默认值\r\n    //     default: function () {\r\n    //       return { message: 'hello' }\r\n    //     }\r\n    //   },\r\n    //   // 自定义验证函数\r\n    //   propF: {\r\n    //     validator: function (value) {\r\n    //       // 这个值必须匹配下列字符串中的一个\r\n    //       return ['success', 'warning', 'danger'].indexOf(value) !== -1\r\n    //     }\r\n    //   }\r\n    // }\r\n\r\n    // core/util/options\r\n    function normalizeProps$1(props, res, vm) {\r\n        if (!props) {\r\n            return\r\n        }\r\n        var i, val, name\r\n        if (Array.isArray(props)) {\r\n            i = props.length\r\n            while (i--) {\r\n                val = props[i]\r\n                if (typeof val === \"string\") {\r\n                    name = camelize(val)\r\n                    res[name] = {\r\n                        type: null\r\n                    }\r\n                } else {\r\n                }\r\n            }\r\n        } else if (isPlainObject(props)) {\r\n            for (var key in props) {\r\n                val = props[key]\r\n                name = camelize(key)\r\n                res[name] = isPlainObject(val)\r\n                    ? val\r\n                    : {\r\n                          type: val\r\n                      }\r\n            }\r\n        }\r\n\r\n        // fix vueProps to properties\r\n        for (var key$1 in res) {\r\n            if (res.hasOwnProperty(key$1)) {\r\n                var item = res[key$1]\r\n                if (item.default) {\r\n                    item.value = item.default\r\n                }\r\n                var oldObserver = item.observer\r\n                item.observer = function(newVal, oldVal) {\r\n                    vm[name] = newVal\r\n                    // 先修改值再触发原始的 observer，跟 watch 行为保持一致\r\n                    if (typeof oldObserver === \"function\") {\r\n                        oldObserver.call(vm, newVal, oldVal)\r\n                    }\r\n                }\r\n            }\r\n        }\r\n\r\n        return res\r\n    }\r\n\r\n    function normalizeProperties(vm) {\r\n        var properties = vm.$options.properties\r\n        var vueProps = vm.$options.props\r\n        var res = {}\r\n\r\n        normalizeProps$1(properties, res, vm)\r\n        normalizeProps$1(vueProps, res, vm)\r\n\r\n        return res\r\n    }\r\n\r\n    /**\r\n     * 把 properties 中的属性 proxy 到 vm 上\r\n     */\r\n    function initMpProps(vm) {\r\n        var mpProps = (vm._mpProps = {})\r\n        var keys = Object.keys(vm.$options.properties || {})\r\n        keys.forEach(function(key) {\r\n            if (!(key in vm)) {\r\n                proxy(vm, \"_mpProps\", key)\r\n                mpProps[key] = undefined // for observe\r\n            }\r\n        })\r\n        observe(mpProps, true)\r\n    }\r\n\r\n    function initMP(mpType, next) {\r\n        var rootVueVM = this.$root\r\n        if (!rootVueVM.$mp) {\r\n            rootVueVM.$mp = {}\r\n        }\r\n\r\n        var mp = rootVueVM.$mp\r\n\r\n        // Please do not register multiple Pages\r\n        // if (mp.registered) {\r\n        if (mp.status) {\r\n            // 处理子组件的小程序生命周期\r\n            if (mpType === \"app\") {\r\n                callHook$1(this, \"onLaunch\", mp.appOptions)\r\n            } else {\r\n                callHook$1(this, \"onLoad\", mp.query)\r\n                // callHook$1(this, \"onReady\") // 避免 onReady触发两次\r\n            }\r\n            return next()\r\n        }\r\n        // mp.registered = true\r\n\r\n        mp.mpType = mpType\r\n        mp.status = \"register\"\r\n\r\n        if (mpType === \"app\") {\r\n            global.App({\r\n                // 页面的初始数据\r\n                globalData: {\r\n                    appOptions: {}\r\n                },\r\n\r\n                handleProxy: function handleProxy(e) {\r\n                    return rootVueVM.$handleProxyWithVue(e)\r\n                },\r\n\r\n                // Do something initial when launch.\r\n                onLaunch: function onLaunch(options) {\r\n                    if (options === void 0) options = {}\r\n\r\n                    mp.app = this\r\n                    mp.status = \"launch\"\r\n                    this.globalData.appOptions = mp.appOptions = options\r\n                    callHook$1(rootVueVM, \"onLaunch\", options)\r\n                    next()\r\n                },\r\n\r\n                // Do something when app show.\r\n                onShow: function onShow(options) {\r\n                    if (options === void 0) options = {}\r\n\r\n                    mp.status = \"show\"\r\n                    this.globalData.appOptions = mp.appOptions = options\r\n                    callHook$1(rootVueVM, \"onShow\", options)\r\n                },\r\n\r\n                // Do something when app hide.\r\n                onHide: function onHide() {\r\n                    mp.status = \"hide\"\r\n                    callHook$1(rootVueVM, \"onHide\")\r\n                },\r\n\r\n                onError: function onError(err) {\r\n                    callHook$1(rootVueVM, \"onError\", err)\r\n                },\r\n                //fixed by xxxxxx\r\n                onUniNViewMessage: function onUniNViewMessage(e) {\r\n                    callHook$1(rootVueVM, \"onUniNViewMessage\", e)\r\n                }\r\n            })\r\n        } else if (mpType === \"component\") {\r\n            initMpProps(rootVueVM)\r\n\r\n            global.Component({\r\n                // 小程序原生的组件属性\r\n                properties: normalizeProperties(rootVueVM),\r\n                // 页面的初始数据\r\n                data: {\r\n                    $root: {}\r\n                },\r\n                methods: {\r\n                    handleProxy: function handleProxy(e) {\r\n                        return rootVueVM.$handleProxyWithVue(e)\r\n                    }\r\n                },\r\n                // mp lifecycle for vue\r\n                // 组件生命周期函数，在组件实例进入页面节点树时执行，注意此时不能调用 setData\r\n                created: function created() {\r\n                    mp.status = \"created\"\r\n                    mp.page = this\r\n                },\r\n                // 组件生命周期函数，在组件实例进入页面节点树时执行\r\n                attached: function attached() {\r\n                    mp.status = \"attached\"\r\n                    callHook$1(rootVueVM, \"attached\")\r\n                },\r\n                // 组件生命周期函数，在组件布局完成后执行，此时可以获取节点信息（使用 SelectorQuery ）\r\n                ready: function ready() {\r\n                    mp.status = \"ready\"\r\n\r\n                    callHook$1(rootVueVM, \"ready\")\r\n                    next()\r\n\r\n                    // 只有页面需要 setData\r\n                    rootVueVM.$nextTick(function() {\r\n                        rootVueVM._initDataToMP()\r\n                    })\r\n                },\r\n                // 组件生命周期函数，在组件实例被移动到节点树另一个位置时执行\r\n                moved: function moved() {\r\n                    callHook$1(rootVueVM, \"moved\")\r\n                },\r\n                // 组件生命周期函数，在组件实例被从页面节点树移除时执行\r\n                detached: function detached() {\r\n                    mp.status = \"detached\"\r\n                    callHook$1(rootVueVM, \"detached\")\r\n                }\r\n            })\r\n        } else {\r\n            var app = global.getApp()\r\n    \n            \r\n            global.Page({\r\n                // 页面的初始数据\r\n                data: {\r\n                    $root: {}\r\n                },\r\n\r\n                handleProxy: function handleProxy(e) {\r\n                    return rootVueVM.$handleProxyWithVue(e)\r\n                },\r\n\r\n                // mp lifecycle for vue\r\n                // 生命周期函数--监听页面加载\r\n                onLoad: function onLoad(query) {\r\n                    rootVueVM.__wxWebviewId__ = this.__wxWebviewId__//fixed by xxxxxx(createIntersectionObserver)\r\n                    mp.page = this\r\n                    mp.query = query\r\n                    mp.status = \"load\"\r\n                    getGlobalData(app, rootVueVM)\n                    //仅load时重置数据\n                    if (rootVueVM.$options && typeof rootVueVM.$options.data === \"function\") {\n                    \t\tObject.assign(rootVueVM.$data, rootVueVM.$options.data())\n                    }\r\n                    callHook$1(rootVueVM, \"onLoad\", query)\r\n                },\r\n\r\n                // 生命周期函数--监听页面显示\r\n                onShow: function onShow() {\n                    rootVueVM.__wxWebviewId__ = this.__wxWebviewId__//fixed by xxxxxx(createIntersectionObserver)\r\n                    mp.page = this\r\n                    mp.status = \"show\"\n                \r\n                    callHook$1(rootVueVM, \"onShow\")\n                    \n                    //   // 只有页面需要 setData\n                    rootVueVM.$nextTick(function () {\n                    \trootVueVM._initDataToMP();\n                    });\r\n                },\r\n\r\n                // 生命周期函数--监听页面初次渲染完成\r\n                onReady: function onReady() {\r\n                    mp.status = \"ready\"\r\n\r\n                    callHook$1(rootVueVM, \"onReady\")\r\n                    next()\r\n                },\r\n\r\n                // 生命周期函数--监听页面隐藏\r\n                onHide: function onHide() {\r\n                    mp.status = \"hide\"\r\n                    callHook$1(rootVueVM, \"onHide\")\r\n                },\r\n\r\n                // 生命周期函数--监听页面卸载\r\n                onUnload: function onUnload() {\r\n                    mp.status = \"unload\"\r\n                    callHook$1(rootVueVM, \"onUnload\")\r\n                    mp.page = null\r\n                },\r\n\r\n                // 页面相关事件处理函数--监听用户下拉动作\r\n                onPullDownRefresh: function onPullDownRefresh() {\r\n                    callHook$1(rootVueVM, \"onPullDownRefresh\")\r\n                },\r\n\r\n                // 页面上拉触底事件的处理函数\r\n                onReachBottom: function onReachBottom() {\r\n                    callHook$1(rootVueVM, \"onReachBottom\")\r\n                },\r\n\r\n                // 用户点击右上角分享\r\n                onShareAppMessage: rootVueVM.$options.onShareAppMessage\r\n                    ? function(options) {\r\n                          return callHook$1(rootVueVM, \"onShareAppMessage\", options)\r\n                      }\r\n                    : null,\r\n\r\n                // Do something when page scroll\r\n                onPageScroll: function onPageScroll(options) {\r\n                    callHook$1(rootVueVM, \"onPageScroll\", options)\r\n                },\r\n\r\n                // 当前是 tab 页时，点击 tab 时触发\r\n                onTabItemTap: function onTabItemTap(options) {\r\n                    callHook$1(rootVueVM, \"onTabItemTap\", options)\r\n                }\r\n            })\r\n        }\r\n    }\r\n\r\n    // 节流方法，性能优化\r\n    // 全局的命名约定，为了节省编译的包大小一律采取形象的缩写，说明如下。\r\n    // $c === $child\r\n    // $k === $comKey\r\n\r\n    // 新型的被拍平的数据结构\r\n    // {\r\n    //   $root: {\r\n    //     '1-1'{\r\n    //       // ... data\r\n    //     },\r\n    //     '1.2-1': {\r\n    //       // ... data1\r\n    //     },\r\n    //     '1.2-2': {\r\n    //       // ... data2\r\n    //     }\r\n    //   }\r\n    // }\r\n\r\n    function getVmData(vm) {\r\n        // 确保当前 vm 所有数据被同步\r\n        var dataKeys = [].concat(\r\n            Object.keys(vm._data || {}),\r\n            Object.keys(vm._props || {}),\r\n            Object.keys(vm._mpProps || {}),\r\n            Object.keys(vm._computedWatchers || {})\r\n        )\r\n        return dataKeys.reduce(function(res, key) {\r\n            res[key] = vm[key]\r\n            return res\r\n        }, {})\r\n    }\r\n\r\n    function getParentComKey(vm, res) {\r\n        if (res === void 0) res = []\r\n\r\n        var ref = vm || {}\r\n        var $parent = ref.$parent\r\n        if (!$parent) {\r\n            return res\r\n        }\r\n        res.unshift(getComKey($parent))\r\n        if ($parent.$parent) {\r\n            return getParentComKey($parent, res)\r\n        }\r\n        return res\r\n    }\r\n\r\n    function formatVmData(vm) {\r\n        var $p = getParentComKey(vm).join(\",\")\r\n        var $k = $p + ($p ? \",\" : \"\") + getComKey(vm)\r\n\r\n        // getVmData 这儿获取当前组件内的所有数据，包含 props、computed 的数据\r\n        // 改动 vue.runtime 所获的的核心能力\r\n        var data = Object.assign(getVmData(vm), {\r\n            $k: $k,\r\n            $kk: $k + \",\",\r\n            $p: $p\r\n        })\r\n        var key = \"$root.\" + $k\r\n        var res = {}\r\n        res[key] = data\r\n        return res\r\n    }\r\n\r\n    function collectVmData(vm, res) {\r\n        if (res === void 0) res = {}\r\n\r\n        var vms = vm.$children\r\n        if (vms && vms.length) {\r\n            vms.forEach(function(v) {\r\n                return collectVmData(v, res)\r\n            })\r\n        }\r\n        return Object.assign(res, formatVmData(vm))\r\n    }\r\n\r\n    /**\r\n     * 频率控制 返回函数连续调用时，func 执行频率限定为 次 / wait\r\n     * 自动合并 data\r\n     *\r\n     * @param  {function}   func      传入函数\r\n     * @param  {number}     wait      表示时间窗口的间隔\r\n     * @param  {object}     options   如果想忽略开始边界上的调用，传入{leading: false}。\r\n     *                                如果想忽略结尾边界上的调用，传入{trailing: false}\r\n     * @return {function}             返回客户调用函数\r\n     */\r\n    function throttle(func, wait, options) {\r\n        var context, args, result\r\n        var timeout = null\r\n        // 上次执行时间点\r\n        var previous = 0\r\n        if (!options) {\r\n            options = {}\r\n        }\r\n        // 延迟执行函数\r\n        function later() {\r\n            // 若设定了开始边界不执行选项，上次执行时间始终为0\r\n            previous = options.leading === false ? 0 : Date.now()\r\n            timeout = null\r\n            result = func.apply(context, args)\r\n            if (!timeout) {\r\n                context = args = null\r\n            }\r\n        }\r\n        return function(handle, data) {\r\n            var now = Date.now()\r\n            // 首次执行时，如果设定了开始边界不执行选项，将上次执行时间设定为当前时间。\r\n            if (!previous && options.leading === false) {\r\n                previous = now\r\n            }\r\n            // 延迟执行时间间隔\r\n            var remaining = wait - (now - previous)\r\n            context = this\r\n            args = args ? [handle, Object.assign(args[1], data)] : [handle, data]\r\n            // 延迟时间间隔remaining小于等于0，表示上次执行至此所间隔时间已经超过一个时间窗口\r\n            // remaining大于时间窗口wait，表示客户端系统时间被调整过\r\n            if (remaining <= 0 || remaining > wait) {\r\n                clearTimeout(timeout)\r\n                timeout = null\r\n                previous = now\r\n                result = func.apply(context, args)\r\n                if (!timeout) {\r\n                    context = args = null\r\n                }\r\n                // 如果延迟执行不存在，且没有设定结尾边界不执行选项\r\n            } else if (!timeout && options.trailing !== false) {\r\n                timeout = setTimeout(later, remaining)\r\n            }\r\n            return result\r\n        }\r\n    }\r\n\r\n    // 优化频繁的 setData: https://mp.weixin.qq.com/debug/wxadoc/dev/framework/performance/tips.html\r\n    var throttleSetData = throttle(function(handle, data) {\r\n        handle(data)\r\n    }, 50)\r\n\r\n    function getPage(vm) {\r\n        var rootVueVM = vm.$root\r\n        var ref = rootVueVM.$mp || {}\r\n        var mpType = ref.mpType\r\n        if (mpType === void 0) mpType = \"\"\r\n        var page = ref.page\r\n\r\n        // 优化后台态页面进行 setData: https://mp.weixin.qq.com/debug/wxadoc/dev/framework/performance/tips.html\r\n        if (mpType === \"app\" || !page || typeof page.setData !== \"function\") {\r\n            return\r\n        }\r\n        return page\r\n    }\r\n\r\n    // 优化每次 setData 都传递大量新数据\r\n    function updateDataToMP() {\r\n        var page = getPage(this)\r\n        if (!page) {\r\n            return\r\n        }\r\n\r\n        var data = formatVmData(this)\n        //fixed by xxxxxx\r\n        throttleSetData(page.setData.bind(page), JSON.parse(JSON.stringify(diff(data, page.data))))\r\n    }\r\n\r\n    function initDataToMP() {\r\n        var page = getPage(this)\r\n        if (!page) {\r\n            return\r\n        }\r\n\r\n        var data = collectVmData(this.$root)\n        //fixed by xxxxxx\r\n        page.setData(JSON.parse(JSON.stringify(data)))\r\n    }\r\n\r\n    function getVM(vm, comkeys) {\r\n        if (comkeys === void 0) comkeys = []\r\n\r\n        var keys = comkeys.slice(1)\r\n        if (!keys.length) {\r\n            return vm\r\n        }\r\n\r\n        return keys.reduce(function(res, key) {\r\n            var len = res.$children.length\r\n            for (var i = 0; i < len; i++) {\r\n                var v = res.$children[i]\r\n                var k = getComKey(v)\r\n                if (k === key) {\r\n                    res = v\r\n                    return res\r\n                }\r\n            }\r\n            return res\r\n        }, vm)\r\n    }\r\n\r\n    function getHandle(vnode, eventid, eventTypes) {\r\n        if (eventTypes === void 0) eventTypes = []\r\n\r\n        var res = []\r\n        if (!vnode || !vnode.tag) {\r\n            return res\r\n        }\r\n\r\n        var ref = vnode || {}\r\n        var data = ref.data\r\n        if (data === void 0) data = {}\r\n        var children = ref.children\r\n        if (children === void 0) children = []\r\n        var componentInstance = ref.componentInstance\r\n        if (componentInstance) {\r\n            // 增加 slot 情况的处理\r\n            // Object.values 会多增加几行编译后的代码\r\n            Object.keys(componentInstance.$slots).forEach(function(slotKey) {\r\n                var slot = componentInstance.$slots[slotKey]\r\n                var slots = Array.isArray(slot) ? slot : [slot]\r\n                slots.forEach(function(node) {\r\n                    res = res.concat(getHandle(node, eventid, eventTypes))\r\n                })\r\n            })\r\n        } else {\r\n            // 避免遍历超出当前组件的 vm\r\n            children.forEach(function(node) {\r\n                res = res.concat(getHandle(node, eventid, eventTypes))\r\n            })\r\n        }\r\n\r\n        var attrs = data.attrs\r\n        var on = data.on\r\n        if (attrs && on && attrs[\"eventid\"] === eventid) {\r\n            eventTypes.forEach(function(et) {\r\n                var h = on[et]\r\n                if (typeof h === \"function\") {\r\n                    res.push(h)\r\n                } else if (Array.isArray(h)) {\r\n                    res = res.concat(h)\r\n                }\r\n            })\r\n            return res\r\n        }\r\n\r\n        return res\r\n    }\r\n\r\n    function getWebEventByMP(e) {\r\n        var type = e.type\r\n        var timeStamp = e.timeStamp\r\n        var touches = e.touches\r\n        var detail = e.detail\r\n        if (detail === void 0) detail = {}\r\n        var target = e.target\r\n        if (target === void 0) target = {}\r\n        var currentTarget = e.currentTarget\r\n        if (currentTarget === void 0) currentTarget = {}\r\n        var x = detail.x\r\n        var y = detail.y\r\n        var event = {\r\n            mp: e,\r\n            type: type,\r\n            timeStamp: timeStamp,\r\n            x: x,\r\n            y: y,\r\n            target: Object.assign({}, target, detail),\r\n            detail: detail, //fixed by xxxxxx\r\n            currentTarget: currentTarget,\r\n            stopPropagation: noop,\r\n            preventDefault: noop\r\n        }\r\n\r\n        if (touches && touches.length) {\r\n            Object.assign(event, touches[0])\r\n            event.touches = touches\r\n        }\r\n        return event\r\n    }\r\n\r\n    function handleProxyWithVue(e) {\r\n        var rootVueVM = this.$root\r\n        var type = e.type\r\n        var target = e.target\r\n        if (target === void 0) target = {}\r\n        var currentTarget = e.currentTarget\r\n        var ref = currentTarget || target\r\n        var dataset = ref.dataset\r\n        if (dataset === void 0) dataset = {}\r\n        var comkey = dataset.comkey\r\n        if (comkey === void 0) comkey = \"\"\r\n        var eventid = dataset.eventid\r\n        var vm = getVM(rootVueVM, comkey.split(\",\"))\r\n\r\n        if (!vm) {\r\n            return\r\n        }\r\n\r\n        var webEventTypes = eventTypeMap[type] || [type]\r\n        var handles = getHandle(vm._vnode, eventid, webEventTypes)\r\n\r\n        // TODO, enevt 还需要处理更多\r\n        // https://developer.mozilla.org/zh-CN/docs/Web/API/Event\r\n        if (handles.length) {\r\n            var event = getWebEventByMP(e)\r\n            if (handles.length === 1) {\r\n                var result = handles[0](event)\r\n                return result\r\n            }\r\n            handles.forEach(function(h) {\r\n                return h(event)\r\n            })\r\n        }\r\n    }\r\n\r\n    // for platforms\r\n    // import config from 'core/config'\r\n    // install platform specific utils\r\n    Vue$3.config.mustUseProp = mustUseProp\r\n    Vue$3.config.isReservedTag = isReservedTag\r\n    Vue$3.config.isReservedAttr = isReservedAttr\r\n    Vue$3.config.getTagNamespace = getTagNamespace\r\n    Vue$3.config.isUnknownElement = isUnknownElement\r\n\r\n    // install platform patch function\r\n    Vue$3.prototype.__patch__ = patch\r\n\r\n    // public mount method\r\n    Vue$3.prototype.$mount = function(el, hydrating) {\r\n        var this$1 = this\r\n\r\n        // el = el && inBrowser ? query(el) : undefined\r\n        // return mountComponent(this, el, hydrating)\r\n\r\n        // 初始化小程序生命周期相关\r\n        var options = this.$options\r\n\r\n        if (options && (options.render || options.mpType)) {\r\n            var mpType = options.mpType\r\n            if (mpType === void 0) mpType = \"page\"\r\n            return this._initMP(mpType, function() {\r\n                return mountComponent(this$1, undefined, undefined)\r\n            })\r\n        } else {\r\n            return mountComponent(this, undefined, undefined)\r\n        }\r\n    }\r\n\r\n    // for mp\r\n    Vue$3.prototype._initMP = initMP\r\n\r\n    Vue$3.prototype.$updateDataToMP = updateDataToMP\r\n    Vue$3.prototype._initDataToMP = initDataToMP\r\n\r\n    Vue$3.prototype.$handleProxyWithVue = handleProxyWithVue\r\n\r\n    /*  */\r\n\r\n    return Vue$3\r\n})\n\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(7)))\n\n//////////////////\n// WEBPACK FOOTER\n// ./lib/mpvue/index.js\n// module id = 4\n// module chunks = 1\n\n");

/***/ }),

/***/ 43:
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader!./lib/css-var-loader.js!./node_modules/css-loader?{\"minimize\":false,\"sourceMap\":false}!./lib/mpvue-loader/lib/style-compiler?{\"vue\":true,\"id\":\"data-v-cfa73574\",\"scoped\":true,\"hasInlineConfig\":false}!./lib/css-upx-loader.js?{\"baseDpr\":1,\"rpxUnit\":1}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./node_modules/postcss-loader/lib?{\"config\":{\"path\":\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//.postcssrc.js\"},\"sourceMap\":true}!./node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!./lib/mpvue-loader/lib/selector.js?type=styles&index=0!D:/project/asgapp/components/uni-tabbar.vue\n// module id = 43\n// module chunks = 1\n\n");

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, \"__esModule\", { value: true });\n\n\n\n\n\n\n\n\n\n//自定义tabbar \nexports.default = {\n\tprops: {\n\t\ttabs: {\n\t\t\ttype: Array },\n\n\t\tcurrent: {\n\t\t\ttype: String } },\n\n\n\tdata: function data() {\n\t\treturn {\n\t\t\tactiveindex: 0 };\n\n\t},\n\tonLoad: function onLoad() {\n\t\tthis.activeindex = this.current;\n\t\tconsole.log('cc', this.current, this.activeindex);\n\t},\n\n\tmethods: {\n\t\tjump: function jump(page, url, index) {\n\t\t\tconsole.log('跳转路径', url, index, this.current);\n\t\t\tif (url == 'user' || url == 'index') {\n\t\t\t\tuni.reLaunch({\n\t\t\t\t\turl: '/pages/' + page + '/' + url });\n\n\t\t\t\treturn;\n\t\t\t}\n\t\t\tuni.redirectTo({\n\t\t\t\turl: './' + url });\n\n\t\t} } };\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)[\"default\"]))\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/babel-loader/lib?{\"babelrc\":false,\"retainLines\":true,\"presets\":[[\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-preset-env\",{\"modules\":\"commonjs\",\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"not ie <= 8\"]}}],\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-preset-stage-2\"],\"plugins\":[[\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-runtime\",{\"helpers\":false,\"polyfill\":false,\"regenerator\":true,\"moduleName\":\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-runtime\"}],\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-decorators-legacy\"]}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=script&index=0!D:/project/asgapp/components/uni-tabbar.vue\n// module id = 44\n// module chunks = 1\n\n//# sourceURL=uni-app:///components/uni-tabbar.vue?d521");

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('view', {\n    staticClass: \"content\"\n  }, _vm._l((_vm.tabs), function(item, index) {\n    return (_vm.tabs.length > 0) ? _c('view', {\n      key: index,\n      staticClass: \"wrap\",\n      attrs: {\n        \"eventid\": 'dIn-0-' + index\n      },\n      on: {\n        \"click\": function($event) {\n          _vm.jump(item.page, item.url, index)\n        }\n      }\n    }, [_c('uni-icon', {\n      staticClass: \"icon\",\n      attrs: {\n        \"size\": \"28\",\n        \"color\": _vm.current == index ? '#ff0000' : '#707070',\n        \"type\": item.type,\n        \"mpcomid\": '7Al-0-' + index\n      }\n    }), _c('text', {\n      class: _vm.current == index ? 'txt on' : 'txt'\n    }, [_vm._v(_vm._s(item.title))])], 1) : _vm._e()\n  }))\n}\nvar staticRenderFns = []\nrender._withStripped = true\nvar esExports = { render: render, staticRenderFns: staticRenderFns }\n/* harmony default export */ __webpack_exports__[\"a\"] = (esExports);\nif (false) {\n  module.hot.accept()\n  if (module.hot.data) {\n     require(\"vue-hot-reload-api\").rerender(\"data-v-cfa73574\", esExports)\n  }\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./lib/mpvue-loader/lib/template-compiler?{\"id\":\"data-v-cfa73574\",\"hasScoped\":true,\"preserveWhitespace\":false}!./lib/preprocessor-loader.js?{\"type\":\"html\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=template&index=0!D:/project/asgapp/components/uni-tabbar.vue\n// module id = 45\n// module chunks = 1\n\n");

/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_product_list_vue__ = __webpack_require__(127);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_product_list_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_product_list_vue__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_f7b29232_hasScoped_true_preserveWhitespace_false_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_product_list_vue__ = __webpack_require__(128);\nvar disposed = false\nfunction injectStyle (ssrContext) {\n  if (disposed) return\n  __webpack_require__(126)\n}\nvar normalizeComponent = __webpack_require__(0)\n/* script */\n\n/* template */\n\n/* styles */\nvar __vue_styles__ = injectStyle\n/* scopeId */\nvar __vue_scopeId__ = \"data-v-f7b29232\"\n/* moduleIdentifier (server only) */\nvar __vue_module_identifier__ = null\nvar Component = normalizeComponent(\n  __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_product_list_vue___default.a,\n  __WEBPACK_IMPORTED_MODULE_1__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_f7b29232_hasScoped_true_preserveWhitespace_false_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_product_list_vue__[\"a\" /* default */],\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"..\\\\..\\\\..\\\\..\\\\..\\\\project\\\\asgapp\\\\components\\\\product-list.vue\"\nif (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== \"default\" && key.substr(0, 2) !== \"__\"})) {console.error(\"named exports are not supported in *.vue files.\")}\nif (Component.options.functional) {console.error(\"[vue-loader] product-list.vue: functional components are not supported with templates, they should use render functions.\")}\n\n/* hot reload */\nif (false) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-f7b29232\", Component.options)\n  } else {\n    hotAPI.reload(\"data-v-f7b29232\", Component.options)\n  }\n  module.hot.dispose(function (data) {\n    disposed = true\n  })\n})()}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component.exports);\n\n\n//////////////////\n// WEBPACK FOOTER\n// D:/project/asgapp/components/product-list.vue\n// module id = 5\n// module chunks = 1\n\n");

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

eval("var g;\r\n\r\n// This works in non-strict mode\r\ng = (function() {\r\n\treturn this;\r\n})();\r\n\r\ntry {\r\n\t// This works if eval is allowed (see CSP)\r\n\tg = g || Function(\"return this\")() || (1,eval)(\"this\");\r\n} catch(e) {\r\n\t// This works if the window reference is available\r\n\tif(typeof window === \"object\")\r\n\t\tg = window;\r\n}\r\n\r\n// g can still be undefined, but nothing to do about it...\r\n// We return undefined, instead of nothing here, so it's\r\n// easier to handle this case. if(!global) { ...}\r\n\r\nmodule.exports = g;\r\n\n\n//////////////////\n// WEBPACK FOOTER\n// (webpack)/buildin/global.js\n// module id = 7\n// module chunks = 1\n\n");

/***/ })

});
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("common/manifest.js");
require("common/vendor.js");
global.webpackJsonp([2],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("var _extends = Object.assign || function (target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i];for (var key in source) {if (Object.prototype.hasOwnProperty.call(source, key)) {target[key] = source[key];}}}return target;};var _vue = __webpack_require__(4);var _vue2 = _interopRequireDefault(_vue);\nvar _App = __webpack_require__(8);var _App2 = _interopRequireDefault(_App);\nvar _uniIcon = __webpack_require__(11);var _uniIcon2 = _interopRequireDefault(_uniIcon);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\n\n_vue2.default.component('uni-icon', _uniIcon2.default);\n_vue2.default.config.productionTip = false;\n\n_App2.default.mpType = 'app';\n\nvar app = new _vue2.default(_extends({},\n_App2.default));\n\napp.$mount();\n\n//////////////////\n// WEBPACK FOOTER\n// D:/project/asgapp/main.js\n// module id = 6\n// module chunks = 2\n\n//# sourceURL=uni-app:///main.js?14d3");

/***/ }),
/* 7 */,
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(10);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_App_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_App_vue__);\nvar disposed = false\nfunction injectStyle (ssrContext) {\n  if (disposed) return\n  __webpack_require__(9)\n}\nvar normalizeComponent = __webpack_require__(0)\n/* script */\n\n/* template */\nvar __vue_template__ = null\n/* styles */\nvar __vue_styles__ = injectStyle\n/* scopeId */\nvar __vue_scopeId__ = null\n/* moduleIdentifier (server only) */\nvar __vue_module_identifier__ = null\nvar Component = normalizeComponent(\n  __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_App_vue___default.a,\n  __vue_template__,\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"..\\\\..\\\\..\\\\..\\\\..\\\\project\\\\asgapp\\\\App.vue\"\nif (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== \"default\" && key.substr(0, 2) !== \"__\"})) {console.error(\"named exports are not supported in *.vue files.\")}\n\n/* hot reload */\nif (false) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-7b71425a\", Component.options)\n  } else {\n    hotAPI.reload(\"data-v-7b71425a\", Component.options)\n  }\n  module.hot.dispose(function (data) {\n    disposed = true\n  })\n})()}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component.exports);\n\n\n//////////////////\n// WEBPACK FOOTER\n// D:/project/asgapp/App.vue\n// module id = 8\n// module chunks = 2\n\n");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader!./lib/css-var-loader.js!./node_modules/css-loader?{\"minimize\":false,\"sourceMap\":false}!./lib/mpvue-loader/lib/style-compiler?{\"vue\":true,\"id\":\"data-v-7b71425a\",\"scoped\":false,\"hasInlineConfig\":false}!./lib/css-upx-loader.js?{\"baseDpr\":1,\"rpxUnit\":1}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./node_modules/postcss-loader/lib?{\"config\":{\"path\":\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//.postcssrc.js\"},\"sourceMap\":true}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=styles&index=0!D:/project/asgapp/App.vue\n// module id = 9\n// module chunks = 2\n\n");

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default =\n{\n\tonLaunch: function onLaunch() {\n\t\tconsole.log('App Launch');\n\t},\n\tonShow: function onShow() {\n\t\tconsole.log('App Show');\n\t},\n\tonHide: function onHide() {\n\t\tconsole.log('App Hide');\n\t} };\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/babel-loader/lib?{\"babelrc\":false,\"retainLines\":true,\"presets\":[[\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-preset-env\",{\"modules\":\"commonjs\",\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"not ie <= 8\"]}}],\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-preset-stage-2\"],\"plugins\":[[\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-runtime\",{\"helpers\":false,\"polyfill\":false,\"regenerator\":true,\"moduleName\":\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-runtime\"}],\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-decorators-legacy\"]}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=script&index=0!D:/project/asgapp/App.vue\n// module id = 10\n// module chunks = 2\n\n//# sourceURL=uni-app:///App.vue?f3c2");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_uni_icon_vue__ = __webpack_require__(13);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_uni_icon_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_uni_icon_vue__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_e101d03e_hasScoped_false_preserveWhitespace_false_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_uni_icon_vue__ = __webpack_require__(14);\nvar disposed = false\nfunction injectStyle (ssrContext) {\n  if (disposed) return\n  __webpack_require__(12)\n}\nvar normalizeComponent = __webpack_require__(0)\n/* script */\n\n/* template */\n\n/* styles */\nvar __vue_styles__ = injectStyle\n/* scopeId */\nvar __vue_scopeId__ = null\n/* moduleIdentifier (server only) */\nvar __vue_module_identifier__ = null\nvar Component = normalizeComponent(\n  __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_uni_icon_vue___default.a,\n  __WEBPACK_IMPORTED_MODULE_1__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_e101d03e_hasScoped_false_preserveWhitespace_false_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_uni_icon_vue__[\"a\" /* default */],\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"..\\\\..\\\\..\\\\..\\\\..\\\\project\\\\asgapp\\\\components\\\\uni-icon.vue\"\nif (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== \"default\" && key.substr(0, 2) !== \"__\"})) {console.error(\"named exports are not supported in *.vue files.\")}\nif (Component.options.functional) {console.error(\"[vue-loader] uni-icon.vue: functional components are not supported with templates, they should use render functions.\")}\n\n/* hot reload */\nif (false) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-e101d03e\", Component.options)\n  } else {\n    hotAPI.reload(\"data-v-e101d03e\", Component.options)\n  }\n  module.hot.dispose(function (data) {\n    disposed = true\n  })\n})()}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component.exports);\n\n\n//////////////////\n// WEBPACK FOOTER\n// D:/project/asgapp/components/uni-icon.vue\n// module id = 11\n// module chunks = 2\n\n");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader!./lib/css-var-loader.js!./node_modules/css-loader?{\"minimize\":false,\"sourceMap\":false}!./lib/mpvue-loader/lib/style-compiler?{\"vue\":true,\"id\":\"data-v-e101d03e\",\"scoped\":false,\"hasInlineConfig\":false}!./lib/css-upx-loader.js?{\"baseDpr\":1,\"rpxUnit\":1}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./node_modules/postcss-loader/lib?{\"config\":{\"path\":\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//.postcssrc.js\"},\"sourceMap\":true}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=styles&index=0!D:/project/asgapp/components/uni-icon.vue\n// module id = 12\n// module chunks = 2\n\n");

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default =\n\n\n\n\n{\n    props: {\n        /**\n              * 图标类型\n              */\n        type: String,\n        /**\n                       * 图标颜色\n                       */\n        color: {\n            type: String,\n            default: '#f707070' },\n\n        /**\n                                    * 图标大小\n                                    */\n        size: [Number, String] },\n\n    computed: {\n        fontSize: function fontSize() {\n            return this.size + 'px';\n        } },\n\n    methods: {\n        onClick: function onClick() {\n            this.$emit('click');\n        } } };\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/babel-loader/lib?{\"babelrc\":false,\"retainLines\":true,\"presets\":[[\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-preset-env\",{\"modules\":\"commonjs\",\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"not ie <= 8\"]}}],\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-preset-stage-2\"],\"plugins\":[[\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-runtime\",{\"helpers\":false,\"polyfill\":false,\"regenerator\":true,\"moduleName\":\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-runtime\"}],\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-decorators-legacy\"]}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=script&index=0!D:/project/asgapp/components/uni-icon.vue\n// module id = 13\n// module chunks = 2\n\n//# sourceURL=uni-app:///components/uni-icon.vue?38d5");

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('view', {\n    staticClass: \"iconfont\",\n    class: ['icon-' + _vm.type],\n    style: ({\n      color: _vm.color,\n      'font-size': _vm.fontSize,\n      'line-height': 1\n    }),\n    attrs: {\n      \"eventid\": 'whD-0'\n    },\n    on: {\n      \"click\": function($event) {\n        _vm.onClick()\n      }\n    }\n  })\n}\nvar staticRenderFns = []\nrender._withStripped = true\nvar esExports = { render: render, staticRenderFns: staticRenderFns }\n/* harmony default export */ __webpack_exports__[\"a\"] = (esExports);\nif (false) {\n  module.hot.accept()\n  if (module.hot.data) {\n     require(\"vue-hot-reload-api\").rerender(\"data-v-e101d03e\", esExports)\n  }\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./lib/mpvue-loader/lib/template-compiler?{\"id\":\"data-v-e101d03e\",\"hasScoped\":false,\"preserveWhitespace\":false}!./lib/preprocessor-loader.js?{\"type\":\"html\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=template&index=0!D:/project/asgapp/components/uni-icon.vue\n// module id = 14\n// module chunks = 2\n\n");

/***/ })
],[6]);
});
require('app.js');


__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([0],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar _mpvuePageFactory = __webpack_require__(1);var _mpvuePageFactory2 = _interopRequireDefault(_mpvuePageFactory);\nvar _index = __webpack_require__(16);var _index2 = _interopRequireDefault(_index);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\nPage((0, _mpvuePageFactory2.default)(_index2.default));\n\n//////////////////\n// WEBPACK FOOTER\n// D:/project/asgapp/pages/index/index.js\n// module id = 15\n// module chunks = 0\n\n//# sourceURL=uni-app:///pages/index/index.js?0c47");

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(18);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_index_vue__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_d31acb48_hasScoped_true_preserveWhitespace_false_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(38);\nvar disposed = false\nfunction injectStyle (ssrContext) {\n  if (disposed) return\n  __webpack_require__(17)\n}\nvar normalizeComponent = __webpack_require__(0)\n/* script */\n\n/* template */\n\n/* styles */\nvar __vue_styles__ = injectStyle\n/* scopeId */\nvar __vue_scopeId__ = \"data-v-d31acb48\"\n/* moduleIdentifier (server only) */\nvar __vue_module_identifier__ = null\nvar Component = normalizeComponent(\n  __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_index_vue___default.a,\n  __WEBPACK_IMPORTED_MODULE_1__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_d31acb48_hasScoped_true_preserveWhitespace_false_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_index_vue__[\"a\" /* default */],\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"..\\\\..\\\\..\\\\..\\\\..\\\\project\\\\asgapp\\\\pages\\\\index\\\\index.vue\"\nif (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== \"default\" && key.substr(0, 2) !== \"__\"})) {console.error(\"named exports are not supported in *.vue files.\")}\nif (Component.options.functional) {console.error(\"[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.\")}\n\n/* hot reload */\nif (false) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-d31acb48\", Component.options)\n  } else {\n    hotAPI.reload(\"data-v-d31acb48\", Component.options)\n  }\n  module.hot.dispose(function (data) {\n    disposed = true\n  })\n})()}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component.exports);\n\n\n//////////////////\n// WEBPACK FOOTER\n// D:/project/asgapp/pages/index/index.vue\n// module id = 16\n// module chunks = 0\n\n");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader!./lib/css-var-loader.js!./node_modules/css-loader?{\"minimize\":false,\"sourceMap\":false}!./lib/mpvue-loader/lib/style-compiler?{\"vue\":true,\"id\":\"data-v-d31acb48\",\"scoped\":true,\"hasInlineConfig\":false}!./lib/css-upx-loader.js?{\"baseDpr\":1,\"rpxUnit\":1}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./node_modules/postcss-loader/lib?{\"config\":{\"path\":\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//.postcssrc.js\"},\"sourceMap\":true}!./node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!./lib/mpvue-loader/lib/selector.js?type=styles&index=0!D:/project/asgapp/pages/index/index.vue\n// module id = 17\n// module chunks = 0\n\n");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, \"__esModule\", { value: true });var _regenerator = __webpack_require__(19);var _regenerator2 = _interopRequireDefault(_regenerator);\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _uniLoadMore = __webpack_require__(22);var _uniLoadMore2 = _interopRequireDefault(_uniLoadMore);\nvar _line = __webpack_require__(26);var _line2 = _interopRequireDefault(_line);\nvar _goodList = __webpack_require__(30);var _goodList2 = _interopRequireDefault(_goodList);\nvar _goTop = __webpack_require__(34);var _goTop2 = _interopRequireDefault(_goTop);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _asyncToGenerator(fn) {return function () {var gen = fn.apply(this, arguments);return new Promise(function (resolve, reject) {function step(key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {return Promise.resolve(value).then(function (value) {step(\"next\", value);}, function (err) {step(\"throw\", err);});}}return step(\"next\");});};}exports.default =\n{\n\tcomponents: {\n\t\tuniLoadMore: _uniLoadMore2.default,\n\t\tdividLine: _line2.default,\n\t\tgoodList: _goodList2.default,\n\t\tgoTop: _goTop2.default },\n\n\tcomputed: {\n\t\tup: function up() {\n\t\t\tvar color = this.isup == 0 ? '#ff0000' : '#ccc';\n\t\t\treturn color;\n\t\t},\n\t\tdown: function down() {\n\t\t\tvar color = this.isup == 1 ? '#ff0000' : '#ccc';\n\t\t\treturn color;\n\t\t} },\n\n\tdata: function data() {\n\t\treturn {\n\t\t\tisShow: false,\n\t\t\tglobScrollTop: 0,\n\t\t\tuni: \"\",\n\t\t\tswiper: \"\",\n\t\t\ttab: \"\",\n\t\t\ttimer: null,\n\t\t\tactive: 0,\n\t\t\tisup: 3,\n\t\t\tcount: 0,\n\t\t\tisfixed: false,\n\t\t\tproductList: [{\n\t\t\t\timage: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product1.jpg',\n\t\t\t\ttitle: 'Apple iPhone X 256GB 深空灰色 移动联通电信4G手机',\n\t\t\t\toriginalPrice: 9999,\n\t\t\t\tfavourPrice: 8888,\n\t\t\t\ttip: '自营' },\n\n\t\t\t{\n\t\t\t\timage: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product2.jpg',\n\t\t\t\ttitle: 'Apple iPad 平板电脑 2018年新款9.7英寸',\n\t\t\t\toriginalPrice: 3499,\n\t\t\t\tfavourPrice: 3399,\n\t\t\t\ttip: '优惠' },\n\n\t\t\t{\n\t\t\t\timage: 'https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product3.jpg',\n\t\t\t\ttitle: 'Apple MacBook Pro 13.3英寸笔记本电脑（2017款Core i5处理器/8GB内存/256GB硬盘 MupxT2CH/A）',\n\t\t\t\toriginalPrice: 12999,\n\t\t\t\tfavourPrice: 10688,\n\t\t\t\ttip: '秒杀' }],\n\n\n\t\t\tmsg: [\n\t\t\t'uni-app行业峰会频频亮相，开发者反响热烈',\n\t\t\t'DCloud完成B2轮融资，uni-app震撼发布',\n\t\t\t'36氪热文榜推荐、CSDN公号推荐 DCloud CEO文章'],\n\n\t\t\timagelist: [{\n\t\t\t\ttitle: 1,\n\t\t\t\tsrc: \"https://img.alicdn.com/tps/i4/TB1yNlhhAvoK1RjSZFwSuwiCFXa.jpg_q90_.webp\" },\n\n\t\t\t{\n\t\t\t\ttitle: 2,\n\t\t\t\tsrc: \"https://aecpm.alicdn.com/simba/img/TB1JNHwKFXXXXafXVXXSutbFXXX.jpg\" },\n\n\t\t\t{\n\t\t\t\ttitle: 3,\n\t\t\t\tsrc: \"https://aecpm.alicdn.com/simba/img/TB1XotJXQfb_uJkSnhJSuvdDVXa.jpg\" },\n\n\t\t\t{\n\t\t\t\ttitle: 3,\n\t\t\t\tsrc: \"https://aecpm.alicdn.com/simba/img/TB1XotJXQfb_uJkSnhJSuvdDVXa.jpg\" },\n\n\t\t\t{\n\t\t\t\ttitle: 3,\n\t\t\t\tsrc: \"https://aecpm.alicdn.com/simba/img/TB1XotJXQfb_uJkSnhJSuvdDVXa.jpg\" }],\n\n\n\t\t\titemList: [\n\t\t\t'itemadfasdf1',\n\t\t\t'itemasdfasdf2',\n\t\t\t'itemdfasdfasdfsa3'],\n\n\t\t\tduration: 300,\n\t\t\tloadingText: {\n\t\t\t\tcontentrefresh: \"正在加载...\",\n\t\t\t\tcontentnomore: \"没有更多数据了\" },\n\n\t\t\tscrollLeft: 0,\n\t\t\tisClickChange: false,\n\t\t\ttabIndex: 0,\n\t\t\ttabBars: [{\n\t\t\t\tname: '关注',\n\t\t\t\tid: 'guanzhu' },\n\n\t\t\t{\n\t\t\t\tname: '推荐',\n\t\t\t\tid: 'tuijian' },\n\n\t\t\t{\n\t\t\t\tname: '体育',\n\t\t\t\tid: 'tiyu' },\n\n\t\t\t{\n\t\t\t\tname: '热点',\n\t\t\t\tid: 'redian' },\n\n\t\t\t{\n\t\t\t\tname: '财经',\n\t\t\t\tid: 'caijing' }] };\n\n\n\n\t},\n\tcreated: function created() {\n\t\tconsole.log('cc');\n\n\t},\n\tmethods: {\n\t\tgoTop: function goTop() {\n\t\t\tthis.globScrollTop = 0;\n\t\t},\n\t\t//条件筛选滑动事件监听 (this._delayfun)\n\t\t_screensticky: function _screensticky(ev) {\n\t\t\tvar target = ev.target || ev.srcElement;\n\t\t\tvar scrollTop = target.scrollTop;\n\t\t\tthis.globScrollTop = scrollTop;\n\t\t\tif (scrollTop > 670) {\n\t\t\t\tthis.isfixed = true;\n\t\t\t\tthis.isShow = true;\n\t\t\t\t// console.log('1')\n\t\t\t} else {\n\t\t\t\tthis.isfixed = false;\n\t\t\t\tthis.isShow = false;\n\t\t\t\t// console.log('2')\n\t\t\t}\n\t\t},\n\t\tjump: function jump() {\n\t\t\tuni.navigateTo({\n\t\t\t\turl: '/pages/common/goods-detail'\n\t\t\t\t// url: '/pages/common/good'\n\t\t\t});\n\t\t},\n\t\t//条件筛选\n\t\tscreentap: function screentap(index) {\n\t\t\tif (index == 3) {\n\t\t\t\tthis.active = index;\n\t\t\t\tthis.isup = this.count % 2 == 0 ? this.isup = 0 : this.isup = 1;\n\t\t\t\tthis.count++;\n\t\t\t\treturn;\n\t\t\t}\n\t\t\tthis.active = index;\n\t\t\tthis.isup = 3;\n\t\t},\n\t\tchangeswiper: function changeswiper(e) {\n\t\t\te.stopPropagation();\n\t\t\te.preventDefault();\n\t\t},\n\t\t//滑动swiper 改变内容\n\t\tchangeTab: function changeTab(e) {var _this = this;return _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {var index, tabBar, tabBarScrollLeft, width, i, result, winWidth, nowElement, nowWidth;return _regenerator2.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:\n\t\t\t\t\t\t\t\tindex = e.target.current;if (!\n\t\t\t\t\t\t\t\t_this.isClickChange) {_context.next = 5;break;}\n\t\t\t\t\t\t\t\t_this.tabIndex = index;\n\t\t\t\t\t\t\t\t_this.isClickChange = false;return _context.abrupt('return');case 5:_context.next = 7;return (\n\n\n\t\t\t\t\t\t\t\t\t_this.getElSize(\"tab-bar\"));case 7:tabBar = _context.sent;\n\t\t\t\t\t\t\t\ttabBarScrollLeft = tabBar.scrollLeft;\n\t\t\t\t\t\t\t\twidth = 0;\n\n\t\t\t\t\t\t\t\ti = 0;case 11:if (!(i < index)) {_context.next = 19;break;}_context.next = 14;return (\n\t\t\t\t\t\t\t\t\t_this.getElSize(_this.tabBars[i].id));case 14:result = _context.sent;\n\t\t\t\t\t\t\t\twidth += result.width;case 16:i++;_context.next = 11;break;case 19:\n\n\t\t\t\t\t\t\t\twinWidth = uni.getSystemInfoSync().windowWidth;_context.next = 22;return (\n\t\t\t\t\t\t\t\t\t_this.getElSize(_this.tabBars[index].id));case 22:nowElement = _context.sent;\n\t\t\t\t\t\t\t\tnowWidth = nowElement.width;\n\t\t\t\t\t\t\t\tif (width + nowWidth - tabBarScrollLeft > winWidth) {\n\t\t\t\t\t\t\t\t\t_this.scrollLeft = width + nowWidth - winWidth;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\tif (width < tabBarScrollLeft) {\n\t\t\t\t\t\t\t\t\t_this.scrollLeft = width;\n\t\t\t\t\t\t\t\t}\n\t\t\t\t\t\t\t\t_this.isClickChange = false;\n\t\t\t\t\t\t\t\t_this.tabIndex = index; //一旦访问data就会出问题\n\t\t\t\t\t\t\tcase 28:case 'end':return _context.stop();}}}, _callee, _this);}))();},\n\t\tgetElSize: function getElSize(id) {//得到元素的size\n\t\t\treturn new Promise(function (res, rej) {\n\t\t\t\tuni.createSelectorQuery().select(\"#\" + id).fields({\n\t\t\t\t\tsize: true,\n\t\t\t\t\tscrollOffset: true },\n\t\t\t\tfunction (data) {\n\t\t\t\t\tres(data);\n\t\t\t\t}).exec();\n\t\t\t});\n\t\t},\n\t\ttapTab: function tapTab(e) {var _this2 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {var tabBar, tabBarScrollLeft;return _regenerator2.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:if (!(\n\t\t\t\t\t\t\t\t_this2.tabIndex === e.target.dataset.current)) {_context2.next = 4;break;}return _context2.abrupt('return',\n\t\t\t\t\t\t\t\tfalse);case 4:_context2.next = 6;return (\n\n\t\t\t\t\t\t\t\t\t_this2.getElSize(\"tab-bar\"));case 6:tabBar = _context2.sent;\n\t\t\t\t\t\t\t\ttabBarScrollLeft = tabBar.scrollLeft; //点击的时候记录并设置scrollLeft\n\t\t\t\t\t\t\t\t_this2.scrollLeft = tabBarScrollLeft;\n\t\t\t\t\t\t\t\t_this2.isClickChange = true;\n\t\t\t\t\t\t\t\t_this2.tabIndex = e.target.dataset.current;case 11:case 'end':return _context2.stop();}}}, _callee2, _this2);}))();\n\n\t\t} } };\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)[\"default\"]))\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/babel-loader/lib?{\"babelrc\":false,\"retainLines\":true,\"presets\":[[\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-preset-env\",{\"modules\":\"commonjs\",\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"not ie <= 8\"]}}],\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-preset-stage-2\"],\"plugins\":[[\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-runtime\",{\"helpers\":false,\"polyfill\":false,\"regenerator\":true,\"moduleName\":\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-runtime\"}],\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-decorators-legacy\"]}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=script&index=0!D:/project/asgapp/pages/index/index.vue\n// module id = 18\n// module chunks = 0\n\n//# sourceURL=uni-app:///pages/index/index.vue?f72f");

/***/ }),
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_uni_load_more_vue__ = __webpack_require__(24);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_uni_load_more_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_uni_load_more_vue__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_2306e124_hasScoped_false_preserveWhitespace_false_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_uni_load_more_vue__ = __webpack_require__(25);\nvar disposed = false\nfunction injectStyle (ssrContext) {\n  if (disposed) return\n  __webpack_require__(23)\n}\nvar normalizeComponent = __webpack_require__(0)\n/* script */\n\n/* template */\n\n/* styles */\nvar __vue_styles__ = injectStyle\n/* scopeId */\nvar __vue_scopeId__ = null\n/* moduleIdentifier (server only) */\nvar __vue_module_identifier__ = null\nvar Component = normalizeComponent(\n  __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_uni_load_more_vue___default.a,\n  __WEBPACK_IMPORTED_MODULE_1__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_2306e124_hasScoped_false_preserveWhitespace_false_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_uni_load_more_vue__[\"a\" /* default */],\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"..\\\\..\\\\..\\\\..\\\\..\\\\project\\\\asgapp\\\\components\\\\uni-load-more.vue\"\nif (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== \"default\" && key.substr(0, 2) !== \"__\"})) {console.error(\"named exports are not supported in *.vue files.\")}\nif (Component.options.functional) {console.error(\"[vue-loader] uni-load-more.vue: functional components are not supported with templates, they should use render functions.\")}\n\n/* hot reload */\nif (false) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-2306e124\", Component.options)\n  } else {\n    hotAPI.reload(\"data-v-2306e124\", Component.options)\n  }\n  module.hot.dispose(function (data) {\n    disposed = true\n  })\n})()}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component.exports);\n\n\n//////////////////\n// WEBPACK FOOTER\n// D:/project/asgapp/components/uni-load-more.vue\n// module id = 22\n// module chunks = 0\n\n");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader!./lib/css-var-loader.js!./node_modules/css-loader?{\"minimize\":false,\"sourceMap\":false}!./lib/mpvue-loader/lib/style-compiler?{\"vue\":true,\"id\":\"data-v-2306e124\",\"scoped\":false,\"hasInlineConfig\":false}!./lib/css-upx-loader.js?{\"baseDpr\":1,\"rpxUnit\":1}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./node_modules/postcss-loader/lib?{\"config\":{\"path\":\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//.postcssrc.js\"},\"sourceMap\":true}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=styles&index=0!D:/project/asgapp/components/uni-load-more.vue\n// module id = 23\n// module chunks = 0\n\n");

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default =\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n{\n\tname: \"load-more\",\n\tprops: {\n\t\tloadingType: {\n\t\t\t//上拉的状态：0-loading前；1-loading中；2-没有更多了\n\t\t\ttype: Number,\n\t\t\tdefault: 0 },\n\n\t\tshowImage: {\n\t\t\ttype: Boolean,\n\t\t\tdefault: true },\n\n\t\tcolor: {\n\t\t\ttype: String,\n\t\t\tdefault: \"#777777\" },\n\n\t\tcontentText: {\n\t\t\ttype: Object,\n\t\t\tdefault: function _default() {\n\t\t\t\treturn {\n\t\t\t\t\tcontentdown: \"上拉显示更多\",\n\t\t\t\t\tcontentrefresh: \"正在加载...\",\n\t\t\t\t\tcontentnomore: \"没有更多数据了\" };\n\n\t\t\t} } },\n\n\n\tdata: function data() {\n\t\treturn {};\n\t} };\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/babel-loader/lib?{\"babelrc\":false,\"retainLines\":true,\"presets\":[[\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-preset-env\",{\"modules\":\"commonjs\",\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"not ie <= 8\"]}}],\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-preset-stage-2\"],\"plugins\":[[\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-runtime\",{\"helpers\":false,\"polyfill\":false,\"regenerator\":true,\"moduleName\":\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-runtime\"}],\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-decorators-legacy\"]}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=script&index=0!D:/project/asgapp/components/uni-load-more.vue\n// module id = 24\n// module chunks = 0\n\n//# sourceURL=uni-app:///components/uni-load-more.vue?4221");

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('view', {\n    staticClass: \"load-more\"\n  }, [_c('view', {\n    directives: [{\n      name: \"show\",\n      rawName: \"v-show\",\n      value: (_vm.loadingType === 1 && _vm.showImage),\n      expression: \"loadingType === 1 && showImage\"\n    }],\n    staticClass: \"loading-img\"\n  }, [_c('view', {\n    staticClass: \"load1\"\n  }, [_c('view', {\n    style: ({\n      background: _vm.color\n    })\n  }), _c('view', {\n    style: ({\n      background: _vm.color\n    })\n  }), _c('view', {\n    style: ({\n      background: _vm.color\n    })\n  }), _c('view', {\n    style: ({\n      background: _vm.color\n    })\n  })]), _c('view', {\n    staticClass: \"load2\"\n  }, [_c('view', {\n    style: ({\n      background: _vm.color\n    })\n  }), _c('view', {\n    style: ({\n      background: _vm.color\n    })\n  }), _c('view', {\n    style: ({\n      background: _vm.color\n    })\n  }), _c('view', {\n    style: ({\n      background: _vm.color\n    })\n  })]), _c('view', {\n    staticClass: \"load3\"\n  }, [_c('view', {\n    style: ({\n      background: _vm.color\n    })\n  }), _c('view', {\n    style: ({\n      background: _vm.color\n    })\n  }), _c('view', {\n    style: ({\n      background: _vm.color\n    })\n  }), _c('view', {\n    style: ({\n      background: _vm.color\n    })\n  })])]), _c('text', {\n    staticClass: \"loading-text\",\n    style: ({\n      color: _vm.color\n    })\n  }, [_vm._v(_vm._s(_vm.loadingType === 0 ? _vm.contentText.contentdown : (_vm.loadingType === 1 ? _vm.contentText.contentrefresh : _vm.contentText.contentnomore)))])])\n}\nvar staticRenderFns = []\nrender._withStripped = true\nvar esExports = { render: render, staticRenderFns: staticRenderFns }\n/* harmony default export */ __webpack_exports__[\"a\"] = (esExports);\nif (false) {\n  module.hot.accept()\n  if (module.hot.data) {\n     require(\"vue-hot-reload-api\").rerender(\"data-v-2306e124\", esExports)\n  }\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./lib/mpvue-loader/lib/template-compiler?{\"id\":\"data-v-2306e124\",\"hasScoped\":false,\"preserveWhitespace\":false}!./lib/preprocessor-loader.js?{\"type\":\"html\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=template&index=0!D:/project/asgapp/components/uni-load-more.vue\n// module id = 25\n// module chunks = 0\n\n");

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_line_vue__ = __webpack_require__(28);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_line_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_line_vue__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_64118b1f_hasScoped_false_preserveWhitespace_false_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_line_vue__ = __webpack_require__(29);\nvar disposed = false\nfunction injectStyle (ssrContext) {\n  if (disposed) return\n  __webpack_require__(27)\n}\nvar normalizeComponent = __webpack_require__(0)\n/* script */\n\n/* template */\n\n/* styles */\nvar __vue_styles__ = injectStyle\n/* scopeId */\nvar __vue_scopeId__ = null\n/* moduleIdentifier (server only) */\nvar __vue_module_identifier__ = null\nvar Component = normalizeComponent(\n  __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_line_vue___default.a,\n  __WEBPACK_IMPORTED_MODULE_1__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_64118b1f_hasScoped_false_preserveWhitespace_false_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_line_vue__[\"a\" /* default */],\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"..\\\\..\\\\..\\\\..\\\\..\\\\project\\\\asgapp\\\\components\\\\line.vue\"\nif (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== \"default\" && key.substr(0, 2) !== \"__\"})) {console.error(\"named exports are not supported in *.vue files.\")}\nif (Component.options.functional) {console.error(\"[vue-loader] line.vue: functional components are not supported with templates, they should use render functions.\")}\n\n/* hot reload */\nif (false) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-64118b1f\", Component.options)\n  } else {\n    hotAPI.reload(\"data-v-64118b1f\", Component.options)\n  }\n  module.hot.dispose(function (data) {\n    disposed = true\n  })\n})()}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component.exports);\n\n\n//////////////////\n// WEBPACK FOOTER\n// D:/project/asgapp/components/line.vue\n// module id = 26\n// module chunks = 0\n\n");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader!./lib/css-var-loader.js!./node_modules/css-loader?{\"minimize\":false,\"sourceMap\":false}!./lib/mpvue-loader/lib/style-compiler?{\"vue\":true,\"id\":\"data-v-64118b1f\",\"scoped\":false,\"hasInlineConfig\":false}!./lib/css-upx-loader.js?{\"baseDpr\":1,\"rpxUnit\":1}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./node_modules/postcss-loader/lib?{\"config\":{\"path\":\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//.postcssrc.js\"},\"sourceMap\":true}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=styles&index=0!D:/project/asgapp/components/line.vue\n// module id = 27\n// module chunks = 0\n\n");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default =\n\n\n\n{\n\tprops: {\n\t\theight: String },\n\n\tcomputed: {\n\t\theightSize: function heightSize() {\n\t\t\treturn this.height + \"px\";\n\t\t} } };\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/babel-loader/lib?{\"babelrc\":false,\"retainLines\":true,\"presets\":[[\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-preset-env\",{\"modules\":\"commonjs\",\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"not ie <= 8\"]}}],\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-preset-stage-2\"],\"plugins\":[[\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-runtime\",{\"helpers\":false,\"polyfill\":false,\"regenerator\":true,\"moduleName\":\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-runtime\"}],\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-decorators-legacy\"]}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=script&index=0!D:/project/asgapp/components/line.vue\n// module id = 28\n// module chunks = 0\n\n//# sourceURL=uni-app:///components/line.vue?bfc7");

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('view', {\n    staticClass: \"line\",\n    style: ({\n      background: '#eee',\n      'width': '100%',\n      'height': _vm.heightSize\n    })\n  })\n}\nvar staticRenderFns = []\nrender._withStripped = true\nvar esExports = { render: render, staticRenderFns: staticRenderFns }\n/* harmony default export */ __webpack_exports__[\"a\"] = (esExports);\nif (false) {\n  module.hot.accept()\n  if (module.hot.data) {\n     require(\"vue-hot-reload-api\").rerender(\"data-v-64118b1f\", esExports)\n  }\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./lib/mpvue-loader/lib/template-compiler?{\"id\":\"data-v-64118b1f\",\"hasScoped\":false,\"preserveWhitespace\":false}!./lib/preprocessor-loader.js?{\"type\":\"html\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=template&index=0!D:/project/asgapp/components/line.vue\n// module id = 29\n// module chunks = 0\n\n");

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_good_list_vue__ = __webpack_require__(32);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_good_list_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_good_list_vue__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_0bcbcc93_hasScoped_true_preserveWhitespace_false_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_good_list_vue__ = __webpack_require__(33);\nvar disposed = false\nfunction injectStyle (ssrContext) {\n  if (disposed) return\n  __webpack_require__(31)\n}\nvar normalizeComponent = __webpack_require__(0)\n/* script */\n\n/* template */\n\n/* styles */\nvar __vue_styles__ = injectStyle\n/* scopeId */\nvar __vue_scopeId__ = \"data-v-0bcbcc93\"\n/* moduleIdentifier (server only) */\nvar __vue_module_identifier__ = null\nvar Component = normalizeComponent(\n  __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_good_list_vue___default.a,\n  __WEBPACK_IMPORTED_MODULE_1__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_0bcbcc93_hasScoped_true_preserveWhitespace_false_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_good_list_vue__[\"a\" /* default */],\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"..\\\\..\\\\..\\\\..\\\\..\\\\project\\\\asgapp\\\\components\\\\good-list.vue\"\nif (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== \"default\" && key.substr(0, 2) !== \"__\"})) {console.error(\"named exports are not supported in *.vue files.\")}\nif (Component.options.functional) {console.error(\"[vue-loader] good-list.vue: functional components are not supported with templates, they should use render functions.\")}\n\n/* hot reload */\nif (false) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-0bcbcc93\", Component.options)\n  } else {\n    hotAPI.reload(\"data-v-0bcbcc93\", Component.options)\n  }\n  module.hot.dispose(function (data) {\n    disposed = true\n  })\n})()}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component.exports);\n\n\n//////////////////\n// WEBPACK FOOTER\n// D:/project/asgapp/components/good-list.vue\n// module id = 30\n// module chunks = 0\n\n");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader!./lib/css-var-loader.js!./node_modules/css-loader?{\"minimize\":false,\"sourceMap\":false}!./lib/mpvue-loader/lib/style-compiler?{\"vue\":true,\"id\":\"data-v-0bcbcc93\",\"scoped\":true,\"hasInlineConfig\":false}!./lib/css-upx-loader.js?{\"baseDpr\":1,\"rpxUnit\":1}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./node_modules/postcss-loader/lib?{\"config\":{\"path\":\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//.postcssrc.js\"},\"sourceMap\":true}!./node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!./lib/mpvue-loader/lib/selector.js?type=styles&index=0!D:/project/asgapp/components/good-list.vue\n// module id = 31\n// module chunks = 0\n\n");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default =\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n{\n\tcomputed: {\n\t\tfontSize: function fontSize() {\n\t\t\treturn this.size + 'px';\n\t\t} },\n\n\tmethods: {\n\t\tonClick: function onClick() {\n\t\t\tthis.$emit('click');\n\t\t} } };\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/babel-loader/lib?{\"babelrc\":false,\"retainLines\":true,\"presets\":[[\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-preset-env\",{\"modules\":\"commonjs\",\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"not ie <= 8\"]}}],\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-preset-stage-2\"],\"plugins\":[[\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-runtime\",{\"helpers\":false,\"polyfill\":false,\"regenerator\":true,\"moduleName\":\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-runtime\"}],\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-decorators-legacy\"]}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=script&index=0!D:/project/asgapp/components/good-list.vue\n// module id = 32\n// module chunks = 0\n\n//# sourceURL=uni-app:///components/good-list.vue?2d47");

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _vm._m(0)\n}\nvar staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('view', {\n    staticClass: \"goods-wrap\"\n  }, [_c('view', {\n    staticClass: \"goods-img\"\n  }, [_c('image', {\n    staticClass: \"img\",\n    attrs: {\n      \"mode\": \"aspectFit\",\n      \"src\": \"https://img-cdn-qiniu.dcloud.net.cn/uploads/example/product3.jpg\"\n    }\n  })]), _c('view', {\n    staticClass: \"desc\"\n  }, [_c('view', {\n    staticClass: \"shop-title\"\n  }, [_c('image', {\n    staticClass: \"logo\",\n    attrs: {\n      \"mode\": \"aspectFit\",\n      \"src\": \"../../static/tm.png\"\n    }\n  }), _c('view', {\n    staticClass: \"txt\"\n  }, [_vm._v(\"大码女装限时发售大码女装限时发售大码女装限时发售大码女装限时发售\")])]), _c('view', {\n    staticClass: \"shop-desc\"\n  }, [_c('view', {\n    staticClass: \"price-wrap\"\n  }, [_c('view', {\n    staticClass: \"present\"\n  }, [_vm._v(\"￥15\")]), _c('view', {\n    staticClass: \"original\"\n  }, [_vm._v(\"原价￥16\")])]), _c('view', {\n    staticClass: \"coupon-wrap\"\n  }, [_c('view', {\n    staticClass: \"num\"\n  }, [_vm._v(\"521523人已购\")]), _c('view', {\n    staticClass: \"value\"\n  }, [_vm._v(\"5元券\")])])])])])\n}]\nrender._withStripped = true\nvar esExports = { render: render, staticRenderFns: staticRenderFns }\n/* harmony default export */ __webpack_exports__[\"a\"] = (esExports);\nif (false) {\n  module.hot.accept()\n  if (module.hot.data) {\n     require(\"vue-hot-reload-api\").rerender(\"data-v-0bcbcc93\", esExports)\n  }\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./lib/mpvue-loader/lib/template-compiler?{\"id\":\"data-v-0bcbcc93\",\"hasScoped\":true,\"preserveWhitespace\":false}!./lib/preprocessor-loader.js?{\"type\":\"html\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=template&index=0!D:/project/asgapp/components/good-list.vue\n// module id = 33\n// module chunks = 0\n\n");

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_go_top_vue__ = __webpack_require__(36);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_go_top_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_go_top_vue__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_fc63994a_hasScoped_true_preserveWhitespace_false_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_go_top_vue__ = __webpack_require__(37);\nvar disposed = false\nfunction injectStyle (ssrContext) {\n  if (disposed) return\n  __webpack_require__(35)\n}\nvar normalizeComponent = __webpack_require__(0)\n/* script */\n\n/* template */\n\n/* styles */\nvar __vue_styles__ = injectStyle\n/* scopeId */\nvar __vue_scopeId__ = \"data-v-fc63994a\"\n/* moduleIdentifier (server only) */\nvar __vue_module_identifier__ = null\nvar Component = normalizeComponent(\n  __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_go_top_vue___default.a,\n  __WEBPACK_IMPORTED_MODULE_1__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_fc63994a_hasScoped_true_preserveWhitespace_false_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_go_top_vue__[\"a\" /* default */],\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"..\\\\..\\\\..\\\\..\\\\..\\\\project\\\\asgapp\\\\components\\\\go-top.vue\"\nif (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== \"default\" && key.substr(0, 2) !== \"__\"})) {console.error(\"named exports are not supported in *.vue files.\")}\nif (Component.options.functional) {console.error(\"[vue-loader] go-top.vue: functional components are not supported with templates, they should use render functions.\")}\n\n/* hot reload */\nif (false) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-fc63994a\", Component.options)\n  } else {\n    hotAPI.reload(\"data-v-fc63994a\", Component.options)\n  }\n  module.hot.dispose(function (data) {\n    disposed = true\n  })\n})()}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component.exports);\n\n\n//////////////////\n// WEBPACK FOOTER\n// D:/project/asgapp/components/go-top.vue\n// module id = 34\n// module chunks = 0\n\n");

/***/ }),
/* 35 */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader!./lib/css-var-loader.js!./node_modules/css-loader?{\"minimize\":false,\"sourceMap\":false}!./lib/mpvue-loader/lib/style-compiler?{\"vue\":true,\"id\":\"data-v-fc63994a\",\"scoped\":true,\"hasInlineConfig\":false}!./lib/css-upx-loader.js?{\"baseDpr\":1,\"rpxUnit\":1}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./node_modules/postcss-loader/lib?{\"config\":{\"path\":\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//.postcssrc.js\"},\"sourceMap\":true}!./node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!./lib/mpvue-loader/lib/selector.js?type=styles&index=0!D:/project/asgapp/components/go-top.vue\n// module id = 35\n// module chunks = 0\n\n");

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default =\n\n\n\n\n\n{\n\tprops: {\n\t\tisShow: {\n\t\t\ttype: Boolean,\n\t\t\tdefault: false } },\n\n\n\tdata: function data() {\n\t\treturn {};\n\n\n\t},\n\tmethods: {\n\t\tgoTop: function goTop() {\n\t\t\tthis.$emit('goTop');\n\t\t} } };\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/babel-loader/lib?{\"babelrc\":false,\"retainLines\":true,\"presets\":[[\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-preset-env\",{\"modules\":\"commonjs\",\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"not ie <= 8\"]}}],\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-preset-stage-2\"],\"plugins\":[[\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-runtime\",{\"helpers\":false,\"polyfill\":false,\"regenerator\":true,\"moduleName\":\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-runtime\"}],\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-decorators-legacy\"]}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=script&index=0!D:/project/asgapp/components/go-top.vue\n// module id = 36\n// module chunks = 0\n\n//# sourceURL=uni-app:///components/go-top.vue?0254");

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return (_vm.isShow) ? _c('view', {\n    staticClass: \"gotop\",\n    attrs: {\n      \"eventid\": 'Unl-0'\n    },\n    on: {\n      \"click\": _vm.goTop\n    }\n  }, [_c('uni-icon', {\n    attrs: {\n      \"type\": \"gotop\",\n      \"size\": \"30\",\n      \"color\": \"#FF4040\",\n      \"mpcomid\": 'tWH-0'\n    }\n  })], 1) : _vm._e()\n}\nvar staticRenderFns = []\nrender._withStripped = true\nvar esExports = { render: render, staticRenderFns: staticRenderFns }\n/* harmony default export */ __webpack_exports__[\"a\"] = (esExports);\nif (false) {\n  module.hot.accept()\n  if (module.hot.data) {\n     require(\"vue-hot-reload-api\").rerender(\"data-v-fc63994a\", esExports)\n  }\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./lib/mpvue-loader/lib/template-compiler?{\"id\":\"data-v-fc63994a\",\"hasScoped\":true,\"preserveWhitespace\":false}!./lib/preprocessor-loader.js?{\"type\":\"html\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=template&index=0!D:/project/asgapp/components/go-top.vue\n// module id = 37\n// module chunks = 0\n\n");

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('view', {\n    staticClass: \"index-content\"\n  }, [_c('view', {\n    staticClass: \"search-container\"\n  }, [_c('view', {\n    staticClass: \"qrcode\"\n  }, [_c('uni-icon', {\n    attrs: {\n      \"type\": \"qrcode\",\n      \"size\": \"16\",\n      \"color\": \"#bababa\",\n      \"mpcomid\": 'Tc3-0'\n    }\n  })], 1), _c('view', {\n    staticClass: \"search\"\n  }, [_c('uni-icon', {\n    attrs: {\n      \"type\": \"search\",\n      \"size\": \"15\",\n      \"color\": \"#bababa\",\n      \"mpcomid\": 'kmA-1'\n    }\n  }), _vm._v(\"\\n\\t\\t\\t立即查找独家优惠券\\n\\t\\t\")], 1), _c('view', {\n    staticClass: \"msg\"\n  }, [_c('uni-icon', {\n    attrs: {\n      \"type\": \"message\",\n      \"size\": \"16\",\n      \"color\": \"#bababa\",\n      \"mpcomid\": 'PQz-2'\n    }\n  })], 1)]), _c('view', {\n    staticClass: \"uni-tab-bar\"\n  }, [_c('scroll-view', {\n    class: [_vm.uni - _vm.swiper - _vm.tab, {\n      '_isfixed': _vm.isfixed\n    }],\n    attrs: {\n      \"id\": \"tab-bar\",\n      \"scroll-x\": \"\",\n      \"scroll-left\": _vm.scrollLeft\n    }\n  }, _vm._l((_vm.tabBars), function(tab, index) {\n    return _c('view', {\n      key: tab.id,\n      class: ['swiper-tab-list', _vm.tabIndex == index ? 'active' : ''],\n      attrs: {\n        \"id\": tab.id,\n        \"data-current\": index,\n        \"eventid\": 'vQk-0-' + index\n      },\n      on: {\n        \"tap\": _vm.tapTab\n      }\n    }, [_vm._v(_vm._s(tab.name))])\n  })), _c('swiper', {\n    staticClass: \"index-swiper\",\n    attrs: {\n      \"current\": _vm.tabIndex,\n      \"duration\": _vm.duration,\n      \"eventid\": 'ydr-13'\n    },\n    on: {\n      \"change\": _vm.changeTab\n    }\n  }, _vm._l((_vm.itemList), function(item, index) {\n    return _c('swiper-item', {\n      key: item,\n      attrs: {\n        \"mpcomid\": 'CBE-37-' + index\n      }\n    }, [_c('scroll-view', {\n      staticClass: \"list\",\n      attrs: {\n        \"scroll-y\": \"\",\n        \"scroll-top\": _vm.globScrollTop,\n        \"eventid\": 'vKE-12-' + index\n      },\n      on: {\n        \"scroll\": _vm._screensticky\n      }\n    }, [_c('swiper', {\n      staticClass: \"swiper-box\",\n      attrs: {\n        \"circular\": \"\",\n        \"autoplay\": \"\",\n        \"indicator-active-color\": \"#fff\",\n        \"indicator-dots\": \"\",\n        \"interval\": \"5000\",\n        \"duration\": _vm.duration,\n        \"eventid\": 'S2L-1-' + index\n      },\n      on: {\n        \"change\": _vm.changeswiper\n      }\n    }, _vm._l((_vm.imagelist), function(item, index2) {\n      return _c('swiper-item', {\n        key: index2,\n        staticClass: \"item\",\n        attrs: {\n          \"mpcomid\": 'nMS-3-' + index + '-' + index2\n        }\n      }, [_c('image', {\n        staticClass: \"swiper-img\",\n        attrs: {\n          \"src\": item.src\n        }\n      })])\n    })), _c('view', {\n      staticClass: \"classification-container\"\n    }, [_c('view', {\n      staticClass: \"item\"\n    }, [_c('view', [_c('uni-icon', {\n      attrs: {\n        \"type\": \"on-lightning\",\n        \"size\": \"35\",\n        \"color\": \"#e5241f\",\n        \"mpcomid\": '3DR-4-' + index\n      }\n    }), _c('text', {\n      staticClass: \"txt\"\n    }, [_vm._v(\"大牌秒杀\")])], 1), _c('view', [_c('uni-icon', {\n      attrs: {\n        \"type\": \"on-lightning\",\n        \"size\": \"35\",\n        \"color\": \"#e5241f\",\n        \"mpcomid\": 'VAs-5-' + index\n      }\n    }), _c('text', [_vm._v(\"大牌秒杀\")])], 1), _c('view', [_c('uni-icon', {\n      attrs: {\n        \"type\": \"on-lightning\",\n        \"size\": \"35\",\n        \"color\": \"#e5241f\",\n        \"mpcomid\": 'pgD-6-' + index\n      }\n    }), _c('text', [_vm._v(\"大牌秒杀\")])], 1), _c('view', [_c('uni-icon', {\n      attrs: {\n        \"type\": \"on-lightning\",\n        \"size\": \"35\",\n        \"color\": \"#e5241f\",\n        \"mpcomid\": 'C7U-7-' + index\n      }\n    }), _c('text', [_vm._v(\"大牌秒杀\")])], 1), _c('view', [_c('uni-icon', {\n      attrs: {\n        \"type\": \"on-lightning\",\n        \"size\": \"35\",\n        \"color\": \"#e5241f\",\n        \"mpcomid\": '8PW-8-' + index\n      }\n    }), _c('text', [_vm._v(\"大牌秒杀\")])], 1)]), _c('view', {\n      staticClass: \"item\"\n    }, [_c('view', [_c('uni-icon', {\n      attrs: {\n        \"type\": \"on-lightning\",\n        \"size\": \"35\",\n        \"color\": \"#e5241f\",\n        \"mpcomid\": 'xNo-9-' + index\n      }\n    }), _c('text', {\n      staticClass: \"txt\"\n    }, [_vm._v(\"大牌秒杀\")])], 1), _c('view', [_c('uni-icon', {\n      attrs: {\n        \"type\": \"on-lightning\",\n        \"size\": \"35\",\n        \"color\": \"#e5241f\",\n        \"mpcomid\": 'Qox-10-' + index\n      }\n    }), _c('text', [_vm._v(\"大牌秒杀\")])], 1), _c('view', [_c('uni-icon', {\n      attrs: {\n        \"type\": \"on-lightning\",\n        \"size\": \"35\",\n        \"color\": \"#e5241f\",\n        \"mpcomid\": 'CEU-11-' + index\n      }\n    }), _c('text', [_vm._v(\"大牌秒杀\")])], 1), _c('view', [_c('uni-icon', {\n      attrs: {\n        \"type\": \"on-lightning\",\n        \"size\": \"35\",\n        \"color\": \"#e5241f\",\n        \"mpcomid\": '5FJ-12-' + index\n      }\n    }), _c('text', [_vm._v(\"大牌秒杀\")])], 1), _c('view', [_c('uni-icon', {\n      attrs: {\n        \"type\": \"on-lightning\",\n        \"size\": \"35\",\n        \"color\": \"#e5241f\",\n        \"mpcomid\": 'EtJ-13-' + index\n      }\n    }), _c('text', [_vm._v(\"大牌秒杀\")])], 1)])]), _c('view', {\n      staticClass: \"uni-swiper-msg\"\n    }, [_c('view', {\n      staticClass: \"uni-swiper-msg-icon\"\n    }, [_c('image', {\n      attrs: {\n        \"src\": \"../../static/logo.png\",\n        \"mode\": \"widthFix\"\n      }\n    })]), _c('swiper', {\n      attrs: {\n        \"vertical\": \"true\",\n        \"autoplay\": \"true\",\n        \"circular\": \"true\",\n        \"interval\": \"3000\"\n      }\n    }, _vm._l((_vm.msg), function(item, boardindex) {\n      return _c('swiper-item', {\n        key: boardindex,\n        attrs: {\n          \"mpcomid\": 'sQF-14-' + index + '-' + boardindex\n        }\n      }, [_c('navigator', [_vm._v(_vm._s(item))])], 1)\n    }))], 1), _c('divid-line', {\n      attrs: {\n        \"height\": \"5\",\n        \"mpcomid\": '8AY-15-' + index\n      }\n    }), _c('view', {\n      staticClass: \"hot-txt\"\n    }, [_vm._v(\"今日\"), _c('text', {\n      staticClass: \"hot\"\n    }, [_vm._v(\"热销\")]), _vm._v(\"榜单\")]), _c('scroll-view', {\n      staticClass: \"hot-scroll-wrap border-1px\",\n      staticStyle: {\n        \"width\": \"100%\"\n      },\n      attrs: {\n        \"scroll-x\": \"\"\n      }\n    }, [_c('view', {\n      staticClass: \"wrap\"\n    }, _vm._l((_vm.productList), function(product, productindex) {\n      return _c('view', {\n        key: productindex,\n        staticClass: \"uni-product\"\n      }, [_c('view', {\n        staticClass: \"image-view\"\n      }, [_c('image', {\n        staticClass: \"uni-product-image\",\n        attrs: {\n          \"src\": product.image\n        }\n      })]), _c('view', {\n        staticClass: \"uni-product-title\"\n      }, [_vm._v(_vm._s(product.title))]), _c('view', {\n        staticClass: \"uni-product-price\"\n      }, [_c('text', {\n        staticClass: \"uni-product-price-favour\"\n      }, [_vm._v(\"￥\" + _vm._s(product.originalPrice))]), _c('text', {\n        staticClass: \"uni-product-price-original\"\n      }, [_vm._v(\"￥\" + _vm._s(product.favourPrice))]), _c('text', {\n        staticClass: \"uni-product-tip\"\n      }, [_vm._v(_vm._s(product.tip))])])])\n    }))]), _c('divid-line', {\n      attrs: {\n        \"height\": \"10\",\n        \"mpcomid\": 'X14-16-' + index\n      }\n    }), _c('view', {\n      staticClass: \"recommend\"\n    }, [_vm._v(\"—— 为你推荐 ——\")]), _c('divid-line', {\n      attrs: {\n        \"height\": \"2\",\n        \"mpcomid\": 'm9t-17-' + index\n      }\n    }), _c('view', {\n      class: ['_fiexd hidden screen-wrap', {\n        'visiale': _vm.isfixed\n      }]\n    }, [_c('view', {\n      class: {\n        on: _vm.active == 0\n      },\n      attrs: {\n        \"eventid\": 'jAW-2-' + index\n      },\n      on: {\n        \"click\": function($event) {\n          _vm.screentap('0')\n        }\n      }\n    }, [_vm._v(\"精选\")]), _c('view', {\n      class: {\n        on: _vm.active == 1\n      },\n      attrs: {\n        \"eventid\": 'ZHy-3-' + index\n      },\n      on: {\n        \"click\": function($event) {\n          _vm.screentap('1')\n        }\n      }\n    }, [_vm._v(\"销量\")]), _c('view', {\n      class: {\n        on: _vm.active == 2\n      },\n      attrs: {\n        \"eventid\": 'N7p-4-' + index\n      },\n      on: {\n        \"click\": function($event) {\n          _vm.screentap('2')\n        }\n      }\n    }, [_vm._v(\"最新\")]), _c('view', {\n      staticClass: \"jg-wrap\",\n      attrs: {\n        \"eventid\": 'cYp-5-' + index\n      },\n      on: {\n        \"click\": function($event) {\n          _vm.screentap('3')\n        }\n      }\n    }, [_c('text', {\n      class: {\n        on: _vm.active == 3\n      }\n    }, [_vm._v(\"价格\")]), _c('view', {\n      staticClass: \"jgicon\"\n    }, [_c('uni-icon', {\n      attrs: {\n        \"type\": \"uparrow\",\n        \"size\": \"12\",\n        \"color\": _vm.up,\n        \"mpcomid\": 'ssd-18-' + index\n      }\n    }), _c('uni-icon', {\n      attrs: {\n        \"type\": \"downarrow\",\n        \"size\": \"12\",\n        \"color\": _vm.down,\n        \"mpcomid\": 'Oaw-19-' + index\n      }\n    })], 1)])]), _c('view', {\n      directives: [{\n        name: \"show\",\n        rawName: \"v-show\",\n        value: (!_vm.isfixed),\n        expression: \"!isfixed\"\n      }],\n      staticClass: \"screen-wrap\"\n    }, [_c('view', {\n      class: {\n        on: _vm.active == 0\n      },\n      attrs: {\n        \"eventid\": 'jdK-6-' + index\n      },\n      on: {\n        \"click\": function($event) {\n          _vm.screentap('0')\n        }\n      }\n    }, [_vm._v(\"精选\")]), _c('view', {\n      class: {\n        on: _vm.active == 1\n      },\n      attrs: {\n        \"eventid\": 'PxE-7-' + index\n      },\n      on: {\n        \"click\": function($event) {\n          _vm.screentap('1')\n        }\n      }\n    }, [_vm._v(\"销量\")]), _c('view', {\n      class: {\n        on: _vm.active == 2\n      },\n      attrs: {\n        \"eventid\": 'znV-8-' + index\n      },\n      on: {\n        \"click\": function($event) {\n          _vm.screentap('2')\n        }\n      }\n    }, [_vm._v(\"最新\")]), _c('view', {\n      staticClass: \"jg-wrap\",\n      attrs: {\n        \"eventid\": '4WJ-9-' + index\n      },\n      on: {\n        \"click\": function($event) {\n          _vm.screentap('3')\n        }\n      }\n    }, [_c('text', {\n      class: {\n        on: _vm.active == 3\n      }\n    }, [_vm._v(\"价格\")]), _c('view', {\n      staticClass: \"jgicon\"\n    }, [_c('uni-icon', {\n      attrs: {\n        \"type\": \"uparrow\",\n        \"size\": \"12\",\n        \"color\": _vm.up,\n        \"mpcomid\": '8WC-20-' + index\n      }\n    }), _c('uni-icon', {\n      attrs: {\n        \"type\": \"downarrow\",\n        \"size\": \"12\",\n        \"color\": _vm.down,\n        \"mpcomid\": 'OYI-21-' + index\n      }\n    })], 1)])]), _c('view', {\n      staticClass: \"goods-container\",\n      attrs: {\n        \"eventid\": '8Px-10-' + index\n      },\n      on: {\n        \"click\": _vm.jump\n      }\n    }, [_c('good-list', {\n      attrs: {\n        \"mpcomid\": 'yrT-22-' + index\n      }\n    }), _c('good-list', {\n      attrs: {\n        \"mpcomid\": '0hV-23-' + index\n      }\n    }), _c('good-list', {\n      attrs: {\n        \"mpcomid\": 'nnG-24-' + index\n      }\n    }), _c('good-list', {\n      attrs: {\n        \"mpcomid\": 'coh-25-' + index\n      }\n    }), _c('good-list', {\n      attrs: {\n        \"mpcomid\": '8YP-26-' + index\n      }\n    }), _c('good-list', {\n      attrs: {\n        \"mpcomid\": '7da-27-' + index\n      }\n    }), _c('good-list', {\n      attrs: {\n        \"mpcomid\": 'v1w-28-' + index\n      }\n    }), _c('good-list', {\n      attrs: {\n        \"mpcomid\": 'Fgc-29-' + index\n      }\n    }), _c('good-list', {\n      attrs: {\n        \"mpcomid\": 'SQL-30-' + index\n      }\n    }), _c('good-list', {\n      attrs: {\n        \"mpcomid\": '8aW-31-' + index\n      }\n    }), _c('good-list', {\n      attrs: {\n        \"mpcomid\": 'nd2-32-' + index\n      }\n    }), _c('good-list', {\n      attrs: {\n        \"mpcomid\": 'HKY-33-' + index\n      }\n    }), _c('good-list', {\n      attrs: {\n        \"mpcomid\": 'mjZ-34-' + index\n      }\n    }), _c('good-list', {\n      attrs: {\n        \"mpcomid\": 'Gvt-35-' + index\n      }\n    })], 1), _c('go-top', {\n      attrs: {\n        \"isShow\": _vm.isShow,\n        \"eventid\": 'z4N-11-' + index,\n        \"mpcomid\": 'uxH-36-' + index\n      },\n      on: {\n        \"goTop\": _vm.goTop\n      }\n    })], 1)], 1)\n  }))], 1)])\n}\nvar staticRenderFns = []\nrender._withStripped = true\nvar esExports = { render: render, staticRenderFns: staticRenderFns }\n/* harmony default export */ __webpack_exports__[\"a\"] = (esExports);\nif (false) {\n  module.hot.accept()\n  if (module.hot.data) {\n     require(\"vue-hot-reload-api\").rerender(\"data-v-d31acb48\", esExports)\n  }\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./lib/mpvue-loader/lib/template-compiler?{\"id\":\"data-v-d31acb48\",\"hasScoped\":true,\"preserveWhitespace\":false}!./lib/preprocessor-loader.js?{\"type\":\"html\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=template&index=0!D:/project/asgapp/pages/index/index.vue\n// module id = 38\n// module chunks = 0\n\n");

/***/ })
],[15]);
});
require('pages/index/index.js');
__wxRoute = 'pages/store/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/store/index.js';

define('pages/store/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([5],{

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar _mpvuePageFactory = __webpack_require__(1);var _mpvuePageFactory2 = _interopRequireDefault(_mpvuePageFactory);\nvar _index = __webpack_require__(40);var _index2 = _interopRequireDefault(_index);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\nPage((0, _mpvuePageFactory2.default)(_index2.default));\n\n//////////////////\n// WEBPACK FOOTER\n// D:/project/asgapp/pages/store/index.js\n// module id = 39\n// module chunks = 5\n\n//# sourceURL=uni-app:///pages/store/index.js?01e6");

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(42);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_index_vue__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_0a3638aa_hasScoped_true_preserveWhitespace_false_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(46);\nvar disposed = false\nfunction injectStyle (ssrContext) {\n  if (disposed) return\n  __webpack_require__(41)\n}\nvar normalizeComponent = __webpack_require__(0)\n/* script */\n\n/* template */\n\n/* styles */\nvar __vue_styles__ = injectStyle\n/* scopeId */\nvar __vue_scopeId__ = \"data-v-0a3638aa\"\n/* moduleIdentifier (server only) */\nvar __vue_module_identifier__ = null\nvar Component = normalizeComponent(\n  __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_index_vue___default.a,\n  __WEBPACK_IMPORTED_MODULE_1__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_0a3638aa_hasScoped_true_preserveWhitespace_false_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_index_vue__[\"a\" /* default */],\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"..\\\\..\\\\..\\\\..\\\\..\\\\project\\\\asgapp\\\\pages\\\\store\\\\index.vue\"\nif (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== \"default\" && key.substr(0, 2) !== \"__\"})) {console.error(\"named exports are not supported in *.vue files.\")}\nif (Component.options.functional) {console.error(\"[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.\")}\n\n/* hot reload */\nif (false) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-0a3638aa\", Component.options)\n  } else {\n    hotAPI.reload(\"data-v-0a3638aa\", Component.options)\n  }\n  module.hot.dispose(function (data) {\n    disposed = true\n  })\n})()}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component.exports);\n\n\n//////////////////\n// WEBPACK FOOTER\n// D:/project/asgapp/pages/store/index.vue\n// module id = 40\n// module chunks = 5\n\n");

/***/ }),

/***/ 41:
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader!./lib/css-var-loader.js!./node_modules/css-loader?{\"minimize\":false,\"sourceMap\":false}!./lib/mpvue-loader/lib/style-compiler?{\"vue\":true,\"id\":\"data-v-0a3638aa\",\"scoped\":true,\"hasInlineConfig\":false}!./lib/css-upx-loader.js?{\"baseDpr\":1,\"rpxUnit\":1}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./node_modules/postcss-loader/lib?{\"config\":{\"path\":\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//.postcssrc.js\"},\"sourceMap\":true}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=styles&index=0!D:/project/asgapp/pages/store/index.vue\n// module id = 41\n// module chunks = 5\n\n");

/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });\n\n\n\n\n\n\n\n\n\n\nvar _uniTabbar = __webpack_require__(2);var _uniTabbar2 = _interopRequireDefault(_uniTabbar);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default =\n{\n\tdata: function data() {\n\t\treturn {\n\t\t\ttitle: '商城',\n\t\t\ttabs: [{\n\t\t\t\turl: \"index\",\n\t\t\t\ttype: \"store\",\n\t\t\t\ttitle: '商城',\n\t\t\t\tpage: 'store' },\n\t\t\t{\n\t\t\t\turl: \"/pages/store/circle\",\n\t\t\t\ttype: \"find\",\n\t\t\t\ttitle: '商圈',\n\t\t\t\tpage: 'store' },\n\n\t\t\t{\n\t\t\t\turl: \"/pages/store/customer\",\n\t\t\t\ttype: \"bliaotian\",\n\t\t\t\ttitle: ' 客服',\n\t\t\t\tpage: 'store' },\n\n\t\t\t{\n\t\t\t\turl: \"/pages/store/shopcar\",\n\t\t\t\ttype: \"gouwuche\",\n\t\t\t\ttitle: ' 购物车',\n\t\t\t\tpage: 'store' },\n\n\t\t\t{\n\t\t\t\turl: \"user\",\n\t\t\t\ttype: \"user\",\n\t\t\t\ttitle: ' 我的',\n\t\t\t\tpage: 'index' }] };\n\n\n\t},\n\tonLoad: function onLoad() {\n\n\t},\n\tcomponents: {\n\t\tviewTabbar: _uniTabbar2.default } };\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/babel-loader/lib?{\"babelrc\":false,\"retainLines\":true,\"presets\":[[\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-preset-env\",{\"modules\":\"commonjs\",\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"not ie <= 8\"]}}],\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-preset-stage-2\"],\"plugins\":[[\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-runtime\",{\"helpers\":false,\"polyfill\":false,\"regenerator\":true,\"moduleName\":\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-runtime\"}],\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-decorators-legacy\"]}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=script&index=0!D:/project/asgapp/pages/store/index.vue\n// module id = 42\n// module chunks = 5\n\n//# sourceURL=uni-app:///pages/store/index.vue?b807");

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('view', {\n    staticClass: \"content\"\n  }, [_c('image', {\n    staticClass: \"logo\",\n    attrs: {\n      \"src\": \"../../static/logo.png\"\n    }\n  }), _c('view', [_c('text', {\n    staticClass: \"title\"\n  }, [_vm._v(_vm._s(_vm.title))])]), _c('view-tabbar', {\n    staticClass: \"tabbar\",\n    attrs: {\n      \"current\": \"0\",\n      \"tabs\": _vm.tabs,\n      \"mpcomid\": 'SCl-0'\n    }\n  })], 1)\n}\nvar staticRenderFns = []\nrender._withStripped = true\nvar esExports = { render: render, staticRenderFns: staticRenderFns }\n/* harmony default export */ __webpack_exports__[\"a\"] = (esExports);\nif (false) {\n  module.hot.accept()\n  if (module.hot.data) {\n     require(\"vue-hot-reload-api\").rerender(\"data-v-0a3638aa\", esExports)\n  }\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./lib/mpvue-loader/lib/template-compiler?{\"id\":\"data-v-0a3638aa\",\"hasScoped\":true,\"preserveWhitespace\":false}!./lib/preprocessor-loader.js?{\"type\":\"html\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=template&index=0!D:/project/asgapp/pages/store/index.vue\n// module id = 46\n// module chunks = 5\n\n");

/***/ })

},[39]);
});
require('pages/store/index.js');
__wxRoute = 'pages/store/store';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/store/store.js';

define('pages/store/store.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([3],{

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar _mpvuePageFactory = __webpack_require__(1);var _mpvuePageFactory2 = _interopRequireDefault(_mpvuePageFactory);\nvar _store = __webpack_require__(48);var _store2 = _interopRequireDefault(_store);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\nPage((0, _mpvuePageFactory2.default)(_store2.default));\n\n//////////////////\n// WEBPACK FOOTER\n// D:/project/asgapp/pages/store/store.js\n// module id = 47\n// module chunks = 3\n\n//# sourceURL=uni-app:///pages/store/store.js?095e");

/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_store_vue__ = __webpack_require__(50);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_store_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_store_vue__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_e03fd78c_hasScoped_false_preserveWhitespace_false_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_store_vue__ = __webpack_require__(51);\nvar disposed = false\nfunction injectStyle (ssrContext) {\n  if (disposed) return\n  __webpack_require__(49)\n}\nvar normalizeComponent = __webpack_require__(0)\n/* script */\n\n/* template */\n\n/* styles */\nvar __vue_styles__ = injectStyle\n/* scopeId */\nvar __vue_scopeId__ = null\n/* moduleIdentifier (server only) */\nvar __vue_module_identifier__ = null\nvar Component = normalizeComponent(\n  __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_store_vue___default.a,\n  __WEBPACK_IMPORTED_MODULE_1__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_e03fd78c_hasScoped_false_preserveWhitespace_false_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_store_vue__[\"a\" /* default */],\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"..\\\\..\\\\..\\\\..\\\\..\\\\project\\\\asgapp\\\\pages\\\\store\\\\store.vue\"\nif (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== \"default\" && key.substr(0, 2) !== \"__\"})) {console.error(\"named exports are not supported in *.vue files.\")}\nif (Component.options.functional) {console.error(\"[vue-loader] store.vue: functional components are not supported with templates, they should use render functions.\")}\n\n/* hot reload */\nif (false) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-e03fd78c\", Component.options)\n  } else {\n    hotAPI.reload(\"data-v-e03fd78c\", Component.options)\n  }\n  module.hot.dispose(function (data) {\n    disposed = true\n  })\n})()}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component.exports);\n\n\n//////////////////\n// WEBPACK FOOTER\n// D:/project/asgapp/pages/store/store.vue\n// module id = 48\n// module chunks = 3\n\n");

/***/ }),

/***/ 49:
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader!./lib/css-var-loader.js!./node_modules/css-loader?{\"minimize\":false,\"sourceMap\":false}!./lib/mpvue-loader/lib/style-compiler?{\"vue\":true,\"id\":\"data-v-e03fd78c\",\"scoped\":false,\"hasInlineConfig\":false}!./lib/css-upx-loader.js?{\"baseDpr\":1,\"rpxUnit\":1}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./node_modules/postcss-loader/lib?{\"config\":{\"path\":\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//.postcssrc.js\"},\"sourceMap\":true}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=styles&index=0!D:/project/asgapp/pages/store/store.vue\n// module id = 49\n// module chunks = 3\n\n");

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default =\n\n\n\n\n\n\n{\n\tonLoad: function onLoad() {\n\t\tconsole.log('页面中转页');\n\t\tuni.redirectTo({\n\t\t\turl: 'index' });\n\n\t} };\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)[\"default\"]))\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/babel-loader/lib?{\"babelrc\":false,\"retainLines\":true,\"presets\":[[\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-preset-env\",{\"modules\":\"commonjs\",\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"not ie <= 8\"]}}],\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-preset-stage-2\"],\"plugins\":[[\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-runtime\",{\"helpers\":false,\"polyfill\":false,\"regenerator\":true,\"moduleName\":\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-runtime\"}],\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-decorators-legacy\"]}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=script&index=0!D:/project/asgapp/pages/store/store.vue\n// module id = 50\n// module chunks = 3\n\n//# sourceURL=uni-app:///pages/store/store.vue?6db9");

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('view', {\n    staticClass: \"content\"\n  }, [_vm._v(\"\\n\\t商城首页页面中转\\n\")])\n}\nvar staticRenderFns = []\nrender._withStripped = true\nvar esExports = { render: render, staticRenderFns: staticRenderFns }\n/* harmony default export */ __webpack_exports__[\"a\"] = (esExports);\nif (false) {\n  module.hot.accept()\n  if (module.hot.data) {\n     require(\"vue-hot-reload-api\").rerender(\"data-v-e03fd78c\", esExports)\n  }\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./lib/mpvue-loader/lib/template-compiler?{\"id\":\"data-v-e03fd78c\",\"hasScoped\":false,\"preserveWhitespace\":false}!./lib/preprocessor-loader.js?{\"type\":\"html\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=template&index=0!D:/project/asgapp/pages/store/store.vue\n// module id = 51\n// module chunks = 3\n\n");

/***/ })

},[47]);
});
require('pages/store/store.js');
__wxRoute = 'pages/store/circle';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/store/circle.js';

define('pages/store/circle.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([7],{

/***/ 52:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar _mpvuePageFactory = __webpack_require__(1);var _mpvuePageFactory2 = _interopRequireDefault(_mpvuePageFactory);\nvar _circle = __webpack_require__(53);var _circle2 = _interopRequireDefault(_circle);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\nPage((0, _mpvuePageFactory2.default)(_circle2.default));\n\n//////////////////\n// WEBPACK FOOTER\n// D:/project/asgapp/pages/store/circle.js\n// module id = 52\n// module chunks = 7\n\n//# sourceURL=uni-app:///pages/store/circle.js?953d");

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_circle_vue__ = __webpack_require__(55);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_circle_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_circle_vue__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_14ce2372_hasScoped_false_preserveWhitespace_false_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_circle_vue__ = __webpack_require__(56);\nvar disposed = false\nfunction injectStyle (ssrContext) {\n  if (disposed) return\n  __webpack_require__(54)\n}\nvar normalizeComponent = __webpack_require__(0)\n/* script */\n\n/* template */\n\n/* styles */\nvar __vue_styles__ = injectStyle\n/* scopeId */\nvar __vue_scopeId__ = null\n/* moduleIdentifier (server only) */\nvar __vue_module_identifier__ = null\nvar Component = normalizeComponent(\n  __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_circle_vue___default.a,\n  __WEBPACK_IMPORTED_MODULE_1__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_14ce2372_hasScoped_false_preserveWhitespace_false_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_circle_vue__[\"a\" /* default */],\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"..\\\\..\\\\..\\\\..\\\\..\\\\project\\\\asgapp\\\\pages\\\\store\\\\circle.vue\"\nif (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== \"default\" && key.substr(0, 2) !== \"__\"})) {console.error(\"named exports are not supported in *.vue files.\")}\nif (Component.options.functional) {console.error(\"[vue-loader] circle.vue: functional components are not supported with templates, they should use render functions.\")}\n\n/* hot reload */\nif (false) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-14ce2372\", Component.options)\n  } else {\n    hotAPI.reload(\"data-v-14ce2372\", Component.options)\n  }\n  module.hot.dispose(function (data) {\n    disposed = true\n  })\n})()}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component.exports);\n\n\n//////////////////\n// WEBPACK FOOTER\n// D:/project/asgapp/pages/store/circle.vue\n// module id = 53\n// module chunks = 7\n\n");

/***/ }),

/***/ 54:
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader!./lib/css-var-loader.js!./node_modules/css-loader?{\"minimize\":false,\"sourceMap\":false}!./lib/mpvue-loader/lib/style-compiler?{\"vue\":true,\"id\":\"data-v-14ce2372\",\"scoped\":false,\"hasInlineConfig\":false}!./lib/css-upx-loader.js?{\"baseDpr\":1,\"rpxUnit\":1}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./node_modules/postcss-loader/lib?{\"config\":{\"path\":\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//.postcssrc.js\"},\"sourceMap\":true}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=styles&index=0!D:/project/asgapp/pages/store/circle.vue\n// module id = 54\n// module chunks = 7\n\n");

/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });\n\n\n\n\n\n\nvar _uniTabbar = __webpack_require__(2);var _uniTabbar2 = _interopRequireDefault(_uniTabbar);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default =\n\n{\n  data: function data() {\n    return {\n      title: '商圈',\n      tabs: [{\n        url: \"index\",\n        type: \"store\",\n        title: '商城',\n        page: 'store' },\n      {\n        url: \"/pages/store/circle\",\n        type: \"find\",\n        title: '商圈',\n        page: 'store' },\n\n      {\n        url: \"/pages/store/customer\",\n        type: \"bliaotian\",\n        title: ' 客服',\n        page: 'store' },\n\n      {\n        url: \"/pages/store/shopcar\",\n        type: \"gouwuche\",\n        title: ' 购物车',\n        page: 'store' },\n\n      {\n        url: \"user\",\n        type: \"user\",\n        title: ' 我的',\n        page: 'index' }] };\n\n\n  },\n  components: {\n    viewTabbar: _uniTabbar2.default } };\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/babel-loader/lib?{\"babelrc\":false,\"retainLines\":true,\"presets\":[[\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-preset-env\",{\"modules\":\"commonjs\",\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"not ie <= 8\"]}}],\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-preset-stage-2\"],\"plugins\":[[\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-runtime\",{\"helpers\":false,\"polyfill\":false,\"regenerator\":true,\"moduleName\":\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-runtime\"}],\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-decorators-legacy\"]}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=script&index=0!D:/project/asgapp/pages/store/circle.vue\n// module id = 55\n// module chunks = 7\n\n//# sourceURL=uni-app:///pages/store/circle.vue?1e5d");

/***/ }),

/***/ 56:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('view', {\n    staticClass: \"content\"\n  }, [_c('view-tabbar', {\n    attrs: {\n      \"current\": \"1\",\n      \"tabs\": _vm.tabs,\n      \"mpcomid\": '4TX-0'\n    }\n  })], 1)\n}\nvar staticRenderFns = []\nrender._withStripped = true\nvar esExports = { render: render, staticRenderFns: staticRenderFns }\n/* harmony default export */ __webpack_exports__[\"a\"] = (esExports);\nif (false) {\n  module.hot.accept()\n  if (module.hot.data) {\n     require(\"vue-hot-reload-api\").rerender(\"data-v-14ce2372\", esExports)\n  }\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./lib/mpvue-loader/lib/template-compiler?{\"id\":\"data-v-14ce2372\",\"hasScoped\":false,\"preserveWhitespace\":false}!./lib/preprocessor-loader.js?{\"type\":\"html\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=template&index=0!D:/project/asgapp/pages/store/circle.vue\n// module id = 56\n// module chunks = 7\n\n");

/***/ })

},[52]);
});
require('pages/store/circle.js');
__wxRoute = 'pages/store/customer';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/store/customer.js';

define('pages/store/customer.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([6],{

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar _mpvuePageFactory = __webpack_require__(1);var _mpvuePageFactory2 = _interopRequireDefault(_mpvuePageFactory);\nvar _customer = __webpack_require__(58);var _customer2 = _interopRequireDefault(_customer);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\nPage((0, _mpvuePageFactory2.default)(_customer2.default));\n\n//////////////////\n// WEBPACK FOOTER\n// D:/project/asgapp/pages/store/customer.js\n// module id = 57\n// module chunks = 6\n\n//# sourceURL=uni-app:///pages/store/customer.js?243c");

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_customer_vue__ = __webpack_require__(60);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_customer_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_customer_vue__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_120982d6_hasScoped_false_preserveWhitespace_false_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_customer_vue__ = __webpack_require__(61);\nvar disposed = false\nfunction injectStyle (ssrContext) {\n  if (disposed) return\n  __webpack_require__(59)\n}\nvar normalizeComponent = __webpack_require__(0)\n/* script */\n\n/* template */\n\n/* styles */\nvar __vue_styles__ = injectStyle\n/* scopeId */\nvar __vue_scopeId__ = null\n/* moduleIdentifier (server only) */\nvar __vue_module_identifier__ = null\nvar Component = normalizeComponent(\n  __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_customer_vue___default.a,\n  __WEBPACK_IMPORTED_MODULE_1__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_120982d6_hasScoped_false_preserveWhitespace_false_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_customer_vue__[\"a\" /* default */],\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"..\\\\..\\\\..\\\\..\\\\..\\\\project\\\\asgapp\\\\pages\\\\store\\\\customer.vue\"\nif (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== \"default\" && key.substr(0, 2) !== \"__\"})) {console.error(\"named exports are not supported in *.vue files.\")}\nif (Component.options.functional) {console.error(\"[vue-loader] customer.vue: functional components are not supported with templates, they should use render functions.\")}\n\n/* hot reload */\nif (false) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-120982d6\", Component.options)\n  } else {\n    hotAPI.reload(\"data-v-120982d6\", Component.options)\n  }\n  module.hot.dispose(function (data) {\n    disposed = true\n  })\n})()}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component.exports);\n\n\n//////////////////\n// WEBPACK FOOTER\n// D:/project/asgapp/pages/store/customer.vue\n// module id = 58\n// module chunks = 6\n\n");

/***/ }),

/***/ 59:
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader!./lib/css-var-loader.js!./node_modules/css-loader?{\"minimize\":false,\"sourceMap\":false}!./lib/mpvue-loader/lib/style-compiler?{\"vue\":true,\"id\":\"data-v-120982d6\",\"scoped\":false,\"hasInlineConfig\":false}!./lib/css-upx-loader.js?{\"baseDpr\":1,\"rpxUnit\":1}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./node_modules/postcss-loader/lib?{\"config\":{\"path\":\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//.postcssrc.js\"},\"sourceMap\":true}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=styles&index=0!D:/project/asgapp/pages/store/customer.vue\n// module id = 59\n// module chunks = 6\n\n");

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });\n\n\n\n\n\n\n\n\n\nvar _uniTabbar = __webpack_require__(2);var _uniTabbar2 = _interopRequireDefault(_uniTabbar);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default =\n\n{\n\tdata: function data() {\n\t\treturn {\n\t\t\ttitle: '客服',\n\t\t\ttabs: [{\n\t\t\t\turl: \"index\",\n\t\t\t\ttype: \"store\",\n\t\t\t\ttitle: '商城',\n\t\t\t\tpage: 'store' },\n\t\t\t{\n\t\t\t\turl: \"/pages/store/circle\",\n\t\t\t\ttype: \"find\",\n\t\t\t\ttitle: '商圈',\n\t\t\t\tpage: 'store' },\n\n\t\t\t{\n\t\t\t\turl: \"/pages/store/customer\",\n\t\t\t\ttype: \"bliaotian\",\n\t\t\t\ttitle: ' 客服',\n\t\t\t\tpage: 'store' },\n\n\t\t\t{\n\t\t\t\turl: \"/pages/store/shopcar\",\n\t\t\t\ttype: \"gouwuche\",\n\t\t\t\ttitle: ' 购物车',\n\t\t\t\tpage: 'store' },\n\n\t\t\t{\n\t\t\t\turl: \"user\",\n\t\t\t\ttype: \"user\",\n\t\t\t\ttitle: ' 我的',\n\t\t\t\tpage: 'index' }] };\n\n\n\n\t},\n\tcomponents: {\n\t\tviewTabbar: _uniTabbar2.default } };\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/babel-loader/lib?{\"babelrc\":false,\"retainLines\":true,\"presets\":[[\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-preset-env\",{\"modules\":\"commonjs\",\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"not ie <= 8\"]}}],\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-preset-stage-2\"],\"plugins\":[[\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-runtime\",{\"helpers\":false,\"polyfill\":false,\"regenerator\":true,\"moduleName\":\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-runtime\"}],\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-decorators-legacy\"]}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=script&index=0!D:/project/asgapp/pages/store/customer.vue\n// module id = 60\n// module chunks = 6\n\n//# sourceURL=uni-app:///pages/store/customer.vue?85f4");

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('view', {\n    staticClass: \"content\"\n  }, [_c('image', {\n    staticClass: \"logo\",\n    attrs: {\n      \"src\": \"../../static/logo.png\"\n    }\n  }), _c('view', [_c('text', {\n    staticClass: \"title\"\n  }, [_vm._v(_vm._s(_vm.title))])]), _c('view-tabbar', {\n    attrs: {\n      \"current\": \"2\",\n      \"tabs\": _vm.tabs,\n      \"mpcomid\": 'xWp-0'\n    }\n  })], 1)\n}\nvar staticRenderFns = []\nrender._withStripped = true\nvar esExports = { render: render, staticRenderFns: staticRenderFns }\n/* harmony default export */ __webpack_exports__[\"a\"] = (esExports);\nif (false) {\n  module.hot.accept()\n  if (module.hot.data) {\n     require(\"vue-hot-reload-api\").rerender(\"data-v-120982d6\", esExports)\n  }\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./lib/mpvue-loader/lib/template-compiler?{\"id\":\"data-v-120982d6\",\"hasScoped\":false,\"preserveWhitespace\":false}!./lib/preprocessor-loader.js?{\"type\":\"html\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=template&index=0!D:/project/asgapp/pages/store/customer.vue\n// module id = 61\n// module chunks = 6\n\n");

/***/ })

},[57]);
});
require('pages/store/customer.js');
__wxRoute = 'pages/store/shopcar';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/store/shopcar.js';

define('pages/store/shopcar.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([4],{

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar _mpvuePageFactory = __webpack_require__(1);var _mpvuePageFactory2 = _interopRequireDefault(_mpvuePageFactory);\nvar _shopcar = __webpack_require__(63);var _shopcar2 = _interopRequireDefault(_shopcar);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\nPage((0, _mpvuePageFactory2.default)(_shopcar2.default));\n\n//////////////////\n// WEBPACK FOOTER\n// D:/project/asgapp/pages/store/shopcar.js\n// module id = 62\n// module chunks = 4\n\n//# sourceURL=uni-app:///pages/store/shopcar.js?2ed5");

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_shopcar_vue__ = __webpack_require__(65);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_shopcar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_shopcar_vue__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_7c4abc92_hasScoped_false_preserveWhitespace_false_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_shopcar_vue__ = __webpack_require__(66);\nvar disposed = false\nfunction injectStyle (ssrContext) {\n  if (disposed) return\n  __webpack_require__(64)\n}\nvar normalizeComponent = __webpack_require__(0)\n/* script */\n\n/* template */\n\n/* styles */\nvar __vue_styles__ = injectStyle\n/* scopeId */\nvar __vue_scopeId__ = null\n/* moduleIdentifier (server only) */\nvar __vue_module_identifier__ = null\nvar Component = normalizeComponent(\n  __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_shopcar_vue___default.a,\n  __WEBPACK_IMPORTED_MODULE_1__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_7c4abc92_hasScoped_false_preserveWhitespace_false_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_shopcar_vue__[\"a\" /* default */],\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"..\\\\..\\\\..\\\\..\\\\..\\\\project\\\\asgapp\\\\pages\\\\store\\\\shopcar.vue\"\nif (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== \"default\" && key.substr(0, 2) !== \"__\"})) {console.error(\"named exports are not supported in *.vue files.\")}\nif (Component.options.functional) {console.error(\"[vue-loader] shopcar.vue: functional components are not supported with templates, they should use render functions.\")}\n\n/* hot reload */\nif (false) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-7c4abc92\", Component.options)\n  } else {\n    hotAPI.reload(\"data-v-7c4abc92\", Component.options)\n  }\n  module.hot.dispose(function (data) {\n    disposed = true\n  })\n})()}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component.exports);\n\n\n//////////////////\n// WEBPACK FOOTER\n// D:/project/asgapp/pages/store/shopcar.vue\n// module id = 63\n// module chunks = 4\n\n");

/***/ }),

/***/ 64:
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader!./lib/css-var-loader.js!./node_modules/css-loader?{\"minimize\":false,\"sourceMap\":false}!./lib/mpvue-loader/lib/style-compiler?{\"vue\":true,\"id\":\"data-v-7c4abc92\",\"scoped\":false,\"hasInlineConfig\":false}!./lib/css-upx-loader.js?{\"baseDpr\":1,\"rpxUnit\":1}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./node_modules/postcss-loader/lib?{\"config\":{\"path\":\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//.postcssrc.js\"},\"sourceMap\":true}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=styles&index=0!D:/project/asgapp/pages/store/shopcar.vue\n// module id = 64\n// module chunks = 4\n\n");

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });\n\n\n\n\n\n\n\n\n\n\nvar _uniTabbar = __webpack_require__(2);var _uniTabbar2 = _interopRequireDefault(_uniTabbar);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default =\n{\n\tdata: function data() {\n\t\treturn {\n\t\t\ttitle: '购物车',\n\t\t\ttabs: [{\n\t\t\t\turl: \"index\",\n\t\t\t\ttype: \"store\",\n\t\t\t\ttitle: '商城',\n\t\t\t\tpage: 'store' },\n\t\t\t{\n\t\t\t\turl: \"/pages/store/circle\",\n\t\t\t\ttype: \"find\",\n\t\t\t\ttitle: '商圈',\n\t\t\t\tpage: 'store' },\n\n\t\t\t{\n\t\t\t\turl: \"/pages/store/customer\",\n\t\t\t\ttype: \"bliaotian\",\n\t\t\t\ttitle: ' 客服',\n\t\t\t\tpage: 'store' },\n\n\t\t\t{\n\t\t\t\turl: \"/pages/store/shopcar\",\n\t\t\t\ttype: \"gouwuche\",\n\t\t\t\ttitle: ' 购物车',\n\t\t\t\tpage: 'store' },\n\n\t\t\t{\n\t\t\t\turl: \"user\",\n\t\t\t\ttype: \"user\",\n\t\t\t\ttitle: ' 我的',\n\t\t\t\tpage: 'index' }] };\n\n\n\n\t},\n\tcomponents: {\n\t\tviewTabbar: _uniTabbar2.default } };\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/babel-loader/lib?{\"babelrc\":false,\"retainLines\":true,\"presets\":[[\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-preset-env\",{\"modules\":\"commonjs\",\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"not ie <= 8\"]}}],\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-preset-stage-2\"],\"plugins\":[[\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-runtime\",{\"helpers\":false,\"polyfill\":false,\"regenerator\":true,\"moduleName\":\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-runtime\"}],\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-decorators-legacy\"]}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=script&index=0!D:/project/asgapp/pages/store/shopcar.vue\n// module id = 65\n// module chunks = 4\n\n//# sourceURL=uni-app:///pages/store/shopcar.vue?75ee");

/***/ }),

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('view', {\n    staticClass: \"content\"\n  }, [_c('image', {\n    staticClass: \"logo\",\n    attrs: {\n      \"src\": \"../../static/logo.png\"\n    }\n  }), _c('view', [_c('text', {\n    staticClass: \"title\"\n  }, [_vm._v(_vm._s(_vm.title))])]), _c('view-tabbar', {\n    attrs: {\n      \"current\": \"3\",\n      \"tabs\": _vm.tabs,\n      \"mpcomid\": 'Gi4-0'\n    }\n  })], 1)\n}\nvar staticRenderFns = []\nrender._withStripped = true\nvar esExports = { render: render, staticRenderFns: staticRenderFns }\n/* harmony default export */ __webpack_exports__[\"a\"] = (esExports);\nif (false) {\n  module.hot.accept()\n  if (module.hot.data) {\n     require(\"vue-hot-reload-api\").rerender(\"data-v-7c4abc92\", esExports)\n  }\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./lib/mpvue-loader/lib/template-compiler?{\"id\":\"data-v-7c4abc92\",\"hasScoped\":false,\"preserveWhitespace\":false}!./lib/preprocessor-loader.js?{\"type\":\"html\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=template&index=0!D:/project/asgapp/pages/store/shopcar.vue\n// module id = 66\n// module chunks = 4\n\n");

/***/ })

},[62]);
});
require('pages/store/shopcar.js');
__wxRoute = 'pages/chat/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/chat/index.js';

define('pages/chat/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([17],{

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar _mpvuePageFactory = __webpack_require__(1);var _mpvuePageFactory2 = _interopRequireDefault(_mpvuePageFactory);\nvar _index = __webpack_require__(68);var _index2 = _interopRequireDefault(_index);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\nPage((0, _mpvuePageFactory2.default)(_index2.default));\n\n//////////////////\n// WEBPACK FOOTER\n// D:/project/asgapp/pages/chat/index.js\n// module id = 67\n// module chunks = 17\n\n//# sourceURL=uni-app:///pages/chat/index.js?8a82");

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(70);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_index_vue__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_43ea2cb8_hasScoped_true_preserveWhitespace_false_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(71);\nvar disposed = false\nfunction injectStyle (ssrContext) {\n  if (disposed) return\n  __webpack_require__(69)\n}\nvar normalizeComponent = __webpack_require__(0)\n/* script */\n\n/* template */\n\n/* styles */\nvar __vue_styles__ = injectStyle\n/* scopeId */\nvar __vue_scopeId__ = \"data-v-43ea2cb8\"\n/* moduleIdentifier (server only) */\nvar __vue_module_identifier__ = null\nvar Component = normalizeComponent(\n  __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_index_vue___default.a,\n  __WEBPACK_IMPORTED_MODULE_1__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_43ea2cb8_hasScoped_true_preserveWhitespace_false_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_index_vue__[\"a\" /* default */],\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"..\\\\..\\\\..\\\\..\\\\..\\\\project\\\\asgapp\\\\pages\\\\chat\\\\index.vue\"\nif (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== \"default\" && key.substr(0, 2) !== \"__\"})) {console.error(\"named exports are not supported in *.vue files.\")}\nif (Component.options.functional) {console.error(\"[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.\")}\n\n/* hot reload */\nif (false) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-43ea2cb8\", Component.options)\n  } else {\n    hotAPI.reload(\"data-v-43ea2cb8\", Component.options)\n  }\n  module.hot.dispose(function (data) {\n    disposed = true\n  })\n})()}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component.exports);\n\n\n//////////////////\n// WEBPACK FOOTER\n// D:/project/asgapp/pages/chat/index.vue\n// module id = 68\n// module chunks = 17\n\n");

/***/ }),

/***/ 69:
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader!./lib/css-var-loader.js!./node_modules/css-loader?{\"minimize\":false,\"sourceMap\":false}!./lib/mpvue-loader/lib/style-compiler?{\"vue\":true,\"id\":\"data-v-43ea2cb8\",\"scoped\":true,\"hasInlineConfig\":false}!./lib/css-upx-loader.js?{\"baseDpr\":1,\"rpxUnit\":1}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./node_modules/postcss-loader/lib?{\"config\":{\"path\":\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//.postcssrc.js\"},\"sourceMap\":true}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=styles&index=0!D:/project/asgapp/pages/chat/index.vue\n// module id = 69\n// module chunks = 17\n\n");

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });\n\n\n\n\n\n\n\n\n\n\nvar _uniTabbar = __webpack_require__(2);var _uniTabbar2 = _interopRequireDefault(_uniTabbar);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default =\n{\n\tdata: function data() {\n\t\treturn {\n\t\t\ttitle: \"首页\",\n\t\t\ttabs: [{\n\t\t\t\turl: \"index\",\n\t\t\t\ttype: \"bliaotian\",\n\t\t\t\ttitle: '聊天',\n\t\t\t\tpage: 'chat' },\n\t\t\t{\n\t\t\t\turl: \"/pages/chat/friend-circle\",\n\t\t\t\ttype: \"find\",\n\t\t\t\ttitle: '朋友圈',\n\t\t\t\tpage: 'chat' },\n\n\t\t\t{\n\t\t\t\turl: \"/pages/chat/group\",\n\t\t\t\ttype: \"tuandui\",\n\t\t\t\ttitle: ' 团队',\n\t\t\t\tpage: 'chat' },\n\n\t\t\t{\n\t\t\t\turl: \"/pages/chat/mail-list\",\n\t\t\t\ttype: \"txl\",\n\t\t\t\ttitle: ' 通讯录',\n\t\t\t\tpage: 'chat' },\n\n\t\t\t{\n\t\t\t\turl: \"user\",\n\t\t\t\ttype: \"user\",\n\t\t\t\ttitle: ' 我的',\n\t\t\t\tpage: 'index' }] };\n\n\n\n\t},\n\tcomponents: {\n\t\tviewTabbar: _uniTabbar2.default } };\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/babel-loader/lib?{\"babelrc\":false,\"retainLines\":true,\"presets\":[[\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-preset-env\",{\"modules\":\"commonjs\",\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"not ie <= 8\"]}}],\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-preset-stage-2\"],\"plugins\":[[\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-runtime\",{\"helpers\":false,\"polyfill\":false,\"regenerator\":true,\"moduleName\":\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-runtime\"}],\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-decorators-legacy\"]}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=script&index=0!D:/project/asgapp/pages/chat/index.vue\n// module id = 70\n// module chunks = 17\n\n//# sourceURL=uni-app:///pages/chat/index.vue?bb55");

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('view', {\n    staticClass: \"content\"\n  }, [_c('image', {\n    staticClass: \"logo\",\n    attrs: {\n      \"src\": \"../../static/logo.png\"\n    }\n  }), _c('view', [_c('text', {\n    staticClass: \"title\"\n  }, [_vm._v(_vm._s(_vm.title))])]), _c('view-tabbar', {\n    staticClass: \"tabbar\",\n    attrs: {\n      \"current\": \"0\",\n      \"tabs\": _vm.tabs,\n      \"mpcomid\": 'Swp-0'\n    }\n  })], 1)\n}\nvar staticRenderFns = []\nrender._withStripped = true\nvar esExports = { render: render, staticRenderFns: staticRenderFns }\n/* harmony default export */ __webpack_exports__[\"a\"] = (esExports);\nif (false) {\n  module.hot.accept()\n  if (module.hot.data) {\n     require(\"vue-hot-reload-api\").rerender(\"data-v-43ea2cb8\", esExports)\n  }\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./lib/mpvue-loader/lib/template-compiler?{\"id\":\"data-v-43ea2cb8\",\"hasScoped\":true,\"preserveWhitespace\":false}!./lib/preprocessor-loader.js?{\"type\":\"html\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=template&index=0!D:/project/asgapp/pages/chat/index.vue\n// module id = 71\n// module chunks = 17\n\n");

/***/ })

},[67]);
});
require('pages/chat/index.js');
__wxRoute = 'pages/chat/chat';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/chat/chat.js';

define('pages/chat/chat.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([20],{

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar _mpvuePageFactory = __webpack_require__(1);var _mpvuePageFactory2 = _interopRequireDefault(_mpvuePageFactory);\nvar _chat = __webpack_require__(73);var _chat2 = _interopRequireDefault(_chat);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\nPage((0, _mpvuePageFactory2.default)(_chat2.default));\n\n//////////////////\n// WEBPACK FOOTER\n// D:/project/asgapp/pages/chat/chat.js\n// module id = 72\n// module chunks = 20\n\n//# sourceURL=uni-app:///pages/chat/chat.js?1cc3");

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_chat_vue__ = __webpack_require__(75);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_chat_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_chat_vue__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_3d4b4376_hasScoped_false_preserveWhitespace_false_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_chat_vue__ = __webpack_require__(76);\nvar disposed = false\nfunction injectStyle (ssrContext) {\n  if (disposed) return\n  __webpack_require__(74)\n}\nvar normalizeComponent = __webpack_require__(0)\n/* script */\n\n/* template */\n\n/* styles */\nvar __vue_styles__ = injectStyle\n/* scopeId */\nvar __vue_scopeId__ = null\n/* moduleIdentifier (server only) */\nvar __vue_module_identifier__ = null\nvar Component = normalizeComponent(\n  __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_chat_vue___default.a,\n  __WEBPACK_IMPORTED_MODULE_1__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_3d4b4376_hasScoped_false_preserveWhitespace_false_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_chat_vue__[\"a\" /* default */],\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"..\\\\..\\\\..\\\\..\\\\..\\\\project\\\\asgapp\\\\pages\\\\chat\\\\chat.vue\"\nif (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== \"default\" && key.substr(0, 2) !== \"__\"})) {console.error(\"named exports are not supported in *.vue files.\")}\nif (Component.options.functional) {console.error(\"[vue-loader] chat.vue: functional components are not supported with templates, they should use render functions.\")}\n\n/* hot reload */\nif (false) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-3d4b4376\", Component.options)\n  } else {\n    hotAPI.reload(\"data-v-3d4b4376\", Component.options)\n  }\n  module.hot.dispose(function (data) {\n    disposed = true\n  })\n})()}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component.exports);\n\n\n//////////////////\n// WEBPACK FOOTER\n// D:/project/asgapp/pages/chat/chat.vue\n// module id = 73\n// module chunks = 20\n\n");

/***/ }),

/***/ 74:
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader!./lib/css-var-loader.js!./node_modules/css-loader?{\"minimize\":false,\"sourceMap\":false}!./lib/mpvue-loader/lib/style-compiler?{\"vue\":true,\"id\":\"data-v-3d4b4376\",\"scoped\":false,\"hasInlineConfig\":false}!./lib/css-upx-loader.js?{\"baseDpr\":1,\"rpxUnit\":1}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./node_modules/postcss-loader/lib?{\"config\":{\"path\":\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//.postcssrc.js\"},\"sourceMap\":true}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=styles&index=0!D:/project/asgapp/pages/chat/chat.vue\n// module id = 74\n// module chunks = 20\n\n");

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default =\n\n\n\n\n\n\n{\n\tonLoad: function onLoad() {\n\t\tconsole.log('页面中转页');\n\t\tuni.redirectTo({\n\t\t\turl: 'index' });\n\n\t} };\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)[\"default\"]))\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/babel-loader/lib?{\"babelrc\":false,\"retainLines\":true,\"presets\":[[\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-preset-env\",{\"modules\":\"commonjs\",\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"not ie <= 8\"]}}],\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-preset-stage-2\"],\"plugins\":[[\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-runtime\",{\"helpers\":false,\"polyfill\":false,\"regenerator\":true,\"moduleName\":\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-runtime\"}],\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-decorators-legacy\"]}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=script&index=0!D:/project/asgapp/pages/chat/chat.vue\n// module id = 75\n// module chunks = 20\n\n//# sourceURL=uni-app:///pages/chat/chat.vue?318d");

/***/ }),

/***/ 76:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('view', {\n    staticClass: \"content\"\n  }, [_vm._v(\"\\n\\t聊天首页页面中转\\n\")])\n}\nvar staticRenderFns = []\nrender._withStripped = true\nvar esExports = { render: render, staticRenderFns: staticRenderFns }\n/* harmony default export */ __webpack_exports__[\"a\"] = (esExports);\nif (false) {\n  module.hot.accept()\n  if (module.hot.data) {\n     require(\"vue-hot-reload-api\").rerender(\"data-v-3d4b4376\", esExports)\n  }\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./lib/mpvue-loader/lib/template-compiler?{\"id\":\"data-v-3d4b4376\",\"hasScoped\":false,\"preserveWhitespace\":false}!./lib/preprocessor-loader.js?{\"type\":\"html\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=template&index=0!D:/project/asgapp/pages/chat/chat.vue\n// module id = 76\n// module chunks = 20\n\n");

/***/ })

},[72]);
});
require('pages/chat/chat.js');
__wxRoute = 'pages/chat/friend-circle';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/chat/friend-circle.js';

define('pages/chat/friend-circle.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([19],{

/***/ 77:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar _mpvuePageFactory = __webpack_require__(1);var _mpvuePageFactory2 = _interopRequireDefault(_mpvuePageFactory);\nvar _friendCircle = __webpack_require__(78);var _friendCircle2 = _interopRequireDefault(_friendCircle);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\nPage((0, _mpvuePageFactory2.default)(_friendCircle2.default));\n\n//////////////////\n// WEBPACK FOOTER\n// D:/project/asgapp/pages/chat/friend-circle.js\n// module id = 77\n// module chunks = 19\n\n//# sourceURL=uni-app:///pages/chat/friend-circle.js?a890");

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_friend_circle_vue__ = __webpack_require__(80);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_friend_circle_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_friend_circle_vue__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_40c7a731_hasScoped_true_preserveWhitespace_false_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_friend_circle_vue__ = __webpack_require__(81);\nvar disposed = false\nfunction injectStyle (ssrContext) {\n  if (disposed) return\n  __webpack_require__(79)\n}\nvar normalizeComponent = __webpack_require__(0)\n/* script */\n\n/* template */\n\n/* styles */\nvar __vue_styles__ = injectStyle\n/* scopeId */\nvar __vue_scopeId__ = \"data-v-40c7a731\"\n/* moduleIdentifier (server only) */\nvar __vue_module_identifier__ = null\nvar Component = normalizeComponent(\n  __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_friend_circle_vue___default.a,\n  __WEBPACK_IMPORTED_MODULE_1__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_40c7a731_hasScoped_true_preserveWhitespace_false_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_friend_circle_vue__[\"a\" /* default */],\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"..\\\\..\\\\..\\\\..\\\\..\\\\project\\\\asgapp\\\\pages\\\\chat\\\\friend-circle.vue\"\nif (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== \"default\" && key.substr(0, 2) !== \"__\"})) {console.error(\"named exports are not supported in *.vue files.\")}\nif (Component.options.functional) {console.error(\"[vue-loader] friend-circle.vue: functional components are not supported with templates, they should use render functions.\")}\n\n/* hot reload */\nif (false) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-40c7a731\", Component.options)\n  } else {\n    hotAPI.reload(\"data-v-40c7a731\", Component.options)\n  }\n  module.hot.dispose(function (data) {\n    disposed = true\n  })\n})()}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component.exports);\n\n\n//////////////////\n// WEBPACK FOOTER\n// D:/project/asgapp/pages/chat/friend-circle.vue\n// module id = 78\n// module chunks = 19\n\n");

/***/ }),

/***/ 79:
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader!./lib/css-var-loader.js!./node_modules/css-loader?{\"minimize\":false,\"sourceMap\":false}!./lib/mpvue-loader/lib/style-compiler?{\"vue\":true,\"id\":\"data-v-40c7a731\",\"scoped\":true,\"hasInlineConfig\":false}!./lib/css-upx-loader.js?{\"baseDpr\":1,\"rpxUnit\":1}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./node_modules/postcss-loader/lib?{\"config\":{\"path\":\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//.postcssrc.js\"},\"sourceMap\":true}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=styles&index=0!D:/project/asgapp/pages/chat/friend-circle.vue\n// module id = 79\n// module chunks = 19\n\n");

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });\n\n\n\n\n\n\n\n\n\n\nvar _uniTabbar = __webpack_require__(2);var _uniTabbar2 = _interopRequireDefault(_uniTabbar);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default =\n{\n\tdata: function data() {\n\t\treturn {\n\t\t\ttitle: \"朋友圈\",\n\t\t\ttabs: [{\n\t\t\t\turl: \"index\",\n\t\t\t\ttype: \"bliaotian\",\n\t\t\t\ttitle: '聊天',\n\t\t\t\tpage: 'chat' },\n\t\t\t{\n\t\t\t\turl: \"/pages/chat/friend-circle\",\n\t\t\t\ttype: \"find\",\n\t\t\t\ttitle: '朋友圈',\n\t\t\t\tpage: 'chat' },\n\n\t\t\t{\n\t\t\t\turl: \"/pages/chat/group\",\n\t\t\t\ttype: \"tuandui\",\n\t\t\t\ttitle: ' 团队',\n\t\t\t\tpage: 'chat' },\n\n\t\t\t{\n\t\t\t\turl: \"/pages/chat/mail-list\",\n\t\t\t\ttype: \"txl\",\n\t\t\t\ttitle: ' 通讯录',\n\t\t\t\tpage: 'chat' },\n\n\t\t\t{\n\t\t\t\turl: \"user\",\n\t\t\t\ttype: \"user\",\n\t\t\t\ttitle: ' 我的',\n\t\t\t\tpage: 'index' }] };\n\n\n\n\t},\n\tcomponents: {\n\t\tviewTabbar: _uniTabbar2.default } };\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/babel-loader/lib?{\"babelrc\":false,\"retainLines\":true,\"presets\":[[\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-preset-env\",{\"modules\":\"commonjs\",\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"not ie <= 8\"]}}],\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-preset-stage-2\"],\"plugins\":[[\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-runtime\",{\"helpers\":false,\"polyfill\":false,\"regenerator\":true,\"moduleName\":\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-runtime\"}],\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-decorators-legacy\"]}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=script&index=0!D:/project/asgapp/pages/chat/friend-circle.vue\n// module id = 80\n// module chunks = 19\n\n//# sourceURL=uni-app:///pages/chat/friend-circle.vue?27d9");

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('view', {\n    staticClass: \"content\"\n  }, [_c('image', {\n    staticClass: \"logo\",\n    attrs: {\n      \"src\": \"../../static/logo.png\"\n    }\n  }), _c('view', [_c('text', {\n    staticClass: \"title\"\n  }, [_vm._v(_vm._s(_vm.title))])]), _c('view-tabbar', {\n    staticClass: \"tabbar\",\n    attrs: {\n      \"current\": \"1\",\n      \"tabs\": _vm.tabs,\n      \"mpcomid\": 'mJn-0'\n    }\n  })], 1)\n}\nvar staticRenderFns = []\nrender._withStripped = true\nvar esExports = { render: render, staticRenderFns: staticRenderFns }\n/* harmony default export */ __webpack_exports__[\"a\"] = (esExports);\nif (false) {\n  module.hot.accept()\n  if (module.hot.data) {\n     require(\"vue-hot-reload-api\").rerender(\"data-v-40c7a731\", esExports)\n  }\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./lib/mpvue-loader/lib/template-compiler?{\"id\":\"data-v-40c7a731\",\"hasScoped\":true,\"preserveWhitespace\":false}!./lib/preprocessor-loader.js?{\"type\":\"html\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=template&index=0!D:/project/asgapp/pages/chat/friend-circle.vue\n// module id = 81\n// module chunks = 19\n\n");

/***/ })

},[77]);
});
require('pages/chat/friend-circle.js');
__wxRoute = 'pages/chat/group';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/chat/group.js';

define('pages/chat/group.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([18],{

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar _mpvuePageFactory = __webpack_require__(1);var _mpvuePageFactory2 = _interopRequireDefault(_mpvuePageFactory);\nvar _group = __webpack_require__(83);var _group2 = _interopRequireDefault(_group);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\nPage((0, _mpvuePageFactory2.default)(_group2.default));\n\n//////////////////\n// WEBPACK FOOTER\n// D:/project/asgapp/pages/chat/group.js\n// module id = 82\n// module chunks = 18\n\n//# sourceURL=uni-app:///pages/chat/group.js?6651");

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_group_vue__ = __webpack_require__(85);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_group_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_group_vue__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_946fce5e_hasScoped_true_preserveWhitespace_false_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_group_vue__ = __webpack_require__(86);\nvar disposed = false\nfunction injectStyle (ssrContext) {\n  if (disposed) return\n  __webpack_require__(84)\n}\nvar normalizeComponent = __webpack_require__(0)\n/* script */\n\n/* template */\n\n/* styles */\nvar __vue_styles__ = injectStyle\n/* scopeId */\nvar __vue_scopeId__ = \"data-v-946fce5e\"\n/* moduleIdentifier (server only) */\nvar __vue_module_identifier__ = null\nvar Component = normalizeComponent(\n  __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_group_vue___default.a,\n  __WEBPACK_IMPORTED_MODULE_1__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_946fce5e_hasScoped_true_preserveWhitespace_false_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_group_vue__[\"a\" /* default */],\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"..\\\\..\\\\..\\\\..\\\\..\\\\project\\\\asgapp\\\\pages\\\\chat\\\\group.vue\"\nif (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== \"default\" && key.substr(0, 2) !== \"__\"})) {console.error(\"named exports are not supported in *.vue files.\")}\nif (Component.options.functional) {console.error(\"[vue-loader] group.vue: functional components are not supported with templates, they should use render functions.\")}\n\n/* hot reload */\nif (false) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-946fce5e\", Component.options)\n  } else {\n    hotAPI.reload(\"data-v-946fce5e\", Component.options)\n  }\n  module.hot.dispose(function (data) {\n    disposed = true\n  })\n})()}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component.exports);\n\n\n//////////////////\n// WEBPACK FOOTER\n// D:/project/asgapp/pages/chat/group.vue\n// module id = 83\n// module chunks = 18\n\n");

/***/ }),

/***/ 84:
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader!./lib/css-var-loader.js!./node_modules/css-loader?{\"minimize\":false,\"sourceMap\":false}!./lib/mpvue-loader/lib/style-compiler?{\"vue\":true,\"id\":\"data-v-946fce5e\",\"scoped\":true,\"hasInlineConfig\":false}!./lib/css-upx-loader.js?{\"baseDpr\":1,\"rpxUnit\":1}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./node_modules/postcss-loader/lib?{\"config\":{\"path\":\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//.postcssrc.js\"},\"sourceMap\":true}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=styles&index=0!D:/project/asgapp/pages/chat/group.vue\n// module id = 84\n// module chunks = 18\n\n");

/***/ }),

/***/ 85:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });\n\n\n\n\n\n\n\n\n\n\nvar _uniTabbar = __webpack_require__(2);var _uniTabbar2 = _interopRequireDefault(_uniTabbar);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default =\n{\n\tdata: function data() {\n\t\treturn {\n\t\t\ttitle: \"群组\",\n\t\t\ttabs: [{\n\t\t\t\turl: \"index\",\n\t\t\t\ttype: \"bliaotian\",\n\t\t\t\ttitle: '聊天',\n\t\t\t\tpage: 'chat' },\n\t\t\t{\n\t\t\t\turl: \"/pages/chat/friend-circle\",\n\t\t\t\ttype: \"find\",\n\t\t\t\ttitle: '朋友圈',\n\t\t\t\tpage: 'chat' },\n\n\t\t\t{\n\t\t\t\turl: \"/pages/chat/group\",\n\t\t\t\ttype: \"tuandui\",\n\t\t\t\ttitle: ' 团队',\n\t\t\t\tpage: 'chat' },\n\n\t\t\t{\n\t\t\t\turl: \"/pages/chat/mail-list\",\n\t\t\t\ttype: \"txl\",\n\t\t\t\ttitle: ' 通讯录',\n\t\t\t\tpage: 'chat' },\n\n\t\t\t{\n\t\t\t\turl: \"user\",\n\t\t\t\ttype: \"user\",\n\t\t\t\ttitle: ' 我的',\n\t\t\t\tpage: 'index' }] };\n\n\n\n\t},\n\tcomponents: {\n\t\tviewTabbar: _uniTabbar2.default } };\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/babel-loader/lib?{\"babelrc\":false,\"retainLines\":true,\"presets\":[[\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-preset-env\",{\"modules\":\"commonjs\",\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"not ie <= 8\"]}}],\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-preset-stage-2\"],\"plugins\":[[\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-runtime\",{\"helpers\":false,\"polyfill\":false,\"regenerator\":true,\"moduleName\":\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-runtime\"}],\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-decorators-legacy\"]}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=script&index=0!D:/project/asgapp/pages/chat/group.vue\n// module id = 85\n// module chunks = 18\n\n//# sourceURL=uni-app:///pages/chat/group.vue?bb71");

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('view', {\n    staticClass: \"content\"\n  }, [_c('image', {\n    staticClass: \"logo\",\n    attrs: {\n      \"src\": \"../../static/logo.png\"\n    }\n  }), _c('view', [_c('text', {\n    staticClass: \"title\"\n  }, [_vm._v(_vm._s(_vm.title))])]), _c('view-tabbar', {\n    staticClass: \"tabbar\",\n    attrs: {\n      \"current\": \"2\",\n      \"tabs\": _vm.tabs,\n      \"mpcomid\": 'ITT-0'\n    }\n  })], 1)\n}\nvar staticRenderFns = []\nrender._withStripped = true\nvar esExports = { render: render, staticRenderFns: staticRenderFns }\n/* harmony default export */ __webpack_exports__[\"a\"] = (esExports);\nif (false) {\n  module.hot.accept()\n  if (module.hot.data) {\n     require(\"vue-hot-reload-api\").rerender(\"data-v-946fce5e\", esExports)\n  }\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./lib/mpvue-loader/lib/template-compiler?{\"id\":\"data-v-946fce5e\",\"hasScoped\":true,\"preserveWhitespace\":false}!./lib/preprocessor-loader.js?{\"type\":\"html\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=template&index=0!D:/project/asgapp/pages/chat/group.vue\n// module id = 86\n// module chunks = 18\n\n");

/***/ })

},[82]);
});
require('pages/chat/group.js');
__wxRoute = 'pages/chat/mail-list';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/chat/mail-list.js';

define('pages/chat/mail-list.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([16],{

/***/ 87:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar _mpvuePageFactory = __webpack_require__(1);var _mpvuePageFactory2 = _interopRequireDefault(_mpvuePageFactory);\nvar _mailList = __webpack_require__(88);var _mailList2 = _interopRequireDefault(_mailList);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\nPage((0, _mpvuePageFactory2.default)(_mailList2.default));\n\n//////////////////\n// WEBPACK FOOTER\n// D:/project/asgapp/pages/chat/mail-list.js\n// module id = 87\n// module chunks = 16\n\n//# sourceURL=uni-app:///pages/chat/mail-list.js?98ff");

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_mail_list_vue__ = __webpack_require__(90);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_mail_list_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_mail_list_vue__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_cf7d0c74_hasScoped_true_preserveWhitespace_false_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_mail_list_vue__ = __webpack_require__(91);\nvar disposed = false\nfunction injectStyle (ssrContext) {\n  if (disposed) return\n  __webpack_require__(89)\n}\nvar normalizeComponent = __webpack_require__(0)\n/* script */\n\n/* template */\n\n/* styles */\nvar __vue_styles__ = injectStyle\n/* scopeId */\nvar __vue_scopeId__ = \"data-v-cf7d0c74\"\n/* moduleIdentifier (server only) */\nvar __vue_module_identifier__ = null\nvar Component = normalizeComponent(\n  __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_mail_list_vue___default.a,\n  __WEBPACK_IMPORTED_MODULE_1__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_cf7d0c74_hasScoped_true_preserveWhitespace_false_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_mail_list_vue__[\"a\" /* default */],\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"..\\\\..\\\\..\\\\..\\\\..\\\\project\\\\asgapp\\\\pages\\\\chat\\\\mail-list.vue\"\nif (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== \"default\" && key.substr(0, 2) !== \"__\"})) {console.error(\"named exports are not supported in *.vue files.\")}\nif (Component.options.functional) {console.error(\"[vue-loader] mail-list.vue: functional components are not supported with templates, they should use render functions.\")}\n\n/* hot reload */\nif (false) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-cf7d0c74\", Component.options)\n  } else {\n    hotAPI.reload(\"data-v-cf7d0c74\", Component.options)\n  }\n  module.hot.dispose(function (data) {\n    disposed = true\n  })\n})()}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component.exports);\n\n\n//////////////////\n// WEBPACK FOOTER\n// D:/project/asgapp/pages/chat/mail-list.vue\n// module id = 88\n// module chunks = 16\n\n");

/***/ }),

/***/ 89:
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader!./lib/css-var-loader.js!./node_modules/css-loader?{\"minimize\":false,\"sourceMap\":false}!./lib/mpvue-loader/lib/style-compiler?{\"vue\":true,\"id\":\"data-v-cf7d0c74\",\"scoped\":true,\"hasInlineConfig\":false}!./lib/css-upx-loader.js?{\"baseDpr\":1,\"rpxUnit\":1}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./node_modules/postcss-loader/lib?{\"config\":{\"path\":\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//.postcssrc.js\"},\"sourceMap\":true}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=styles&index=0!D:/project/asgapp/pages/chat/mail-list.vue\n// module id = 89\n// module chunks = 16\n\n");

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });\n\n\n\n\n\n\n\n\n\n\nvar _uniTabbar = __webpack_require__(2);var _uniTabbar2 = _interopRequireDefault(_uniTabbar);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default =\n{\n\tdata: function data() {\n\t\treturn {\n\t\t\ttitle: \"通讯录\",\n\t\t\ttabs: [{\n\t\t\t\turl: \"index\",\n\t\t\t\ttype: \"bliaotian\",\n\t\t\t\ttitle: '聊天',\n\t\t\t\tpage: 'chat' },\n\t\t\t{\n\t\t\t\turl: \"/pages/chat/friend-circle\",\n\t\t\t\ttype: \"find\",\n\t\t\t\ttitle: '朋友圈',\n\t\t\t\tpage: 'chat' },\n\n\t\t\t{\n\t\t\t\turl: \"/pages/chat/group\",\n\t\t\t\ttype: \"tuandui\",\n\t\t\t\ttitle: ' 团队',\n\t\t\t\tpage: 'chat' },\n\n\t\t\t{\n\t\t\t\turl: \"/pages/chat/mail-list\",\n\t\t\t\ttype: \"txl\",\n\t\t\t\ttitle: ' 通讯录',\n\t\t\t\tpage: 'chat' },\n\n\t\t\t{\n\t\t\t\turl: \"user\",\n\t\t\t\ttype: \"user\",\n\t\t\t\ttitle: ' 我的',\n\t\t\t\tpage: 'index' }] };\n\n\n\n\t},\n\tcomponents: {\n\t\tviewTabbar: _uniTabbar2.default } };\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/babel-loader/lib?{\"babelrc\":false,\"retainLines\":true,\"presets\":[[\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-preset-env\",{\"modules\":\"commonjs\",\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"not ie <= 8\"]}}],\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-preset-stage-2\"],\"plugins\":[[\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-runtime\",{\"helpers\":false,\"polyfill\":false,\"regenerator\":true,\"moduleName\":\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-runtime\"}],\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-decorators-legacy\"]}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=script&index=0!D:/project/asgapp/pages/chat/mail-list.vue\n// module id = 90\n// module chunks = 16\n\n//# sourceURL=uni-app:///pages/chat/mail-list.vue?68cd");

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('view', {\n    staticClass: \"content\"\n  }, [_c('image', {\n    staticClass: \"logo\",\n    attrs: {\n      \"src\": \"../../static/logo.png\"\n    }\n  }), _c('view', [_c('text', {\n    staticClass: \"title\"\n  }, [_vm._v(_vm._s(_vm.title))])]), _c('view-tabbar', {\n    staticClass: \"tabbar\",\n    attrs: {\n      \"current\": \"3\",\n      \"tabs\": _vm.tabs,\n      \"mpcomid\": '9kR-0'\n    }\n  })], 1)\n}\nvar staticRenderFns = []\nrender._withStripped = true\nvar esExports = { render: render, staticRenderFns: staticRenderFns }\n/* harmony default export */ __webpack_exports__[\"a\"] = (esExports);\nif (false) {\n  module.hot.accept()\n  if (module.hot.data) {\n     require(\"vue-hot-reload-api\").rerender(\"data-v-cf7d0c74\", esExports)\n  }\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./lib/mpvue-loader/lib/template-compiler?{\"id\":\"data-v-cf7d0c74\",\"hasScoped\":true,\"preserveWhitespace\":false}!./lib/preprocessor-loader.js?{\"type\":\"html\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=template&index=0!D:/project/asgapp/pages/chat/mail-list.vue\n// module id = 91\n// module chunks = 16\n\n");

/***/ })

},[87]);
});
require('pages/chat/mail-list.js');
__wxRoute = 'pages/school/school';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/school/school.js';

define('pages/school/school.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([8],{

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar _mpvuePageFactory = __webpack_require__(1);var _mpvuePageFactory2 = _interopRequireDefault(_mpvuePageFactory);\nvar _school = __webpack_require__(93);var _school2 = _interopRequireDefault(_school);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\nPage((0, _mpvuePageFactory2.default)(_school2.default));\n\n//////////////////\n// WEBPACK FOOTER\n// D:/project/asgapp/pages/school/school.js\n// module id = 92\n// module chunks = 8\n\n//# sourceURL=uni-app:///pages/school/school.js?bfdd");

/***/ }),

/***/ 93:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_school_vue__ = __webpack_require__(95);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_school_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_school_vue__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_258822b6_hasScoped_false_preserveWhitespace_false_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_school_vue__ = __webpack_require__(96);\nvar disposed = false\nfunction injectStyle (ssrContext) {\n  if (disposed) return\n  __webpack_require__(94)\n}\nvar normalizeComponent = __webpack_require__(0)\n/* script */\n\n/* template */\n\n/* styles */\nvar __vue_styles__ = injectStyle\n/* scopeId */\nvar __vue_scopeId__ = null\n/* moduleIdentifier (server only) */\nvar __vue_module_identifier__ = null\nvar Component = normalizeComponent(\n  __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_school_vue___default.a,\n  __WEBPACK_IMPORTED_MODULE_1__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_258822b6_hasScoped_false_preserveWhitespace_false_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_school_vue__[\"a\" /* default */],\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"..\\\\..\\\\..\\\\..\\\\..\\\\project\\\\asgapp\\\\pages\\\\school\\\\school.vue\"\nif (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== \"default\" && key.substr(0, 2) !== \"__\"})) {console.error(\"named exports are not supported in *.vue files.\")}\nif (Component.options.functional) {console.error(\"[vue-loader] school.vue: functional components are not supported with templates, they should use render functions.\")}\n\n/* hot reload */\nif (false) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-258822b6\", Component.options)\n  } else {\n    hotAPI.reload(\"data-v-258822b6\", Component.options)\n  }\n  module.hot.dispose(function (data) {\n    disposed = true\n  })\n})()}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component.exports);\n\n\n//////////////////\n// WEBPACK FOOTER\n// D:/project/asgapp/pages/school/school.vue\n// module id = 93\n// module chunks = 8\n\n");

/***/ }),

/***/ 94:
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader!./lib/css-var-loader.js!./node_modules/css-loader?{\"minimize\":false,\"sourceMap\":false}!./lib/mpvue-loader/lib/style-compiler?{\"vue\":true,\"id\":\"data-v-258822b6\",\"scoped\":false,\"hasInlineConfig\":false}!./lib/css-upx-loader.js?{\"baseDpr\":1,\"rpxUnit\":1}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./node_modules/postcss-loader/lib?{\"config\":{\"path\":\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//.postcssrc.js\"},\"sourceMap\":true}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=styles&index=0!D:/project/asgapp/pages/school/school.vue\n// module id = 94\n// module chunks = 8\n\n");

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default =\n\n\n\n\n\n\n{\n\tonLoad: function onLoad() {\n\t\tconsole.log('页面中转页');\n\t\tuni.reLaunch({\n\t\t\turl: '/pages/school/index' });\n\n\t} };\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)[\"default\"]))\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/babel-loader/lib?{\"babelrc\":false,\"retainLines\":true,\"presets\":[[\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-preset-env\",{\"modules\":\"commonjs\",\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"not ie <= 8\"]}}],\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-preset-stage-2\"],\"plugins\":[[\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-runtime\",{\"helpers\":false,\"polyfill\":false,\"regenerator\":true,\"moduleName\":\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-runtime\"}],\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-decorators-legacy\"]}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=script&index=0!D:/project/asgapp/pages/school/school.vue\n// module id = 95\n// module chunks = 8\n\n//# sourceURL=uni-app:///pages/school/school.vue?22a1");

/***/ }),

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('view', {\n    staticClass: \"content\"\n  }, [_vm._v(\"\\n\\t学院首页页面中转\\n\")])\n}\nvar staticRenderFns = []\nrender._withStripped = true\nvar esExports = { render: render, staticRenderFns: staticRenderFns }\n/* harmony default export */ __webpack_exports__[\"a\"] = (esExports);\nif (false) {\n  module.hot.accept()\n  if (module.hot.data) {\n     require(\"vue-hot-reload-api\").rerender(\"data-v-258822b6\", esExports)\n  }\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./lib/mpvue-loader/lib/template-compiler?{\"id\":\"data-v-258822b6\",\"hasScoped\":false,\"preserveWhitespace\":false}!./lib/preprocessor-loader.js?{\"type\":\"html\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=template&index=0!D:/project/asgapp/pages/school/school.vue\n// module id = 96\n// module chunks = 8\n\n");

/***/ })

},[92]);
});
require('pages/school/school.js');
__wxRoute = 'pages/school/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/school/index.js';

define('pages/school/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([12],{

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });\n\n\n\n\n\n\n\n\n\n\nvar _uniTabbar = __webpack_require__(2);var _uniTabbar2 = _interopRequireDefault(_uniTabbar);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default =\n{\n\tdata: function data() {\n\t\treturn {\n\t\t\ttitle: \"学院首页\",\n\t\t\ttabs: [{\n\t\t\t\turl: \"index\",\n\t\t\t\ttype: \"baokuan\",\n\t\t\t\ttitle: '每日爆款',\n\t\t\t\tpage: 'school' },\n\t\t\t{\n\t\t\t\turl: \"/pages/school/pub-ma\",\n\t\t\t\ttype: \"xuanchuan\",\n\t\t\t\ttitle: '宣传素材',\n\t\t\t\tpage: 'school' },\n\n\t\t\t{\n\t\t\t\turl: \"/pages/school/school-knowlege\",\n\t\t\t\ttype: \"study\",\n\t\t\t\ttitle: ' 知识学院',\n\t\t\t\tpage: 'school' },\n\n\t\t\t{\n\t\t\t\turl: \"/pages/school/recommend\",\n\t\t\t\ttype: \"xinyu\",\n\t\t\t\ttitle: ' 每日心语',\n\t\t\t\tpage: 'school' },\n\n\t\t\t{\n\t\t\t\turl: \"user\",\n\t\t\t\ttype: \"user\",\n\t\t\t\ttitle: ' 我的',\n\t\t\t\tpage: 'index' }] };\n\n\n\n\t},\n\tcomponents: {\n\t\tviewTabbar: _uniTabbar2.default } };\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/babel-loader/lib?{\"babelrc\":false,\"retainLines\":true,\"presets\":[[\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-preset-env\",{\"modules\":\"commonjs\",\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"not ie <= 8\"]}}],\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-preset-stage-2\"],\"plugins\":[[\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-runtime\",{\"helpers\":false,\"polyfill\":false,\"regenerator\":true,\"moduleName\":\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-runtime\"}],\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-decorators-legacy\"]}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=script&index=0!D:/project/asgapp/pages/school/index.vue\n// module id = 100\n// module chunks = 12\n\n//# sourceURL=uni-app:///pages/school/index.vue?e61b");

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('view', {\n    staticClass: \"content\"\n  }, [_c('image', {\n    staticClass: \"logo\",\n    attrs: {\n      \"src\": \"../../static/logo.png\"\n    }\n  }), _c('view', [_c('text', {\n    staticClass: \"title\"\n  }, [_vm._v(_vm._s(_vm.title))])]), _c('view-tabbar', {\n    attrs: {\n      \"current\": \"0\",\n      \"tabs\": _vm.tabs,\n      \"mpcomid\": 'nMM-0'\n    }\n  })], 1)\n}\nvar staticRenderFns = []\nrender._withStripped = true\nvar esExports = { render: render, staticRenderFns: staticRenderFns }\n/* harmony default export */ __webpack_exports__[\"a\"] = (esExports);\nif (false) {\n  module.hot.accept()\n  if (module.hot.data) {\n     require(\"vue-hot-reload-api\").rerender(\"data-v-8f269300\", esExports)\n  }\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./lib/mpvue-loader/lib/template-compiler?{\"id\":\"data-v-8f269300\",\"hasScoped\":false,\"preserveWhitespace\":false}!./lib/preprocessor-loader.js?{\"type\":\"html\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=template&index=0!D:/project/asgapp/pages/school/index.vue\n// module id = 101\n// module chunks = 12\n\n");

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar _mpvuePageFactory = __webpack_require__(1);var _mpvuePageFactory2 = _interopRequireDefault(_mpvuePageFactory);\nvar _index = __webpack_require__(98);var _index2 = _interopRequireDefault(_index);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\nPage((0, _mpvuePageFactory2.default)(_index2.default));\n\n//////////////////\n// WEBPACK FOOTER\n// D:/project/asgapp/pages/school/index.js\n// module id = 97\n// module chunks = 12\n\n//# sourceURL=uni-app:///pages/school/index.js?33ec");

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(100);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_index_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_index_vue__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_8f269300_hasScoped_false_preserveWhitespace_false_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(101);\nvar disposed = false\nfunction injectStyle (ssrContext) {\n  if (disposed) return\n  __webpack_require__(99)\n}\nvar normalizeComponent = __webpack_require__(0)\n/* script */\n\n/* template */\n\n/* styles */\nvar __vue_styles__ = injectStyle\n/* scopeId */\nvar __vue_scopeId__ = null\n/* moduleIdentifier (server only) */\nvar __vue_module_identifier__ = null\nvar Component = normalizeComponent(\n  __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_index_vue___default.a,\n  __WEBPACK_IMPORTED_MODULE_1__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_8f269300_hasScoped_false_preserveWhitespace_false_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_index_vue__[\"a\" /* default */],\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"..\\\\..\\\\..\\\\..\\\\..\\\\project\\\\asgapp\\\\pages\\\\school\\\\index.vue\"\nif (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== \"default\" && key.substr(0, 2) !== \"__\"})) {console.error(\"named exports are not supported in *.vue files.\")}\nif (Component.options.functional) {console.error(\"[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.\")}\n\n/* hot reload */\nif (false) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-8f269300\", Component.options)\n  } else {\n    hotAPI.reload(\"data-v-8f269300\", Component.options)\n  }\n  module.hot.dispose(function (data) {\n    disposed = true\n  })\n})()}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component.exports);\n\n\n//////////////////\n// WEBPACK FOOTER\n// D:/project/asgapp/pages/school/index.vue\n// module id = 98\n// module chunks = 12\n\n");

/***/ }),

/***/ 99:
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader!./lib/css-var-loader.js!./node_modules/css-loader?{\"minimize\":false,\"sourceMap\":false}!./lib/mpvue-loader/lib/style-compiler?{\"vue\":true,\"id\":\"data-v-8f269300\",\"scoped\":false,\"hasInlineConfig\":false}!./lib/css-upx-loader.js?{\"baseDpr\":1,\"rpxUnit\":1}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./node_modules/postcss-loader/lib?{\"config\":{\"path\":\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//.postcssrc.js\"},\"sourceMap\":true}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=styles&index=0!D:/project/asgapp/pages/school/index.vue\n// module id = 99\n// module chunks = 12\n\n");

/***/ })

},[97]);
});
require('pages/school/index.js');
__wxRoute = 'pages/school/pub-ma';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/school/pub-ma.js';

define('pages/school/pub-ma.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([11],{

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar _mpvuePageFactory = __webpack_require__(1);var _mpvuePageFactory2 = _interopRequireDefault(_mpvuePageFactory);\nvar _pubMa = __webpack_require__(103);var _pubMa2 = _interopRequireDefault(_pubMa);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\nPage((0, _mpvuePageFactory2.default)(_pubMa2.default));\n\n//////////////////\n// WEBPACK FOOTER\n// D:/project/asgapp/pages/school/pub-ma.js\n// module id = 102\n// module chunks = 11\n\n//# sourceURL=uni-app:///pages/school/pub-ma.js?2b97");

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_pub_ma_vue__ = __webpack_require__(105);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_pub_ma_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_pub_ma_vue__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_c256d4b4_hasScoped_false_preserveWhitespace_false_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_pub_ma_vue__ = __webpack_require__(106);\nvar disposed = false\nfunction injectStyle (ssrContext) {\n  if (disposed) return\n  __webpack_require__(104)\n}\nvar normalizeComponent = __webpack_require__(0)\n/* script */\n\n/* template */\n\n/* styles */\nvar __vue_styles__ = injectStyle\n/* scopeId */\nvar __vue_scopeId__ = null\n/* moduleIdentifier (server only) */\nvar __vue_module_identifier__ = null\nvar Component = normalizeComponent(\n  __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_pub_ma_vue___default.a,\n  __WEBPACK_IMPORTED_MODULE_1__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_c256d4b4_hasScoped_false_preserveWhitespace_false_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_pub_ma_vue__[\"a\" /* default */],\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"..\\\\..\\\\..\\\\..\\\\..\\\\project\\\\asgapp\\\\pages\\\\school\\\\pub-ma.vue\"\nif (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== \"default\" && key.substr(0, 2) !== \"__\"})) {console.error(\"named exports are not supported in *.vue files.\")}\nif (Component.options.functional) {console.error(\"[vue-loader] pub-ma.vue: functional components are not supported with templates, they should use render functions.\")}\n\n/* hot reload */\nif (false) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-c256d4b4\", Component.options)\n  } else {\n    hotAPI.reload(\"data-v-c256d4b4\", Component.options)\n  }\n  module.hot.dispose(function (data) {\n    disposed = true\n  })\n})()}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component.exports);\n\n\n//////////////////\n// WEBPACK FOOTER\n// D:/project/asgapp/pages/school/pub-ma.vue\n// module id = 103\n// module chunks = 11\n\n");

/***/ }),

/***/ 104:
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader!./lib/css-var-loader.js!./node_modules/css-loader?{\"minimize\":false,\"sourceMap\":false}!./lib/mpvue-loader/lib/style-compiler?{\"vue\":true,\"id\":\"data-v-c256d4b4\",\"scoped\":false,\"hasInlineConfig\":false}!./lib/css-upx-loader.js?{\"baseDpr\":1,\"rpxUnit\":1}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./node_modules/postcss-loader/lib?{\"config\":{\"path\":\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//.postcssrc.js\"},\"sourceMap\":true}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=styles&index=0!D:/project/asgapp/pages/school/pub-ma.vue\n// module id = 104\n// module chunks = 11\n\n");

/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });\n\n\n\n\n\n\n\n\n\n\nvar _uniTabbar = __webpack_require__(2);var _uniTabbar2 = _interopRequireDefault(_uniTabbar);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default =\n{\n\tdata: function data() {\n\t\treturn {\n\t\t\ttitle: \"学院知识\",\n\t\t\ttabs: [{\n\t\t\t\turl: \"index\",\n\t\t\t\ttype: \"baokuan\",\n\t\t\t\ttitle: '每日爆款',\n\t\t\t\tpage: 'school' },\n\t\t\t{\n\t\t\t\turl: \"/pages/school/pub-ma\",\n\t\t\t\ttype: \"xuanchuan\",\n\t\t\t\ttitle: '宣传素材',\n\t\t\t\tpage: 'school' },\n\n\t\t\t{\n\t\t\t\turl: \"/pages/school/school-knowlege\",\n\t\t\t\ttype: \"study\",\n\t\t\t\ttitle: ' 知识学院',\n\t\t\t\tpage: 'school' },\n\n\t\t\t{\n\t\t\t\turl: \"/pages/school/recommend\",\n\t\t\t\ttype: \"xinyu\",\n\t\t\t\ttitle: ' 每日心语',\n\t\t\t\tpage: 'school' },\n\n\t\t\t{\n\t\t\t\turl: \"user\",\n\t\t\t\ttype: \"user\",\n\t\t\t\ttitle: ' 我的',\n\t\t\t\tpage: 'index' }] };\n\n\n\n\t},\n\tcomponents: {\n\t\tviewTabbar: _uniTabbar2.default } };\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/babel-loader/lib?{\"babelrc\":false,\"retainLines\":true,\"presets\":[[\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-preset-env\",{\"modules\":\"commonjs\",\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"not ie <= 8\"]}}],\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-preset-stage-2\"],\"plugins\":[[\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-runtime\",{\"helpers\":false,\"polyfill\":false,\"regenerator\":true,\"moduleName\":\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-runtime\"}],\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-decorators-legacy\"]}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=script&index=0!D:/project/asgapp/pages/school/pub-ma.vue\n// module id = 105\n// module chunks = 11\n\n//# sourceURL=uni-app:///pages/school/pub-ma.vue?0cbd");

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('view', {\n    staticClass: \"content\"\n  }, [_c('image', {\n    staticClass: \"logo\",\n    attrs: {\n      \"src\": \"../../static/logo.png\"\n    }\n  }), _c('view', [_c('text', {\n    staticClass: \"title\"\n  }, [_vm._v(_vm._s(_vm.title))])]), _c('view-tabbar', {\n    attrs: {\n      \"current\": \"1\",\n      \"tabs\": _vm.tabs,\n      \"mpcomid\": '0Mj-0'\n    }\n  })], 1)\n}\nvar staticRenderFns = []\nrender._withStripped = true\nvar esExports = { render: render, staticRenderFns: staticRenderFns }\n/* harmony default export */ __webpack_exports__[\"a\"] = (esExports);\nif (false) {\n  module.hot.accept()\n  if (module.hot.data) {\n     require(\"vue-hot-reload-api\").rerender(\"data-v-c256d4b4\", esExports)\n  }\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./lib/mpvue-loader/lib/template-compiler?{\"id\":\"data-v-c256d4b4\",\"hasScoped\":false,\"preserveWhitespace\":false}!./lib/preprocessor-loader.js?{\"type\":\"html\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=template&index=0!D:/project/asgapp/pages/school/pub-ma.vue\n// module id = 106\n// module chunks = 11\n\n");

/***/ })

},[102]);
});
require('pages/school/pub-ma.js');
__wxRoute = 'pages/school/recommend';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/school/recommend.js';

define('pages/school/recommend.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([10],{

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar _mpvuePageFactory = __webpack_require__(1);var _mpvuePageFactory2 = _interopRequireDefault(_mpvuePageFactory);\nvar _recommend = __webpack_require__(108);var _recommend2 = _interopRequireDefault(_recommend);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\nPage((0, _mpvuePageFactory2.default)(_recommend2.default));\n\n//////////////////\n// WEBPACK FOOTER\n// D:/project/asgapp/pages/school/recommend.js\n// module id = 107\n// module chunks = 10\n\n//# sourceURL=uni-app:///pages/school/recommend.js?bc04");

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_recommend_vue__ = __webpack_require__(110);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_recommend_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_recommend_vue__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_63c99e6a_hasScoped_false_preserveWhitespace_false_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_recommend_vue__ = __webpack_require__(111);\nvar disposed = false\nfunction injectStyle (ssrContext) {\n  if (disposed) return\n  __webpack_require__(109)\n}\nvar normalizeComponent = __webpack_require__(0)\n/* script */\n\n/* template */\n\n/* styles */\nvar __vue_styles__ = injectStyle\n/* scopeId */\nvar __vue_scopeId__ = null\n/* moduleIdentifier (server only) */\nvar __vue_module_identifier__ = null\nvar Component = normalizeComponent(\n  __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_recommend_vue___default.a,\n  __WEBPACK_IMPORTED_MODULE_1__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_63c99e6a_hasScoped_false_preserveWhitespace_false_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_recommend_vue__[\"a\" /* default */],\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"..\\\\..\\\\..\\\\..\\\\..\\\\project\\\\asgapp\\\\pages\\\\school\\\\recommend.vue\"\nif (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== \"default\" && key.substr(0, 2) !== \"__\"})) {console.error(\"named exports are not supported in *.vue files.\")}\nif (Component.options.functional) {console.error(\"[vue-loader] recommend.vue: functional components are not supported with templates, they should use render functions.\")}\n\n/* hot reload */\nif (false) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-63c99e6a\", Component.options)\n  } else {\n    hotAPI.reload(\"data-v-63c99e6a\", Component.options)\n  }\n  module.hot.dispose(function (data) {\n    disposed = true\n  })\n})()}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component.exports);\n\n\n//////////////////\n// WEBPACK FOOTER\n// D:/project/asgapp/pages/school/recommend.vue\n// module id = 108\n// module chunks = 10\n\n");

/***/ }),

/***/ 109:
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader!./lib/css-var-loader.js!./node_modules/css-loader?{\"minimize\":false,\"sourceMap\":false}!./lib/mpvue-loader/lib/style-compiler?{\"vue\":true,\"id\":\"data-v-63c99e6a\",\"scoped\":false,\"hasInlineConfig\":false}!./lib/css-upx-loader.js?{\"baseDpr\":1,\"rpxUnit\":1}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./node_modules/postcss-loader/lib?{\"config\":{\"path\":\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//.postcssrc.js\"},\"sourceMap\":true}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=styles&index=0!D:/project/asgapp/pages/school/recommend.vue\n// module id = 109\n// module chunks = 10\n\n");

/***/ }),

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });\n\n\n\n\n\n\n\n\n\n\nvar _uniTabbar = __webpack_require__(2);var _uniTabbar2 = _interopRequireDefault(_uniTabbar);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default =\n{\n\tdata: function data() {\n\t\treturn {\n\t\t\ttitle: \"学院知识\",\n\t\t\ttabs: [{\n\t\t\t\turl: \"index\",\n\t\t\t\ttype: \"baokuan\",\n\t\t\t\ttitle: '每日爆款',\n\t\t\t\tpage: 'school' },\n\t\t\t{\n\t\t\t\turl: \"/pages/school/pub-ma\",\n\t\t\t\ttype: \"xuanchuan\",\n\t\t\t\ttitle: '宣传素材',\n\t\t\t\tpage: 'school' },\n\n\t\t\t{\n\t\t\t\turl: \"/pages/school/school-knowlege\",\n\t\t\t\ttype: \"study\",\n\t\t\t\ttitle: ' 知识学院',\n\t\t\t\tpage: 'school' },\n\n\t\t\t{\n\t\t\t\turl: \"/pages/school/recommend\",\n\t\t\t\ttype: \"xinyu\",\n\t\t\t\ttitle: ' 每日心语',\n\t\t\t\tpage: 'school' },\n\n\t\t\t{\n\t\t\t\turl: \"user\",\n\t\t\t\ttype: \"user\",\n\t\t\t\ttitle: ' 我的',\n\t\t\t\tpage: 'index' }] };\n\n\n\n\t},\n\tcomponents: {\n\t\tviewTabbar: _uniTabbar2.default } };\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/babel-loader/lib?{\"babelrc\":false,\"retainLines\":true,\"presets\":[[\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-preset-env\",{\"modules\":\"commonjs\",\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"not ie <= 8\"]}}],\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-preset-stage-2\"],\"plugins\":[[\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-runtime\",{\"helpers\":false,\"polyfill\":false,\"regenerator\":true,\"moduleName\":\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-runtime\"}],\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-decorators-legacy\"]}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=script&index=0!D:/project/asgapp/pages/school/recommend.vue\n// module id = 110\n// module chunks = 10\n\n//# sourceURL=uni-app:///pages/school/recommend.vue?ac7e");

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('view', {\n    staticClass: \"content\"\n  }, [_c('image', {\n    staticClass: \"logo\",\n    attrs: {\n      \"src\": \"../../static/logo.png\"\n    }\n  }), _c('view', [_c('text', {\n    staticClass: \"title\"\n  }, [_vm._v(_vm._s(_vm.title))])]), _c('view-tabbar', {\n    attrs: {\n      \"current\": \"3\",\n      \"tabs\": _vm.tabs,\n      \"mpcomid\": 'tgP-0'\n    }\n  })], 1)\n}\nvar staticRenderFns = []\nrender._withStripped = true\nvar esExports = { render: render, staticRenderFns: staticRenderFns }\n/* harmony default export */ __webpack_exports__[\"a\"] = (esExports);\nif (false) {\n  module.hot.accept()\n  if (module.hot.data) {\n     require(\"vue-hot-reload-api\").rerender(\"data-v-63c99e6a\", esExports)\n  }\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./lib/mpvue-loader/lib/template-compiler?{\"id\":\"data-v-63c99e6a\",\"hasScoped\":false,\"preserveWhitespace\":false}!./lib/preprocessor-loader.js?{\"type\":\"html\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=template&index=0!D:/project/asgapp/pages/school/recommend.vue\n// module id = 111\n// module chunks = 10\n\n");

/***/ })

},[107]);
});
require('pages/school/recommend.js');
__wxRoute = 'pages/school/school-knowlege';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/school/school-knowlege.js';

define('pages/school/school-knowlege.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([9],{

/***/ 112:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar _mpvuePageFactory = __webpack_require__(1);var _mpvuePageFactory2 = _interopRequireDefault(_mpvuePageFactory);\nvar _schoolKnowlege = __webpack_require__(113);var _schoolKnowlege2 = _interopRequireDefault(_schoolKnowlege);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\nPage((0, _mpvuePageFactory2.default)(_schoolKnowlege2.default));\n\n//////////////////\n// WEBPACK FOOTER\n// D:/project/asgapp/pages/school/school-knowlege.js\n// module id = 112\n// module chunks = 9\n\n//# sourceURL=uni-app:///pages/school/school-knowlege.js?1de9");

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_school_knowlege_vue__ = __webpack_require__(115);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_school_knowlege_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_school_knowlege_vue__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_ed8c0dee_hasScoped_false_preserveWhitespace_false_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_school_knowlege_vue__ = __webpack_require__(116);\nvar disposed = false\nfunction injectStyle (ssrContext) {\n  if (disposed) return\n  __webpack_require__(114)\n}\nvar normalizeComponent = __webpack_require__(0)\n/* script */\n\n/* template */\n\n/* styles */\nvar __vue_styles__ = injectStyle\n/* scopeId */\nvar __vue_scopeId__ = null\n/* moduleIdentifier (server only) */\nvar __vue_module_identifier__ = null\nvar Component = normalizeComponent(\n  __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_school_knowlege_vue___default.a,\n  __WEBPACK_IMPORTED_MODULE_1__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_ed8c0dee_hasScoped_false_preserveWhitespace_false_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_school_knowlege_vue__[\"a\" /* default */],\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"..\\\\..\\\\..\\\\..\\\\..\\\\project\\\\asgapp\\\\pages\\\\school\\\\school-knowlege.vue\"\nif (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== \"default\" && key.substr(0, 2) !== \"__\"})) {console.error(\"named exports are not supported in *.vue files.\")}\nif (Component.options.functional) {console.error(\"[vue-loader] school-knowlege.vue: functional components are not supported with templates, they should use render functions.\")}\n\n/* hot reload */\nif (false) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-ed8c0dee\", Component.options)\n  } else {\n    hotAPI.reload(\"data-v-ed8c0dee\", Component.options)\n  }\n  module.hot.dispose(function (data) {\n    disposed = true\n  })\n})()}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component.exports);\n\n\n//////////////////\n// WEBPACK FOOTER\n// D:/project/asgapp/pages/school/school-knowlege.vue\n// module id = 113\n// module chunks = 9\n\n");

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader!./lib/css-var-loader.js!./node_modules/css-loader?{\"minimize\":false,\"sourceMap\":false}!./lib/mpvue-loader/lib/style-compiler?{\"vue\":true,\"id\":\"data-v-ed8c0dee\",\"scoped\":false,\"hasInlineConfig\":false}!./lib/css-upx-loader.js?{\"baseDpr\":1,\"rpxUnit\":1}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./node_modules/postcss-loader/lib?{\"config\":{\"path\":\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//.postcssrc.js\"},\"sourceMap\":true}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=styles&index=0!D:/project/asgapp/pages/school/school-knowlege.vue\n// module id = 114\n// module chunks = 9\n\n");

/***/ }),

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });\n\n\n\n\n\n\n\n\n\n\nvar _uniTabbar = __webpack_require__(2);var _uniTabbar2 = _interopRequireDefault(_uniTabbar);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default =\n{\n\tdata: function data() {\n\t\treturn {\n\t\t\ttitle: \"学院知识\",\n\t\t\ttabs: [{\n\t\t\t\turl: \"index\",\n\t\t\t\ttype: \"baokuan\",\n\t\t\t\ttitle: '每日爆款',\n\t\t\t\tpage: 'school' },\n\t\t\t{\n\t\t\t\turl: \"/pages/school/pub-ma\",\n\t\t\t\ttype: \"xuanchuan\",\n\t\t\t\ttitle: '宣传素材',\n\t\t\t\tpage: 'school' },\n\n\t\t\t{\n\t\t\t\turl: \"/pages/school/school-knowlege\",\n\t\t\t\ttype: \"study\",\n\t\t\t\ttitle: ' 知识学院',\n\t\t\t\tpage: 'school' },\n\n\t\t\t{\n\t\t\t\turl: \"/pages/school/recommend\",\n\t\t\t\ttype: \"xinyu\",\n\t\t\t\ttitle: ' 每日心语',\n\t\t\t\tpage: 'school' },\n\n\t\t\t{\n\t\t\t\turl: \"user\",\n\t\t\t\ttype: \"user\",\n\t\t\t\ttitle: ' 我的',\n\t\t\t\tpage: 'index' }] };\n\n\n\n\t},\n\tcomponents: {\n\t\tviewTabbar: _uniTabbar2.default } };\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/babel-loader/lib?{\"babelrc\":false,\"retainLines\":true,\"presets\":[[\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-preset-env\",{\"modules\":\"commonjs\",\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"not ie <= 8\"]}}],\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-preset-stage-2\"],\"plugins\":[[\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-runtime\",{\"helpers\":false,\"polyfill\":false,\"regenerator\":true,\"moduleName\":\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-runtime\"}],\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-decorators-legacy\"]}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=script&index=0!D:/project/asgapp/pages/school/school-knowlege.vue\n// module id = 115\n// module chunks = 9\n\n//# sourceURL=uni-app:///pages/school/school-knowlege.vue?e7de");

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('view', {\n    staticClass: \"content\"\n  }, [_c('image', {\n    staticClass: \"logo\",\n    attrs: {\n      \"src\": \"../../static/logo.png\"\n    }\n  }), _c('view', [_c('text', {\n    staticClass: \"title\"\n  }, [_vm._v(_vm._s(_vm.title))])]), _c('view-tabbar', {\n    attrs: {\n      \"current\": \"2\",\n      \"tabs\": _vm.tabs,\n      \"mpcomid\": 'SHt-0'\n    }\n  })], 1)\n}\nvar staticRenderFns = []\nrender._withStripped = true\nvar esExports = { render: render, staticRenderFns: staticRenderFns }\n/* harmony default export */ __webpack_exports__[\"a\"] = (esExports);\nif (false) {\n  module.hot.accept()\n  if (module.hot.data) {\n     require(\"vue-hot-reload-api\").rerender(\"data-v-ed8c0dee\", esExports)\n  }\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./lib/mpvue-loader/lib/template-compiler?{\"id\":\"data-v-ed8c0dee\",\"hasScoped\":false,\"preserveWhitespace\":false}!./lib/preprocessor-loader.js?{\"type\":\"html\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=template&index=0!D:/project/asgapp/pages/school/school-knowlege.vue\n// module id = 116\n// module chunks = 9\n\n");

/***/ })

},[112]);
});
require('pages/school/school-knowlege.js');
__wxRoute = 'pages/index/user';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/user.js';

define('pages/index/user.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([13],{

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar _mpvuePageFactory = __webpack_require__(1);var _mpvuePageFactory2 = _interopRequireDefault(_mpvuePageFactory);\nvar _user = __webpack_require__(118);var _user2 = _interopRequireDefault(_user);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\nPage((0, _mpvuePageFactory2.default)(_user2.default));\n\n//////////////////\n// WEBPACK FOOTER\n// D:/project/asgapp/pages/index/user.js\n// module id = 117\n// module chunks = 13\n\n//# sourceURL=uni-app:///pages/index/user.js?5517");

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_user_vue__ = __webpack_require__(120);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_user_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_user_vue__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_1fbf82b1_hasScoped_false_preserveWhitespace_false_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_user_vue__ = __webpack_require__(121);\nvar disposed = false\nfunction injectStyle (ssrContext) {\n  if (disposed) return\n  __webpack_require__(119)\n}\nvar normalizeComponent = __webpack_require__(0)\n/* script */\n\n/* template */\n\n/* styles */\nvar __vue_styles__ = injectStyle\n/* scopeId */\nvar __vue_scopeId__ = null\n/* moduleIdentifier (server only) */\nvar __vue_module_identifier__ = null\nvar Component = normalizeComponent(\n  __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_user_vue___default.a,\n  __WEBPACK_IMPORTED_MODULE_1__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_1fbf82b1_hasScoped_false_preserveWhitespace_false_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_user_vue__[\"a\" /* default */],\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"..\\\\..\\\\..\\\\..\\\\..\\\\project\\\\asgapp\\\\pages\\\\index\\\\user.vue\"\nif (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== \"default\" && key.substr(0, 2) !== \"__\"})) {console.error(\"named exports are not supported in *.vue files.\")}\nif (Component.options.functional) {console.error(\"[vue-loader] user.vue: functional components are not supported with templates, they should use render functions.\")}\n\n/* hot reload */\nif (false) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-1fbf82b1\", Component.options)\n  } else {\n    hotAPI.reload(\"data-v-1fbf82b1\", Component.options)\n  }\n  module.hot.dispose(function (data) {\n    disposed = true\n  })\n})()}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component.exports);\n\n\n//////////////////\n// WEBPACK FOOTER\n// D:/project/asgapp/pages/index/user.vue\n// module id = 118\n// module chunks = 13\n\n");

/***/ }),

/***/ 119:
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader!./lib/css-var-loader.js!./node_modules/css-loader?{\"minimize\":false,\"sourceMap\":false}!./lib/mpvue-loader/lib/style-compiler?{\"vue\":true,\"id\":\"data-v-1fbf82b1\",\"scoped\":false,\"hasInlineConfig\":false}!./lib/css-upx-loader.js?{\"baseDpr\":1,\"rpxUnit\":1}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./node_modules/postcss-loader/lib?{\"config\":{\"path\":\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//.postcssrc.js\"},\"sourceMap\":true}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=styles&index=0!D:/project/asgapp/pages/index/user.vue\n// module id = 119\n// module chunks = 13\n\n");

/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default =\n\n\n\n\n\n\n\n\n\n{\n\tdata: function data() {\n\t\treturn {\n\t\t\ttitle: '个人' };\n\n\t},\n\tonLoad: function onLoad() {\n\n\t},\n\tmethods: {} };\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/babel-loader/lib?{\"babelrc\":false,\"retainLines\":true,\"presets\":[[\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-preset-env\",{\"modules\":\"commonjs\",\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"not ie <= 8\"]}}],\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-preset-stage-2\"],\"plugins\":[[\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-runtime\",{\"helpers\":false,\"polyfill\":false,\"regenerator\":true,\"moduleName\":\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-runtime\"}],\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-decorators-legacy\"]}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=script&index=0!D:/project/asgapp/pages/index/user.vue\n// module id = 120\n// module chunks = 13\n\n//# sourceURL=uni-app:///pages/index/user.vue?b123");

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('view', {\n    staticClass: \"content\"\n  }, [_c('image', {\n    staticClass: \"logo\",\n    attrs: {\n      \"src\": \"../../static/logo.png\"\n    }\n  }), _c('view', [_c('text', {\n    staticClass: \"title\"\n  }, [_vm._v(_vm._s(_vm.title))])])])\n}\nvar staticRenderFns = []\nrender._withStripped = true\nvar esExports = { render: render, staticRenderFns: staticRenderFns }\n/* harmony default export */ __webpack_exports__[\"a\"] = (esExports);\nif (false) {\n  module.hot.accept()\n  if (module.hot.data) {\n     require(\"vue-hot-reload-api\").rerender(\"data-v-1fbf82b1\", esExports)\n  }\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./lib/mpvue-loader/lib/template-compiler?{\"id\":\"data-v-1fbf82b1\",\"hasScoped\":false,\"preserveWhitespace\":false}!./lib/preprocessor-loader.js?{\"type\":\"html\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=template&index=0!D:/project/asgapp/pages/index/user.vue\n// module id = 121\n// module chunks = 13\n\n");

/***/ })

},[117]);
});
require('pages/index/user.js');
__wxRoute = 'pages/common/good';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/common/good.js';

define('pages/common/good.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([15],{

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar _mpvuePageFactory = __webpack_require__(1);var _mpvuePageFactory2 = _interopRequireDefault(_mpvuePageFactory);\nvar _good = __webpack_require__(123);var _good2 = _interopRequireDefault(_good);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\nPage((0, _mpvuePageFactory2.default)(_good2.default));\n\n//////////////////\n// WEBPACK FOOTER\n// D:/project/asgapp/pages/common/good.js\n// module id = 122\n// module chunks = 15\n\n//# sourceURL=uni-app:///pages/common/good.js?f7c1");

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_good_vue__ = __webpack_require__(125);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_good_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_good_vue__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_72e2b530_hasScoped_true_preserveWhitespace_false_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_good_vue__ = __webpack_require__(129);\nvar disposed = false\nfunction injectStyle (ssrContext) {\n  if (disposed) return\n  __webpack_require__(124)\n}\nvar normalizeComponent = __webpack_require__(0)\n/* script */\n\n/* template */\n\n/* styles */\nvar __vue_styles__ = injectStyle\n/* scopeId */\nvar __vue_scopeId__ = \"data-v-72e2b530\"\n/* moduleIdentifier (server only) */\nvar __vue_module_identifier__ = null\nvar Component = normalizeComponent(\n  __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_good_vue___default.a,\n  __WEBPACK_IMPORTED_MODULE_1__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_72e2b530_hasScoped_true_preserveWhitespace_false_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_good_vue__[\"a\" /* default */],\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"..\\\\..\\\\..\\\\..\\\\..\\\\project\\\\asgapp\\\\pages\\\\common\\\\good.vue\"\nif (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== \"default\" && key.substr(0, 2) !== \"__\"})) {console.error(\"named exports are not supported in *.vue files.\")}\nif (Component.options.functional) {console.error(\"[vue-loader] good.vue: functional components are not supported with templates, they should use render functions.\")}\n\n/* hot reload */\nif (false) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-72e2b530\", Component.options)\n  } else {\n    hotAPI.reload(\"data-v-72e2b530\", Component.options)\n  }\n  module.hot.dispose(function (data) {\n    disposed = true\n  })\n})()}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component.exports);\n\n\n//////////////////\n// WEBPACK FOOTER\n// D:/project/asgapp/pages/common/good.vue\n// module id = 123\n// module chunks = 15\n\n");

/***/ }),

/***/ 124:
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader!./lib/css-var-loader.js!./node_modules/css-loader?{\"minimize\":false,\"sourceMap\":false}!./lib/mpvue-loader/lib/style-compiler?{\"vue\":true,\"id\":\"data-v-72e2b530\",\"scoped\":true,\"hasInlineConfig\":false}!./lib/css-upx-loader.js?{\"baseDpr\":1,\"rpxUnit\":1}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./node_modules/postcss-loader/lib?{\"config\":{\"path\":\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//.postcssrc.js\"},\"sourceMap\":true}!./node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!./lib/mpvue-loader/lib/selector.js?type=styles&index=0!D:/project/asgapp/pages/common/good.vue\n// module id = 124\n// module chunks = 15\n\n");

/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });\n\n\n\nvar _productList = __webpack_require__(5);var _productList2 = _interopRequireDefault(_productList);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default =\n{\n\tdata: function data() {\n\t\treturn {};\n\t} };\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/babel-loader/lib?{\"babelrc\":false,\"retainLines\":true,\"presets\":[[\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-preset-env\",{\"modules\":\"commonjs\",\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"not ie <= 8\"]}}],\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-preset-stage-2\"],\"plugins\":[[\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-runtime\",{\"helpers\":false,\"polyfill\":false,\"regenerator\":true,\"moduleName\":\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-runtime\"}],\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-decorators-legacy\"]}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=script&index=0!D:/project/asgapp/pages/common/good.vue\n// module id = 125\n// module chunks = 15\n\n//# sourceURL=uni-app:///pages/common/good.vue?0d7a");

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('view', [_vm._v(\"?????\")])\n}\nvar staticRenderFns = []\nrender._withStripped = true\nvar esExports = { render: render, staticRenderFns: staticRenderFns }\n/* harmony default export */ __webpack_exports__[\"a\"] = (esExports);\nif (false) {\n  module.hot.accept()\n  if (module.hot.data) {\n     require(\"vue-hot-reload-api\").rerender(\"data-v-72e2b530\", esExports)\n  }\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./lib/mpvue-loader/lib/template-compiler?{\"id\":\"data-v-72e2b530\",\"hasScoped\":true,\"preserveWhitespace\":false}!./lib/preprocessor-loader.js?{\"type\":\"html\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=template&index=0!D:/project/asgapp/pages/common/good.vue\n// module id = 129\n// module chunks = 15\n\n");

/***/ })

},[122]);
});
require('pages/common/good.js');
__wxRoute = 'pages/common/goods-detail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/common/goods-detail.js';

define('pages/common/goods-detail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([14],{

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar _mpvuePageFactory = __webpack_require__(1);var _mpvuePageFactory2 = _interopRequireDefault(_mpvuePageFactory);\nvar _goodsDetail = __webpack_require__(131);var _goodsDetail2 = _interopRequireDefault(_goodsDetail);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}\nPage((0, _mpvuePageFactory2.default)(_goodsDetail2.default));\n\n//////////////////\n// WEBPACK FOOTER\n// D:/project/asgapp/pages/common/goods-detail.js\n// module id = 130\n// module chunks = 14\n\n//# sourceURL=uni-app:///pages/common/goods-detail.js?0da3");

/***/ }),

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_goods_detail_vue__ = __webpack_require__(133);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_goods_detail_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_goods_detail_vue__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_29a9da5a_hasScoped_true_preserveWhitespace_false_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_goods_detail_vue__ = __webpack_require__(134);\nvar disposed = false\nfunction injectStyle (ssrContext) {\n  if (disposed) return\n  __webpack_require__(132)\n}\nvar normalizeComponent = __webpack_require__(0)\n/* script */\n\n/* template */\n\n/* styles */\nvar __vue_styles__ = injectStyle\n/* scopeId */\nvar __vue_scopeId__ = \"data-v-29a9da5a\"\n/* moduleIdentifier (server only) */\nvar __vue_module_identifier__ = null\nvar Component = normalizeComponent(\n  __WEBPACK_IMPORTED_MODULE_0__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_loader_babelrc_false_retainLines_true_presets_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_env_modules_commonjs_targets_browsers_1_last_2_versions_not_ie_8_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_preset_stage_2_plugins_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_runtime_helpers_false_polyfill_false_regenerator_true_moduleName_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_runtime_D_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_node_modules_babel_plugin_transform_decorators_legacy_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_js_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_script_index_0_goods_detail_vue___default.a,\n  __WEBPACK_IMPORTED_MODULE_1__download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_template_compiler_index_id_data_v_29a9da5a_hasScoped_true_preserveWhitespace_false_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_preprocessor_loader_js_type_html_context_APP_PLUS_true_download_HBuilderX_1_2_1_20181126_full_HBuilderX_plugins_uniapp_lib_mpvue_loader_lib_selector_type_template_index_0_goods_detail_vue__[\"a\" /* default */],\n  __vue_styles__,\n  __vue_scopeId__,\n  __vue_module_identifier__\n)\nComponent.options.__file = \"..\\\\..\\\\..\\\\..\\\\..\\\\project\\\\asgapp\\\\pages\\\\common\\\\goods-detail.vue\"\nif (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== \"default\" && key.substr(0, 2) !== \"__\"})) {console.error(\"named exports are not supported in *.vue files.\")}\nif (Component.options.functional) {console.error(\"[vue-loader] goods-detail.vue: functional components are not supported with templates, they should use render functions.\")}\n\n/* hot reload */\nif (false) {(function () {\n  var hotAPI = require(\"vue-hot-reload-api\")\n  hotAPI.install(require(\"vue\"), false)\n  if (!hotAPI.compatible) return\n  module.hot.accept()\n  if (!module.hot.data) {\n    hotAPI.createRecord(\"data-v-29a9da5a\", Component.options)\n  } else {\n    hotAPI.reload(\"data-v-29a9da5a\", Component.options)\n  }\n  module.hot.dispose(function (data) {\n    disposed = true\n  })\n})()}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Component.exports);\n\n\n//////////////////\n// WEBPACK FOOTER\n// D:/project/asgapp/pages/common/goods-detail.vue\n// module id = 131\n// module chunks = 14\n\n");

/***/ }),

/***/ 132:
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!./node_modules/vue-style-loader!./lib/css-var-loader.js!./node_modules/css-loader?{\"minimize\":false,\"sourceMap\":false}!./lib/mpvue-loader/lib/style-compiler?{\"vue\":true,\"id\":\"data-v-29a9da5a\",\"scoped\":true,\"hasInlineConfig\":false}!./lib/css-upx-loader.js?{\"baseDpr\":1,\"rpxUnit\":1}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./node_modules/postcss-loader/lib?{\"config\":{\"path\":\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//.postcssrc.js\"},\"sourceMap\":true}!./node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!./lib/mpvue-loader/lib/selector.js?type=styles&index=0!D:/project/asgapp/pages/common/goods-detail.vue\n// module id = 132\n// module chunks = 14\n\n");

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, \"__esModule\", { value: true });\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _productList = __webpack_require__(5);var _productList2 = _interopRequireDefault(_productList);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}exports.default =\n{\n\tdata: function data() {\n\t\treturn {\n\t\t\tscrolltop: 0,\n\t\t\tnavisShow: true,\n\t\t\tisactive: true,\n\t\t\treprice: 15,\n\t\t\tdetailimg: '<div class=\"\"><p><img src=\"https://img.alicdn.com/imgextra/i3/2828294548/O1CN011jT1llnGVYeFDJZ_!!2828294548.jpg\" style=\"max-width:100.0%;\" size=\"730x377\"><img align=\"absmiddle\" src=\"https://img.alicdn.com/imgextra/i1/2828294548/O1CN011jT1lmpDgWWLbSo_!!2828294548.jpg\" style=\"max-width:100.0%;\" size=\"750x2370\"><img align=\"absmiddle\" src=\"https://img.alicdn.com/imgextra/i1/2828294548/O1CN011jT1llYi3om84lP_!!2828294548.jpg\" style=\"max-width:100.0%;\" size=\"750x1685\"><img align=\"absmiddle\" src=\"https://img.alicdn.com/imgextra/i3/2828294548/O1CN011jT1lm2UUZ8Jh72_!!2828294548.jpg\" style=\"max-width:100.0%;\" size=\"750x1689\"><img align=\"absmiddle\" src=\"https://img.alicdn.com/imgextra/i2/2828294548/O1CN011jT1lmpCHEy58ak_!!2828294548.jpg\" style=\"max-width:100.0%;\" size=\"750x2234\"><img align=\"absmiddle\" src=\"https:https://img.alicdn.com/imgextra/i4/2828294548/O1CN011jT1lf6oqrXUOO7_!!2828294548.jpg\" style=\"max-width:100.0%;\" size=\"750x2387\"><img align=\"absmiddle\" src=\"https://img.alicdn.com/imgextra/i4/2828294548/O1CN011jT1lf6p3JikKDu_!!2828294548.jpg\" style=\"max-width:100.0%;\" size=\"750x2124\"><img align=\"absmiddle\" src=\"https://img.alicdn.com/imgextra/i3/2828294548/O1CN011jT1ljQfcOpPtMM_!!2828294548.jpg\" style=\"max-width:100.0%;\" size=\"750x1780\"><img align=\"absmiddle\" src=\"https://img.alicdn.com/imgextra/i4/2828294548/O1CN011jT1llYhnDvO27z_!!2828294548.jpg\" style=\"max-width:100.0%;\" size=\"750x2064\"><img align=\"absmiddle\" src=\"https://img.alicdn.com/imgextra/i3/2828294548/O1CN011jT1lkhEV5IqJFA_!!2828294548.jpg\" style=\"max-width:100.0%;\" size=\"750x2472\" /></p></div>',\n\t\t\tgoods: {\n\t\t\t\ttitle: '劲霸男装',\n\t\t\t\treprice: 12,\n\t\t\t\treadyby: \"2656132\" },\n\n\t\t\timagelist: [{\n\t\t\t\ttitle: 1,\n\t\t\t\tsrc: \"https://img.alicdn.com/tps/i4/TB1yNlhhAvoK1RjSZFwSuwiCFXa.jpg_q90_.webp\" },\n\n\t\t\t{\n\t\t\t\ttitle: 2,\n\t\t\t\tsrc: \"https://aecpm.alicdn.com/simba/img/TB1JNHwKFXXXXafXVXXSutbFXXX.jpg\" },\n\n\t\t\t{\n\t\t\t\ttitle: 3,\n\t\t\t\tsrc: \"https://aecpm.alicdn.com/simba/img/TB1XotJXQfb_uJkSnhJSuvdDVXa.jpg\" },\n\n\t\t\t{\n\t\t\t\ttitle: 3,\n\t\t\t\tsrc: \"https://aecpm.alicdn.com/simba/img/TB1XotJXQfb_uJkSnhJSuvdDVXa.jpg\" },\n\n\t\t\t{\n\t\t\t\ttitle: 3,\n\t\t\t\tsrc: \"https://aecpm.alicdn.com/simba/img/TB1XotJXQfb_uJkSnhJSuvdDVXa.jpg\" }] };\n\n\n\n\t},\n\tcomponents: {\n\t\tproductList: _productList2.default },\n\n\tmethods: {\n\t\tback: function back() {\n\t\t\tuni.navigateBack({\n\t\t\t\tdelta: 1 });\n\n\t\t},\n\t\t_onscroll: function _onscroll(e) {\n\t\t\tvar even = e.target || e.srcElement;\n\t\t\tvar scrollTop = even.scrollTop;\n\t\t\tthis.scrolltop = scrollTop; //实时同步位置\n\t\t\t// console.log(scrollTop)\n\t\t\tif (scrollTop >= 555) {\n\t\t\t\tthis.isactive = false;\n\t\t\t} else {\n\t\t\t\tthis.isactive = true;\n\t\t\t}\n\t\t},\n\t\tgo: function go(ev) {\n\t\t\tvar e = ev || window.event;\n\t\t\tvar target = ev.target || ev.srcElement;\n\t\t\tconsole.log(target.offsetLeft);\n\t\t\tif (target.offsetLeft < 190 && target.offsetLeft > 150) {\n\t\t\t\t// console.log('1', this.scrolltop)\n\n\t\t\t\tthis.scrolltop = 0;\n\t\t\t\tthis.isactive = true;\n\t\t\t} else if (target.offsetLeft < 240 && target.offsetLeft > 190) {\n\t\t\t\t// console.log('2', this.scrolltop)\n\t\t\t\tthis.scrolltop = 555;\n\t\t\t\tthis.isactive = false;\n\t\t\t}\n\t\t} } };\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)[\"default\"]))\n\n//////////////////\n// WEBPACK FOOTER\n// ./node_modules/babel-loader/lib?{\"babelrc\":false,\"retainLines\":true,\"presets\":[[\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-preset-env\",{\"modules\":\"commonjs\",\"targets\":{\"browsers\":[\"> 1%\",\"last 2 versions\",\"not ie <= 8\"]}}],\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-preset-stage-2\"],\"plugins\":[[\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-runtime\",{\"helpers\":false,\"polyfill\":false,\"regenerator\":true,\"moduleName\":\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-runtime\"}],\"D://download//HBuilderX.1.2.1.20181126.full//HBuilderX//plugins//uniapp//node_modules//babel-plugin-transform-decorators-legacy\"]}!./lib/preprocessor-loader.js?{\"type\":\"js\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=script&index=0!D:/project/asgapp/pages/common/goods-detail.vue\n// module id = 133\n// module chunks = 14\n\n//# sourceURL=uni-app:///pages/common/goods-detail.vue?63bf");

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;\n  return _c('scroll-view', {\n    ref: \"scroll\",\n    staticClass: \"detail-container\",\n    attrs: {\n      \"scroll-top\": _vm.scrolltop,\n      \"scroll-y\": \"\",\n      \"enable-back-to-top\": \"\",\n      \"eventid\": 'ctd-4'\n    },\n    on: {\n      \"scroll\": _vm._onscroll\n    }\n  }, [_c('view', {\n    staticClass: \"mnav-bar\"\n  }, [_c('view', {\n    staticClass: \"wrap\"\n  }, [_c('view', {\n    staticClass: \"back\",\n    attrs: {\n      \"eventid\": 'Mzf-0'\n    },\n    on: {\n      \"click\": _vm.back\n    }\n  }, [_c('uni-icon', {\n    attrs: {\n      \"type\": \"arrow-left\",\n      \"size\": \"18\",\n      \"color\": \"#fff\",\n      \"mpcomid\": 'e6t-0'\n    }\n  })], 1), _c('view', {\n    directives: [{\n      name: \"show\",\n      rawName: \"v-show\",\n      value: (_vm.navisShow),\n      expression: \"navisShow\"\n    }],\n    staticClass: \"nav-title\"\n  }, [_c('view', {\n    class: ['txt', {\n      avtive: _vm.isactive\n    }],\n    attrs: {\n      \"eventid\": 'aZo-1'\n    },\n    on: {\n      \"click\": _vm.go\n    }\n  }, [_vm._v(\"宝贝\")]), _c('view', {\n    class: ['txt', {\n      avtive: !_vm.isactive\n    }],\n    attrs: {\n      \"eventid\": 'oKF-2'\n    },\n    on: {\n      \"click\": _vm.go\n    }\n  }, [_vm._v(\"详情\")])])])]), _c('swiper', {\n    staticClass: \"swiper-box\",\n    attrs: {\n      \"circular\": \"\",\n      \"indicator-dots\": \"\",\n      \"autoplay\": \"\",\n      \"indicator-active-color\": \"#fff\",\n      \"interval\": \"5000\",\n      \"duration\": \"3000\"\n    }\n  }, _vm._l((_vm.imagelist), function(item, index2) {\n    return _c('swiper-item', {\n      key: index2,\n      staticClass: \"item\",\n      attrs: {\n        \"mpcomid\": 'A7C-1-' + index2\n      }\n    }, [_c('image', {\n      staticClass: \"swiper-img\",\n      attrs: {\n        \"src\": item.src\n      }\n    })])\n  })), _c('view', {\n    staticClass: \"container\"\n  }, [_c('view', {\n    staticClass: \"price-container\"\n  }, [_c('view', {\n    staticClass: \"price-wrap\"\n  }, [_c('view', {\n    staticClass: \"price-one\"\n  }, [_c('view', {\n    staticClass: \"jh\"\n  }, [_vm._v(\"券后\")]), _c('view', {\n    staticClass: \"price\"\n  }, [_vm._v(\"￥\" + _vm._s(_vm.reprice))])]), _c('view', {\n    staticClass: \"describe\"\n  }, [_vm._v(\"\\n\\t\\t\\t\\t\\t预估佣金 \" + _vm._s(_vm.reprice) + \" 元\\n\\t\\t\\t\\t\")])]), _c('view', {\n    staticClass: \"describe\"\n  }, [_vm._v(_vm._s(_vm.goods.title))]), _c('view', {\n    staticClass: \"ready-buy\"\n  }, [_c('view', {\n    staticClass: \"small-gray\"\n  }, [_vm._v(\"原价￥\" + _vm._s(_vm.goods.reprice))]), _c('view', {\n    staticClass: \"small-gray\"\n  }, [_vm._v(_vm._s(_vm.goods.readyby) + \"人已购买\")])])]), _c('view', {\n    staticClass: \"big-title\"\n  }, [_c('view', {\n    staticClass: \"shoptitle\"\n  }, [_c('image', {\n    staticClass: \"logo\",\n    attrs: {\n      \"mode\": \"aspectFit\",\n      \"src\": \"../../static/tm.png\"\n    }\n  }), _c('view', {\n    staticClass: \"title\"\n  }, [_vm._v(_vm._s(_vm.goods.title))])]), _c('view', {\n    staticClass: \"share\"\n  }, [_c('uni-icon', {\n    attrs: {\n      \"type\": \"share\",\n      \"color\": \"#8a8a8a\",\n      \"mpcomid\": 'MZC-2'\n    }\n  }), _c('text', {\n    staticClass: \"small-gray\"\n  }, [_vm._v(\"分享\")])], 1)]), _c('view', {\n    staticClass: \"quan-container\",\n    attrs: {\n      \"bindtap\": \"jump(goods.coupon_click_url)\"\n    }\n  }, [_c('image', {\n    staticClass: \"quan-bg\",\n    attrs: {\n      \"src\": \"../../static/bgquan.png\"\n    }\n  }), _c('view', {\n    staticClass: \"wrap\"\n  }, [_c('view', {\n    staticClass: \"yhq\"\n  }, [_c('view', {\n    staticClass: \"yhq-txt\"\n  }, [_vm._v(\"优惠券\")]), _c('view', {\n    staticClass: \"yhq-price\"\n  }, [_vm._v(\"￥\" + _vm._s(_vm.goods.reprice))])]), _c('view', {\n    staticClass: \"yhq\"\n  }, [_c('view', {\n    staticClass: \"data-txt\"\n  }, [_vm._v(\"使用期限\")]), _c('view', {\n    staticClass: \"data\"\n  }, [_vm._v(_vm._s(_vm.goods.reprice) + \"~\" + _vm._s(_vm.goods.reprice))])])]), _c('view', {\n    staticClass: \"take\"\n  }, [_vm._v(\" 立即领券\")])]), _c('view', {\n    staticClass: \"recommend\"\n  }, [_c('view', {\n    staticClass: \"title\"\n  }, [_vm._v(\"推荐语\")]), _c('view', {\n    staticClass: \"small-gray marginL\"\n  }, [_vm._v(_vm._s(_vm.goods.title))])]), _c('view', {\n    staticClass: \"store-introduction\"\n  }, [_c('view', {\n    staticClass: \"item\"\n  }, [_c('uni-icon', {\n    attrs: {\n      \"size\": \"16\",\n      \"type\": \"tmlogo\",\n      \"color\": \"#fe1a34\",\n      \"mpcomid\": 'FXq-3'\n    }\n  }), _c('view', {\n    staticClass: \"txt\"\n  }, [_vm._v(_vm._s(_vm.goods.title))])], 1), _c('view', {\n    staticClass: \"rank\"\n  }, [_c('view', {\n    staticClass: \"txt\"\n  }, [_vm._v(\"店铺评分\")]), _c('view', {\n    staticClass: \"item\"\n  }, [_c('view', {\n    staticClass: \"score\"\n  }, [_vm._v(\"描述4.8\")]), _c('uni-icon', {\n    staticClass: \"micon\",\n    attrs: {\n      \"type\": \"up-arrow\",\n      \"size\": \"16\",\n      \"color\": \"#fe5e78\",\n      \"mpcomid\": '3it-4'\n    }\n  })], 1), _c('view', {\n    staticClass: \"item\"\n  }, [_c('view', {\n    staticClass: \"score\"\n  }, [_vm._v(\"服务4.8\")]), _c('uni-icon', {\n    staticClass: \"micon\",\n    attrs: {\n      \"type\": \"up-arrow\",\n      \"size\": \"16\",\n      \"color\": \"#fe5e78\",\n      \"mpcomid\": 'Ff4-5'\n    }\n  })], 1), _c('view', {\n    staticClass: \"item\"\n  }, [_c('view', {\n    staticClass: \"score\"\n  }, [_vm._v(\"发货4.8\")]), _c('uni-icon', {\n    staticClass: \"micon\",\n    attrs: {\n      \"type\": \"up-arrow\",\n      \"size\": \"16\",\n      \"color\": \"#fe5e78\",\n      \"mpcomid\": 'bTZ-6'\n    }\n  })], 1)])]), _c('view', {\n    staticClass: \"line-title\"\n  }, [_vm._v(\"———— 商品详情 ————\")]), _c('view', {\n    staticClass: \"shop-detail-wrap\"\n  }, [_c('rich-text', {\n    attrs: {\n      \"nodes\": _vm.detailimg,\n      \"mpcomid\": 'Gzf-7'\n    }\n  })], 1), _c('view', {\n    staticClass: \"line-title\"\n  }, [_vm._v(\"———— 为您推荐 ————\")]), _c('product-list', {\n    attrs: {\n      \"mpcomid\": 'W4I-8'\n    }\n  }), _c('view', {\n    staticClass: \"line-title\",\n    staticStyle: {\n      \"margin-bottom\": \"120upx\"\n    }\n  }, [_vm._v(\"—— 到底了 ——\")]), _c('view', {\n    staticClass: \"footer-container\"\n  }, [_c('view', {\n    staticClass: \"back\",\n    attrs: {\n      \"eventid\": 'YB8-3'\n    },\n    on: {\n      \"click\": _vm.back\n    }\n  }, [_vm._v(\"\\n\\t\\t\\t\\t返回\\n\\t\\t\\t\")]), _c('view', {\n    staticClass: \"colle\"\n  }, [_c('view', {\n    staticClass: \"wrap\"\n  }, [_c('uni-icon', {\n    attrs: {\n      \"type\": \"shoucang\",\n      \"color\": \"#fff\",\n      \"mpcomid\": 'naz-9'\n    }\n  }), _c('view', [_vm._v(\"收藏\")])], 1)]), _c('view', {\n    staticClass: \"share\"\n  }, [_c('view', {\n    staticClass: \"wrap\"\n  }, [_c('uni-icon', {\n    attrs: {\n      \"type\": \"share\",\n      \"color\": \"#8a8a8a\",\n      \"mpcomid\": 'lCH-10'\n    }\n  }), _c('view', [_vm._v(\"分享\")])], 1)]), _c('view', {\n    staticClass: \"copy\"\n  }, [_vm._v(\"\\n\\t\\t\\t\\t复制淘口令\\n\\t\\t\\t\")]), _c('view', {\n    staticClass: \"join\"\n  }, [_c('view', [_c('view', {\n    staticClass: \"sm-txt\"\n  }, [_vm._v(\"立省￥\" + _vm._s(_vm.goods.reprice))]), _c('view', [_vm._v(\"领券购买\")])])])])], 1)], 1)\n}\nvar staticRenderFns = []\nrender._withStripped = true\nvar esExports = { render: render, staticRenderFns: staticRenderFns }\n/* harmony default export */ __webpack_exports__[\"a\"] = (esExports);\nif (false) {\n  module.hot.accept()\n  if (module.hot.data) {\n     require(\"vue-hot-reload-api\").rerender(\"data-v-29a9da5a\", esExports)\n  }\n}\n\n//////////////////\n// WEBPACK FOOTER\n// ./lib/mpvue-loader/lib/template-compiler?{\"id\":\"data-v-29a9da5a\",\"hasScoped\":true,\"preserveWhitespace\":false}!./lib/preprocessor-loader.js?{\"type\":\"html\",\"context\":{\"APP-PLUS\":true}}!./lib/mpvue-loader/lib/selector.js?type=template&index=0!D:/project/asgapp/pages/common/goods-detail.vue\n// module id = 134\n// module chunks = 14\n\n");

/***/ })

},[130]);
});
require('pages/common/goods-detail.js');

