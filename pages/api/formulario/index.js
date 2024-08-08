import { mongooseConnect } from '../../../libs/mongodb';
import Formulario from '../../../models/formulario';

export default async function handler(req, res) {
  await mongooseConnect();

  if (req.method === 'POST') {
    try {
      const { firstName, lastName, email, company, phone, message } = req.body;

      const nuevoFormulario = new Formulario({ 
        nombre: firstName, 
        apellido: lastName, 
        correo: email, 
        compañia: company, 
        telefono: phone, 
        descripcion: message 
      });

      await nuevoFormulario.save();

      res.status(200).json({ message: 'Formulario enviado con éxito' });
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      res.status(500).json({ message: 'Error al enviar el formulario' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}