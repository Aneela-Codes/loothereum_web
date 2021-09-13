import React from 'react'
import Accordian from './Accordian'
import Footer from './Footer'
import Timer from './Timer'

const Timeline = () => {
    return (
        <div className="timeline ">
            <div className="container text-center ">
                <h1>Timeline</h1>
                <div className="row line_row">
                    <div className="line"></div>

                    <div className="col-lg-2">
                        <div className="card">
                            <div className="icon">
                                <i className="fas fa-rocket"></i>

                            </div>
                            <div className="card-body">
                                <h4>Launch</h4>
                                <p>TBD | Open for Minting</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="card">
                            <div className="icon">
                                <i className="fas fa-money-bill-alt"></i>

                            </div>
                            <div className="card-body">
                                <h4>Buy</h4>
                                <p>Buying Period for Loothereum NFT's</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="card">
                            <div className="icon">
                                <i className="fas fa-handshake"></i>

                            </div>
                            <div className="card-body">
                                <h4>Trade</h4>
                                <p>Buying and selling period before rewards drawing.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="card">
                            <div className="icon">
                                <i className="fas fa-ticket-alt"></i>

                            </div>
                            <div className="card-body">
                                <h4>Reward</h4>
                                <p>As Milestones are met, rewards will be unlocked.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-2">
                        <div className="card">
                            <div className="icon">
                                <i className="fas fa-hand-holding-usd"></i>

                            </div>
                            <div className="card-body">
                                <h4>Recieve</h4>
                                <p>Winners will be drawn & Rewards will be distributed to winning wallets.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Timer/>
            <Accordian/>
        </div>
    )
}

export default Timeline
