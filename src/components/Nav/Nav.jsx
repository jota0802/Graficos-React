import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <header className='bg-blue-800 text-white p-6'>
        <Link to="/"> Home</Link>
        <Link to="/grafico"> Gráfico</Link>
    </header>
  )
}

export default Nav