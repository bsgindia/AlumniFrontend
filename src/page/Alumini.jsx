import React, { useState } from "react";
import Axios from "axios";
import Swal from "sweetalert2";
import backgroundImage from "../images/753.png";
const Alumini = () => {
  const [name, setName] = useState("");
  const [membership, setMembership] = useState([]);
  const [educationalQualification, setEducationalQualification] = useState("");
  const [scoutingQualification, setScoutingQualification] = useState("");
  const [correspondenceAddress, setCorrespondenceAddress] = useState({
    home: "",
    street: "",
    addressLine1: "",
    addressLine2: "",
    landmark: "",
    pincode: "",
    state: "",
    district: "",
  });
  const [state, setState] = useState("");
  const [permanentAddress, setPermanentAddress] = useState({
    home: "",
    street: "",
    addressLine1: "",
    addressLine2: "",
    landmark: "",
    pincode: "",
    state: "",
    district: "",
  });
  const [occupation, setOccupation] = useState("");
  const [organizationDetails, setOrganizationDetails] = useState("");
  const [aadharNumber, setAadharNumber] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [dob, setDob] = useState("");
  const [howCanHelp, setHowCanHelp] = useState("");
  const [scoutingFavoritePart, setScoutingFavoritePart] = useState("");
  const [bsguid, setBsguid] = useState("");
  const [update, setUpdate] = useState(false);
  const [wantsToJoinCoreTeam, setWantsToJoinCoreTeam] = useState(false);
  const [unit, setunit] = useState(false);
  const [selectedAward, setSelectedAward] = useState("");
  const [customAwardName, setCustomAwardName] = useState("");
  const [customAwardYear, setCustomAwardYear] = useState("");
  const [receivedAwards, setReceivedAwards] = useState([]);
  const awardOptions = [
    "GOLDEN ARROW",
    "RASHTRAPATI SCOUT/GUIDE",
    "RASHTRAPATI ROVER/RANGER",
    "Other",
  ];

  const handleAddAward = () => {
    if (selectedAward === "Other" && customAwardName && customAwardYear) {
      setReceivedAwards([
        ...receivedAwards,
        { award: customAwardName, year: customAwardYear },
      ]);
      setCustomAwardName("");
      setCustomAwardYear("");
    } else if (selectedAward && selectedAward !== "Other" && customAwardYear) {
      setReceivedAwards([
        ...receivedAwards,
        { award: selectedAward, year: customAwardYear },
      ]);
      setCustomAwardYear("");
    }
    setSelectedAward("");
  };

  const handleRemoveAward = (index) => {
    const updatedAwards = receivedAwards.filter((_, idx) => idx !== index);
    setReceivedAwards(updatedAwards);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name,
      membership,
      receivedAwards,
      educationalQualification,
      scoutingQualification,
      correspondenceAddress,
      state,
      permanentAddress,
      occupation,
      aadharNumber,
      email,
      phone,
      whatsapp,
      dob,
      howCanHelp,
      bsguid,
      update: update ? "yes" : "no",
      coreTeamInterest: wantsToJoinCoreTeam ? "yes" : "no",
      coreUnit: unit ? "yes" : "no",
    };
    console.log(data);
    try {
      await Axios.post("https://bw-formalu.bsgindia.tech/api/alumni", data);
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Your data has been submitted successfully!",
        confirmButtonText: "OK",
      });
      resetForm();
    } catch (error) {
      console.error("Error submitting data:", error);
      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text: "There was an error submitting your data. Please try again.",
        confirmButtonText: "OK",
      });
    }
  };

  const resetForm = () => {
    setName("");
    setMembership([]);
    setReceivedAwards([]);
    setEducationalQualification("");
    setScoutingQualification("");
    setCorrespondenceAddress({
      home: "",
      street: "",
      addressLine1: "",
      addressLine2: "",
      landmark: "",
      pincode: "",
      state: "",
      district: "",
    });
    setState("");
    setPermanentAddress({
      home: "",
      street: "",
      addressLine1: "",
      addressLine2: "",
      landmark: "",
      pincode: "",
      state: "",
      district: "",
    });
    setOccupation("");
    setOrganizationDetails("");
    setAadharNumber("");
    setEmail("");
    setPhone("");
    setWhatsapp("");
    setDob("");
    setHowCanHelp("");
    setScoutingFavoritePart("");
    setBsguid("");
    setUpdate(false);
    setSelectedAward("");
    setCustomAwardName("");
    setCustomAwardYear("");
    setReceivedAwards([]);
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
        state: "",
        district: "",
      });
    }
  };

  const handleUpdateChange = (e) => {
    setUpdate(e.target.checked);
  };

  return (
    <div className=" bg-[#1d57a5] min-h-screen py-10 px-6">
      <div
        className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-8 bg-opacity-70  z-[-1] "
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "540px",
          backgroundPosition: "top",
          backgroundRepeat: "repeat-y",
        }}
      >
        <h1 className="text-4xl font-bold text-gray-900 text-center z-[1] ">
          Become a member..... BSG ALUMNI
        </h1>
        <p className="text-base  text-wrap font-mono mt-4 mb-3 text-black-800">
          We are delighted to announce the formation of the Bharat Scouts and
          Guides Alumni, aimed at fostering a lifelong connection with former
          Scouts and Guides. This initiative seeks to bring together past
          members who have contributed to the organization and wish to continue
          supporting its mission and activities.
        </p>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              Name of the Applicant<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-300 bg-white  bg-opacity-60 rounded-md p-3"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-gray-700 mb-2">
                Date of Birth <span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="w-full border border-gray-300 bg-white  bg-opacity-60 rounded-md p-3"
                required
              />
            </div>
            <div>
              <label className="block font-semibold text-gray-700 mb-2">
                State<span className="text-red-500">*</span>
              </label>
              <select
                value={state}
                onChange={(e) => setState(e.target.value)}
                className="w-full border border-gray-300 bg-white bg-opacity-60 rounded-md p-3"
                required
              >
                <option value="" disabled>
                  Select your state
                </option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
                <option value="Jammu & Kashmir">Jammu & Kashmir</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold text-gray-700 mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border border-gray-300 bg-white  bg-opacity-60 rounded-md p-3"
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div>
              <label className="block font-semibold text-gray-700 mb-2">
                WhatsApp Number<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={whatsapp}
                onChange={(e) => setWhatsapp(e.target.value)}
                className="w-full border border-gray-300 bg-white  bg-opacity-60 rounded-md p-3"
                placeholder="Enter your WhatsApp number"
              />
            </div>
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
                className="w-full border border-gray-300 bg-white  bg-opacity-60 rounded-md p-3"
                placeholder="Enter your email"
                required
              />
            </div>
            <div>
              <label className="block font-semibold text-gray-700 mb-2">
                Aadhar Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={aadharNumber}
                onChange={(e) => setAadharNumber(e.target.value)}
                className="w-full border border-gray-300 bg-white  bg-opacity-60 rounded-md p-3"
                placeholder="Enter your Aadhar number"
                required
              />
            </div>
          </div>
          <div className="mt-2 flex items-center">
            <input
              type="checkbox"
              checked={unit}
              onChange={(e) => setunit(e.target.checked)}
              className="mr-2"
            />
            <label className="text-gray-700 font-semibold">
              I am attached to a BSG unit Currently.
            </label>
          </div>
          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              BSG UID
            </label>
            <input
              type="text"
              value={bsguid}
              onChange={(e) => setBsguid(e.target.value)}
              className="w-full border border-gray-300 bg-white  bg-opacity-60 rounded-md p-3"
              placeholder="Enter your BSGUID"
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
              {awardOptions.map((award, index) => (
                <div key={index}>
                  <input
                    type="radio"
                    value={award}
                    checked={selectedAward === award}
                    onChange={(e) => {
                      setSelectedAward(e.target.value);
                      if (e.target.value !== "Other") {
                        setCustomAwardName("");
                        setCustomAwardYear("");
                      }
                    }}
                  />
                  {award}
                  {selectedAward === award && selectedAward !== "Other" && (
                    <input
                      type="text"
                      placeholder="Enter year"
                      value={customAwardYear}
                      onChange={(e) => setCustomAwardYear(e.target.value)}
                      className="ml-2 border border-gray-300 bg-white  bg-opacity-60 rounded-md p-1"
                    />
                  )}
                </div>
              ))}
              {selectedAward === "Other" && (
                <div>
                  <input
                    type="text"
                    placeholder="Enter award name"
                    value={customAwardName}
                    onChange={(e) => setCustomAwardName(e.target.value)}
                    className="w-full border border-gray-300 rounded-md bg-white  bg-opacity-60  p-3 mb-2"
                  />
                  <input
                    type="text"
                    placeholder="Enter year"
                    value={customAwardYear}
                    onChange={(e) => setCustomAwardYear(e.target.value)}
                    className="w-full border bg-white  bg-opacity-60 border-gray-300 rounded-md p-3 mb-2"
                  />
                  {customAwardName && customAwardYear && (
                    <button
                      type="button"
                      onClick={handleAddAward}
                      className="bg-blue-500 text-white px-4 py-2 rounded-md mt-2"
                    >
                      Add Award
                    </button>
                  )}
                </div>
              )}
            </div>
            <ul className="mt-4 pl-6">
              {receivedAwards.map((award, index) => (
                <li key={index}>
                  {award.award} {award.year}
                  <button
                    type="button"
                    onClick={() => handleRemoveAward(index)}
                    className="bg-red-500 text-white px-2 py-1 rounded-md ml-2"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              Educational Qualification <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              value={educationalQualification}
              onChange={(e) => setEducationalQualification(e.target.value)}
              className="w-full border border-gray-300 bg-white  bg-opacity-60 rounded-md p-3"
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
              className="w-full border border-gray-300 bg-white  bg-opacity-60 rounded-md p-3"
              placeholder="Enter your scouting qualification"
              required
            />
          </div>
          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              Your Current Occupation (if any)
            </label>
            <input
              type="text"
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
              className="w-full border border-gray-300 bg-white  bg-opacity-60  rounded-md p-3 mb-4"
              placeholder="Enter your occupation"
            />
            <label className="block font-semibold text-gray-700 mb-2">
              Organization/Company Details
            </label>
            <textarea
              value={organizationDetails}
              onChange={(e) => setOrganizationDetails(e.target.value)}
              className="w-full border border-gray-300 bg-white  bg-opacity-60  rounded-md p-3"
              rows="3"
              placeholder="Enter your organization/company details"
            ></textarea>
          </div>
          <div className="mt-4 ">
            <label className="block font-semibold text-gray-700 mb-2">
              Correspondence Address
            </label>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block font-semibold  text-gray-700 mb-2">
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
                    className="w-full border border-gray-300 bg-white  bg-opacity-60 rounded-md p-3 mb-2"
                    placeholder="Enter home"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-2">
                    Street<span className="text-red-500">*</span>
                  </label>{" "}
                  <input
                    type="text"
                    value={correspondenceAddress.street}
                    onChange={(e) =>
                      setCorrespondenceAddress({
                        ...correspondenceAddress,
                        street: e.target.value,
                      })
                    }
                    className="w-full border border-gray-300 bg-white  bg-opacity-60 rounded-md p-3 mb-2"
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
                    className="w-full border border-gray-300 bg-white  bg-opacity-60 rounded-md p-3 mb-2"
                    placeholder="Enter address line 1"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-2">
                    Address Line 2
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
                    className="w-full border border-gray-300 bg-white  bg-opacity-60 rounded-md p-3 mb-2"
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
                    className="w-full border border-gray-300 bg-white  bg-opacity-60  rounded-md p-3 mb-2"
                    placeholder="Enter landmark"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-2">
                    State<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={correspondenceAddress.state}
                    onChange={(e) =>
                      setCorrespondenceAddress({
                        ...correspondenceAddress,
                        state: e.target.value,
                      })
                    }
                    className="w-full border border-gray-300 bg-white  bg-opacity-60  rounded-md p-3 mb-2"
                    placeholder="Enter State"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block font-semibold text-gray-700 mb-2">
                    District<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={correspondenceAddress.district}
                    onChange={(e) =>
                      setCorrespondenceAddress({
                        ...correspondenceAddress,
                        district: e.target.value,
                      })
                    }
                    className="w-full border border-gray-300 bg-white  bg-opacity-60  rounded-md p-3 mb-2"
                    placeholder="Enter District"
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
                    className="w-full border border-gray-300 bg-white  bg-opacity-60 rounded-md p-3 mb-2"
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
              Permanent Address
            </label>
            <div className="space-y-4 gap-4 ">
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
                    className="w-full border border-gray-300 bg-white  bg-opacity-60  rounded-md p-3 mb-2"
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
                    className="w-full border border-gray-300 bg-white  bg-opacity-60 rounded-md p-3 mb-2"
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
                    className="w-full border border-gray-300 bg-white  bg-opacity-60  rounded-md p-3 mb-2"
                    placeholder="Enter address line 1"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-2">
                    Address Line 2
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
                    className="w-full border border-gray-300 bg-white  bg-opacity-60  rounded-md p-3 mb-2"
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
                      setPermanentAddress({
                        ...permanentAddress,
                        landmark: e.target.value,
                      })
                    }
                    className="w-full border border-gray-300 bg-white  bg-opacity-60  rounded-md p-3 mb-2"
                    placeholder="Enter landmark"
                  />
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 mb-2">
                    State<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={permanentAddress.state}
                    onChange={(e) =>
                      setPermanentAddress({
                        ...permanentAddress,
                        state: e.target.value,
                      })
                    }
                    className="w-full border border-gray-300 bg-white  bg-opacity-60 rounded-md p-3 mb-2"
                    placeholder="Enter State"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div>
                  <label className="block font-semibold text-gray-700 mb-2">
                    District<span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    value={permanentAddress.district}
                    onChange={(e) =>
                      setPermanentAddress({
                        ...permanentAddress,
                        district: e.target.value,
                      })
                    }
                    className="w-full border border-gray-300 bg-white  bg-opacity-60 rounded-md p-3 mb-2"
                    placeholder="Enter District"
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
                      setPermanentAddress({
                        ...permanentAddress,
                        pincode: e.target.value,
                      })
                    }
                    className="w-full border border-gray-300 bg-white  bg-opacity-60 rounded-md p-3 mb-2"
                    placeholder="Enter pincode"
                  />
                </div>
              </div>
            </div>
          </div>

          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              The best part you like about the movement{" "}
              <span className="text-red-500">*</span>
            </label>
            <textarea
              value={scoutingFavoritePart}
              onChange={(e) => setScoutingFavoritePart(e.target.value)}
              className="w-full border border-gray-300 bg-white  bg-opacity-60  rounded-md p-3"
              rows="3"
              placeholder="Share what you like the most about Scouting/Guiding"
              required
            ></textarea>
          </div>
          <div>
            <label className="block font-semibold text-gray-700 mb-2">
              How can you contribute to The Bharat Scouts and Guides?{" "}
              <span className="text-red-500">*</span>
            </label>
            <textarea
              value={howCanHelp}
              onChange={(e) => setHowCanHelp(e.target.value)}
              className="w-full border border-gray-300 bg-white  bg-opacity-60 rounded-md p-3"
              rows="4"
              placeholder="Please describe how you can contribute"
              required
            ></textarea>
          </div>
          <div className="mt-4 flex items-center">
            <input
              type="checkbox"
              checked={update}
              onChange={handleUpdateChange}
              className="mr-2"
            />
            <label className="text-gray-700 font-semibold">
              Do you want to receive regular updates from BSG?
            </label>
          </div>
          <div className="mt-4 flex items-center">
            <input
              type="checkbox"
              checked={wantsToJoinCoreTeam}
              onChange={(e) => setWantsToJoinCoreTeam(e.target.checked)}
              className="mr-2"
            />
            <label className="text-gray-700 font-semibold">
              Would you like to be part of the core team of the BSG Alumni
              group?
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
