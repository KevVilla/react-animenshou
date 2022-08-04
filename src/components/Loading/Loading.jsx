import './Loading.css'
import gif from '../../assets/images/goku-loader.webp'

const Loading = () => {
  return (
    <div className='loader'>
      <img className='loader--image' src={gif} alt="" />
      <p className='loader--letter'>.</p>
      <p className='loader--letter'>.</p>
      <p className='loader--letter'>.</p>
      <p className='loader--letter'>L</p>
      <p className='loader--letter'>o</p>
      <p className='loader--letter'>a</p>
      <p className='loader--letter'>d</p>
      <p className='loader--letter'>i</p>
      <p className='loader--letter'>n</p>
      <p className='loader--letter'>g</p>
    </div>
  )
}

export default Loading