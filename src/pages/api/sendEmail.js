import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    const emailBody = `
      Nome: ${name}
      Email: ${email}
      Mensagem: ${message}
    `;

    try {
      const response = await axios.post(
        "https://api.mailersend.com/v1/email",
        {
          to: [
            {
              email: "gwtovitorpw@gmail.com", // E-mail de destino fixo
            },
          ],
          subject: "Nova mensagem de contato",
          text: emailBody,
        },
        {
          headers: {
            Authorization: `Bearer ${process.env.MAILERSEND_API_KEY}`,
            "Content-Type": "application/json",
          },
        }
      );

      res.status(200).json({ message: "E-mail enviado com sucesso!" });
    } catch (error) {
      console.error("Erro ao enviar o e-mail:", error.response?.data || error.message);
      res.status(500).json({ error: "Erro ao enviar o e-mail." });
    }
  } else {
    res.status(405).json({ error: "Método não permitido." });
  }
}