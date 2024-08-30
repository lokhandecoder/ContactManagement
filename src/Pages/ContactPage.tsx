import React, { useState } from "react";
import NoContactFound from "../Components/NoContactFound";
import CreateContactForm from "../Components/CreateContactForm";
import Card from "../Components/Card";
import { toast } from "react-toastify";
import { Typography } from "@mui/material";

interface Contact {
  firstName: string;
  lastName: string;
  status: "active" | "inactive";
}

function ContactPage() {
  const [data, setData] = useState<Contact[]>([]);
  const [createContact, setCreateContact] = useState(false);
  const [editingContact, setEditingContact] = useState<
    (Contact & { index?: number }) | null
  >(null);

  const closeContact = () => {
    setCreateContact(false);
    setEditingContact(null);
  };

  const handleEdit = (index: number) => {
    const selectedContact = data[index];
    if (selectedContact) {
      setEditingContact({ ...(selectedContact as Contact), index });
      setCreateContact(true);
    }
  };

  const handleDelete = (index: number) => {
    setData(data.filter((_, i) => i !== index));
    toast.error("Contact Deleted Successfully", {
      position: "top-right",
      autoClose: 3000,
    });
  };

  return (
    <div className="p-1 sm:p-2">
      <Typography variant="h5" >Contact Page</Typography>
      {createContact ? (
        <CreateContactForm
          closeContact={closeContact}
          data={data}
          setData={setData}
          editingContact={editingContact}
        />
      ) : (
        <>
          <div className="mb-4 flex justify-center">
            <button
              className="bg-green-500 text-white font-bold py-2 px-4 rounded hover:bg-green-700"
              onClick={() => setCreateContact(true)}
            >
              Create Contact
            </button>
          </div>
          <div>
            {data.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {data.map((item, key) => (
                  <Card
                    formState={item}
                    onEdit={() => handleEdit(key)}
                    onDelete={() => handleDelete(key)}
                    key={key}
                  />
                ))}
              </div>
            ) : (
              <NoContactFound />
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default ContactPage;
