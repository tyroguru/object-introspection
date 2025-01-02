"use strict";(self.webpackChunkoi_web=self.webpackChunkoi_web||[]).push([[145],{1972:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var o=n(4848),s=n(8453);const i={title:"A Simple Address Book Example"},r="A simple address book example",d={id:"addrbook-intro",title:"A Simple Address Book Example",description:"Let's start with a very simple C++ application: an address book. This contrived simple piece of code contains everything we need to take you through the basics of using OI. The code itself can be found in the examples/web/AddrBook directory in the OI GitHub repo.",source:"@site/docs/addrbook-intro.md",sourceDirName:".",slug:"/addrbook-intro",permalink:"/docs/addrbook-intro",draft:!1,unlisted:!1,editUrl:"https://github.com/facebookexperimental/object-introspection/docs/addrbook-intro.md",tags:[],version:"current",frontMatter:{title:"A Simple Address Book Example"},sidebar:"mysidebar",previous:{title:"Getting Started",permalink:"/docs/getting-started"},next:{title:"this pointers",permalink:"/docs/addrbook-this"}},c={},a=[];function l(e){const t={a:"a",code:"code",h1:"h1",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"a-simple-address-book-example",children:"A simple address book example"})}),"\n",(0,o.jsxs)(t.p,{children:["Let's start with a very simple C++ application: an address book. This contrived simple piece of code contains everything we need to take you through the basics of using OI. The code itself can be found in the ",(0,o.jsx)(t.code,{children:"examples/web/AddrBook"})," directory in the OI ",(0,o.jsx)(t.a,{href:"https://github.com/facebookexperimental/object-introspection/tree/main/examples/web/AddrBook",children:"GitHub repo"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"First, build the test application:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"$ ~/object-introspection/examples/web/AddrBook: make CC=clang++-12\nclang++-12 -o addrbook AddrBook.cpp -std=c++20 -g -O3\n"})}),"\n",(0,o.jsxs)(t.p,{children:["(No need to override the 'CC' make variable if you have ",(0,o.jsx)(t.code,{children:"clang++"})," in your path)."]}),"\n",(0,o.jsx)(t.p,{children:"You can see the DWARF data is present in the generated executable:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:'$ ~/object-introspection/examples/web/AddrBook# size -At addrbook | grep "\\.debug"\n.debug_info           71316         0\n.debug_abbrev          2446         0\n.debug_line            8971         0\n.debug_str            44990         0\n.debug_loc            27968         0\n.debug_ranges         10240         0\n'})}),"\n",(0,o.jsxs)(t.p,{children:["Each address book is composed of a single ",(0,o.jsx)(t.code,{children:"AddressBook"})," object which contains zero or more ",(0,o.jsx)(t.code,{children:"Contact"})," objects. Here's how the data and interface definitions look for the two objects:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-C++",children:"class Contact {\npublic:\n  Contact(std::string& f, std::string& l, std::string& n);\nprivate:\n  std::string firstName, lastName;\n  std::string number;\n};\n\nclass AddressBook {\npublic:\n  void AddContact(std::string& f, std::string& l, std::string& n);\n  void DumpContacts(void);\nprivate:\n  int rev;\n  std::string Owner;\n  std::vector<Contact> Entries;\n};\n"})}),"\n",(0,o.jsx)(t.p,{children:"OI can introspect objects at specific points in an application:"}),"\n",(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{children:"Function arguments upon entry to a function."}),(0,o.jsx)("li",{children:"Function arguments upon return to a function."}),(0,o.jsx)("li",{children:"The return value from a function."}),(0,o.jsxs)("li",{children:["This ",(0,o.jsx)(t.code,{children:"this"})," pointer at entry or return from an object method."]}),(0,o.jsx)("li",{children:"Global objects."})]}),"\n",(0,o.jsxs)(t.p,{children:["Let's get started by introspecting an object using its ",(0,o.jsx)(t.code,{children:"this"})," pointer."]})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>d});var o=n(6540);const s={},i=o.createContext(s);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);