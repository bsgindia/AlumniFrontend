import React, { useState } from "react";

const Alumini = () => {
  const [name, setName] = useState("");
  const [membership, setMembership] = useState([]);
  const [receivedAwards, setReceivedAwards] = useState([
    { award: "", year: "" },
  ]);
  const [awards, setAwards] = useState([{ name: "", year: "" }]);
  const [educationalQualification, setEducationalQualification] = useState("");
  const [scoutingQualification, setScoutingQualification] = useState("");
  const [correspondenceAddress, setCorrespondenceAddress] = useState({
    home: "",
    street: "",
    addressLine1: "",
    addressLine2: "",
    landmark: "",
    pincode: "",
  });
  const [state, setState] = useState("");
  const [district, setDistrict] = useState("");
  const [permanentAddress, setPermanentAddress] = useState({
    home: "",
    street: "",
    addressLine1: "",
    addressLine2: "",
    landmark: "",
    pincode: "",
  });
  const [occupation, setOccupation] = useState("");
  const [aadharNumber, setAadharNumber] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [dob, setDob] = useState("");
  const [howCanHelp, setHowCanHelp] = useState("");
  const [scoutingFavoritePart, setScoutingFavoritePart] = useState("");
  const [receiveAwards, setReceiveAwards] = useState(false);
  const handleAwardChange = (index, field, value) => {
    const updatedAwards = [...awards];
    updatedAwards[index][field] = value;
    setAwards(updatedAwards);
  };

  const addAward = () => {
    setAwards([...awards, { name: "", year: "" }]);
  };

  const removeAward = (index) => {
    setAwards(awards.filter((_, i) => i !== index));
  };
  const awardOptions = ["Award 1", "Award 2", "Award 3", "Award 4"];
  const handleAwardChange1 = (index, event) => {
    const updatedAwards = [...receivedAwards];
    updatedAwards[index].award = event.target.value;
    setReceivedAwards(updatedAwards);
  };
  const handleYearChange1 = (index, event) => {
    const updatedAwards = [...receivedAwards];
    updatedAwards[index].year = event.target.value;
    setReceivedAwards(updatedAwards);
  };
  const handleAddAward1 = () => {
    setReceivedAwards([...receivedAwards, { award: "", year: "" }]);
  };
  const handleRemoveAward1 = (index) => {
    const updatedAwards = receivedAwards.filter((_, idx) => idx !== index);
    setReceivedAwards(updatedAwards);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      name,
      membership,
      receivedAwards,
      awards,
      educationalQualification,
      scoutingQualification,
      correspondenceAddress,
      state,
      district,
      permanentAddress,
      occupation,
      aadharNumber,
      email,
      phone,
      whatsapp,
      dob,
      howCanHelp,
    };
    console.log(data);
  };
  const handleCopyCorrespondenceToPermanent = (checked) => {
    if (checked) {
      setPermanentAddress(correspondenceAddress);
    } else {
      setPermanentAddress({
        home: "",
        street: "",
        addressLine1: "",
        addressLine2: "",
        landmark: "",
        pincode: "",
      });
    }
  };
  const handleAwardsChange = () => {
    setReceiveAwards(!receiveAwards);
  };
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
          Join Us as ..... BSG ALUMINI
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              Name of the Applicant<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-3"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-gray-700 mb-2">
                Email ID <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-3"
                placeholder="Enter your email"
                required
              />
            </div>
            <div className="grid grid-cols-1">
            <div>
              <label className="block font-semibold text-gray-700 mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-3"
                placeholder="Enter your phone number"
                required
              />
            </div>
          </div>
          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              WhatsApp Number<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-3"
              placeholder="Enter your WhatsApp number"
            />
          </div>
          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              Date of Birth <span className="text-red-500">*</span>
            </label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-3"
              required
            />
          </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-gray-700 mb-2">
                State<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-3"
                placeholder="Enter your state"
                required
              />
            </div>
            <div>
              <label className="block font-semibold text-gray-700 mb-2">
                District<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={district}
                onChange={(e) => setDistrict(e.target.value)}
                className="w-full border border-gray-300 rounded-md p-3"
                placeholder="Enter your district"
                required
              />
            </div>
          </div>
          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              Aadhar Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={aadharNumber}
              onChange={(e) => setAadharNumber(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-3"
              placeholder="Enter your Aadhar number"
              required
            />
          </div>
          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              You were a part of Bharat Scouts and Guides as{" "}
              <span className="text-red-500">*</span>
            </label>
            <div className="grid grid-cols-2 gap-2">
              {[
                "CUB",
                "BULBUL",
                "SCOUT",
                "GUIDE",
                "ROVER",
                "RANGER",
                "UNIT LEADER",
              ].map((role, index) => (
                <label
                  key={index}
                  className="flex items-center space-x-2 bg-gray-50 p-2 rounded-lg shadow-sm"
                >
                  <input
                    type="checkbox"
                    value={role}
                    checked={membership.includes(role)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setMembership([...membership, role]);
                      } else {
                        setMembership(membership.filter((r) => r !== role));
                      }
                    }}
                  />
                  <span>{role}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              Have you received any specific award?{" "}
              <span className="text-red-500">*</span>
            </label>
            <div className="space-y-4">
              {receivedAwards.map((receivedAward, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center space-x-3"
                >
                  <div className="flex-1">
                    <label className="block font-semibold text-gray-700 mb-2">
                      Award
                    </label>
                    <select
                      value={receivedAward.award}
                      onChange={(e) => handleAwardChange1(index, e)}
                      className="w-full border border-gray-300 rounded-md p-3"
                    >
                      <option value="">Select an award</option>
                      {awardOptions.map((award, idx) => (
                        <option key={idx} value={award}>
                          {award}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="flex-1">
                    <label className="block font-semibold text-gray-700 mb-2">
                      Year
                    </label>
                    <input
                      type="text"
                      value={receivedAward.year}
                      onChange={(e) => handleYearChange1(index, e)}
                      className="w-full border border-gray-300 rounded-md p-3"
                      placeholder="Enter year"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={() => handleRemoveAward1(index)}
                    className="bg-red-500 text-white px-3 py-1 rounded-md mt-8"
                  >
                    Remove
                  </button>
                </div>
              ))}

              <div className="mt-4">
                <button
                  type="button"
                  onClick={handleAddAward1}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                  + Another Award
                </button>
              </div>

              <div className="mt-4">
                <ul className=" pl-6">
                  {receivedAwards.map((award, index) => (
                    <li key={index}>
                      {award.award} {award.year}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              Any other Award apart from above?{" "}
              <span className="text-red-500">*</span>
            </label>
            {awards.map((award, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 mb-2 bg-gray-50 p-3 rounded-lg shadow-sm"
              >
                <input
                  type="text"
                  placeholder="Award Name"
                  value={award.name}
                  onChange={(e) =>
                    handleAwardChange(index, "name", e.target.value)
                  }
                  className="flex-1 border border-gray-300 rounded-md p-2"
                />
                <input
                  type="text"
                  placeholder="Year"
                  value={award.year}
                  onChange={(e) =>
                    handleAwardChange(index, "year", e.target.value)
                  }
                  className="w-20 border border-gray-300 rounded-md p-2"
                />
                <button
                  type="button"
                  onClick={() => removeAward(index)}
                  className="bg-red-500 text-white px-3 py-1 rounded-md"
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={addAward}
              className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2"
            >
              + Add More
            </button>
          </div>
          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              Educational Qualification <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={educationalQualification}
              onChange={(e) => setEducationalQualification(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-3"
              placeholder="Enter your qualification"
              required
            />
          </div>
          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              Scouting/Guiding Qualification{" "}
              <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={scoutingQualification}
              onChange={(e) => setScoutingQualification(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-3"
              placeholder="Enter your scouting qualification"
              required
            />
          </div>
          <div className="mt-4 ">
            <label className="block font-semibold text-gray-700 mb-2">
              Correspondence Address with Pin Code
            </label>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block font-semibold text-gray-700 mb-2">
                    House No.<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={correspondenceAddress.home}
                    onChange={(e) =>
                      setCorrespondenceAddress({
                        ...correspondenceAddress,
                        home: e.target.value,
                      })
                    }
                    className="w-full border border-gray-300 rounded-md p-3 mb-2"
                    placeholder="Enter home"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-2">
                    Street<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={correspondenceAddress.street}
                    onChange={(e) =>
                      setCorrespondenceAddress({
                        ...correspondenceAddress,
                        street: e.target.value,
                      })
                    }
                    className="w-full border border-gray-300 rounded-md p-3 mb-2"
                    placeholder="Enter street"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block font-semibold text-gray-700 mb-2">
                    Address Line 1<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={correspondenceAddress.addressLine1}
                    onChange={(e) =>
                      setCorrespondenceAddress({
                        ...correspondenceAddress,
                        addressLine1: e.target.value,
                      })
                    }
                    className="w-full border border-gray-300 rounded-md p-3 mb-2"
                    placeholder="Enter address line 1"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-2">
                    Address Line 2<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={correspondenceAddress.addressLine2}
                    onChange={(e) =>
                      setCorrespondenceAddress({
                        ...correspondenceAddress,
                        addressLine2: e.target.value,
                      })
                    }
                    className="w-full border border-gray-300 rounded-md p-3 mb-2"
                    placeholder="Enter address line 2"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block font-semibold text-gray-700 mb-2">
                    Landmark<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={correspondenceAddress.landmark}
                    onChange={(e) =>
                      setCorrespondenceAddress({
                        ...correspondenceAddress,
                        landmark: e.target.value,
                      })
                    }
                    className="w-full border border-gray-300 rounded-md p-3 mb-2"
                    placeholder="Enter landmark"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-2">
                    Pincode<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={correspondenceAddress.pincode}
                    onChange={(e) =>
                      setCorrespondenceAddress({
                        ...correspondenceAddress,
                        pincode: e.target.value,
                      })
                    }
                    className="w-full border border-gray-300 rounded-md p-3 mb-2"
                    placeholder="Enter Pincode"
                  />
                </div>
              </div>
            </div>
          </div>
         
          <div className="mt-4">
            <span>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  onChange={(e) =>
                    handleCopyCorrespondenceToPermanent(e.target.checked)
                  }
                  className="form-checkbox h-5 w-5 text-blue-500 border-gray-300 rounded"
                />
                <span className="text-gray-700">Address same as above</span>
              </label>
            </span>
            <label className="block font-semibold text-gray-700 mb-2">
              Permanent Address with Pin Code
            </label>
            <div className="space-y-4   gap-4 ">
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block font-semibold text-gray-700 mb-2">
                    House No.<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={permanentAddress.home}
                    onChange={(e) =>
                      setPermanentAddress({
                        ...permanentAddress,
                        home: e.target.value,
                      })
                    }
                    className="w-full border border-gray-300 rounded-md p-3 mb-2"
                    placeholder="Enter home"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-2">
                    Street<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={permanentAddress.street}
                    onChange={(e) =>
                      setPermanentAddress({
                        ...permanentAddress,
                        street: e.target.value,
                      })
                    }
                    className="w-full border border-gray-300 rounded-md p-3 mb-2"
                    placeholder="Enter street"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block font-semibold text-gray-700 mb-2">
                    Address Line 1<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={permanentAddress.addressLine1}
                    onChange={(e) =>
                      setPermanentAddress({
                        ...permanentAddress,
                        addressLine1: e.target.value,
                      })
                    }
                    className="w-full border border-gray-300 rounded-md p-3 mb-2"
                    placeholder="Enter address line 1"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-2">
                    Address Line 2<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={permanentAddress.addressLine2}
                    onChange={(e) =>
                      setPermanentAddress({
                        ...permanentAddress,
                        addressLine2: e.target.value,
                      })
                    }
                    className="w-full border border-gray-300 rounded-md p-3 mb-2"
                    placeholder="Enter address line 2"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block font-semibold text-gray-700 mb-2">
                    Landmark<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={permanentAddress.landmark}
                    onChange={(e) =>
                      setCorrespondenceAddress({
                        ...permanentAddress,
                        landmark: e.target.value,
                      })
                    }
                    className="w-full border border-gray-300 rounded-md p-3 mb-2"
                    placeholder="Enter landmark"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-2">
                    Pincode<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={permanentAddress.pincode}
                    onChange={(e) =>
                      setCorrespondenceAddress({
                        ...permanentAddress,
                        pincode: e.target.value,
                      })
                    }
                    className="w-full border border-gray-300 rounded-md p-3 mb-2"
                    placeholder="Enter pincode"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              Occupation and Organization/Company Details
              <span className="text-red-500">*</span>
            </label>
            <textarea
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-3"
              rows="3"
              placeholder="Enter your occupation details"
            ></textarea>
          </div>
         
          
          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              How can you help The Bharat Scouts and Guides?{" "}
              <span className="text-red-500">*</span>
            </label>
            <textarea
              value={howCanHelp}
              onChange={(e) => setHowCanHelp(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-3"
              rows="4"
              placeholder="Please describe how you can contribute"
              required
            ></textarea>
          </div>
          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              The best part you like about Scouting/Guiding{" "}
              <span className="text-red-500">*</span>
            </label>
            <textarea
              value={scoutingFavoritePart}
              onChange={(e) => setScoutingFavoritePart(e.target.value)}
              className="w-full border border-gray-300 rounded-md p-3"
              rows="3"
              placeholder="Share what you like the most about Scouting/Guiding"
              required
            ></textarea>
          </div>
          <div className="mt-4 flex items-center">
            <input
              type="checkbox"
              checked={receiveAwards}
              onChange={handleAwardsChange}
              className="mr-2"
            />
            <label className="text-gray-700 font-semibold">
              Do you want to receive regular updates from BSG?
            </label>
          </div>
          <div>
            <button
              type="submit"
              className="bg-green-500 text-white px-6 py-3 rounded-md hover:bg-green-600 w-full"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Alumini;
