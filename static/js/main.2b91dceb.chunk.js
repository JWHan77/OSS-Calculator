(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,n,t){e.exports=t(29)},20:function(e,n,t){},29:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),i=t(8),c=t.n(i),o=(t(20),t(1)),l=t(2),u=t(6),s=t(3),d=t(7),p=t(4),b=t(5);function f(){var e=Object(p.a)(["\n  margin: 10px auto;\n  width: 300px;\n  padding: 10px;\n  border: 2px solid #000;\n  border-radius: 5px;\n  text-align: center;\n  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);\n"]);return f=function(){return e},e}var h=b.a.div(f()),g=function(e){function n(){return Object(o.a)(this,n),Object(u.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return a.createElement(h,null,this.props.children)}}]),n}(a.Component);function y(){var e=Object(p.a)(["\n  padding: 5px;\n  [data-display] {\n    border-radius: 5px;\n    border: 2px solid #000;\n    height: 60px;\n    line-height: 60px;\n    box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.2);\n    text-align: left;\n    font-size: 18px;\n    font-weight: bold;\n    padding: 0 15px;\n    color: #000;\n  }\n"]);return y=function(){return e},e}var m=b.a.div(y()),x=function(e){function n(){return Object(o.a)(this,n),Object(u.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return a.createElement(m,null,a.createElement("div",{"data-display":!0},this.props.displayValue))}}]),n}(a.Component);function v(){var e=Object(p.a)(['\n  :after {\n    content: "";\n    display: block;\n    clear: both;\n  }\n']);return v=function(){return e},e}var j=b.a.div(v()),E=function(e){function n(){var e,t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=Object(u.a)(this,(e=Object(s.a)(n)).call.apply(e,[this].concat(r)))).handleClick=function(e){t.props.onClickButton(e.target.innerText)},t}return Object(d.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return a.createElement(j,{onClick:this.handleClick},this.props.children)}}]),n}(a.Component);function O(){var e=Object(p.a)(["\n  float: left;\n  width: ",'%;\n  padding: 5px;\n  button {\n    :focus {\n      outline: none;\n    }\n    :hover {\n      background: #eee;\n    }\n    :active {\n      box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.4);\n    }\n    color: #000;\n    font-size: 20px;\n    line-height: 40px;\n    font-weight: bold;\n    cursor: pointer;\n    width: 100%;\n    background: transparent;\n    border-radius: 5px;\n    border: 2px solid #000;\n    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);\n\n    &[data-color="gray"] {\n      background: #eee;\n      :hover {\n        background: #ccc;\n      }\n    }\n  }\n']);return O=function(){return e},e}var z=b.a.div(O(),function(e){return e.size/4*100}),k=function(e){function n(){return Object(o.a)(this,n),Object(u.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){var e=this.props,n=e.size,t=void 0===n?1:n,r=e.color,i=e.children;return a.createElement(z,{size:t},a.createElement("button",{"data-color":r},i))}}]),n}(a.Component);function w(){var e=Object(p.a)([""]);return w=function(){return e},e}var V=b.a.div(w()),C=function(e){return console.log(e),new Function("return ("+e+")")()},S=function(e){function n(){var e,t;Object(o.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(t=Object(u.a)(this,(e=Object(s.a)(n)).call.apply(e,[this].concat(r)))).state={displayValue:""},t.onClickButton=function(e){var n=t.state.displayValue,a=void 0===n?"":n,r=(a=""+a).substr(a.length-1),i=["/","*","-","+","."],c={AC:function(){t.setState({displayValue:""})},BS:function(){a.length>0&&(a=a.substr(0,a.length-1)),t.setState({displayValue:a})},"\xf7":function(){""===r||i.includes(r)||(console.log(a),console.log(r),t.setState({displayValue:a+"/"}))},"\xd7":function(){""===r||i.includes(r)||t.setState({displayValue:a+"*"})},"-":function(){""===r||i.includes(r)||t.setState({displayValue:a+"-"})},"+":function(){""===r||i.includes(r)||t.setState({displayValue:a+"+"})},"=":function(){""!==r&&i.includes(r)?a=a.substr(0,a.length-1):""!==r&&(a=C(a)),t.setState({displayValue:a})},".":function(){console.log(r),""===r||i.includes(r)||t.setState({displayValue:a+"."})},0:function(){0!==Number(a)&&(a+="0",t.setState({displayValue:a}))}};c[e]?c[e]():t.setState({displayValue:a+e})},t}return Object(d.a)(n,e),Object(l.a)(n,[{key:"render",value:function(){return a.createElement(V,null,a.createElement(g,null,a.createElement(x,{displayValue:this.state.displayValue}),a.createElement(E,{onClickButton:this.onClickButton},a.createElement(k,{size:2,color:"gray"},"AC"),a.createElement(k,{size:1,color:"gray"},"BS"),a.createElement(k,{size:1,color:"gray"},"\xf7"),a.createElement(k,{size:1},"7"),a.createElement(k,{size:1},"8"),a.createElement(k,{size:1},"9"),a.createElement(k,{size:1,color:"gray"},"\xd7"),a.createElement(k,{size:1},"4"),a.createElement(k,{size:1},"5"),a.createElement(k,{size:1},"6"),a.createElement(k,{size:1,color:"gray"},"-"),a.createElement(k,{size:1},"1"),a.createElement(k,{size:1},"2"),a.createElement(k,{size:1},"3"),a.createElement(k,{size:1,color:"gray"},"+"),a.createElement(k,{size:2},"0"),a.createElement(k,{size:1},"."),a.createElement(k,{size:1,color:"gray"},"="))))}}]),n}(a.Component);c.a.render(r.a.createElement(S,null),document.getElementById("root"))}},[[15,2,1]]]);
//# sourceMappingURL=main.2b91dceb.chunk.js.map