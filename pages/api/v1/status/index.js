function status(request, response) {
  response.status(200).json({
    chave: "receba",
  });
}

export default status;
