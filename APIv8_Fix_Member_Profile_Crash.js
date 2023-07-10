return responseBody.replace('"/v6"', '"/v8"').replace('"&v=6"', '"&v=8"')

    .replace('r.renderRoles=function(){var e=this.props,t=e.guild,r=e.user,n=e.guildMember,a=e.popoutKey;', 'r.renderRoles=function(){var e=this.props,t=e.guild,r=e.user,n=e.guildMember,a=e.popoutKey;if(n.roles){window["GUILD_MEMBER_CACHE_" + t.id + "_" + r.id]=n;}else if(window["GUILD_MEMBER_CACHE_" + t.id + "_" + r.id]){n=window["GUILD_MEMBER_CACHE_" + t.id + "_" + r.id];}')

;

// /(.*)[.]discord(app|)[.]com\/(assets|api)(.*)/
