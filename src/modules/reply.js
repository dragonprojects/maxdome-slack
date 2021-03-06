module.exports = ({ res }) => {
  return {
    link: (url, label) => {
      if (label) {
        return `<${url}|${label}>`;
      }
      return url;
    },
    send: text => {
      if (Array.isArray(text)) {
        text = text.join('\n');
      }
      res.send({ response_type: 'in_channel', text });
    }
  };
};
