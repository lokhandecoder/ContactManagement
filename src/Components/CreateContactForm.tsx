import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";

interface CreateContactFormProps {
  closeContact: () => void;
  data: any;
  setData: any;
  editingContact?: any;
}

interface FormState {
  firstName: string;
  lastName: string;
  status: "active" | "inactive";
}

const CreateContactForm: React.FC<CreateContactFormProps> = ({
  closeContact,
  data,
  setData,
  editingContact,
}) => {
  const [formState, setFormState] = useState<FormState>({
    firstName: "",
    lastName: "",
    status: "active",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
  });

  useEffect(() => {
    if (editingContact) {
      setFormState(editingContact);
    }
  }, [editingContact]);

  const validate = () => {
    const newErrors = { firstName: "", lastName: "" };
    let isValid = true;

    if (!formState.firstName.trim()) {
      newErrors.firstName = "First name is required";
      isValid = false;
    }

    if (!formState.lastName.trim()) {
      newErrors.lastName = "Last name is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState({
      ...formState,
      [name]: value,
    });
    setErrors({ ...errors, [name]: "" }); // Clear error when user starts typing
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      if (editingContact !== null) {
        const updatedData = [...data];
        updatedData[editingContact.index] = formState;
        setData(updatedData);
        toast.info("Contact Updated Successfully!", {
          position: "top-right",
          autoClose: 3000,
        });
      } else {
        setData([...data, formState]);
        toast.success("Contact Added Successfully!", {
          position: "top-right",
          autoClose: 3000,
        });
      }
      closeContact();
    }
  };

  return (
    <div className="p-4 flex justify-center">
      <form onSubmit={handleSubmit} className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
            First Name
          </label>
          <input
            id="firstName"
            name="firstName"
            type="text"
            value={formState.firstName}
            onChange={handleChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.firstName ? 'border-red-500' : ''}`}
          />
          {errors.firstName && <p className="text-red-500 text-xs italic">{errors.firstName}</p>}
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
            Last Name
          </label>
          <input
            id="lastName"
            name="lastName"
            type="text"
            value={formState.lastName}
            onChange={handleChange}
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${errors.lastName ? 'border-red-500' : ''}`}
          />
          {errors.lastName && <p className="text-red-500 text-xs italic">{errors.lastName}</p>}
        </div>

        <div className="mb-4">
          <span className="block text-gray-700 text-sm font-bold mb-2">Status</span>
          <label className="inline-flex items-center mr-4">
            <input
              type="radio"
              name="status"
              value="active"
              checked={formState.status === "active"}
              onChange={handleChange}
              className="form-radio text-indigo-600"
            />
            <span className="ml-2">Active</span>
          </label>
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="status"
              value="inactive"
              checked={formState.status === "inactive"}
              onChange={handleChange}
              className="form-radio text-indigo-600"
            />
            <span className="ml-2">Inactive</span>
          </label>
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            onClick={closeContact}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
          >
            Close
          </button>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            {editingContact !== null ? "Update" : "Add"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateContactForm;
