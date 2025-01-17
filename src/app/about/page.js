
import Nav from "@/componets/Nav/nav";
import styles from './page.module.css';
import Logo from "../../componets/logo/page";

export default function About() {
  return (
    <div>
      <Nav />
      <Logo/>
      <div className={styles.detail_containter}>
        <div>
          <h1>What we do?</h1>
          <div>
            <img
              src="https://www.stpaul.gov/sites/default/files/Media%20Root/Planning%20%26%20Economic%20Development/make-connections.png"
              alt="https://www.stpaul.gov/sites/default/files/Media%20Root/Planning%20%26%20Economic%20Development/make-connections.png"
            />
            <p>
              Give-A-Way connects philanthropy and community activism by providing streamlined communication services for food distribution programs housed in religious institutions to decrease food insecurity within New York City’s underserved communities.
            </p>
          </div>
        </div>
        <div>
          <h1>Why we do this?</h1>
          <div>
            <p>
            Rising prices on food and other necessities due to inflation have left underrepresented low-income people of color unable to buy food for their families. Supply chains for food distribution faced disruptions due to COVID-19 and increased consumer demand for food drastically.
            </p>
            <img
              src="https://alearningbeeacademy.org/wp-content/uploads/2020/05/ALB-Pics18.jpg"
              alt="https://alearningbeeacademy.org/wp-content/uploads/2020/05/ALB-Pics18.jpg"
            />
          </div>
        </div>
        <div>
            <h1>Our Goal</h1>
            <div>
              <img
                src="http://files.cluster2.hgsitebuilder.com/hostgator49813/image/helpinghandslicensed2.jpg"
                alt="http://files.cluster2.hgsitebuilder.com/hostgator49813/image/helpinghandslicensed2.jpg"
              />
              <p>
              We aim to serve places of worship with food distribution programs in New York City Communities. through our application by providing a platform for NYC businesses interested in food insecurity philanthropic initiatives.
              </p>
            </div>
          </div>
      </div>
    </div>
  );
}