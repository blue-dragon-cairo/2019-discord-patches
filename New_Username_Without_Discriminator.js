return responseBody

    .replace('d.initialize=function(e){this.id=e.id,this.username=e.username||"",this.usernameLowerCase=this.username.toLocaleLowerCase(),', 'd.initialize=function(e){this.id=e.id,this.global_name=(e.global_name||e.username),this.username=e.username||"",this.usernameLowerCase=this.username.toLocaleLowerCase(),')

    .replace('return a.createElement("div",y({className:(0,o.default)(d,f.default.nameTag)},O),h("span",{className:c},void 0,A),l?null:h("span",{className:(0,o.default)(p,(e={},e[f.default.discriminatorWithMobileIndicator]=m,e))},void 0,"#",r.discriminator),m?h(u.default,{className:g}):null,_?this.renderOwner():null,r.bot?h(i.default,{invertColor:s,className:(0,o.default)(v,f.default.bot)}):null)', 'return a.createElement("div", y({className: (0, o.default)(d, f.default.nameTag)}, O), h("span", {className: c}, void 0, (r.discriminator === "0" && A.toString() == r.username) || (r.global_name && r.global_name != r.username) ? r.global_name : A), l ? null : h("span", {className: (0, o.default)(p, (e = {}, e[f.default.discriminatorWithMobileIndicator] = m, e))}, void 0, r.discriminator === "0" || (r.global_name && r.global_name != r.username) ? " (" : "#", (r.discriminator === "0" ? r.username : (r.global_name && r.global_name != r.username ? (r.username + "#" + r.discriminator + ")") : r.discriminator)) + (r.discriminator === "0" ? ")" : "")), m ? h(u.default, {className: g}) : null, _ ? this.renderOwner() : null, r.bot ? h(i.default, {invertColor: s,className: (0, o.default)(v, f.default.bot)}) : null)')

    .replace('C("span",{className:T.default.nameWithActivity},void 0,t.toString())', 'C("span",{className:T.default.nameWithActivity},void 0, e.user ? (e.user.discriminator === "0" || e.user.global_name ? e.user.global_name : t.toString()) : t.toString())')

    .replace('C("span",{className:T.default.name},void 0,t.toString())', 'C("span",{className:T.default.name},void 0, e.user ? (e.user.discriminator === "0" || (e.user.global_name && e.user.global_name != e.user.username) ? e.user.global_name : t.toString()) : t.toString())')

    .replace('v(c.default.Title,{onContextMenu:m,onClick:h,className:p.default.cursorPonter},void 0,_)', 'v(c.default.Title,{onContextMenu:m,onClick:h,className:p.default.cursorPonter},void 0, e.user && e.user.discriminator === "0" ? e.user.global_name : _)')

    .replace('T(f.default,{tag:"span",className:(0,o.default)(y.default.username,y.default[l+"BackgroundOpacity"]),style:s,onMouseDown:this.onMouseDown,onClick:this.onClick},void 0,t.nick||t.author.toString())', 'T(f.default,{tag:"span",className:(0,o.default)(y.default.username,y.default[l+"BackgroundOpacity"]),style:s,onMouseDown:this.onMouseDown,onClick:this.onClick},void 0,t.nick|| ( t.author.global_name || t.author.toString() ))')

;

// /(.*)discord(app|)[.]com\/(assets|api)(.*)/
