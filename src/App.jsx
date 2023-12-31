import { Navbar, Testimonials, CardDeal,
  Billing, Business, Button, Hero,
  Stats, CTA, Clients, FeedbackCard,
  Footer, GetStarted } from './components'
import styles from './styles';

const App = () => (
  <>
    <div className='bg-primary w-full overflow-hidden'>
      <div className={`${styles.paddingX}, ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar/>
        </div>
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary overflow-hidden ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing/>
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </>
    
);

export default App