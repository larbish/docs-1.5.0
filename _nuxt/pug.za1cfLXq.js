import e from"./javascript.Of8SnKfU.js";import n from"./css.a-KJtBLB.js";import t from"./sass.URKSWxt9.js";import a from"./scss.eN2S-YgQ.js";import i from"./stylus.sfyXZDNv.js";import s from"./coffee.fJ2aU-i-.js";import l from"./html.0DSFJ4KV.js";const c=Object.freeze({displayName:"Pug",name:"pug",patterns:[{comment:"Doctype declaration.",match:"^(!!!|doctype)(\\s*[a-zA-Z0-9-_]+)?",name:"meta.tag.sgml.doctype.html"},{begin:"^(\\s*)//-",comment:"Unbuffered (pug-only) comments.",end:"^(?!(\\1\\s)|\\s*$)",name:"comment.unbuffered.block.pug"},{begin:"^(\\s*)//",comment:"Buffered (html) comments.",end:"^(?!(\\1\\s)|\\s*$)",name:"string.comment.buffered.block.pug",patterns:[{captures:{1:{name:"invalid.illegal.comment.comment.block.pug"}},comment:"Buffered comments inside buffered comments will generate invalid html.",match:"^\\s*(//)(?!-)",name:"string.comment.buffered.block.pug"}]},{begin:"<!--",end:"--\\s*>",name:"comment.unbuffered.block.pug",patterns:[{match:"--",name:"invalid.illegal.comment.comment.block.pug"}]},{begin:"^(\\s*)-$",comment:"Unbuffered code block.",end:"^(?!(\\1\\s)|\\s*$)",name:"source.js",patterns:[{include:"source.js"}]},{begin:"^(\\s*)(script)((\\.$)|(?=[^\\n]*((text|application)/javascript|module).*\\.$))",beginCaptures:{2:{name:"entity.name.tag.pug"}},comment:"Script tag with JavaScript code.",end:"^(?!(\\1\\s)|\\s*$)",name:"meta.tag.other",patterns:[{begin:"\\G(?=\\()",end:"$",patterns:[{include:"#tag_attributes"}]},{begin:"\\G(?=[.#])",end:"$",patterns:[{include:"#complete_tag"}]},{include:"source.js"}]},{begin:"^(\\s*)(style)((\\.$)|(?=[.#(].*\\.$))",beginCaptures:{2:{name:"entity.name.tag.pug"}},comment:"Style tag with CSS code.",end:"^(?!(\\1\\s)|\\s*$)",name:"meta.tag.other",patterns:[{begin:"\\G(?=\\()",end:"$",patterns:[{include:"#tag_attributes"}]},{begin:"\\G(?=[.#])",end:"$",patterns:[{include:"#complete_tag"}]},{include:"source.css"}]},{begin:"^(\\s*):(sass)(?=\\(|$)",beginCaptures:{2:{name:"constant.language.name.sass.filter.pug"}},end:"^(?!(\\1\\s)|\\s*$)",name:"source.sass.filter.pug",patterns:[{include:"#tag_attributes"},{include:"source.sass"}]},{begin:"^(\\s*):(scss)(?=\\(|$)",beginCaptures:{2:{name:"constant.language.name.scss.filter.pug"}},end:"^(?!(\\1\\s)|\\s*$)",name:"source.css.scss.filter.pug",patterns:[{include:"#tag_attributes"},{include:"source.css.scss"}]},{begin:"^(\\s*):(less)(?=\\(|$)",beginCaptures:{2:{name:"constant.language.name.less.filter.pug"}},end:"^(?!(\\1\\s)|\\s*$)",name:"source.less.filter.pug",patterns:[{include:"#tag_attributes"},{include:"source.less"}]},{begin:"^(\\s*):(stylus)(?=\\(|$)",beginCaptures:{2:{name:"constant.language.name.stylus.filter.pug"}},end:"^(?!(\\1\\s)|\\s*$)",patterns:[{include:"#tag_attributes"},{include:"source.stylus"}]},{begin:"^(\\s*):(coffee(-?script)?)(?=\\(|$)",beginCaptures:{2:{name:"constant.language.name.coffeescript.filter.pug"}},end:"^(?!(\\1\\s)|\\s*$)",name:"source.coffeescript.filter.pug",patterns:[{include:"#tag_attributes"},{include:"source.coffee"}]},{begin:"^(\\s*):(uglify-js)(?=\\(|$)",beginCaptures:{2:{name:"constant.language.name.js.filter.pug"}},end:"^(?!(\\1\\s)|\\s*$)",name:"source.js.filter.pug",patterns:[{include:"#tag_attributes"},{include:"source.js"}]},{begin:"^(\\s*)((:(?=.))|(:$))",beginCaptures:{4:{name:"invalid.illegal.empty.generic.filter.pug"}},comment:"Generic Pug filter.",end:"^(?!(\\1\\s)|\\s*$)",patterns:[{begin:"\\G(?<=:)(?=.)",end:"$",name:"name.generic.filter.pug",patterns:[{match:"\\G\\(",name:"invalid.illegal.name.generic.filter.pug"},{match:"[\\w-]",name:"constant.language.name.generic.filter.pug"},{include:"#tag_attributes"},{match:"\\W",name:"invalid.illegal.name.generic.filter.pug"}]}]},{begin:`^(\\s*)(?:(?=\\.$)|(?:(?=[\\w.#].*?\\.$)(?=(?:(?:(?:(?:(?:#[\\w-]+)|(?:\\.[\\w-]+))|(?:(?:[#!]\\{[^}]*\\})|(?:\\w(?:(?:[\\w:-]+[\\w-])|(?:[\\w-]*)))))(?:(?:#[\\w-]+)|(?:\\.[\\w-]+)|(?:\\((?:[^()\\'\\"]*(?:(?:\\'(?:[^\\']|(?:(?<!\\\\)\\\\\\'))*\\')|(?:\\"(?:[^\\"]|(?:(?<!\\\\)\\\\\\"))*\\")))*[^()]*\\))*)*)(?:(?:(?::\\s+)|(?<=\\)))(?:(?:(?:(?:#[\\w-]+)|(?:\\.[\\w-]+))|(?:(?:[#!]\\{[^}]*\\})|(?:\\w(?:(?:[\\w:-]+[\\w-])|(?:[\\w-]*)))))(?:(?:#[\\w-]+)|(?:\\.[\\w-]+)|(?:\\((?:[^()\\'\\"]*(?:(?:\\'(?:[^\\']|(?:(?<!\\\\)\\\\\\'))*\\')|(?:\\"(?:[^\\"]|(?:(?<!\\\\)\\\\\\"))*\\")))*[^()]*\\))*)*))*)\\.$)(?:(?:(#[\\w-]+)|(\\.[\\w-]+))|((?:[#!]\\{[^}]*\\})|(?:\\w(?:(?:[\\w:-]+[\\w-])|(?:[\\w-]*)))))))`,beginCaptures:{2:{name:"meta.selector.css entity.other.attribute-name.id.css.pug"},3:{name:"meta.selector.css entity.other.attribute-name.class.css.pug"},4:{name:"meta.tag.other entity.name.tag.pug"}},comment:"Generated from dot_block_tag.py",end:"^(?!(\\1\\s)|\\s*$)",patterns:[{match:"\\.$",name:"storage.type.function.pug.dot-block-dot"},{include:"#tag_attributes"},{include:"#complete_tag"},{begin:"^(?=.)",end:"$",name:"text.block.pug",patterns:[{include:"#inline_pug"},{include:"#embedded_html"},{include:"#html_entity"},{include:"#interpolated_value"},{include:"#interpolated_error"}]}]},{begin:"^\\s*",comment:"All constructs that generally span a single line starting with any number of white-spaces.",end:"$",patterns:[{include:"#inline_pug"},{include:"#blocks_and_includes"},{include:"#unbuffered_code"},{include:"#mixin_definition"},{include:"#mixin_call"},{include:"#flow_control"},{include:"#flow_control_each"},{include:"#case_conds"},{begin:"\\|",comment:"Tag pipe text line.",end:"$",name:"text.block.pipe.pug",patterns:[{include:"#inline_pug"},{include:"#embedded_html"},{include:"#html_entity"},{include:"#interpolated_value"},{include:"#interpolated_error"}]},{include:"#printed_expression"},{begin:"\\G(?=(#[^\\{\\w-])|[^\\w.#])",comment:"Line starting with characters incompatible with tag name/id/class is standalone text.",end:"$",patterns:[{begin:"</?(?=[!#])",end:">|$",patterns:[{include:"#inline_pug"},{include:"#interpolated_value"},{include:"#interpolated_error"}]},{include:"#inline_pug"},{include:"#embedded_html"},{include:"#html_entity"},{include:"#interpolated_value"},{include:"#interpolated_error"}]},{include:"#complete_tag"}]}],repository:{babel_parens:{begin:"\\(",end:"\\)|(({\\s*)?$)",patterns:[{include:"#babel_parens"},{include:"source.js"}]},blocks_and_includes:{captures:{1:{name:"storage.type.import.include.pug"},4:{name:"variable.control.import.include.pug"}},comment:"Template blocks and includes.",match:"(extends|include|yield|append|prepend|block( (append|prepend))?)\\s+(.*)$",name:"meta.first-class.pug"},case_conds:{begin:"(default|when)((\\s+|(?=:))|$)",captures:{1:{name:"storage.type.function.pug"}},comment:"Pug case conditionals.",end:"$",name:"meta.control.flow.pug",patterns:[{begin:"\\G(?!:)",end:"(?=:\\s+)|$",name:"js.embedded.control.flow.pug",patterns:[{include:"#case_when_paren"},{include:"source.js"}]},{begin:":\\s+",end:"$",name:"tag.case.control.flow.pug",patterns:[{include:"#complete_tag"}]}]},case_when_paren:{begin:"\\(",end:"\\)",name:"js.when.control.flow.pug",patterns:[{include:"#case_when_paren"},{match:":",name:"invalid.illegal.name.tag.pug"},{include:"source.js"}]},complete_tag:{begin:"(?=[\\w.#])|(:\\s*)",end:"(\\.?$)|(?=:.)",endCaptures:{1:{name:"storage.type.function.pug.dot-block-dot"}},patterns:[{include:"#blocks_and_includes"},{include:"#unbuffered_code"},{include:"#mixin_call"},{include:"#flow_control"},{include:"#flow_control_each"},{match:"(?<=:)\\w.*$",name:"invalid.illegal.name.tag.pug"},{include:"#tag_name"},{include:"#tag_id"},{include:"#tag_classes"},{include:"#tag_attributes"},{include:"#tag_mixin_attributes"},{captures:{2:{name:"invalid.illegal.end.tag.pug"},4:{name:"invalid.illegal.end.tag.pug"}},match:"((\\.)\\s+$)|((:)\\s*$)"},{include:"#printed_expression"},{include:"#tag_text"}]},embedded_html:{begin:"(?=<[^>]*>)",end:"$|(?=>)",name:"html",patterns:[{include:"text.html.basic"},{include:"#interpolated_value"},{include:"#interpolated_error"}]},flow_control:{begin:"(for|if|else if|else|until|while|unless|case)(\\s+|$)",captures:{1:{name:"storage.type.function.pug"}},comment:"Pug control flow.",end:"$",name:"meta.control.flow.pug",patterns:[{begin:"",end:"$",name:"js.embedded.control.flow.pug",patterns:[{include:"source.js"}]}]},flow_control_each:{begin:"(each)(\\s+|$)",captures:{1:{name:"storage.type.function.pug"}},end:"$",name:"meta.control.flow.pug.each",patterns:[{match:"([\\w$_]+)(?:\\s*,\\s*([\\w$_]+))?",name:"variable.other.pug.each-var"},{begin:"",end:"$",name:"js.embedded.control.flow.pug",patterns:[{include:"source.js"}]}]},html_entity:{patterns:[{match:"(&)([a-zA-Z0-9]+|#[0-9]+|#x[0-9a-fA-F]+)(;)",name:"constant.character.entity.html.text.pug"},{match:"[<>&]",name:"invalid.illegal.html_entity.text.pug"}]},inline_pug:{begin:"(?<!\\\\)(#\\[)",captures:{1:{name:"entity.name.function.pug"},2:{name:"entity.name.function.pug"}},end:"(\\])",name:"inline.pug",patterns:[{include:"#inline_pug"},{include:"#mixin_call"},{begin:"(?<!\\])(?=[\\w.#])|(:\\s*)",end:"(?=\\]|(:.)|=|\\s)",name:"tag.inline.pug",patterns:[{include:"#tag_name"},{include:"#tag_id"},{include:"#tag_classes"},{include:"#tag_attributes"},{include:"#tag_mixin_attributes"},{include:"#inline_pug"},{match:"\\[",name:"invalid.illegal.tag.pug"}]},{include:"#unbuffered_code"},{include:"#printed_expression"},{match:"\\[",name:"invalid.illegal.tag.pug"},{include:"#inline_pug_text"}]},inline_pug_text:{begin:"",end:"(?=\\])",patterns:[{begin:"\\[",end:"\\]",patterns:[{include:"#inline_pug_text"}]},{include:"#inline_pug"},{include:"#embedded_html"},{include:"#html_entity"},{include:"#interpolated_value"},{include:"#interpolated_error"}]},interpolated_error:{match:"(?<!\\\\)[#!]\\{(?=[^}]*$)",name:"invalid.illegal.tag.pug"},interpolated_value:{begin:"(?<!\\\\)[#!]\\{(?=.*?\\})",end:"\\}",name:"string.interpolated.pug",patterns:[{match:"{",name:"invalid.illegal.tag.pug"},{include:"source.js"}]},js_braces:{begin:"\\{",end:"\\}",patterns:[{include:"#js_braces"},{include:"source.js"}]},js_brackets:{begin:"\\[",end:"\\]",patterns:[{include:"#js_brackets"},{include:"source.js"}]},js_parens:{begin:"\\(",end:"\\)",patterns:[{include:"#js_parens"},{include:"source.js"}]},mixin_call:{begin:"((?:mixin\\s+)|\\+)([\\w-]+)",beginCaptures:{1:{name:"storage.type.function.pug"},2:{name:"meta.tag.other entity.name.function.pug"}},end:"(?!\\()|$",patterns:[{begin:"(?<!\\))\\(",end:"\\)",name:"args.mixin.pug",patterns:[{include:"#js_parens"},{captures:{1:{name:"meta.tag.other entity.other.attribute-name.tag.pug"}},match:"([^\\s(),=/]+)\\s*=\\s*"},{include:"source.js"}]},{include:"#tag_attributes"}]},mixin_definition:{captures:{1:{name:"storage.type.function.pug"},2:{name:"meta.tag.other entity.name.function.pug"},3:{name:"punctuation.definition.parameters.begin.js"},4:{name:"variable.parameter.function.js"},5:{name:"punctuation.definition.parameters.begin.js"}},match:"(mixin\\s+)([\\w-]+)(?:(\\()\\s*((?:[a-zA-Z_]\\w*\\s*)(?:,\\s*[a-zA-Z_]\\w*\\s*)*)(\\)))?$"},printed_expression:{begin:"(!?\\=)\\s*",captures:{1:{name:"constant"}},end:"(?=\\])|$",name:"source.js",patterns:[{include:"#js_brackets"},{include:"source.js"}]},tag_attribute_name:{captures:{1:{name:"entity.other.attribute-name.tag.pug"}},match:"([^\\s(),=/!]+)\\s*"},tag_attribute_name_paren:{begin:"\\(\\s*",end:"\\)",name:"entity.other.attribute-name.tag.pug",patterns:[{include:"#tag_attribute_name_paren"},{include:"#tag_attribute_name"}]},tag_attributes:{begin:"(\\(\\s*)",captures:{1:{name:"constant.name.attribute.tag.pug"}},end:"(\\))",name:"meta.tag.other",patterns:[{include:"#tag_attribute_name_paren"},{include:"#tag_attribute_name"},{match:"!(?!=)",name:"invalid.illegal.tag.pug"},{begin:"=\\s*",end:"$|(?=,|(?:\\s+[^!%&*\\-+~|<>?/])|\\))",name:"attribute_value",patterns:[{include:"#js_parens"},{include:"#js_brackets"},{include:"#js_braces"},{include:"source.js"}]},{begin:"(?<=[%&*\\-+~|<>:?/])\\s+",end:"$|(?=,|(?:\\s+[^!%&*\\-+~|<>?/])|\\))",name:"attribute_value2",patterns:[{include:"#js_parens"},{include:"#js_brackets"},{include:"#js_braces"},{include:"source.js"}]}]},tag_classes:{captures:{1:{name:"invalid.illegal.tag.pug"}},match:"\\.([^\\w-])?[\\w-]*",name:"meta.selector.css entity.other.attribute-name.class.css.pug"},tag_id:{match:"#[\\w-]+",name:"meta.selector.css entity.other.attribute-name.id.css.pug"},tag_mixin_attributes:{begin:"(&attributes\\()",captures:{1:{name:"entity.name.function.pug"}},end:"(\\))",name:"meta.tag.other",patterns:[{match:"attributes(?=\\))",name:"storage.type.keyword.pug"},{include:"source.js"}]},tag_name:{begin:"([#!]\\{(?=.*?\\}))|(\\w(([\\w:-]+[\\w-])|([\\w-]*)))",end:"(\\G(?<!\\5[^\\w-]))|\\}|$",name:"meta.tag.other entity.name.tag.pug",patterns:[{begin:"\\G(?<=\\{)",end:"(?=\\})",name:"meta.tag.other entity.name.tag.pug",patterns:[{match:"{",name:"invalid.illegal.tag.pug"},{include:"source.js"}]}]},tag_text:{begin:"(?=.)",end:"$",patterns:[{include:"#inline_pug"},{include:"#embedded_html"},{include:"#html_entity"},{include:"#interpolated_value"},{include:"#interpolated_error"}]},unbuffered_code:{begin:"(-|(([a-zA-Z0-9_]+)\\s+=))",beginCaptures:{3:{name:"variable.parameter.javascript.embedded.pug"}},comment:"name = function() {}",end:"(?=\\])|(({\\s*)?$)",name:"source.js",patterns:[{include:"#js_brackets"},{include:"#babel_parens"},{include:"source.js"}]}},scopeName:"text.pug",embeddedLangs:["javascript","css","sass","scss","stylus","coffee","html"],aliases:["jade"]});var b=[...e,...n,...t,...a,...i,...s,...l,c];export{b as default};
