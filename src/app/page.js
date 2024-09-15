"use client"
import dynamic from "next/dynamic"
import Image from "next/image"
import styles from "./page.module.css"
import { useState } from "react"
import {
  Button,
 } from "@mui/material"
import AppetizersModal from "../../components/MenuModals/AppetizersModal"
import DessertsModal from "../../components/MenuModals/DessertsModal"
import DrinksModal from "../../components/MenuModals/DrinksModal"
import SidesModal from "../../components/MenuModals/SidesModal"

const Countdown = dynamic(() => import("../../components/Countdown"), {
  ssr: false,
})



export default function Home() {
  const targetDate = '2024-11-28T00:00:00'
  const [shouldShowAppModal, setShouldShowAppModal] = useState(false)
  const [shouldShowDesModal, setShouldShowDesModal] = useState(false)
  const [shouldShowDrinksModal, setShouldShowDrinksModal] = useState(false)
  const [shouldShowSidesModal, setShouldShowSidesModal] = useState(false)

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
        <Countdown targetDate={targetDate} />
        'til Thanksgiving!
        </p>
        <div>
          <a
            href="https://github.com/argounova"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/argounova-logo.png"
              alt="Argounova Logo"
              width={200}
              height={40}
              priority
            />
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/turkeyjs-logo-black-outerglow.png"
          alt="Turkey.js Logo"
          width={360}
          height={74}
          priority
        />
        <p style={{ textAlign: 'center', zIndex: '10' }}>
          The most delicious framework for Thanksgiving.  Check out the docs below for details.  Note that there will be two turkeys this year, one traditionally roasted and the other smoked.
        </p>
      </div>

      <div className={styles.grid}>
        <Button color="inherit" onClick={() => setShouldShowAppModal(!shouldShowAppModal)}>
          <h2>
            Apps <span>-&gt;</span>
          </h2>
        </Button>
        <p>Find in-depth information about finger foods and lil smokies.</p>
        <AppetizersModal 
          shouldShowAppModal={shouldShowAppModal} 
          onRequestClose={() => {setShouldShowAppModal(!shouldShowAppModal)}}
        />

        <Button color="inherit" onClick={() => setShouldShowSidesModal(!shouldShowSidesModal)} >
          <h2>
            Sides <span>-&gt;</span>
          </h2>
        </Button>
        <p>Learn about Turkey.js and its interactive side dishes!</p>
        <SidesModal 
          shouldShowSidesModal={shouldShowSidesModal} 
          onRequestClose={() => {setShouldShowSidesModal(!shouldShowSidesModal)}}
        />

        <Button color="inherit" onClick={() => setShouldShowDesModal(!shouldShowDesModal)} >
          <h2>
            Desserts <span>-&gt;</span>
          </h2>
        </Button>
        <p>Explore the sweet side of Turkey.js.</p>
        <DessertsModal
          shouldShowDesModal={shouldShowDesModal} 
          onRequestClose={() => {setShouldShowDesModal(!shouldShowDesModal)}}
        />
        
        <Button color="inherit" onClick={() => setShouldShowDrinksModal(!shouldShowDrinksModal)} >
          <h2>
            Drinks <span>-&gt;</span>
          </h2>
        </Button>
        <p>Instantly deploy your Turkey.js attitude with a liquid refresher.</p>
        <DrinksModal
          shouldShowDrinksModal={shouldShowDrinksModal} 
          onRequestClose={() => {setShouldShowDrinksModal(!shouldShowDrinksModal)}}
        />
      </div>
    </main>
  )
}
