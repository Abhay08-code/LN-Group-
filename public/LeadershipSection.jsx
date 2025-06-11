import { motion } from "framer-motion";

const leaders = [
  {
    name: "Er. J.N. Chouksey",
    title: "Chairman and Managing Trustee of LNCT Group",
    image: "src/Jai-Narain-Chouksey IMG.webp", // 👉 place image in public/images/
  },
 
  {
    name: "Mrs. POONAM Chouksey",
    title: "	Vice-Chairperson, LNCT Group,Bhopal",
    image: "src/POONAM CHOUKSEM IMG.jpeg",
  },
  {
    name: "Mr. Anupam Chouksey",
    title: "Secretary LNCT Group,Bhopal",
    image: "src/ANUPAM CHOUKSEY IMG.jpg",
  },
];

const LeadershipSection = () => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center mb-10 p-4 text-gray-900"
      >
        Our Leadership
      </motion.h2>

      {/* <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto"> */}
         <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        {leaders.map((leader, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            // className="bg-white dark:bg-gray-900 rounded-xl shadow-md p-6 text-center hover:scale-105 transition-transform"
           className="bg-white  rounded-xl shadow-md p-6 text-center hover:shadow-xl transition-all duration-300">
            <img
              src={leader.image}
              alt={leader.name}
              className="w-40 h-40 mx-auto mb-4 object-contain rounded-full border-2 border-gray-300  "
            />
            
            <h3 className="text-xl font-semibold !text-teal-700 ">{leader.name}</h3>
            <p className="text-m  text-gray-600">{leader.title}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LeadershipSection;
