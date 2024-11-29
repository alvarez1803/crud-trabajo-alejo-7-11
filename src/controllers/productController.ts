import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { dogs } from "../entities/dogs";

const productRepository = AppDataSource.getRepository(dogs);

// GET - Obtener Todos los perros disponibles
export const getAllProducts = async(red: Request, res: Response) => {
  try {
    const products = await productRepository.find();
    res.json(products);
  } catch(error) {
    res.status(500).json({ message: "Error al obtener al perro." });
  }
};

// GET by ID - Obtener Perrito  por su ID
export const getProductById = async(req: Request, res: Response) => {
  try {
    const product = await productRepository.findOneBy({
      id: parseInt(req.params.id),
    });

    if(product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Perrito no encontrado" });
    }
  } catch(error) {
    res.status(500).json({ message: "Error al obtener el perrito." });
  }
};

// POST - buscar nuevos perritos
export const createProduct = async(req: Request, res: Response) => {
  try {
    const { name, description, price, imgUrl } = req.body;
    const product = new dogs();
    product.name = name;
    product.description = description;
    product.price = price;
    product.imgUrl = imgUrl; 

    await productRepository.save(product);
    res.status(201).json(product);
  } catch(error) {
    res.status(500).json({ message: "Error al buscar al perro." });
  }
};

// PUT - Actualizar un Perrito existente
export const updateProduct = async(req: Request, res: Response) => {
  try {
    const { name, description, price, imgUrl } = req.body;
    const product = await productRepository.findOneBy({
      id: parseInt(req.params.id),
    });

    if(product) {
      product.name = name ?? product.name;
      product.description = description ?? product.description;
      product.price = price ?? product.price;
      product.imgUrl = imgUrl ?? product.imgUrl;

      await productRepository.save(product);
      res.json(product);
    } else {
      res.status(404).json({ message: "Perrito no encontrado" });
    }
  } catch(error) {
    res.status(500).json({ message: "Error al actualizar el perrito." });
  }
};

// DELETE - Borrar un Perro
export const deleteProduct = async(req: Request, res: Response) => {
  try {
    const product = await productRepository.findOneBy({
      id: parseInt(req.params.id),
    });

    if (product) {
      await productRepository.remove(product);
      res.json({ message: "Perro eliminado." });
    } else {
      res.status(404).json({ message: "Perro no encontrado." });
    }
  } catch(error) {
    res.status(500).json({ message: "Error al eliminar el perro." });
  }
};