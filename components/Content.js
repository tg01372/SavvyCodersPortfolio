import * as pages from "./Pages";

export default function (state){
return `
    <div>
      ${pages[state.body](state)} 
    </div>
  `;
}


