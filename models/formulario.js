import mongoose from 'mongoose';

const FormularioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  // apellido: { type: String, required: true },
  correo: { type: String, required: true, unique: true },
  // compañia: { type: String, required: false },
  telefono: { type: String, required: false },
  descripcion: { type: String, required: true },
});

export default mongoose.models.Formulario || mongoose.model('Formulario', FormularioSchema);