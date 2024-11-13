import React, { useEffect, useState } from "react";
import "./Contact.css";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const [form, setForm] = useState({
    from_name: "",
    from_email: "",
    department: "Sales Executive",
    no_of_leaves: "",
    message: "",
    from_date: "",
    to_date: "",
    branch: "Main Road",
  });
  const [isLoading, setIsLoading] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const serviceId = "service_9214e0l";
    const templateId = "template_5lwa9aw";
    const publicKey = "97eHwOuM-n7BShn2h";

    const templateParams = {
      from_name: form.from_name,
      from_email: form.from_email,
      message: form.message,
      department: form.department,
      no_of_leaves: form.no_of_leaves,
      from_date: form.from_date,
      to_date: form.to_date,
      branch: form.branch,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        if (response.text === "OK") {
          setForm({
            name: "",
            email: "",
            message: "",
            phone: "",
          });
          setTimeout(() => {
            setIsLoading(false);
            Swal.fire({
              title: "Success!",
              text: "Message sent successfully!",
              icon: "success",
            });
          }, 500);
        } else {
          console.log("some error occured");
        }
      })
      .catch((error) => {
        console.error("Error sending email:", error.message);
      })
      .finally(() => {
        setForm({
          from_name: "",
          from_email: "",
          department: "Sales Executive",
          no_of_leaves: "",
          message: "",
          from_date: "",
          to_date: "",
          branch: "Main Road",
        });
      });
  };
  useEffect(() => {
    console.log(form, "dsjhdhjds");
  }, [form]);
  return (
    <div>
      {isLoading && (
        <div class="fullscreen-loader">
          <div class="loader"></div>
        </div>
      )}

      <section className="contact">
        <form onSubmit={sendEmail}>
          {/* <button className='close'><i class='bx bx-x'></i></button> */}

          <h2>Horizon</h2>
          <div className="input-box">
            <label>Full Name</label>
            <input
              type="text"
              className="field"
              placeholder="Enter your name"
              name="from_name"
              required
              value={form.from_name}
              onChange={(e) =>
                setForm((prev) => {
                  return {
                    ...prev,
                    [e.target.name]: e.target.value,
                  };
                })
              }
            />
          </div>
          <div className="input-box">
            <label>Branch</label>
            <select
              className="country"
              onChange={(e) =>
                setForm((prev) => {
                  return {
                    ...prev,
                    [e.target.name]: e.target.value,
                  };
                })
              }
              value={form.branch}
              name="branch"
            >
              <option selected>Main Road</option>
              <option>Kokar Showroom</option>
              <option>Tupudan Showroom</option>
            </select>
          </div>
          <div className="input-box">
            <label>Designation</label>
            <select
              className="country"
              onChange={(e) =>
                setForm((prev) => {
                  return {
                    ...prev,
                    [e.target.name]: e.target.value,
                  };
                })
              }
              value={form.department}
              name="department"
            >
              <option selected>Sales Executive</option>
              <option>Billing Executive</option>
              <option>Accessories Executive</option>
              <option>CRE</option>
              <option>Receptionist</option>
              <option>PDI Incharge</option>
              <option>PDI Executive</option>
              <option>Marketing Executive</option>
              <option>Finance Executive</option>
              <option>Sales Manager</option>
              <option>CRM</option>
              <option>RM (Relationship Manager)</option>
              <option>Cashier</option>
              <option>Rider</option>
              <option>Housekeeping</option>
              <option>Office assistant</option>
              <option>Software Developers</option>
            </select>
          </div>

          <div className="input-box">
            <label>Email</label>
            <input
              type="email"
              className="field"
              placeholder="Enter your email"
              name="from_email"
              required
              value={form.from_email}
              onChange={(e) =>
                setForm((prev) => {
                  return {
                    ...prev,
                    [e.target.name]: e.target.value,
                  };
                })
              }
            />
          </div>
          <div className="input-box">
            <label>No. of Leaves Day</label>
            <input
              type="number"
              className="field"
              placeholder="Enter No. of Leave Required"
              name="no_of_leaves"
              required
              value={form.no_of_leaves}
              onChange={(e) =>
                setForm((prev) => {
                  return {
                    ...prev,
                    [e.target.name]: e.target.value,
                  };
                })
              }
            />
          </div>
          <div className="input-box">
            <label>From Date</label>
            <input
              type="date"
              className="field"
              name="from_date"
              required
              value={form.from_date}
              onChange={(e) =>
                setForm((prev) => {
                  return {
                    ...prev,
                    [e.target.name]: e.target.value,
                  };
                })
              }
            />
          </div>
          <div className="input-box">
            <label>To Date</label>
            <input
              name="to_date"
              className="field"
              type="date"
              placeholder="Enter your To Date"
              required
              value={form.to_date}
              onChange={(e) =>
                setForm((prev) => {
                  return {
                    ...prev,
                    [e.target.name]: e.target.value,
                  };
                })
              }
            />
          </div>
          <div className="input-box">
            <label>Message</label>
            <textarea
              name="message"
              className="field mess"
              type="text"
              placeholder="Enter your message"
              required
              value={form.message}
              onChange={(e) =>
                setForm((prev) => {
                  return {
                    ...prev,
                    [e.target.name]: e.target.value,
                  };
                })
              }
            />
          </div>
          <button type="submit" disabled={isLoading}>
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
};

export default Contact;
