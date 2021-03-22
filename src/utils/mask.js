function maskCitizenId(value) {
  value = value.replace(/\D/g, '');
  // value = value.replace(/(\d)(\d{2})$/, '$1,$2');
  // value = value.replace(/(?=(\d{3})+(\D))\B/g, '-');
  return value;
}

function maskPhone(value) {
  value = value.replace(/\D/g, '');
  // (11)1111-1111
  // value = value.replace(/^(\d{5})(\d)/, '$1-$2');
  return value;
}

export {maskCitizenId, maskPhone};
