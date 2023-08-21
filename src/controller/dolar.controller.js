import DataModel from '../model/dolar.model.js';


//? Obtiene el tipo de cambio 
export const getDollar = async (req,res) =>{
try {
   await DataModel.find({}, { _id: 0, dolar: 1 })
   .then(data =>{
    res.json({data})
   })
  
} catch (error) {
    console.log(error)
    res.json({ isOk: false, msj: "Error obtener el valor del dolar" });
}
}

//? Crea el tipo de cambio en la base de datos 
export const createDollar = async (req, res) => {
  try {
    const { dolar } = req.body;
    
    // Crear una nueva instancia del modelo con los datos
    const dataDolar = new DataModel({
      dolar
    });

    // Guardar en la base de datos
    await dataDolar.save();

    res.json({ isOk: true, msj: "Se guardó correctamente" });
  } catch (error) {
    console.log(error);
    res.json({ isOk: false, msj: "Error al crear el precio del dolar" });
  }
};


//? Actualiza el tipo de cambio 
export const modifyDollar = async (req , res)=>{
    try {
        const id = req.params
        const { dolar } = req.body

       await DataModel.updateOne({ _id:id }, { $set: { dolar }})
       console.log('ACTUALIZADO 👨🏽‍💻')
       res.json({ isOk: true, msj: "Se actualizó correctamente"});

    } catch (error) {
        console.log(error);
    res.json({ isOk: false, msj: "Error al actualizar" });
    }
}