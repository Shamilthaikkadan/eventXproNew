import React from 'react'
import './Home.css'
import events from '../../assets/svg/icons/Events.svg'
import EButtons from '../../components/Buttons/EButtons'
import plus from '../../assets/svg/icons/Plus.svg'
export default function Home() {
    return (
        <div className='create-container'>
            <img className='create-event-img' src={events} alt="" />
            <h1>Create New Event</h1>
            <article>
                There are many variations of passages of Lorem Ipsum available, but the majority <br /> have suffered alteration in some form, by injected humour, or randomised words <br /> which don't look even slightly believable. If you are going to use a passage of <br />Lorem Ipsum,
            </article>
            <EButtons name='Create Event' icon={plus}/>
        </div>
    )
}
