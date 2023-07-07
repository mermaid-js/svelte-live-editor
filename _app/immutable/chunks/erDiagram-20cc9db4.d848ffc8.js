import{$ as Et,H as W,D as Ot,E as kt,G as xt,F as bt,a0 as Rt,a1 as Nt,J as Tt,N as $,a2 as vt,M as at,_ as At,O as Mt,a3 as It,a4 as wt}from"./state.2462faca.js";import{G as St,l as Dt}from"./layout.6e0165bf.js";import{l as Bt}from"./line.aa7b8221.js";const Lt=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;function Ct(t){return typeof t=="string"&&Lt.test(t)}function Yt(t){if(!Ct(t))throw TypeError("Invalid UUID");let r;const e=new Uint8Array(16);return e[0]=(r=parseInt(t.slice(0,8),16))>>>24,e[1]=r>>>16&255,e[2]=r>>>8&255,e[3]=r&255,e[4]=(r=parseInt(t.slice(9,13),16))>>>8,e[5]=r&255,e[6]=(r=parseInt(t.slice(14,18),16))>>>8,e[7]=r&255,e[8]=(r=parseInt(t.slice(19,23),16))>>>8,e[9]=r&255,e[10]=(r=parseInt(t.slice(24,36),16))/1099511627776&255,e[11]=r/4294967296&255,e[12]=r>>>24&255,e[13]=r>>>16&255,e[14]=r>>>8&255,e[15]=r&255,e}function Ft(t){t=unescape(encodeURIComponent(t));const r=[];for(let e=0;e<t.length;++e)r.push(t.charCodeAt(e));return r}const Zt="6ba7b810-9dad-11d1-80b4-00c04fd430c8",Pt="6ba7b811-9dad-11d1-80b4-00c04fd430c8";function Wt(t,r,e){function n(c,p,u,l){var h;if(typeof c=="string"&&(c=Ft(c)),typeof p=="string"&&(p=Yt(p)),((h=p)===null||h===void 0?void 0:h.length)!==16)throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");let _=new Uint8Array(16+c.length);if(_.set(p),_.set(c,p.length),_=e(_),_[6]=_[6]&15|r,_[8]=_[8]&63|128,u){l=l||0;for(let g=0;g<16;++g)u[l+g]=_[g];return u}return Et(_)}try{n.name=t}catch{}return n.DNS=Zt,n.URL=Pt,n}function Ut(t,r,e,n){switch(t){case 0:return r&e^~r&n;case 1:return r^e^n;case 2:return r&e^r&n^e&n;case 3:return r^e^n}}function nt(t,r){return t<<r|t>>>32-r}function Vt(t){const r=[1518500249,1859775393,2400959708,3395469782],e=[1732584193,4023233417,2562383102,271733878,3285377520];if(typeof t=="string"){const u=unescape(encodeURIComponent(t));t=[];for(let l=0;l<u.length;++l)t.push(u.charCodeAt(l))}else Array.isArray(t)||(t=Array.prototype.slice.call(t));t.push(128);const n=t.length/4+2,c=Math.ceil(n/16),p=new Array(c);for(let u=0;u<c;++u){const l=new Uint32Array(16);for(let h=0;h<16;++h)l[h]=t[u*64+h*4]<<24|t[u*64+h*4+1]<<16|t[u*64+h*4+2]<<8|t[u*64+h*4+3];p[u]=l}p[c-1][14]=(t.length-1)*8/Math.pow(2,32),p[c-1][14]=Math.floor(p[c-1][14]),p[c-1][15]=(t.length-1)*8&4294967295;for(let u=0;u<c;++u){const l=new Uint32Array(80);for(let y=0;y<16;++y)l[y]=p[u][y];for(let y=16;y<80;++y)l[y]=nt(l[y-3]^l[y-8]^l[y-14]^l[y-16],1);let h=e[0],_=e[1],g=e[2],E=e[3],x=e[4];for(let y=0;y<80;++y){const A=Math.floor(y/20),D=nt(h,5)+Ut(A,_,g,E)+x+r[A]+l[y]>>>0;x=E,E=g,g=nt(_,30)>>>0,_=h,h=D}e[0]=e[0]+h>>>0,e[1]=e[1]+_>>>0,e[2]=e[2]+g>>>0,e[3]=e[3]+E>>>0,e[4]=e[4]+x>>>0}return[e[0]>>24&255,e[0]>>16&255,e[0]>>8&255,e[0]&255,e[1]>>24&255,e[1]>>16&255,e[1]>>8&255,e[1]&255,e[2]>>24&255,e[2]>>16&255,e[2]>>8&255,e[2]&255,e[3]>>24&255,e[3]>>16&255,e[3]>>8&255,e[3]&255,e[4]>>24&255,e[4]>>16&255,e[4]>>8&255,e[4]&255]}const Gt=Wt("v5",80,Vt),zt=Gt;var st=function(){var t=function(v,a,s,d){for(s=s||{},d=v.length;d--;s[v[d]]=a);return s},r=[1,2],e=[1,5],n=[6,9,11,23,25,27,29,30,31,51],c=[1,17],p=[1,18],u=[1,19],l=[1,20],h=[1,21],_=[1,22],g=[1,25],E=[1,30],x=[1,31],y=[1,32],A=[1,33],D=[6,9,11,15,20,23,25,27,29,30,31,44,45,46,47,51],U=[1,45],V=[30,31,48,49],B=[4,6,9,11,23,25,27,29,30,31,51],R=[44,45,46,47],N=[22,37],T=[1,65],O=[1,64],w=[22,37,39,41],L={trace:function(){},yy:{},symbols_:{error:2,start:3,ER_DIAGRAM:4,document:5,EOF:6,directive:7,line:8,SPACE:9,statement:10,NEWLINE:11,openDirective:12,typeDirective:13,closeDirective:14,":":15,argDirective:16,entityName:17,relSpec:18,role:19,BLOCK_START:20,attributes:21,BLOCK_STOP:22,title:23,title_value:24,acc_title:25,acc_title_value:26,acc_descr:27,acc_descr_value:28,acc_descr_multiline_value:29,ALPHANUM:30,ENTITY_NAME:31,attribute:32,attributeType:33,attributeName:34,attributeKeyTypeList:35,attributeComment:36,ATTRIBUTE_WORD:37,attributeKeyType:38,COMMA:39,ATTRIBUTE_KEY:40,COMMENT:41,cardinality:42,relType:43,ZERO_OR_ONE:44,ZERO_OR_MORE:45,ONE_OR_MORE:46,ONLY_ONE:47,NON_IDENTIFYING:48,IDENTIFYING:49,WORD:50,open_directive:51,type_directive:52,arg_directive:53,close_directive:54,$accept:0,$end:1},terminals_:{2:"error",4:"ER_DIAGRAM",6:"EOF",9:"SPACE",11:"NEWLINE",15:":",20:"BLOCK_START",22:"BLOCK_STOP",23:"title",24:"title_value",25:"acc_title",26:"acc_title_value",27:"acc_descr",28:"acc_descr_value",29:"acc_descr_multiline_value",30:"ALPHANUM",31:"ENTITY_NAME",37:"ATTRIBUTE_WORD",39:"COMMA",40:"ATTRIBUTE_KEY",41:"COMMENT",44:"ZERO_OR_ONE",45:"ZERO_OR_MORE",46:"ONE_OR_MORE",47:"ONLY_ONE",48:"NON_IDENTIFYING",49:"IDENTIFYING",50:"WORD",51:"open_directive",52:"type_directive",53:"arg_directive",54:"close_directive"},productions_:[0,[3,3],[3,2],[5,0],[5,2],[8,2],[8,1],[8,1],[8,1],[7,4],[7,6],[10,1],[10,5],[10,4],[10,3],[10,1],[10,2],[10,2],[10,2],[10,1],[17,1],[17,1],[21,1],[21,2],[32,2],[32,3],[32,3],[32,4],[33,1],[34,1],[35,1],[35,3],[38,1],[36,1],[18,3],[42,1],[42,1],[42,1],[42,1],[43,1],[43,1],[19,1],[19,1],[19,1],[12,1],[13,1],[16,1],[14,1]],performAction:function(a,s,d,f,m,i,H){var o=i.length-1;switch(m){case 1:break;case 3:this.$=[];break;case 4:i[o-1].push(i[o]),this.$=i[o-1];break;case 5:case 6:this.$=i[o];break;case 7:case 8:this.$=[];break;case 12:f.addEntity(i[o-4]),f.addEntity(i[o-2]),f.addRelationship(i[o-4],i[o],i[o-2],i[o-3]);break;case 13:f.addEntity(i[o-3]),f.addAttributes(i[o-3],i[o-1]);break;case 14:f.addEntity(i[o-2]);break;case 15:f.addEntity(i[o]);break;case 16:case 17:this.$=i[o].trim(),f.setAccTitle(this.$);break;case 18:case 19:this.$=i[o].trim(),f.setAccDescription(this.$);break;case 20:case 43:this.$=i[o];break;case 21:case 41:case 42:this.$=i[o].replace(/"/g,"");break;case 22:case 30:this.$=[i[o]];break;case 23:i[o].push(i[o-1]),this.$=i[o];break;case 24:this.$={attributeType:i[o-1],attributeName:i[o]};break;case 25:this.$={attributeType:i[o-2],attributeName:i[o-1],attributeKeyTypeList:i[o]};break;case 26:this.$={attributeType:i[o-2],attributeName:i[o-1],attributeComment:i[o]};break;case 27:this.$={attributeType:i[o-3],attributeName:i[o-2],attributeKeyTypeList:i[o-1],attributeComment:i[o]};break;case 28:case 29:case 32:this.$=i[o];break;case 31:i[o-2].push(i[o]),this.$=i[o-2];break;case 33:this.$=i[o].replace(/"/g,"");break;case 34:this.$={cardA:i[o],relType:i[o-1],cardB:i[o-2]};break;case 35:this.$=f.Cardinality.ZERO_OR_ONE;break;case 36:this.$=f.Cardinality.ZERO_OR_MORE;break;case 37:this.$=f.Cardinality.ONE_OR_MORE;break;case 38:this.$=f.Cardinality.ONLY_ONE;break;case 39:this.$=f.Identification.NON_IDENTIFYING;break;case 40:this.$=f.Identification.IDENTIFYING;break;case 44:f.parseDirective("%%{","open_directive");break;case 45:f.parseDirective(i[o],"type_directive");break;case 46:i[o]=i[o].trim().replace(/'/g,'"'),f.parseDirective(i[o],"arg_directive");break;case 47:f.parseDirective("}%%","close_directive","er");break}},table:[{3:1,4:r,7:3,12:4,51:e},{1:[3]},t(n,[2,3],{5:6}),{3:7,4:r,7:3,12:4,51:e},{13:8,52:[1,9]},{52:[2,44]},{6:[1,10],7:15,8:11,9:[1,12],10:13,11:[1,14],12:4,17:16,23:c,25:p,27:u,29:l,30:h,31:_,51:e},{1:[2,2]},{14:23,15:[1,24],54:g},t([15,54],[2,45]),t(n,[2,8],{1:[2,1]}),t(n,[2,4]),{7:15,10:26,12:4,17:16,23:c,25:p,27:u,29:l,30:h,31:_,51:e},t(n,[2,6]),t(n,[2,7]),t(n,[2,11]),t(n,[2,15],{18:27,42:29,20:[1,28],44:E,45:x,46:y,47:A}),{24:[1,34]},{26:[1,35]},{28:[1,36]},t(n,[2,19]),t(D,[2,20]),t(D,[2,21]),{11:[1,37]},{16:38,53:[1,39]},{11:[2,47]},t(n,[2,5]),{17:40,30:h,31:_},{21:41,22:[1,42],32:43,33:44,37:U},{43:46,48:[1,47],49:[1,48]},t(V,[2,35]),t(V,[2,36]),t(V,[2,37]),t(V,[2,38]),t(n,[2,16]),t(n,[2,17]),t(n,[2,18]),t(B,[2,9]),{14:49,54:g},{54:[2,46]},{15:[1,50]},{22:[1,51]},t(n,[2,14]),{21:52,22:[2,22],32:43,33:44,37:U},{34:53,37:[1,54]},{37:[2,28]},{42:55,44:E,45:x,46:y,47:A},t(R,[2,39]),t(R,[2,40]),{11:[1,56]},{19:57,30:[1,60],31:[1,59],50:[1,58]},t(n,[2,13]),{22:[2,23]},t(N,[2,24],{35:61,36:62,38:63,40:T,41:O}),t([22,37,40,41],[2,29]),t([30,31],[2,34]),t(B,[2,10]),t(n,[2,12]),t(n,[2,41]),t(n,[2,42]),t(n,[2,43]),t(N,[2,25],{36:66,39:[1,67],41:O}),t(N,[2,26]),t(w,[2,30]),t(N,[2,33]),t(w,[2,32]),t(N,[2,27]),{38:68,40:T},t(w,[2,31])],defaultActions:{5:[2,44],7:[2,2],25:[2,47],39:[2,46],45:[2,28],52:[2,23]},parseError:function(a,s){if(s.recoverable)this.trace(a);else{var d=new Error(a);throw d.hash=s,d}},parse:function(a){var s=this,d=[0],f=[],m=[null],i=[],H=this.table,o="",j=0,ct=0,pt=2,lt=1,_t=i.slice.call(arguments,1),b=Object.create(this.lexer),G={yy:{}};for(var tt in this.yy)Object.prototype.hasOwnProperty.call(this.yy,tt)&&(G.yy[tt]=this.yy[tt]);b.setInput(a,G.yy),G.yy.lexer=b,G.yy.parser=this,typeof b.yylloc>"u"&&(b.yylloc={});var et=b.yylloc;i.push(et);var gt=b.options&&b.options.ranges;typeof G.yy.parseError=="function"?this.parseError=G.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function mt(){var F;return F=f.pop()||b.lex()||lt,typeof F!="number"&&(F instanceof Array&&(f=F,F=f.pop()),F=s.symbols_[F]||F),F}for(var M,z,I,rt,K={},J,Y,ht,q;;){if(z=d[d.length-1],this.defaultActions[z]?I=this.defaultActions[z]:((M===null||typeof M>"u")&&(M=mt()),I=H[z]&&H[z][M]),typeof I>"u"||!I.length||!I[0]){var it="";q=[];for(J in H[z])this.terminals_[J]&&J>pt&&q.push("'"+this.terminals_[J]+"'");b.showPosition?it="Parse error on line "+(j+1)+`:
`+b.showPosition()+`
Expecting `+q.join(", ")+", got '"+(this.terminals_[M]||M)+"'":it="Parse error on line "+(j+1)+": Unexpected "+(M==lt?"end of input":"'"+(this.terminals_[M]||M)+"'"),this.parseError(it,{text:b.match,token:this.terminals_[M]||M,line:b.yylineno,loc:et,expected:q})}if(I[0]instanceof Array&&I.length>1)throw new Error("Parse Error: multiple actions possible at state: "+z+", token: "+M);switch(I[0]){case 1:d.push(M),m.push(b.yytext),i.push(b.yylloc),d.push(I[1]),M=null,ct=b.yyleng,o=b.yytext,j=b.yylineno,et=b.yylloc;break;case 2:if(Y=this.productions_[I[1]][1],K.$=m[m.length-Y],K._$={first_line:i[i.length-(Y||1)].first_line,last_line:i[i.length-1].last_line,first_column:i[i.length-(Y||1)].first_column,last_column:i[i.length-1].last_column},gt&&(K._$.range=[i[i.length-(Y||1)].range[0],i[i.length-1].range[1]]),rt=this.performAction.apply(K,[o,ct,j,G.yy,I[1],m,i].concat(_t)),typeof rt<"u")return rt;Y&&(d=d.slice(0,-1*Y*2),m=m.slice(0,-1*Y),i=i.slice(0,-1*Y)),d.push(this.productions_[I[1]][0]),m.push(K.$),i.push(K._$),ht=H[d[d.length-2]][d[d.length-1]],d.push(ht);break;case 3:return!0}}return!0}},S=function(){var v={EOF:1,parseError:function(s,d){if(this.yy.parser)this.yy.parser.parseError(s,d);else throw new Error(s)},setInput:function(a,s){return this.yy=s||this.yy||{},this._input=a,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var a=this._input[0];this.yytext+=a,this.yyleng++,this.offset++,this.match+=a,this.matched+=a;var s=a.match(/(?:\r\n?|\n).*/g);return s?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),a},unput:function(a){var s=a.length,d=a.split(/(?:\r\n?|\n)/g);this._input=a+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-s),this.offset-=s;var f=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),d.length-1&&(this.yylineno-=d.length-1);var m=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:d?(d.length===f.length?this.yylloc.first_column:0)+f[f.length-d.length].length-d[0].length:this.yylloc.first_column-s},this.options.ranges&&(this.yylloc.range=[m[0],m[0]+this.yyleng-s]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(a){this.unput(this.match.slice(a))},pastInput:function(){var a=this.matched.substr(0,this.matched.length-this.match.length);return(a.length>20?"...":"")+a.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var a=this.match;return a.length<20&&(a+=this._input.substr(0,20-a.length)),(a.substr(0,20)+(a.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var a=this.pastInput(),s=new Array(a.length+1).join("-");return a+this.upcomingInput()+`
`+s+"^"},test_match:function(a,s){var d,f,m;if(this.options.backtrack_lexer&&(m={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(m.yylloc.range=this.yylloc.range.slice(0))),f=a[0].match(/(?:\r\n?|\n).*/g),f&&(this.yylineno+=f.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:f?f[f.length-1].length-f[f.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+a[0].length},this.yytext+=a[0],this.match+=a[0],this.matches=a,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(a[0].length),this.matched+=a[0],d=this.performAction.call(this,this.yy,this,s,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),d)return d;if(this._backtrack){for(var i in m)this[i]=m[i];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var a,s,d,f;this._more||(this.yytext="",this.match="");for(var m=this._currentRules(),i=0;i<m.length;i++)if(d=this._input.match(this.rules[m[i]]),d&&(!s||d[0].length>s[0].length)){if(s=d,f=i,this.options.backtrack_lexer){if(a=this.test_match(d,m[i]),a!==!1)return a;if(this._backtrack){s=!1;continue}else return!1}else if(!this.options.flex)break}return s?(a=this.test_match(s,m[f]),a!==!1?a:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var s=this.next();return s||this.lex()},begin:function(s){this.conditionStack.push(s)},popState:function(){var s=this.conditionStack.length-1;return s>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(s){return s=this.conditionStack.length-1-Math.abs(s||0),s>=0?this.conditionStack[s]:"INITIAL"},pushState:function(s){this.begin(s)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(s,d,f,m){switch(f){case 0:return this.begin("acc_title"),25;case 1:return this.popState(),"acc_title_value";case 2:return this.begin("acc_descr"),27;case 3:return this.popState(),"acc_descr_value";case 4:this.begin("acc_descr_multiline");break;case 5:this.popState();break;case 6:return"acc_descr_multiline_value";case 7:return this.begin("open_directive"),51;case 8:return this.begin("type_directive"),52;case 9:return this.popState(),this.begin("arg_directive"),15;case 10:return this.popState(),this.popState(),54;case 11:return 53;case 12:return 11;case 13:break;case 14:return 9;case 15:return 31;case 16:return 50;case 17:return 4;case 18:return this.begin("block"),20;case 19:return 39;case 20:break;case 21:return 40;case 22:return 37;case 23:return 37;case 24:return 41;case 25:break;case 26:return this.popState(),22;case 27:return d.yytext[0];case 28:return 44;case 29:return 46;case 30:return 46;case 31:return 46;case 32:return 44;case 33:return 44;case 34:return 45;case 35:return 45;case 36:return 45;case 37:return 45;case 38:return 45;case 39:return 46;case 40:return 45;case 41:return 46;case 42:return 47;case 43:return 47;case 44:return 47;case 45:return 47;case 46:return 44;case 47:return 45;case 48:return 46;case 49:return 48;case 50:return 49;case 51:return 49;case 52:return 48;case 53:return 48;case 54:return 48;case 55:return 30;case 56:return d.yytext[0];case 57:return 6}},rules:[/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:%%\{)/i,/^(?:((?:(?!\}%%)[^:.])*))/i,/^(?::)/i,/^(?:\}%%)/i,/^(?:((?:(?!\}%%).|\n)*))/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:[\s]+)/i,/^(?:"[^"%\r\n\v\b\\]+")/i,/^(?:"[^"]*")/i,/^(?:erDiagram\b)/i,/^(?:\{)/i,/^(?:,)/i,/^(?:\s+)/i,/^(?:\b((?:PK)|(?:FK)|(?:UK))\b)/i,/^(?:(.*?)[~](.*?)*[~])/i,/^(?:[A-Za-z_][A-Za-z0-9\-_\[\]\(\)]*)/i,/^(?:"[^"]*")/i,/^(?:[\n]+)/i,/^(?:\})/i,/^(?:.)/i,/^(?:one or zero\b)/i,/^(?:one or more\b)/i,/^(?:one or many\b)/i,/^(?:1\+)/i,/^(?:\|o\b)/i,/^(?:zero or one\b)/i,/^(?:zero or more\b)/i,/^(?:zero or many\b)/i,/^(?:0\+)/i,/^(?:\}o\b)/i,/^(?:many\(0\))/i,/^(?:many\(1\))/i,/^(?:many\b)/i,/^(?:\}\|)/i,/^(?:one\b)/i,/^(?:only one\b)/i,/^(?:1\b)/i,/^(?:\|\|)/i,/^(?:o\|)/i,/^(?:o\{)/i,/^(?:\|\{)/i,/^(?:\.\.)/i,/^(?:--)/i,/^(?:to\b)/i,/^(?:optionally to\b)/i,/^(?:\.-)/i,/^(?:-\.)/i,/^(?:[A-Za-z][A-Za-z0-9\-_]*)/i,/^(?:.)/i,/^(?:$)/i],conditions:{acc_descr_multiline:{rules:[5,6],inclusive:!1},acc_descr:{rules:[3],inclusive:!1},acc_title:{rules:[1],inclusive:!1},open_directive:{rules:[8],inclusive:!1},type_directive:{rules:[9,10],inclusive:!1},arg_directive:{rules:[10,11],inclusive:!1},block:{rules:[19,20,21,22,23,24,25,26,27],inclusive:!1},INITIAL:{rules:[0,2,4,7,12,13,14,15,16,17,18,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57],inclusive:!0}}};return v}();L.lexer=S;function C(){this.yy={}}return C.prototype=L,L.Parser=C,new C}();st.parser=st;const Kt=st;let X={},ot=[];const Ht={ZERO_OR_ONE:"ZERO_OR_ONE",ZERO_OR_MORE:"ZERO_OR_MORE",ONE_OR_MORE:"ONE_OR_MORE",ONLY_ONE:"ONLY_ONE"},Xt={NON_IDENTIFYING:"NON_IDENTIFYING",IDENTIFYING:"IDENTIFYING"},Qt=function(t,r,e){Tt.parseDirective(this,t,r,e)},ut=function(t){return X[t]===void 0&&(X[t]={attributes:[]},$.info("Added new entity :",t)),X[t]},jt=()=>X,Jt=function(t,r){let e=ut(t),n;for(n=r.length-1;n>=0;n--)e.attributes.push(r[n]),$.debug("Added attribute ",r[n].attributeName)},qt=function(t,r,e,n){let c={entityA:t,roleA:r,entityB:e,relSpec:n};ot.push(c),$.debug("Added new relationship :",c)},$t=()=>ot,te=function(){X={},ot=[],vt()},ee={Cardinality:Ht,Identification:Xt,parseDirective:Qt,getConfig:()=>W().er,addEntity:ut,addAttributes:Jt,getEntities:jt,addRelationship:qt,getRelationships:$t,clear:te,setAccTitle:Ot,getAccTitle:kt,setAccDescription:xt,getAccDescription:bt,setDiagramTitle:Rt,getDiagramTitle:Nt},Z={ONLY_ONE_START:"ONLY_ONE_START",ONLY_ONE_END:"ONLY_ONE_END",ZERO_OR_ONE_START:"ZERO_OR_ONE_START",ZERO_OR_ONE_END:"ZERO_OR_ONE_END",ONE_OR_MORE_START:"ONE_OR_MORE_START",ONE_OR_MORE_END:"ONE_OR_MORE_END",ZERO_OR_MORE_START:"ZERO_OR_MORE_START",ZERO_OR_MORE_END:"ZERO_OR_MORE_END"},re=function(t,r){let e;t.append("defs").append("marker").attr("id",Z.ONLY_ONE_START).attr("refX",0).attr("refY",9).attr("markerWidth",18).attr("markerHeight",18).attr("orient","auto").append("path").attr("stroke",r.stroke).attr("fill","none").attr("d","M9,0 L9,18 M15,0 L15,18"),t.append("defs").append("marker").attr("id",Z.ONLY_ONE_END).attr("refX",18).attr("refY",9).attr("markerWidth",18).attr("markerHeight",18).attr("orient","auto").append("path").attr("stroke",r.stroke).attr("fill","none").attr("d","M3,0 L3,18 M9,0 L9,18"),e=t.append("defs").append("marker").attr("id",Z.ZERO_OR_ONE_START).attr("refX",0).attr("refY",9).attr("markerWidth",30).attr("markerHeight",18).attr("orient","auto"),e.append("circle").attr("stroke",r.stroke).attr("fill","white").attr("cx",21).attr("cy",9).attr("r",6),e.append("path").attr("stroke",r.stroke).attr("fill","none").attr("d","M9,0 L9,18"),e=t.append("defs").append("marker").attr("id",Z.ZERO_OR_ONE_END).attr("refX",30).attr("refY",9).attr("markerWidth",30).attr("markerHeight",18).attr("orient","auto"),e.append("circle").attr("stroke",r.stroke).attr("fill","white").attr("cx",9).attr("cy",9).attr("r",6),e.append("path").attr("stroke",r.stroke).attr("fill","none").attr("d","M21,0 L21,18"),t.append("defs").append("marker").attr("id",Z.ONE_OR_MORE_START).attr("refX",18).attr("refY",18).attr("markerWidth",45).attr("markerHeight",36).attr("orient","auto").append("path").attr("stroke",r.stroke).attr("fill","none").attr("d","M0,18 Q 18,0 36,18 Q 18,36 0,18 M42,9 L42,27"),t.append("defs").append("marker").attr("id",Z.ONE_OR_MORE_END).attr("refX",27).attr("refY",18).attr("markerWidth",45).attr("markerHeight",36).attr("orient","auto").append("path").attr("stroke",r.stroke).attr("fill","none").attr("d","M3,9 L3,27 M9,18 Q27,0 45,18 Q27,36 9,18"),e=t.append("defs").append("marker").attr("id",Z.ZERO_OR_MORE_START).attr("refX",18).attr("refY",18).attr("markerWidth",57).attr("markerHeight",36).attr("orient","auto"),e.append("circle").attr("stroke",r.stroke).attr("fill","white").attr("cx",48).attr("cy",18).attr("r",6),e.append("path").attr("stroke",r.stroke).attr("fill","none").attr("d","M0,18 Q18,0 36,18 Q18,36 0,18"),e=t.append("defs").append("marker").attr("id",Z.ZERO_OR_MORE_END).attr("refX",39).attr("refY",18).attr("markerWidth",57).attr("markerHeight",36).attr("orient","auto"),e.append("circle").attr("stroke",r.stroke).attr("fill","white").attr("cx",9).attr("cy",18).attr("r",6),e.append("path").attr("stroke",r.stroke).attr("fill","none").attr("d","M21,18 Q39,0 57,18 Q39,36 21,18")},P={ERMarkers:Z,insertMarkers:re},ie=/[^\dA-Za-z](\W)*/g;let k={},Q=new Map;const ae=function(t){const r=Object.keys(t);for(const e of r)k[e]=t[e]},ne=(t,r,e)=>{const n=k.entityPadding/3,c=k.entityPadding/3,p=k.fontSize*.85,u=r.node().getBBox(),l=[];let h=!1,_=!1,g=0,E=0,x=0,y=0,A=u.height+n*2,D=1;e.forEach(R=>{R.attributeKeyTypeList!==void 0&&R.attributeKeyTypeList.length>0&&(h=!0),R.attributeComment!==void 0&&(_=!0)}),e.forEach(R=>{const N=`${r.node().id}-attr-${D}`;let T=0;const O=wt(R.attributeType),w=t.append("text").classed("er entityLabel",!0).attr("id",`${N}-type`).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",W().fontFamily).style("font-size",p+"px").text(O),L=t.append("text").classed("er entityLabel",!0).attr("id",`${N}-name`).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",W().fontFamily).style("font-size",p+"px").text(R.attributeName),S={};S.tn=w,S.nn=L;const C=w.node().getBBox(),v=L.node().getBBox();if(g=Math.max(g,C.width),E=Math.max(E,v.width),T=Math.max(C.height,v.height),h){const a=R.attributeKeyTypeList!==void 0?R.attributeKeyTypeList.join(","):"",s=t.append("text").classed("er entityLabel",!0).attr("id",`${N}-key`).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",W().fontFamily).style("font-size",p+"px").text(a);S.kn=s;const d=s.node().getBBox();x=Math.max(x,d.width),T=Math.max(T,d.height)}if(_){const a=t.append("text").classed("er entityLabel",!0).attr("id",`${N}-comment`).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",W().fontFamily).style("font-size",p+"px").text(R.attributeComment||"");S.cn=a;const s=a.node().getBBox();y=Math.max(y,s.width),T=Math.max(T,s.height)}S.height=T,l.push(S),A+=T+n*2,D+=1});let U=4;h&&(U+=2),_&&(U+=2);const V=g+E+x+y,B={width:Math.max(k.minEntityWidth,Math.max(u.width+k.entityPadding*2,V+c*U)),height:e.length>0?A:Math.max(k.minEntityHeight,u.height+k.entityPadding*2)};if(e.length>0){const R=Math.max(0,(B.width-V-c*U)/(U/2));r.attr("transform","translate("+B.width/2+","+(n+u.height/2)+")");let N=u.height+n*2,T="attributeBoxOdd";l.forEach(O=>{const w=N+n+O.height/2;O.tn.attr("transform","translate("+c+","+w+")");const L=t.insert("rect","#"+O.tn.node().id).classed(`er ${T}`,!0).attr("x",0).attr("y",N).attr("width",g+c*2+R).attr("height",O.height+n*2),S=parseFloat(L.attr("x"))+parseFloat(L.attr("width"));O.nn.attr("transform","translate("+(S+c)+","+w+")");const C=t.insert("rect","#"+O.nn.node().id).classed(`er ${T}`,!0).attr("x",S).attr("y",N).attr("width",E+c*2+R).attr("height",O.height+n*2);let v=parseFloat(C.attr("x"))+parseFloat(C.attr("width"));if(h){O.kn.attr("transform","translate("+(v+c)+","+w+")");const a=t.insert("rect","#"+O.kn.node().id).classed(`er ${T}`,!0).attr("x",v).attr("y",N).attr("width",x+c*2+R).attr("height",O.height+n*2);v=parseFloat(a.attr("x"))+parseFloat(a.attr("width"))}_&&(O.cn.attr("transform","translate("+(v+c)+","+w+")"),t.insert("rect","#"+O.cn.node().id).classed(`er ${T}`,"true").attr("x",v).attr("y",N).attr("width",y+c*2+R).attr("height",O.height+n*2)),N+=O.height+n*2,T=T==="attributeBoxOdd"?"attributeBoxEven":"attributeBoxOdd"})}else B.height=Math.max(k.minEntityHeight,A),r.attr("transform","translate("+B.width/2+","+B.height/2+")");return B},se=function(t,r,e){const n=Object.keys(r);let c;return n.forEach(function(p){const u=fe(p,"entity");Q.set(p,u);const l=t.append("g").attr("id",u);c=c===void 0?u:c;const h="text-"+u,_=l.append("text").classed("er entityLabel",!0).attr("id",h).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","middle").style("font-family",W().fontFamily).style("font-size",k.fontSize+"px").text(p),{width:g,height:E}=ne(l,_,r[p].attributes),y=l.insert("rect","#"+h).classed("er entityBox",!0).attr("x",0).attr("y",0).attr("width",g).attr("height",E).node().getBBox();e.setNode(u,{width:y.width,height:y.height,shape:"rect",id:u})}),c},oe=function(t,r){r.nodes().forEach(function(e){e!==void 0&&r.node(e)!==void 0&&t.select("#"+e).attr("transform","translate("+(r.node(e).x-r.node(e).width/2)+","+(r.node(e).y-r.node(e).height/2)+" )")})},yt=function(t){return(t.entityA+t.roleA+t.entityB).replace(/\s/g,"")},ce=function(t,r){return t.forEach(function(e){r.setEdge(Q.get(e.entityA),Q.get(e.entityB),{relationship:e},yt(e))}),t};let dt=0;const le=function(t,r,e,n,c){dt++;const p=e.edge(Q.get(r.entityA),Q.get(r.entityB),yt(r)),u=Bt().x(function(A){return A.x}).y(function(A){return A.y}).curve(It),l=t.insert("path","#"+n).classed("er relationshipLine",!0).attr("d",u(p.points)).style("stroke",k.stroke).style("fill","none");r.relSpec.relType===c.db.Identification.NON_IDENTIFYING&&l.attr("stroke-dasharray","8,8");let h="";switch(k.arrowMarkerAbsolute&&(h=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,h=h.replace(/\(/g,"\\("),h=h.replace(/\)/g,"\\)")),r.relSpec.cardA){case c.db.Cardinality.ZERO_OR_ONE:l.attr("marker-end","url("+h+"#"+P.ERMarkers.ZERO_OR_ONE_END+")");break;case c.db.Cardinality.ZERO_OR_MORE:l.attr("marker-end","url("+h+"#"+P.ERMarkers.ZERO_OR_MORE_END+")");break;case c.db.Cardinality.ONE_OR_MORE:l.attr("marker-end","url("+h+"#"+P.ERMarkers.ONE_OR_MORE_END+")");break;case c.db.Cardinality.ONLY_ONE:l.attr("marker-end","url("+h+"#"+P.ERMarkers.ONLY_ONE_END+")");break}switch(r.relSpec.cardB){case c.db.Cardinality.ZERO_OR_ONE:l.attr("marker-start","url("+h+"#"+P.ERMarkers.ZERO_OR_ONE_START+")");break;case c.db.Cardinality.ZERO_OR_MORE:l.attr("marker-start","url("+h+"#"+P.ERMarkers.ZERO_OR_MORE_START+")");break;case c.db.Cardinality.ONE_OR_MORE:l.attr("marker-start","url("+h+"#"+P.ERMarkers.ONE_OR_MORE_START+")");break;case c.db.Cardinality.ONLY_ONE:l.attr("marker-start","url("+h+"#"+P.ERMarkers.ONLY_ONE_START+")");break}const _=l.node().getTotalLength(),g=l.node().getPointAtLength(_*.5),E="rel"+dt,y=t.append("text").classed("er relationshipLabel",!0).attr("id",E).attr("x",g.x).attr("y",g.y).style("text-anchor","middle").style("dominant-baseline","middle").style("font-family",W().fontFamily).style("font-size",k.fontSize+"px").text(r.roleA).node().getBBox();t.insert("rect","#"+E).classed("er relationshipLabelBox",!0).attr("x",g.x-y.width/2).attr("y",g.y-y.height/2).attr("width",y.width).attr("height",y.height)},he=function(t,r,e,n){k=W().er,$.info("Drawing ER diagram");const c=W().securityLevel;let p;c==="sandbox"&&(p=at("#i"+r));const l=(c==="sandbox"?at(p.nodes()[0].contentDocument.body):at("body")).select(`[id='${r}']`);P.insertMarkers(l,k);let h;h=new St({multigraph:!0,directed:!0,compound:!1}).setGraph({rankdir:k.layoutDirection,marginx:20,marginy:20,nodesep:100,edgesep:100,ranksep:100}).setDefaultEdgeLabel(function(){return{}});const _=se(l,n.db.getEntities(),h),g=ce(n.db.getRelationships(),h);Dt(h),oe(l,h),g.forEach(function(D){le(l,D,h,_,n)});const E=k.diagramPadding;At.insertTitle(l,"entityTitleText",k.titleTopMargin,n.db.getDiagramTitle());const x=l.node().getBBox(),y=x.width+E*2,A=x.height+E*2;Mt(l,A,y,k.useMaxWidth),l.attr("viewBox",`${x.x-E} ${x.y-E} ${y} ${A}`)},de="28e9f9db-3c8d-5aa5-9faf-44286ae5937c";function fe(t="",r=""){const e=t.replace(ie,"");return`${ft(r)}${ft(e)}${zt(t,de)}`}function ft(t=""){return t.length>0?`${t}-`:""}const ue={setConf:ae,draw:he},ye=t=>`
  .entityBox {
    fill: ${t.mainBkg};
    stroke: ${t.nodeBorder};
  }

  .attributeBoxOdd {
    fill: ${t.attributeBackgroundColorOdd};
    stroke: ${t.nodeBorder};
  }

  .attributeBoxEven {
    fill:  ${t.attributeBackgroundColorEven};
    stroke: ${t.nodeBorder};
  }

  .relationshipLabelBox {
    fill: ${t.tertiaryColor};
    opacity: 0.7;
    background-color: ${t.tertiaryColor};
      rect {
        opacity: 0.5;
      }
  }

    .relationshipLine {
      stroke: ${t.lineColor};
    }

  .entityTitleText {
    text-anchor: middle;
    font-size: 18px;
    fill: ${t.textColor};
  }    
`,pe=ye,Ee={parser:Kt,db:ee,renderer:ue,styles:pe};export{Ee as diagram};