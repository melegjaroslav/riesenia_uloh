type SelectGender = {
  [key: string]: {
    [key: string]: string
  }
}

//object litteral instead of if/else and case
const selectGender: SelectGender = {
  "flight": {
    'F': 'FEMALE',
    'M': 'MALE'
  },
  "vacation": {
    'F': 'WOMAN',
    'M': 'MAN'
  }
};

export const getGenderByOrderType: any = (order: any): string => {
  return selectGender[order.type][order.gender] || ''
}