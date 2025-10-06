import { useForm } from "react-hook-form";

function ContactForm() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md mx-auto">
      <input {...register("name")} placeholder="Name" className="w-full p-2 border rounded" />
      <input {...register("email")} placeholder="Email" className="w-full p-2 border rounded" />
      <textarea {...register("message")} placeholder="Your message" className="w-full p-2 border rounded" />
      <button type="submit" className="bg-indigo-600 text-white px-4 py-2 rounded">Send</button>
    </form>
  );
}
export default ContactForm;
