import React, { useState } from 'react'
import { FormattedMessage } from 'react-intl'
import { VerifiedPartner } from '../../interfaces/VerifiedPartner'
import PartnerCard from '../PartnerCard/PartnerCard'

import styles from './PartnersList.module.css'
import Filters from '../Filters/Filters'
interface Props {
  partners: VerifiedPartner[]
}

function PartnersList({ partners }: Props) {
  const [filteredPartners, setFilteredPartners] = useState(partners)

  return (
    <>
      <div className={styles.container}>
        <h3>
          <FormattedMessage id="verified_partners" />
        </h3>
        <Filters partners={partners} setFilteredPartners={setFilteredPartners} />
      </div>
      {filteredPartners.map((partner) => (
        <PartnerCard key={partner.id} partner={partner} />
      ))}
    </>
  )
}

export default PartnersList
