import { z } from "zod";

export const UserFormValidation = z.object({
  name: z
    .string()
    .min(2, "El usuario debe contener minimo 2 caracteres.")
    .max(50, "El usuario debe contener mas de 50 caracteres."),
  email: z.string().email("El email que ingresaste es invalido"),
  phone: z
    .string()
    .refine(
      (phone) => /^\+\d{10,15}$/.test(phone),
      "Número de teléfono invalido"
    ),
});
