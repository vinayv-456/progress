import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [activeProductIndex, setActiveProductIndex] = useState(0);
  const [products , setProducts] = useState([])
  
  const [formTarget, setFromTarget] = useState('');
  const [formAchieved, setFormAchieved] = useState('');
  
  useEffect(()=>{
    const temp_products = [
      {
        name: 'abc',
        target: '',
        achieved: ''  
      },
      {
        name: 'def',
        target: '',
        achieved: ''  
      },
      {
        name: 'ghi',
        target: '',
        achieved: ''  
      },
      {
        name: 'jkl',
        target: '',
        achieved: ''  
      },
      {
        name: 'mno',
        target: '',
        achieved: ''  
      },
      {
        name: 'pqr',
        target: '',
        achieved: ''  
      },
      {
        name: 'stu',
        target: '',
        achieved: ''  
      },
      {
        name: 'vwx',
        target: '',
        achieved: ''  
      },
      {
        name: 'yza',
        target: '',
        achieved: ''  
      }
    ]
    setProducts(temp_products);
  }, [])
  
  const getPercentage = (index) => {
    return (products[index]?.achieved/products[index]?.target)*100
  }

  return (
    <div className="main" style={{height: '100vh', overflow:'hidden'}}>
      <div className="App" style={{overflowX: 'scroll', position:'relative'}}>
        {
          products?.map((product, key) => {
            return <div key={key} className={`card testGradiants${key%3} flexVertical`}  onClick={()=> {setActiveProductIndex(key); setFromTarget(product?.target); setFormAchieved(product?.achieved);}}>
                 {/* <div key={key} className={`card testGradiants${key%3} flexVertical`} style={{position:'absolute', height:'100px'}} >  */}
                  
                   
                  <h2 className={'center'}>{product.name}</h2>
                  <p>{product.target ? product.target : '--'}/{product.achieved ? product.achieved : '--'}</p>
                  </div>
                // </div>
          })
        }
      </div>

      {products&&
      <div style={{display:'flex', height:'100%'}}>
          <div style={{width:'50%', height:'100%', borderRight: '3px solid black'}}>
            <h2 style={{textAlign:'center', marginTop:'30px', marginBottom:'50px'}}>Enter details of {products[activeProductIndex]?.name}</h2>
            <div style={{justifyContent:'center', alignItems:'center', display:'flex', flexDirection:'column'}}>
              <label>
                Target:
                <input type="text" name="target" value={formTarget} onChange={(event)=> setFromTarget(event.target.value)}/>
              </label>
              <br/>
              <label>
                Achieved:
                <input type="text" name="achieved" value={formAchieved} onChange={(event)=> setFormAchieved(event.target.value)}/>
              </label>
              <br/>
              <input type="submit" value="submit" onClick={()=> {
                const temp_obj = {
                  name : products[activeProductIndex].name,
                  target : formTarget,
                  achieved: formAchieved
                }
                products.splice(activeProductIndex, 1, temp_obj)
                setProducts(products)
              }}/>
            </div>
          </div>
          <div style={{width: '50%', height:'100%', position:'relative'}}>
            <h2 style={{ zIndex:-1, position:'relative', left:0}}>progress</h2>
            <h2 style={{ zIndex:1, position:'absolute',  left:0, top:0, backgroundColor:'red', opacity:0.5}}>ks</h2>
          </div>
      </div>
      }
    </div>
  );
}

export default App;
