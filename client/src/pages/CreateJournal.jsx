// import React from "react";
// import { Form, redirect, useNavigation } from "react-router-dom";
// import { toast } from "react-toastify";
// import customFetch from "../utils/customFetch";
// import "./CreateJournal.css";

// export const action = async ({ request }) => {
//   const formData = await request.formData();
//   try {
//     const response = await customFetch.post("/journal", formData);
//     toast.success("Journal created");
//     return redirect("/my-journals");
//   } catch (error) {
//     toast.error(error?.response?.data?.msg);
//     return error;
//   }
// };

// const CreateJournal = () => {
//   const navigation = useNavigation();
//   const isSubmitting = navigation.state === "submitting";
//   return (
//     <div className="create-journal-container">
//       <h1>Create Journal</h1>
//       <div className="form-container">
//         <Form encType="multipart/form-data" method="post">
//           <div className="form-content">
//             <input type="text" placeholder="Title" name="title" required />
//             <input
//               type="text"
//               placeholder="Location"
//               name="location"
//               required
//             />
//             <input type="date" name="date" required />
//             <div>
//               <input
//                 type="file"
//                 accept="image/*"
//                 className="fileInput"
//                 id="file"
//                 name="image"
//                 required
//               />
//             </div>

//             <textarea
//               name="description"
//               id="description"
//               placeholder="Write your thoughts"
//               className="description"
//               required
//             />
//           </div>

//           <button type="submit" className="submit-btn" disabled={isSubmitting}>
//             {isSubmitting ? "Submitting" : "Submit"}
//           </button>
//         </Form>
//       </div>
//     </div>
//   );
// };

// export default CreateJournal;

import React, { useState } from "react";
import { Form, redirect, useNavigation } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
import "./CreateJournal.css";

export const action = async ({ request }) => {
  const formData = await request.formData();
  try {
    const response = await customFetch.post("/journal", formData);
    toast.success("Journal created");
    return redirect("/my-journals");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const CreateJournal = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true);
  };

  return (
    <div className="create-journal-container">
      {isLoading && (
        <div className="loading-overlay">
          <div className="spinner"></div>
          <p>Submitting your journal...</p>
        </div>
      )}
      <h1>Create Journal</h1>
      <div className="form-container">
        <Form
          encType="multipart/form-data"
          method="post"
          onSubmit={handleSubmit}
        >
          <div className="form-content">
            <input type="text" placeholder="Title" name="title" required />
            <input
              type="text"
              placeholder="Location"
              name="location"
              required
            />
            <input type="date" name="date" required />
            <div>
              <input
                type="file"
                accept="image/*"
                className="fileInput"
                id="file"
                name="image"
                required
              />
            </div>

            <textarea
              name="description"
              id="description"
              placeholder="Write your thoughts"
              className="description"
              required
            />
          </div>

          <button type="submit" className="submit-btn" disabled={isSubmitting}>
            {isSubmitting ? "Submitting" : "Submit"}
          </button>
        </Form>
      </div>
    </div>
  );
};

export default CreateJournal;
