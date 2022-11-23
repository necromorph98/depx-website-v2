import Link from "next/link";

export default function PricingTier( {tier}) {

    let pricing = ''
    if (tier.hasDiscount){
        pricing = <>
            <div className="price">
            <p className="pricingtable">${tier.discountPrice}</p>
            <div className="discount">
                <p>${tier.price}</p>
                <div className="vector vector-one">
                <img src="/images/pricing/Vector1.svg" alt="Vector" loading="lazy"/>
                </div>
            </div>
            <div className="shape top-0">
                <img src="/images/pricing/shape-two.png" alt="shape" loading="lazy"/>
            </div>
            </div>
        </>
    } else {
        pricing = <>
            <div className="price">
            <p><span>${tier.price}</span></p>
            <div className="shape">
                <img src="/images/pricing/shape-one.png" alt="shape" loading="lazy"/>
            </div>
            </div>
        </>
    }
	return (
        <div className="col-lg-4">
            <div className={`card pricing-item ${tier.isActive ? 'active' : ''}`}>
                <h5 className="card-title">{tier.tier}</h5>
                <p className="card-text">
                {tier.description}
                </p>
                {pricing}
                <div className="card-body">
                <ul className="list-unstyled">
                    
                    {tier.feature.map((feature, i) => (
                        <li key={i} className={feature.isActive? '': 'deactive'}>
                            <i className={`ph-check ${feature.isActive? '': 'deactive'}`}></i>
                            {feature.item}
                        </li>
                    ))}
                </ul>
                <div className="link">
                    { tier.btn &&
                        <Link href={tier.btn.link} className="btn btn-lg btn-white">
                            {tier.btn.text}
                        </Link>
                    }
                </div>
                </div>
            </div>
        </div>
	);
}