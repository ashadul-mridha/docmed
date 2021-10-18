import React from 'react';
import Doctore from '../Doctore/Doctore';

const Doctores = () => {
    const doctores = [
        {
            img : 'https://i.ibb.co/YB5CQ59/x3-png-pagespeed-ic-Shb-XP-lpv-J.webp',
            name: 'Ashadul Mridha',
            specilist : 'Allergists'
        },
        {
            img : 'https://i.ibb.co/qJMN6yw/x4-png-pagespeed-ic-qk-GIu-Ox-Ly-X.webp',
            name: 'Sani Molla',
            specilist : 'Cardiologists'
        },
        {
            img : 'https://i.ibb.co/FBH6PyG/x1-png-pagespeed-ic-2-Ezn-ENOFkd.webp',
            name: 'Sourav Biswas',
            specilist : 'Gastroenterologists'
        },
        {
            img : 'https://i.ibb.co/tB3B4Kw/x2-png-pagespeed-ic-IG-j-B4-LJx-U.webp',
            name: 'Tazbin Ahad',
            specilist : 'Ophthalmologists'
        }
    ]
    return (
        <div className="container my-2">
            <div className="row">
                <div className="col-12">
                    <h1>Expert Doctors</h1>
                </div>
            </div>
            <div className="row g-5 mt-3">
                {
                    doctores.map(doctore => <Doctore data={doctore} key={doctore.name}></Doctore> )
                }
            </div>
        </div>
    );
};

export default Doctores;