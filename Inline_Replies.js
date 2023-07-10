return responseBody

    .replace('mention_everyone:e.mention_everyone||e.mentionEveryone,', 'mention_everyone:e.mention_everyone||e.mentionEveryone,message_reference:e.message_reference||e.messageReference,referenced_message:e.referenced_message||e.referencedMessage,')

    .replace('mentions:s,mentionRoles:u,mentioned:b(a.default.getId(),e.channel_id,e.mention_everyone,s,u),', 'mentions:s,mentionRoles:u,mentioned:b(a.default.getId(),e.channel_id,e.mention_everyone,s,u),messageReference:e.message_reference,referencedMessage:e.referenced_message,')

    .replace('this.mentionEveryone=e.mentionEveryone||!1,', 'this.mentionEveryone=e.mentionEveryone||!1,this.messageReference=e.messageReference||null,this.referencedMessage=e.referencedMessage||null,')

    .replace('if(e.type!==m.MessageTypes.DEFAULT)', 'if(((e.type == m.MessageTypes.DEFAULT && e.referencedMessage) || e.type == 19) && !e.replyParsed) { e.replyParsed = 1; e.type = m.MessageTypes.DEFAULT; e.content = "[" + (e.referencedMessage.author.global_name || e.referencedMessage.author.username) + "의 메시지: " + e.referencedMessage.content.replace(/\\r\\n/g, "\\n").replace(/\\r/g, "\\n") + "]\\n" + e.content; if(e.contentParsed) { if(typeof e.contentParsed[0] == "string") { e.contentParsed[0] = "[" + (e.referencedMessage.author.global_name || e.referencedMessage.author.username) + "의 메시지: " + e.referencedMessage.content.replace(/\\r\\n/g, "\\n").replace(/\\r/g, "\\n") + "]\\n" + e.contentParsed[0]; } else { e.contentParsed.unshift("[" + (e.referencedMessage.author.global_name || e.referencedMessage.author.username) + "의 메시지: " + e.referencedMessage.content.replace(/\\r\\n/g, "\\n").replace(/\\r/g, "\\n") + "]\\n"); } } } if(e.type !== m.MessageTypes.DEFAULT && e.type!=19)')

;

// /(.*)discord(app|)[.]com\/(assets|api)(.*)/
