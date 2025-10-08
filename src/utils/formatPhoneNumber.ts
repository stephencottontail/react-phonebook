export function formatPhoneNumber(telephone: string): string {
  const regexp: RegExp = new RegExp(/\D/, 'g')
  const cleaned: string = telephone.replace(regexp, '')

  if (cleaned == '') {
    return cleaned
  }  else {
    return `(${cleaned.substring(0, 3)}) ${cleaned.substring(3, 6)}-${cleaned.substring(6)}`
  }
}
