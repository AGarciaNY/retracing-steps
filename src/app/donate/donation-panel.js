import styles from './page.module.css'

export default function DonationPanel({churchdata,i}){
    return (
        <div className={styles.church_to_donate}>
            <img src={churchdata.img} />
            <h1>{churchdata.name} {i}</h1>
        </div>
    )
}