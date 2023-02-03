import prisma from "../db"

// get one update
export const getOneUpdate = async (req,res) => {
    const update = await prisma.update.findUnique({
        where:{
            id: req.params.id
        }
    })

    res.json({data: update})
}
// Get all updates

export const getUpdates = async (req,res) => {
    const products = await prisma.product.findMany({
        where:{
            belongsTo: req.user.id
        },
        include:{
            updates: true
        }
    }) 
    const updates = products.reduce((allUpdates, product) =>{
        return [...allUpdates,...product.updates]
    },[])
    res.json({data: updates})
}

export const createUpdate = async (req,res) => {

}

export const updateUpdate = async (req,res) => {

}

export const deleteUpdate = async (req,res) => {

}