import React, { useEffect, useState } from "react";
import AdPageTable from "../../components/Table/AdPageTable";

import Modal from "../../components/Modals/Modal";
import { useContext } from "react";
import { Context } from "../../context/context";
import useFetch from "../../hooks/useFetch";

const AdsPage = () => {
  const { data } = useFetch('/operator/profile');
  console.log(data)
  

  return (
    <div className="w-full pr-12 pt-11">
      <div className="flex justify-end button-section">
        
        <Modal />
      </div>
      <div className="mt-12 add-videos-section">

        {data.adsUnderOperator !== undefined && data.adsUnderOperator.map((itm)=>(
          <AdPageTable itm={itm}/>
        ))
}
      </div>
    </div>
  );
};

export default AdsPage;
