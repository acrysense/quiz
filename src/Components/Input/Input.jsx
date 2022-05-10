import React from "react";

function Input(props) {

  function setData(e) {
    let userData = props.userData;
    userData.data[props.userDataItem] = e.target.value;
    props.setUserData(userData);
  }

  function NormalizeValue(e) {
    e.target.value = e.target.value.replace(/[^.,\d]+/g, "").replace(",", ".").replace(/^([^\.]*\.)|\./g, '$1');
  }

  return (
    <input type="text" inputMode="decimal" className="input poll__input" placeholder={props.placeholder} onChange={NormalizeValue} onInput={setData} />
  )
}

export default Input;