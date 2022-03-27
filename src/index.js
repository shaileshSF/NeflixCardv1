import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './Card';
import Sdata from './Sdata';


const ncard= (val) => {
        return <Card    
                imgsrc={val.imgsrc}
                title={val.title}
                sname= {val.sname}
                link={val.link}
             />
}
 
// function ncard(val) {
//         return (
            
//         );
// }

ReactDOM.render(
<>
<h1 style={{display:'block',textAlign:'center'}}>NetFlix Series</h1>

{/* <Card 
        imgsrc={Sdata[0].imgsrc}
        title={Sdata[0].title}
        sname={Sdata[0].sname}
        link={Sdata[0].link}

/>
<Card 
        imgsrc={Sdata[1].imgsrc}
        title={Sdata[1].title}
        sname={Sdata[1].sname}
        link={Sdata[1].link}

/>
<Card 
        imgsrc={Sdata[2].imgsrc}
        title={Sdata[2].title}
        sname={Sdata[2].sname}
        link={Sdata[2].link}

/>
<Card 
        imgsrc={Sdata[3].imgsrc}
        title={Sdata[3].title}
        sname={Sdata[3].sname}
        link={Sdata[3].link}

/>
<Card 
        imgsrc={Sdata[4].imgsrc}
        title={Sdata[4].title}
        sname={Sdata[4].sname}
        link={Sdata[4].link}

/> */}
{/* Const newdata = Sdata.map((val) => {

} ); */}


{
        Sdata.map(ncard)
}


</>, document.getElementById('root'));


