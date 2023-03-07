const fontz = {
    "upperAndLowerAlpha": "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    "lowerAlpha": "abcdefghijklmnopqrstuvwxyz",
    "upperAlpha": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    "upperAlphaAndNum": "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    "lowerAlphaAndNum": "abcdefghijklmnopqrstuvwxyz0123456789",
    "alphaAndNum": "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    "replaceAll": (t,a) => {
        return t.replaceAll(new RegExp('['+String(Object.keys(a))+']', 'g'), c => a[c]);
    },
    "addSpace": (t,o={space:1,startingSpace:true}) => {
        let s='';
        if(!Boolean(o.space)) o.space=1
        if(o.startingSpace == undefined) o.startingSpace=true
        for(let i=0;i<o.space;i++) s+=' ';
        return o.startingSpace ? t.replaceAll('',s) : t.replaceAll('',s).replace(s,'')
    },
    "replaceAllFromString": (t,i,o) => {
        const v = o.split('');
        let r = {};
        i.split('').forEach((k, x) => r[k] = v[x]);
        return fontz.replaceAll(t,r);
    },
    "oldenglish": (t) => {
        return x(t, '𝔄𝔅ℭ𝔇𝔈𝔉𝔊ℌℑ𝔍𝔎𝔏𝔐𝔑𝔒𝔓𝔔ℜ𝔖𝔗𝔘𝔙𝔚𝔛𝔜ℨ𝔞𝔟𝔠𝔡𝔢𝔣𝔤𝔥𝔦𝔧𝔨𝔩𝔪𝔫𝔬𝔭𝔮𝔯𝔰𝔱𝔲𝔳𝔴𝔵𝔶𝔷0123456789')
    },
    "medieval": (t) => {
        return x(t, '𝕬𝕭𝕮𝕯𝕰𝕱𝕲𝕳𝕴𝕵𝕶𝕷𝕸𝕹𝕺𝕻𝕼𝕽𝕾𝕿𝖀𝖁𝖂𝖃𝖄𝖅𝖆𝖇𝖈𝖉𝖊𝖋𝖌𝖍𝖎𝖏𝖐𝖑𝖒𝖓𝖔𝖕𝖖𝖗𝖘𝖙𝖚𝖛𝖜𝖝𝖞𝖟0123456789')
    },
    "cursive": (t) => {
        return x(t, '𝓐𝓑𝓒𝓓𝓔𝓕𝓖𝓗𝓘𝓙𝓚𝓛𝓜𝓝𝓞𝓟𝓠𝓡𝓢𝓣𝓤𝓥𝓦𝓧𝓨𝓩𝓪𝓫𝓬𝓭𝓮𝓯𝓰𝓱𝓲𝓳𝓴𝓵𝓶𝓷𝓸𝓹𝓺𝓻𝓼𝓽𝓾𝓿𝔀𝔁𝔂𝔃0123456789')
    },
    "scriptify": (t) => {
        return x(t, '𝒜𝐵𝒞𝒟𝐸𝐹𝒢𝐻𝐼𝒥𝒦𝐿𝑀𝒩𝒪𝒫𝒬𝑅𝒮𝒯𝒰𝒱𝒲𝒳𝒴𝒵𝒶𝒷𝒸𝒹𝑒𝒻𝑔𝒽𝒾𝒿𝓀𝓁𝓂𝓃𝑜𝓅𝓆𝓇𝓈𝓉𝓊𝓋𝓌𝓍𝓎𝓏𝟢𝟣𝟤𝟥𝟦𝟧𝟨𝟩𝟪𝟫')
    },
    "doublestruck": (t) => {
        return x(t, '𝔸𝔹ℂ𝔻𝔼𝔽𝔾ℍ𝕀𝕁𝕂𝕃𝕄ℕ𝕆ℙℚℝ𝕊𝕋𝕌𝕍𝕎𝕏𝕐ℤ𝕒𝕓𝕔𝕕𝕖𝕗𝕘𝕙𝕚𝕛𝕜𝕝𝕞𝕟𝕠𝕡𝕢𝕣𝕤𝕥𝕦𝕧𝕨𝕩𝕪𝕫𝟘𝟙𝟚𝟛𝟜𝟝𝟞𝟟𝟠𝟡')
    },
    "italic": (t) => {
        return x(t, '𝘈𝘉𝘊𝘋𝘌𝘍𝘎𝘏𝘐𝘑𝘒𝘓𝘔𝘕𝘖𝘗𝘘𝘙𝘚𝘛𝘜𝘝𝘞𝘟𝘠𝘡𝘢𝘣𝘤𝘥𝘦𝘧𝘨𝘩𝘪𝘫𝘬𝘭𝘮𝘯𝘰𝘱𝘲𝘳𝘴𝘵𝘶𝘷𝘸𝘹𝘺𝘻0123456789')
    },
    "bolditalic": (t) => {
        return x(t, '𝘼𝘽𝘾𝘿𝙀𝙁𝙂𝙃𝙄𝙅𝙆𝙇𝙈𝙉𝙊𝙋𝙌𝙍𝙎𝙏𝙐𝙑𝙒𝙓𝙔𝙕𝙖𝙗𝙘𝙙𝙚𝙛𝙜𝙝𝙞𝙟𝙠𝙡𝙢𝙣𝙤𝙥𝙦𝙧𝙨𝙩𝙪𝙫𝙬𝙭𝙮𝙯0123456789')
    },
    "monospace": (t) => {
        return x(t, '𝙰𝙱𝙲𝙳𝙴𝙵𝙶𝙷𝙸𝙹𝙺𝙻𝙼𝙽𝙾𝙿𝚀𝚁𝚂𝚃𝚄𝚅𝚆𝚇𝚈𝚉𝚊𝚋𝚌𝚍𝚎𝚏𝚐𝚑𝚒𝚓𝚔𝚕𝚖𝚗𝚘𝚙𝚚𝚛𝚜𝚝𝚞𝚟𝚠𝚡𝚢𝚣𝟶𝟷𝟸𝟹𝟺𝟻𝟼𝟽𝟾𝟿')
    },
    "lunitoolsbubbles": (t) => {
        return x(t, 'ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ⓪①②③④⑤⑥⑦⑧⑨')
    },
    "fattext": (t) => {
        return x(t, 'ᗩᗷᑕᗪᗴᖴǤᕼᎥᒎᛕᒪᗰᑎᗝᑭɊᖇᔕ丅ᑌᐯᗯ᙭Ƴ乙ᗩᗷᑕᗪᗴᖴǤᕼᎥᒎᛕᒪᗰᑎᗝᑭɊᖇᔕ丅ᑌᐯᗯ᙭Ƴ乙0123456789')
    },
    "widetext": (t) => {
        return x(t, 'ＡＢＣＤＥＦＧＨＩＪＫＬＭＮＯＰＱＲＳＴＵＶＷＸＹＺａｂｃｄｅｆｇｈｉｊｋｌｍｎｏｐｑｒｓｔｕｖｗｘｙｚ０１２３４５６７８９')
    },
    "bold": (t) => {
        return x(t, '𝐀𝐁𝐂𝐃𝐄𝐅𝐆𝐇𝐈𝐉𝐊𝐋𝐌𝐍𝐎𝐏𝐐𝐑𝐒𝐓𝐔𝐕𝐖𝐗𝐘𝐙𝐚𝐛𝐜𝐝𝐞𝐟𝐠𝐡𝐢𝐣𝐤𝐥𝐦𝐧𝐨𝐩𝐪𝐫𝐬𝐭𝐮𝐯𝐰𝐱𝐲𝐳𝟎𝟏𝟐𝟑𝟒𝟓𝟔𝟕𝟖𝟗')
    },
    "lunitoolsflip": (t) => {
        return x(t, '∀ᙠƆᗡƎℲ⅁HIſ⋊˥WNOԀΌᴚS⊥∩ΛMX⅄Zɐqɔpǝɟɓɥıɾʞlɯuodbɹsʇnʌʍxʎz0⇂ᄅƐㄣގ9ㄥ86')
    },
    "reversemirror": (t) => {
        return x(t, 'ɐqɔpǝɟƃɥᴉɾʞlɯuodbɹsʇnʌʍxʎzɐqɔpǝɟƃɥᴉɾʞlɯuodbɹsʇnʌʍxʎz0ƖᄅƐㄣϛ9ㄥ86')
    },
    "squares": (t) => {
        return x(t, '🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉🄰🄱🄲🄳🄴🄵🄶🄷🄸🄹🄺🄻🄼🄽🄾🄿🅀🅁🅂🅃🅄🅅🅆🅇🅈🅉0123456789')
    },
    "lunitoolsmirror": (t) => {
        return x(t, 'AᙠƆᗡƎꟻᎮHIႱ⋊⅃MͶOꟼỌЯꙄTUVWXYƸɒdɔbɘᎸǫʜiꞁʞ|mᴎoqpɿꙅƚuvwxʏƹ0123456789')
    },
    "asiantext": (t) => {
        return x(t, '卂乃匚ᗪ乇千Ꮆ卄丨ﾌҜㄥ爪几ㄖ卩Ɋ尺丂ㄒㄩᐯ山乂ㄚ乙卂乃匚ᗪ乇千Ꮆ卄丨ﾌҜㄥ爪几ㄖ卩Ɋ尺丂ㄒㄩᐯ山乂ㄚ乙0123456789')
    },
    "asiantext2": (t) => {
        return x(t, 'ﾑ乃ᄃり乇ｷムんﾉﾌズﾚﾶ刀のｱゐ尺丂ｲひ√Wﾒﾘ乙ﾑ乃ᄃり乇ｷムんﾉﾌズﾚﾶ刀のｱゐ尺丂ｲひ√Wﾒﾘ乙0123456789')
    },
    "indianway": (t) => {
        return x(t, 'คც८ძ૯Բ૭ҺɿʆқՆɱՈ૦ƿҩՐς੮υ౮ω૪עઽคც८ძ૯Բ૭ҺɿʆқՆɱՈ૦ƿҩՐς੮υ౮ω૪עઽ0123456789')
    },
    "russianway": (t) => {
        return x(t, 'АБCДЄFGHЇJКГѪЙѲPФЯ$TЦѴШЖЧЗабcдёfgнїjкгѫпѳpфя$тцѵщжчз0123456789')
    },
    "bigrussian": (t) => {
        return x(t, 'ДБCDΞFGHIJҜLMИФPǪЯSΓЦVЩЖУZДБCDΞFGHIJҜLMИФPǪЯSΓЦVЩЖУZ0123456789')
    },
    "squigglesymbols": (t) => {
        return x(t, 'ꋫꃃꏸꁕꍟꄘꁍꑛꂑꀭꀗ꒒ꁒꁹꆂꉣꁸ꒓ꌚ꓅ꐇꏝꅐꇓꐟꁴꋫꃃꏸꁕꍟꄘꁍꑛꂑꀭꀗ꒒ꁒꁹꆂꉣꁸ꒓ꌚ꓅ꐇꏝꅐꇓꐟꁴ0123456789')
    },
    "squigglesymbols2": (t) => {
        return x(t, 'ꍏꌃꉓꀸꍟꎇꁅꃅꀤꀭꀘ꒒ꂵꈤꂦꉣꆰꋪꌗ꓄ꀎꃴꅏꊼꌩꁴꍏꌃꉓꀸꍟꎇꁅꃅꀤꀭꀘ꒒ꂵꈤꂦꉣꆰꋪꌗ꓄ꀎꃴꅏꊼꌩꁴ0123456789')
    },
    "squigglesymbols3": (t) => {
        return x(t, 'αßςdεƒghïյκﾚmη⊕pΩrš†u∀ωxψzαßςdεƒghïյκﾚmη⊕pΩrš†u∀ωxψz0123456789')
    },
    "squigglesymbols4": (t) => {
        return x(t, 'ΔβĆĐ€₣ǤĦƗĴҜŁΜŇØƤΩŘŞŦỮVŴЖ¥ŽΔβĆĐ€₣ǤĦƗĴҜŁΜŇØƤΩŘŞŦỮVŴЖ¥Ž0123456789')
    },
    "squigglesymbols5": (t) => {
        return x(t, 'ꍏꌃꉓꀸꍟꎇꁅꃅꀤꀭꀘ꒒ꂵꈤꂦꉣꆰꋪꌗ꓄ꀎꃴꅏꊼꌩꁴꍏꌃꉓꀸꍟꎇꁅꃅꀤꀭꀘ꒒ꂵꈤꂦꉣꆰꋪꌗ꓄ꀎꃴꅏꊼꌩꁴ0123456789')
    },
    "squigglesymbols6": (t) => {
        return x(t, 'ꋬꃳꉔ꒯ꏂꊰꍌꁝ꒐꒻ꀘ꒒ꂵꋊꄲꉣꆰꋪꇙ꓄꒤꒦ꅐꉧꌦꁴꋬꃳꉔ꒯ꏂꊰꍌꁝ꒐꒻ꀘ꒒ꂵꋊꄲꉣꆰꋪꇙ꓄꒤꒦ꅐꉧꌦꁴ0123456789')
    },
    "superscript": (t) => {
        return x(t, 'ᴬᴮᶜᴰᴱᶠᴳᴴᴵᴶᴷᴸᴹᴺᴼᴾQᴿˢᵀᵁⱽᵂˣʸᶻᵃᵇᶜᵈᵉᶠᵍʰⁱʲᵏˡᵐⁿᵒᵖqʳˢᵗᵘᵛʷˣʸᶻ⁰¹²³⁴⁵⁶⁷⁸⁹')
    },
    "subscript": (t) => {
        return x(t, 'ₐBCDₑFGHᵢⱼKLMNₒPQᵣSTᵤᵥWₓYZₐ𝚋𝚌𝚍ₑfg𝓱ᵢⱼ𝓴ᄂᗰ𝚗ₒ𝐩qᵣ𝘴𝚝ᵤᵥwₓyz₀₁₂₃₄₅₆₇₈₉')
    },
    "lunitoolsstiny": (t) => {
        return x(t, 'ᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘQʀꜱᴛᴜᴠᴡxʏᴢᴀʙᴄᴅᴇꜰɢʜɪᴊᴋʟᴍɴᴏᴘQʀꜱᴛᴜᴠᴡxʏᴢ0123456789')
    },
    "strikethrough": (t) => {
        return x(t, 'A̶B̶C̶D̶E̶F̶G̶H̶I̶J̶K̶L̶M̶N̶O̶P̶Q̶R̶S̶T̶U̶V̶W̶X̶Y̶Z̶a̶b̶c̶d̶e̶f̶g̶h̶i̶j̶k̶l̶m̶n̶o̶p̶q̶r̶s̶t̶u̶v̶w̶x̶y̶z̶0̶1̶2̶3̶4̶5̶6̶7̶8̶9̶')
    },
    "tildestrikethrough": (t) => {
        return x(t, 'A̴B̴C̴D̴E̴F̴G̴H̴I̴J̴K̴L̴M̴N̴O̴P̴Q̴R̴S̴T̴U̴V̴W̴X̴Y̴Z̴a̴b̴c̴d̴e̴f̴g̴h̴i̴j̴k̴l̴m̴n̴o̴p̴q̴r̴s̴t̴u̴v̴w̴x̴y̴z̴0̴1̴2̴3̴4̴5̴6̴7̴8̴9̴')
    },
    "slashthrough": (t) => {
        return x(t, '𝙰̷𝙱̷𝙲̷𝙳̷𝙴̷𝙵̷𝙶̷𝙷̷𝙸̷𝙹̷𝙺̷𝙻̷𝙼̷𝙽̷𝙾̷𝙿̷𝚀̷𝚁̷𝚂̷𝚃̷𝚄̷𝚅̷𝚆̷𝚇̷𝚈̷𝚉̷𝚊̷𝚋̷𝚌̷𝚍̷𝚎̷𝚏̷𝚐̷𝚑̷𝚒̷𝚓̷𝚔̷𝚕̷𝚖̷𝚗̷𝚘̷𝚙̷𝚚̷𝚛̷𝚜̷𝚝̷𝚞̷𝚟̷𝚠̷𝚡̷𝚢̷𝚣̷𝟶̷𝟷̷𝟸̷𝟹̷𝟺̷𝟻̷𝟼̷𝟽̷𝟾̷𝟿̷')
    },
    "underline": (t) => {
        return x(t, 'A̲B̲C̲D̲E̲F̲G̲H̲I̲J̲K̲L̲M̲N̲O̲P̲Q̲R̲S̲T̲U̲V̲W̲X̲Y̲Z̲a̲b̲c̲d̲e̲f̲g̲h̲i̲j̲k̲l̲m̲n̲o̲p̲q̲r̲s̲t̲u̲v̲w̲x̲y̲z̲0̲1̲2̲3̲4̲5̲6̲7̲8̲9̲')
    },
    "doubleunderline": (t) => {
        return x(t, 'A̳B̳C̳D̳E̳F̳G̳H̳I̳J̳K̳L̳M̳N̳O̳P̳Q̳R̳S̳T̳U̳V̳W̳X̳Y̳Z̳a̳b̳c̳d̳e̳f̳g̳h̳i̳j̳k̳l̳m̳n̳o̳p̳q̳r̳s̳t̳u̳v̳w̳x̳y̳z̳0̳1̳2̳3̳4̳5̳6̳7̳8̳9̳')
    },
    "arrowunderline": (t) => {
        return x(t, 'A͢B͢C͢D͢E͢F͢G͢H͢I͢J͢K͢L͢M͢N͢O͢P͢Q͢R͢S͢T͢U͢V͢W͢X͢Y͢Z͢a͢b͢c͢d͢e͢f͢g͢h͢i͢j͢k͢l͢m͢n͢o͢p͢q͢r͢s͢t͢u͢v͢w͢x͢y͢z͢0͢1͢2͢3͢4͢5͢6͢7͢8͢9͢')
    }
}

function x(t, o, i=fontz.alphaAndNum) {
    return fontz.replaceAllFromString(t, i, o)
}

export default fontz;