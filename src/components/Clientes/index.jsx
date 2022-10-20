import { LOGOS } from '../../utils/logos';
import './styles.css'

export function Clientes() {
  return (
    <section className='clientes'>
      <h2 className='title-section'>Clientes</h2>
      <div className='logos'>
        {LOGOS.map((item, index) => (
          <div key={index} className="logo-cliente">
            <img src={item.img} alt={item.alt} key={index}/>
          </div>
        ))}
      </div>
    </section>
  );
}