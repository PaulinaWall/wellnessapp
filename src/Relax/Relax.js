import React from 'react';

import './Relax.css';

import relaxingVideo from '../videos/RelaxingVideo.mov'

import { PageHeader } from '../Common/PageHeader/PageHeader';

export const Relax = () => {
    return (
        <div>
            <PageHeader
                heading="Take a moment"
                description="Take a break and allow yourself to breathe to relief stress. Breathe in when the circle grows, hold and breathe out when it shrinks"
            />

            <div className='video-wrapper'>
                <video width="80%" height="80%" autoPlay loop muted>
                    <source src={relaxingVideo} type="video/mp4"></source>
                </video>
            </div>
        </div>
    )
}