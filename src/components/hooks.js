




import React,{useState,useRef} from 'react'
import data from '../resources/FoodData';

function Hooks() {

    

    const [valu,test] = useState('');
    


    const firstref = useRef();
    const secondref = useRef();

    const check=(id,cal)=>{

      document.getElementById(`cal${id}`).innerHTML=document.getElementById(`set${id}`).value*cal;

    }

    
    const reset=(id)=>{
      document.getElementById(`cal${id}`).innerHTML='';
      document.getElementById(`${id}`).innerHTML='';
      document.getElementById(`set${id}`).value='';
    }


  
    const right=(e,id)=>{
      test(e.target.value);
      document.getElementById(`${id}`).innerHTML=document.getElementById(`set${id}`).value;
     
      }
     
    

  

    const [third, setthrid] = useState('');

    const manual=(e)=>{
      
        setthrid(e.target.value)
    }

    return (
      <div>
        <div>Search</div>

        <div>
          <input placeholder='search here' onChange={(e)=>manual(e)} value={third} id='search'></input>
        </div>
        {
            data.map((elt)=>{
              if(third===''){
                return(
                  
                  <div ref={firstref} className={`main${elt.id}`}>
                  <div className='set'>
                      <div className='padding'>
                      <img className='img' src={elt.img} alt='img' />
                      </div>
                      <div>
                          <div>{elt.name}</div>
                          <div>{elt.cal}</div>
                      </div>
                      <div className='input'>
                        <div >
                          <input id={`set${elt.id}`}  type='number' placeholder='type the quantity'  onChange={(e)=>right(e,elt.id)} />
                        </div>
                        <div>
                          <button onClick={()=>check(elt.id,elt.cal)} >+</button>
                        </div>
                      </div>
                  </div>
                  <div className='item'>
                    <div ref={secondref} className={`quantity${elt.id}`} id={`${elt.id}`}>
                      
                    </div>
                    <div>
                    {elt.name}
                    </div>
                    <div>
                      =
                    </div>
                    <div id={`cal${elt.id}`}>

                    </div>
                    <div>
                    calries
                    </div>
                    <div className='reset'>
                      <button onClick={()=>reset(elt.id)}>Reset</button>
                    </div>
                  </div>
                  </div>
                  
              )
              }
              if(elt.name[0]===third[0] && elt.name[1]===third[1]){
                
                return(
                  
                    <div ref={firstref} className={`main${elt.id}`}>
                    <div className='set'>
                        <div className='padding'>
                        <img className='img' src={elt.img} alt='img' />
                        </div>
                        <div>
                            <div>{elt.name}</div>
                            <div>{elt.cal}</div>
                        </div>
                        <div className='input'>
                          <div >
                            <input id={`set${elt.id}`}  type='number' placeholder='type the quantity'  onChange={(e)=>right(e,elt.id)} />
                          </div>
                          <div>
                            <button onClick={()=>check(elt.id,elt.cal)} >+</button>
                          </div>
                        </div>
                    </div>
                    <div className='item'>
                      <div ref={secondref} className={`quantity${elt.id}`} id={`${elt.id}`}>
                        
                      </div>
                      <div>
                      {elt.name}
                      </div>
                      <div>
                        =
                      </div>
                      <div id={`cal${elt.id}`}>

                      </div>
                      <div>
                      calries
                      </div>
                      <div className='reset'>
                        <button onClick={()=>reset(elt.id)}>Reset</button>
                      </div>
                    </div>
                    </div>
                    
                )
              
            }
            })
        }
      </div>
    )
}


export default Hooks;