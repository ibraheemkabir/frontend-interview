import React from "react";
import styles from "./SingleApplication.module.css";

const SingleApplication = ({ application }) => {
  return (
    <div className={styles.SingleApplication} data-testid="application">
      <div className={styles.cell}>
        <sub>Company</sub>
        {application.company}
      </div>
      <div className={styles.cell}>
        <sub>Name</sub>
        {application.first_name} {application.last_name}
      </div>
      <div className={styles.cell}>
        <sub>Email</sub>
        <p className={styles.email}>{application.email}</p>
      </div>
      <div className={`${styles.cell} ${styles.loan_info}`}>
        <sub>Loan Amount</sub>
        £{application.loan_amount}
      </div>
      <div className={`${styles.cell} ${styles.loan_info}`}>
        <sub>Application Date</sub>
        {application.date_created && new Date(application.date_created)?.toISOString()?.replace(/T.*/,'')}
      </div>
      <div className={`${styles.cell} ${styles.loan_info}`}>
        <sub>Expiry date</sub>
        {application.date_created && new Date(application.expiry_date)?.toISOString()?.replace(/T.*/,'')}
      </div>
    </div>
  );
};

export default SingleApplication;
