import React, {useState, useEffect} from "react";
import {ajax} from 'rxjs/ajax';
import Templates from "../templates";
import {getTokenIds, getMetaData} from "../../shared/web3Client";

export const Pages = () => {

  const [metaDatas, setMetaDatas] = useState<any[]>([]);
  const ids = getTokenIds();

  useEffect(() => {
    let arr:string[] = [];
    ids.map(async (id) => {
      const url = await getMetaData(id);
      ajax.getJSON(url).subscribe(
          res => {
          arr.push(res as any);
          setMetaDatas([...arr]);
        });
    })
  },[])

  return <Templates metaDatas={metaDatas} />;
}

export default Pages;
