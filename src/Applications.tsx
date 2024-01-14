import React, { useState } from "react";
import SingleApplication from "./SingleApplication";
import styles from "./Applications.module.css";
import { useGetApplications } from "./hooks/useGetApplications";
import { Button } from "./ui/Button/Button";

const Applications = () => {
  const [page, setPage] = useState(1)
  const { status, data } = useGetApplications(page)

  return (
    <>
      {
        <div className={styles.Applications}>
            {
              (data || [])?.map(
                (e, index) => <SingleApplication application={e} key={index} />
              )
            }
          </div>
      }
      {
        status === 'fetching' && <div className={styles.loadingContainer}> loading Applications... </div>
      }
      <div className={styles.loadMore}>
        <Button onClick={() => setPage(page + 1)}>Load More</Button>
      </div>
    </>
  );
};

export default Applications;
