import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [activeProductIndex, setActiveProductIndex] = useState(0);
  const [products , setProducts] = useState([])
  const [percentage, setPercentage] = useState(0)

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
    setPercentage((products[index]?.achieved/products[index]?.target)*100)

  }
  
  return (
    <div className="main" style={{height: '100vh', display:'flex', width:'100vw'}}>
      <div className="App" style={{position:'relative', flexDirection:'column', overflowY:'scroll', width:'80%'}}>
        {
          products?.map((product, key) => {
            return <div key={key} className={`card testGradiants${key%3} flexVertical`}  onClick={()=> {setActiveProductIndex(key); setFromTarget(product?.target); setFormAchieved(product?.achieved);}}>
                    <h2 className={'center'}>{product.name}</h2>
                    <div style={{ height: percentage}} className={`transition`}></div>
                    <p>{product.target ? product.target : '--'}/{product.achieved ? product.achieved : '--'}</p>
                  </div>
          })
        }
      </div>

      {products&&
      <div style={{display:'flex', justifyContent:'center', alignItems:'center', flexDirection:"column"}}>
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
                getPercentage(activeProductIndex)
              }}/>
            </div>
      </div>
      
      }
    </div>
  );
}

export default App;
