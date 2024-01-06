import { Fragment, useState } from "react"
import PropTypes from 'prop-types'
import { RiArrowDownSLine, RiArrowUpSLine } from "@remixicon/react";

export default function Accordion({title, content}) {
  const [isActive, setIsActive] = useState(false);

  return (
    <Fragment>
      <div className="accordion w-full">
        <div className="accordion-item">
          <div className='accordion-title font-basier-circle flex justify-between text-base leading-[20.80px] font-bold mb-4'
            onClick={() => setIsActive(!isActive)}>
            <h2>{title}</h2>
            <div>
              {isActive ? <RiArrowUpSLine size={24}/> : <RiArrowDownSLine size={24}/>}
            </div>
          </div>
          {isActive && <div className="accordion-content mb-6">{content}</div>}
        </div>
      </div>
    </Fragment>
  );
}

Accordion.propTypes = {
  title: PropTypes.string,
  content: PropTypes.object
};