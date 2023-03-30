import styles from "./Footer.module.css"


function Footer(){

    return (<div className={styles.footer}>
        <p>"Copyright ©" <b>2018</b>"All rights reserved. Design:<a href="#" className={styles.template}>Template Mo</a></p>
    </div>)
}

export default Footer;