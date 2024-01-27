export const mockMessage = {
  from: "3342079227",
  text: "This is a message from your client about a loan",
  threadId: "123456789",
};


export const formatPhoneNumber = (phoneNumberString) => {
  var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
  }
  console.error('invalid phone')
  return '';
}