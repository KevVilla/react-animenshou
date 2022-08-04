import './TicketCard.css'
import { ticket } from '../../Helpers/Colors'
import { useEffect } from 'react'

const TicketCard = ({genre}) => {
  useEffect(()=>{
    console.log(ticket[`${genre}`]);
  },[genre])
  return (
    <p className='ticketCard' style={{backgroundColor:`${ticket[`${genre}`] ? ticket[`${genre}`] : ticket.default}`}}>{genre}</p>
  )
}

export default TicketCard