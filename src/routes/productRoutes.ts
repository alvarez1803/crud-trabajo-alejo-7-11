import { Router } from "express";
import {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/productController";

const productRoutes = Router();

/**
 * @swagger
 * tags:
 *   name: Mascotas
 *   description: CRUD relacionado con perritos
 */

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Obtener a todos los perros
 *     tags: [Perros]
 *     responses:
 *       200:
 *         description: Lista de perros
 */
productRoutes.get("/", getAllProducts);

/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *     summary: Obtener un perro por su  ID
 *     tags: [Perros]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del perro
 *     responses:
 *       200:
 *         description: Detalles del perro
 *       404:
 *         description: Perro no encontrado
 */
productRoutes.get("/:id", getProductById);

/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: buscar un nuevo perro
 *     tags: [Perros]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - description
 *               - price
 *               -imgUrl
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               imgUrl:
 *                 type: string
 *     responses:
 *       201:
 *         description: Perro creado
 *       500:
 *         description: Error en el servidor
 */
productRoutes.post("/", createProduct);

/**
 * @swagger
 * /api/products/{id}:
 *   put:
 *     summary: Actualizar un perro existente
 *     tags: [Perros]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del perro
 *     requestBody:
 *       required: false
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *               price:
 *                 type: number
 *               imgUrl:
 *                 type: string
 * 
 *     responses:
 *       200:
 *         description: Perro actualizado
 *       404:
 *         description: Perro no encontrado
 *       500:
 *         description: Error en el servidor
 */
productRoutes.put("/:id", updateProduct);

/**
 * @swagger
 * /api/products/{id}:
 *   delete:
 *     summary: Eliminar un perro
 *     tags: [Perros]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID del perro
 *     responses:
 *       200:
 *         description: Perro eliminado
 *       404:
 *         description: Perro no encontrado
 *       500:
 *         description: Error en el servidor
 */
productRoutes.delete("/:id", deleteProduct);

export default productRoutes;