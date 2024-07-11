import {pay} from "../resource/resource";
import styles from "./Paywall.module.scss";

const Paywall = () => {

    return (
        <>
            <div className={styles.paywall}>
                <img src={pay} alt="Paywall" />
                <div className={styles.inner_info}>
                    <p>‍🔥 Unlimited Rizz</p>
                    <p>🤝 Trusted by Millions</p>
                    <p>❤️ Coach Recommended</p>
                    <p>🍯 Proven to Get Dates</p>
                    <p>📈 x10 More Responses</p>
                    <p>😈 x8 More Dates</p>
                </div>

                <div className="paywall_elevate">
                    <div>Rizz God</div>
                    <h2>Elevate Your Game</h2>
                    <button>Unlock Free Trial</button>
                    <p>risk-free trial then $8.67/week</p>
                </div>
            </div>
        </>
    )
}

export default Paywall;