import{w as ln,c as z}from"./path.53f90ab3.js";import{bl as rn,bm as G,bn as P,bo as an,bp as y,al as on,bq as K,br as _,bs as un,bt as t,bu as sn,bv as tn,bw as fn}from"./state.c5871122.js";function cn(l){return l.innerRadius}function yn(l){return l.outerRadius}function gn(l){return l.startAngle}function mn(l){return l.endAngle}function pn(l){return l&&l.padAngle}function dn(l,h,E,q,v,A,B,r){var I=E-l,i=q-h,n=B-v,m=r-A,a=m*I-n*i;if(!(a*a<y))return a=(n*(h-A)-m*(l-v))/a,[l+a*I,h+a*i]}function V(l,h,E,q,v,A,B){var r=l-E,I=h-q,i=(B?A:-A)/K(r*r+I*I),n=i*I,m=-i*r,a=l+n,s=h+m,f=E+n,c=q+m,C=(a+f)/2,o=(s+c)/2,p=f-a,g=c-s,R=p*p+g*g,b=v-A,T=a*c-f*s,O=(g<0?-1:1)*K(fn(0,b*b*R-T*T)),S=(T*g-p*O)/R,j=(-T*p-g*O)/R,w=(T*g+p*O)/R,d=(-T*p+g*O)/R,x=S-C,e=j-o,u=w-C,F=d-o;return x*x+e*e>u*u+F*F&&(S=w,j=d),{cx:S,cy:j,x01:-n,y01:-m,x11:S*(v/b-1),y11:j*(v/b-1)}}function vn(){var l=cn,h=yn,E=z(0),q=null,v=gn,A=mn,B=pn,r=null,I=ln(i);function i(){var n,m,a=+l.apply(this,arguments),s=+h.apply(this,arguments),f=v.apply(this,arguments)-an,c=A.apply(this,arguments)-an,C=un(c-f),o=c>f;if(r||(r=n=I()),s<a&&(m=s,s=a,a=m),!(s>y))r.moveTo(0,0);else if(C>on-y)r.moveTo(s*G(f),s*P(f)),r.arc(0,0,s,f,c,!o),a>y&&(r.moveTo(a*G(c),a*P(c)),r.arc(0,0,a,c,f,o));else{var p=f,g=c,R=f,b=c,T=C,O=C,S=B.apply(this,arguments)/2,j=S>y&&(q?+q.apply(this,arguments):K(a*a+s*s)),w=_(un(s-a)/2,+E.apply(this,arguments)),d=w,x=w,e,u;if(j>y){var F=sn(j/a*P(S)),L=sn(j/s*P(S));(T-=F*2)>y?(F*=o?1:-1,R+=F,b-=F):(T=0,R=b=(f+c)/2),(O-=L*2)>y?(L*=o?1:-1,p+=L,g-=L):(O=0,p=g=(f+c)/2)}var H=s*G(p),J=s*P(p),M=a*G(b),N=a*P(b);if(w>y){var Q=s*G(g),U=s*P(g),W=a*G(R),X=a*P(R),D;if(C<rn)if(D=dn(H,J,W,X,Q,U,M,N)){var Y=H-D[0],Z=J-D[1],$=Q-D[0],k=U-D[1],nn=1/P(tn((Y*$+Z*k)/(K(Y*Y+Z*Z)*K($*$+k*k)))/2),en=K(D[0]*D[0]+D[1]*D[1]);d=_(w,(a-en)/(nn-1)),x=_(w,(s-en)/(nn+1))}else d=x=0}O>y?x>y?(e=V(W,X,H,J,s,x,o),u=V(Q,U,M,N,s,x,o),r.moveTo(e.cx+e.x01,e.cy+e.y01),x<w?r.arc(e.cx,e.cy,x,t(e.y01,e.x01),t(u.y01,u.x01),!o):(r.arc(e.cx,e.cy,x,t(e.y01,e.x01),t(e.y11,e.x11),!o),r.arc(0,0,s,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),!o),r.arc(u.cx,u.cy,x,t(u.y11,u.x11),t(u.y01,u.x01),!o))):(r.moveTo(H,J),r.arc(0,0,s,p,g,!o)):r.moveTo(H,J),!(a>y)||!(T>y)?r.lineTo(M,N):d>y?(e=V(M,N,Q,U,a,-d,o),u=V(H,J,W,X,a,-d,o),r.lineTo(e.cx+e.x01,e.cy+e.y01),d<w?r.arc(e.cx,e.cy,d,t(e.y01,e.x01),t(u.y01,u.x01),!o):(r.arc(e.cx,e.cy,d,t(e.y01,e.x01),t(e.y11,e.x11),!o),r.arc(0,0,a,t(e.cy+e.y11,e.cx+e.x11),t(u.cy+u.y11,u.cx+u.x11),o),r.arc(u.cx,u.cy,d,t(u.y11,u.x11),t(u.y01,u.x01),!o))):r.arc(0,0,a,b,R,o)}if(r.closePath(),n)return r=null,n+""||null}return i.centroid=function(){var n=(+l.apply(this,arguments)+ +h.apply(this,arguments))/2,m=(+v.apply(this,arguments)+ +A.apply(this,arguments))/2-rn/2;return[G(m)*n,P(m)*n]},i.innerRadius=function(n){return arguments.length?(l=typeof n=="function"?n:z(+n),i):l},i.outerRadius=function(n){return arguments.length?(h=typeof n=="function"?n:z(+n),i):h},i.cornerRadius=function(n){return arguments.length?(E=typeof n=="function"?n:z(+n),i):E},i.padRadius=function(n){return arguments.length?(q=n==null?null:typeof n=="function"?n:z(+n),i):q},i.startAngle=function(n){return arguments.length?(v=typeof n=="function"?n:z(+n),i):v},i.endAngle=function(n){return arguments.length?(A=typeof n=="function"?n:z(+n),i):A},i.padAngle=function(n){return arguments.length?(B=typeof n=="function"?n:z(+n),i):B},i.context=function(n){return arguments.length?(r=n??null,i):r},i}export{vn as a};
