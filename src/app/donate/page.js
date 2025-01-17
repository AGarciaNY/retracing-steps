import Logo from "@/componets/logo/page";
import Nav from "@/componets/Nav/nav";
import styles from './page.module.css'
import DonationPanel from './donation-panel'



export default function Donate() {
  const churchesDatabase = [
    {
      name: "asasassdasdasdasd",
      img: "https://placecats.com/250/100"
    },
    {
      name: "asasassdasdasdasd",
      img: "https://placecats.com/250/100"
    },
    {
      name: "asasassdasdasdasd",
      img: "https://placecats.com/250/100"
    },
    {
      name: "asasassdasdasdasd",
      img: "https://placecats.com/250/100"
    },
    {
      name: "asasassdasdasdasd",
      img: "https://placecats.com/250/100"
    },
    {
      name: "asasassdasdasdasd",
      img: "https://placecats.com/250/100"
    },
  ]
  const churches = churchesDatabase.map((churchdata, i) => {
    return (<DonationPanel churchdata={churchdata} key={`church${i}`} i={i}/>
    )
  })
  return (
    <>
      <div className={styles.center}>
        <Logo />
      </div>
      <Nav />

      <div className={styles.main_content}>
        <h1>donate here</h1>
        <div className={styles.places_to_donate}>
          {churches}
        </div>
      </div>
    </>
  );
}