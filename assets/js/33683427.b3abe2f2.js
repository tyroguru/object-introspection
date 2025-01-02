"use strict";(self.webpackChunkoi_web=self.webpackChunkoi_web||[]).push([[503],{3287:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var i=t(4848),s=t(8453);const r={title:"Function Arguments"},o="Introspecting Function Arguments",c={id:"addrbook-funcargs",title:"Function Arguments",description:"We'll now look at a simple example of introspecting objects upon entry to a function. Adding a contact to the address book takes 3 string objects passed by reference:",source:"@site/docs/addrbook-funcargs.md",sourceDirName:".",slug:"/addrbook-funcargs",permalink:"/docs/addrbook-funcargs",draft:!1,unlisted:!1,editUrl:"https://github.com/facebookexperimental/object-introspection/docs/addrbook-funcargs.md",tags:[],version:"current",frontMatter:{title:"Function Arguments"},sidebar:"mysidebar",previous:{title:"this pointers",permalink:"/docs/addrbook-this"},next:{title:"Limitations and Constraints",permalink:"/docs/constraints"}},a={},d=[];function l(e){const n={code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"introspecting-function-arguments",children:"Introspecting Function Arguments"})}),"\n",(0,i.jsx)(n.p,{children:"We'll now look at a simple example of introspecting objects upon entry to a function. Adding a contact to the address book takes 3 string objects passed by reference:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"  void AddContact(std::string& f, std::string& l, std::string& n);\n"})}),"\n",(0,i.jsx)(n.p,{children:"We need the symbol name to form the probe specification:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"$ ~/object-introspection/examples/web/AddrBook# readelf -sW addrbook | grep AddContext\n    76: 0000000000401980   221 FUNC    WEAK   DEFAULT   15 _ZN11AddressBook10AddContactERNSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEES6_S6_\n"})}),"\n",(0,i.jsxs)(n.p,{children:["So the probe specification for introspecting the first and third argument (FirstName and Number) passed to ",(0,i.jsx)(n.code,{children:"AddContact()"})," is:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"$ ~/object-introspection/examples/web/AddrBook# cat /tmp/addrentry.oid\nentry:_ZN11AddressBook10AddContactERNSt7__cxx1112basic_stringIcSt11char_traitsIcESaIcEEES6_S6_:arg0,arg2\n"})}),"\n",(0,i.jsx)(n.p,{children:"A few small things to note:"}),"\n",(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:["Instead of specifying the probe on the command line with the ",(0,i.jsx)(n.code,{children:"-S"})," option we've put it into a file as longer probe specifications become a bit unwieldy in the command line for some of us!"]}),(0,i.jsxs)("li",{children:["Arguments to functions are referenced by ",(0,i.jsx)(n.code,{children:"argX"})," where ",(0,i.jsx)(n.code,{children:"X"})," begins at 0 for the first argument."]}),(0,i.jsx)("li",{children:"One or more arguments can be specified in the probe specification."})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'$ ~/object-introspection# jq . oid_out.json\n[\n  {\n    "name": "f",\n    "typePath": "f",\n    "typeName": "string",\n    "isTypedef": true,\n    "staticSize": 32,\n    "dynamicSize": 0,\n    "members": [\n      {\n        "name": "",\n        "typePath": "",\n        "typeName": "basic_string<char, std::char_traits<char>, std::allocator<char> >",\n        "isTypedef": false,\n        "staticSize": 32,\n        "dynamicSize": 0,\n        "length": 14,\n        "capacity": 15,\n        "elementStaticSize": 1\n      }\n    ]\n  },\n  {\n    "name": "n",\n    "typePath": "n",\n    "typeName": "string",\n    "isTypedef": true,\n    "staticSize": 32,\n    "dynamicSize": 23,\n    "members": [\n      {\n        "name": "",\n        "typePath": "",\n        "typeName": "basic_string<char, std::char_traits<char>, std::allocator<char> >",\n        "isTypedef": false,\n        "staticSize": 32,\n        "dynamicSize": 23,\n        "length": 23,\n        "capacity": 23,\n        "elementStaticSize": 1\n      }\n    ]\n  }\n]\n'})}),"\n",(0,i.jsx)(n.p,{children:"The above shows us that the first argument, f, is 14 bytes in length and fits within the SSO static buffer while the third argument, n, is 23 characters long and there occupies dynamically allocated memory external the the string object."})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>c});var i=t(6540);const s={},r=i.createContext(s);function o(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);