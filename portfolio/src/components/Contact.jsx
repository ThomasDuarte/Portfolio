import { useState } from "react";

export default function Contact() {
  const formInitailData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formData, setFormData] = useState(formInitailData);
  const [buttonText, setButtonText] = useState("Submit");
  const [isSubmitted, setIsSubmitted] = useState({});

  return (
    <section>
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-indigo-600 p-5 rounded shadow-lg mx-10">
          Contact
        </h1>
        <div className="p-5 rounded shadow-lg mx-10">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setButtonText("Submitting...");
              setTimeout(() => {
                setButtonText("Submit");
                setIsSubmitted(formData);
                setFormData(formInitailData);
              }, 2000);
            }}
          >
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="First Name"
                className="p-3 rounded shadow-lg"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
              />
              <input
                type="text"
                placeholder="Last Name"
                className="p-3 rounded shadow-lg"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
              />
              <input
                type="email"
                placeholder="Email"
                className="p-3 rounded shadow-lg"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <input
                type="tel"
                placeholder="Phone"
                className="p-3 rounded shadow-lg"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
              />
              <textarea
                placeholder="Message"
                className="p-3 rounded shadow-lg col-span-2"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
              <button
                type="submit"
                className="bg-indigo-600 text-white p-3 rounded shadow-lg col-span-2"
              >
                {buttonText}
              </button>
            </div>
          </form>
          {isSubmitted.firstName && (
            <div className="mt-5">
              <h1 className="text-2xl font-bold text-center text-indigo-600">
                Thank you {isSubmitted.firstName}, your message is submitted 👌!
              </h1>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
