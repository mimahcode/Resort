import React, { Component } from 'react';
import Title from './Title';
import {FaCocktail, FaHiking, FaShuttleVan, FaBeer} from "react-icons/fa";

export default class Services extends Component {
    state = {
        services: [
            {
                icon: <FaCocktail />,
                title: "free Mocktail",
                info: "At vero eos et accusamus et iusto odio dignissimos ducimus "
            },
            {
                icon: <FaHiking />,
                title: "endless hiking",
                info: "At vero eos et accusamus et iusto odio dignissimos ducimus "
            },
            {
                icon: <FaShuttleVan />,
                title: "Free Shuttle",
                info: "At vero eos et accusamus et iusto odio dignissimos ducimus "
            },
            {
                icon: <FaBeer />,
                title: "Best Soda",
                info: "At vero eos et accusamus et iusto odio dignissimos ducimus "
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map((item,index) => {
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
