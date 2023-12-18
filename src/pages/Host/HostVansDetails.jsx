import React, { useEffect, useState } from 'react'
import { useParams, Link, Outlet, useLoaderData } from 'react-router-dom';
import HostVanNaviagtion from '../../components/HostVanNaviagtion';
import { getHostVans } from '../../api';
import { requireAuth } from '../../utils';

export async function loader ({params}) {
    await requireAuth()
    return getHostVans(params.id)
}

const HostVansDetails = () => {
    const van = useLoaderData();

    return (
        <section>
            <Link
                to=".."
                relative='path'
                className="back-button"
            >&larr; <span>Back to all vans</span></Link>
            <div className="host-van-detail-layout-container">
                <div className="host-van-detail">
                    <img src={van.imageUrl} />
                    <div className="host-van-detail-info-text">
                        <i
                            className={`van-type van-type-${van.type}`}
                        >
                            {van.type}
                        </i>
                        <h3>{van.name}</h3>
                        <h4>${van.price}/day</h4>
                    </div>
                </div>
                <HostVanNaviagtion />
                <Outlet context={{van}}/>
            </div>
        </section>
    )
}

export default HostVansDetails
