import React from 'react';

import runningManLogo from '../images/icons/runningManLogo.svg';
import toughestImage from './toughest.svg';
import malmoloppetImage from './malmoloppet.svg';
import midnattsloppetImage from './midnattsloppet.svg';
import varruset from './varruset.svg';
import copenhagenMarathon from './copenhagenMarathon.svg';

import { PageHeader } from '../Common/PageHeader/PageHeader';
import { Button } from '../Common/Button/Button';

import './Competitions.css';

export const Competitions = () => {
	return (
    <div>
      <PageHeader
        heading="Competitions"
        description="Here you can see which competitions are running and races to sign up for"
      />

			<div className='columns'>
				<div className="left-column">
					<div className='column-header'>
						<span>
							<img src={runningManLogo} alt="running-icon" />
							Internal competitions 
						</span>
						<Button buttonStyle="secondary" title="+ New competition" />
					</div>

					<div className='card'>
						<p>Monthly step competition</p>
						<div className='card-column'>
							<span className='card-column-item'>You<p>44 542</p></span>
							<span className='card-column-item'>Product & Engineering<p>432 965</p></span>
							<span className='card-column-item'>Eletive<p>2 364 435</p></span>
            			</div>
            			<Button buttonStyle="primary" title="+ Add your steps" />
					</div>
				</div>
			
				<div>
					<div className='column-header'>
						<span>
							<img src={runningManLogo} alt="running-icon" />
							Races we sponsor
						</span>
					</div>

					<div className="right-column">
						<div className='card'>
							<p>Midnattsloppet</p>
							<img src={midnattsloppetImage} alt="midnight-race" />
              				<div className='button-container'>
								<Button buttonStyle="primary" title="Sign up" />
								<Button buttonStyle="inline" title="Read more" />
							</div>
						</div>

						<div className='card'>
							<p>Toughest</p>
							<img src={toughestImage} alt="toughest-race" />
							<div className='button-container'>
                				<Button buttonStyle="primary" title="Sign up" />
								<Button buttonStyle="inline" title="Read more" />
							</div>
						</div>

						<div className='card'>
							<p>Malmöloppet</p>
							<img src={malmoloppetImage} alt="malmo-race" />
							<div className='button-container'>
                				<Button buttonStyle="primary" title="Sign up" />
								<Button buttonStyle="inline" title="Read more" />
							</div>
						</div>

						<div className='card'>
							<p>Vårruset Malmö</p>
							<img src={varruset} alt="varruset-race" />
							<div className='button-container'>
                				<Button buttonStyle="primary" title="Sign up" />
								<Button buttonStyle="inline" title="Read more" />
							</div>
						</div>
						
						<div className='card'>
							<p>Köpenhamn marathon</p>
							<img src={copenhagenMarathon} alt="copenhagen-marathon" />
							<div className='button-container'>
                				<Button buttonStyle="primary" title="Sign up" />
								<Button buttonStyle="inline" title="Read more" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}