import{u as c,r as a,j as t,a as h}from"./index-37b78d17.js";import{R as m,C as d,X as x,Y as l,T as g,L as p}from"./generateCategoricalChart-0a8f8a3f.js";import{L as u,a as f}from"./LineChart-a40cd369.js";const k=()=>{const{ownerInfo:r}=c(o=>o.owner),n=r._id,[i,s]=a.useState([]);return a.useEffect(()=>{async function o(){try{const e=await h.get(`/owner/owner-monthlydata/${n}`);s(e.data)}catch(e){console.error("Error fetching monthly bookings:",e)}}o()},[s]),t.jsx(t.Fragment,{children:t.jsx(m,{width:"50%",height:"100%",children:t.jsxs(u,{width:500,height:300,data:i,margin:{top:5,right:30,left:20,bottom:5},children:[t.jsx(d,{strokeDasharray:"3 3"}),t.jsx(x,{dataKey:"_id.month",tickFormatter:o=>["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][o-1]}),t.jsx(l,{}),t.jsx(g,{}),t.jsx(p,{}),t.jsx(f,{type:"monotone",dataKey:"count",name:"Bookings",stroke:"#8884d8",activeDot:{r:8}})]})})})};export{k as default};
