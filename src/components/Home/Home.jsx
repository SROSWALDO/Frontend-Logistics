import React, { useEffect, useState } from "react";
import axios from "../../axios";
import logo from "../../assets/Logo.png";
import bar from "../../assets/bar.svg";
import { NavLink } from "react-router-dom";
import Swal from "sweetalert2";
import addresOr from "../../assets/addresO.svg";
import city from "../../assets/city.svg";
import exit from "../../assets/exit.svg";
import map from "../../assets/map.svg";
import cp from "../../assets/cp.svg";
import unidad from "../../assets/unidad.svg";
import cantidad from "../../assets/cantidad.svg";
import dimension from "../../assets/dimension.svg";
import user from "../../assets/user.svg";
import { useAuth } from "../Login/Autenticate";

export default function Home() {
  const { token } = useAuth(); // Obtener el token del contexto de autenticación
  const { users, setUsers } = useAuth();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated && !users) {
      const storedUsers = localStorage.getItem("users");
      if (storedUsers) {
        setUsers(JSON.parse(storedUsers));
      }
    }
  }, [isAuthenticated, users, setUsers]);

  const [formData, setFormData] = useState({
    origen: "",
    cp_origen: "",
    destino: "",
    cp_destino: "",
    direccion_destino: "",
    direccion_origen: "",
    estado_destino: "",
    estado_origen: "",
    peso: "",
    dimensiones: "",
    cantidad_skids: "",
    unidad: "",
    type_of_requirement: "",
    hazmat: "",
    fecha_hora_origen: "",
    fecha_hora_unidad: "",
    un: "",
    clas: "",
  });

  const succes = () => {
    Swal.fire({
      title: "Successful",
      text: "Register Created",
      icon: "success",
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.origen &&
      !formData.cp_origen &&
      !formData.destino &&
      !formData.cp_destino &&
      !formData.direccion_destino &&
      !formData.direccion_origen &&
      !formData.estado_destino &&
      !formData.estado_origen &&
      !formData.peso &&
      !formData.dimensiones &&
      !formData.unidad &&
      !formData.type_of_requirement &&
      !formData.hazmat &&
      !formData.cantidad_skids &&
      !formData.fecha_hora_origen &&
      !formData.fecha_hora_destino
    ) {
      Swal.fire({
        title: "Error",
        text: "Please complete all fields",
        icon: "info",
      });
      return;
    }

    // Validación individual de cada campo
    if (!formData.origen) {
      Swal.fire({
        title: "Error",
        text: "Please complete the 'City' field for the origin",
        icon: "info",
      });
      return;
    }

    if (!formData.cp_origen) {
      Swal.fire({
        title: "Error",
        text: "Please complete the 'CP' field for the origin",
        icon: "info",
      });
      return;
    }

    if (!formData.destino) {
      Swal.fire({
        title: "Error",
        text: "Please complete the 'City' field for the destination",
        icon: "info",
      });
      return;
    }

    if (!formData.cp_destino) {
      Swal.fire({
        title: "Error",
        text: "Please complete the 'CP' field for the destination",
        icon: "info",
      });
      return;
    }

    if (!formData.direccion_destino) {
      Swal.fire({
        title: "Error",
        text: "Please complete the 'Address' field for the destination",
        icon: "info",
      });
      return;
    }

    if (!formData.direccion_origen) {
      Swal.fire({
        title: "Error",
        text: "Please complete the 'Address' field for the origin",
        icon: "info",
      });
      return;
    }

    if (!formData.estado_destino) {
      Swal.fire({
        title: "Error",
        text: "Please complete the 'State' field for the destination",
        icon: "info",
      });
      return;
    }

    if (!formData.estado_origen) {
      Swal.fire({
        title: "Error",
        text: "Please complete the 'State' field for the origin",
        icon: "info",
      });
      return;
    }

    if (!formData.peso) {
      Swal.fire({
        title: "Error",
        text: "Please complete the 'Weight' field",
        icon: "info",
      });
      return;
    }

    if (!formData.dimensiones) {
      Swal.fire({
        title: "Error",
        text: "Please complete the 'Dimensions' field",
        icon: "info",
      });
      return;
    }

    if (!formData.cantidad_skids) {
      Swal.fire({
        title: "Error",
        text: "Please complete the 'Quantity' field",
        icon: "info",
      });
      return;
    }

    try {
      const response = await axios.post("/register", formData, {
        headers: {
          Authorization: `Bearer ${token}`, // Incluir el token en el encabezado de la solicitud
        },
      });

      Swal.fire({
        title: "Successful",
        text: "Register Created",
        icon: "success",
      });

      setFormData({
        origen: "",
        cp_origen: "",
        destino: "",
        cp_destino: "",
        direccion_destino: "",
        direccion_origen: "",
        estado_destino: "",
        estado_origen: "",
        peso: "",
        dimensiones: "",
        cantidad_skids: "",
        unidad: "",
        type_of_requirement: "",
        hazmat: "",
        fecha_hora_origen: "",
        fecha_hora_unidad: "",
        un: "",
        clas: "",
      });
    } catch (error) {
      console.error("Error al crear registro", error.message);
    }
  };

  return (
    <>
      <div className="contenedor font-Poppins w-full bg-[#eeeff1] ">
        <div className="slider w-full bg-[#000] relative shadow-2xl h-[90px] items-center flex justify-center">
          <div className="logo absolute left-2 ml-5 flex">
            <img className="w-[90px]" src={logo} alt="Logo" />
          </div>

          <NavLink to="/registers">
            <div className="toRegisters inline-flex items-center w-[100px] hover:scale-105 justify-center rounded-sm text-white mr-8 cursor-pointer transition-all">
              <img className=" " src={bar} alt="" />
              <p className="text-lg  ml-1 mt-1 transition-all">Registers</p>
            </div>
          </NavLink>

          {users?.isAdmin && (
            <>
              <NavLink to="/users">
                <div className="toRegisters relative inline-flex items-center w-[100px] justify-center rounded-sm text-white mr-8 cursor-pointer hover:scale-105 transition-all">
                  <img className="absolute left-0 top-0 " src={user} alt="" />
                  <p className="text-lg   ml-1 transition-all ">Users</p>
                </div>
              </NavLink>
            </>
          )}

          <div className="nameuser absolute right-80 text-white ">
            <p>Hola! {users.nombreUsuario}</p>
          </div>

          <NavLink to="/logout">
            <div className="toRegisters absolute right-3 top-8 flex bg-red-600 hover:bg-red-700 w-[130px] p-[2px] justify-center rounded-xl text-white mr-8 cursor-pointer transition-all">
              <p className="text-lg mr-2">Log out</p>
              <img src={exit} alt="" />
            </div>
          </NavLink>
        </div>

        <div className="formulario bg-[#eeeff1] ">
          <form
            onSubmit={handleSubmit}
            className="flex w-[1250px] mt-2 m-auto "
          >
            <div className="m-auto">
              <div>
                <div className="mt-1 bg-white rounded-lg shadow-2xl">
                  <div className="flex">
                    <div className="flex-1 py-5 pl-5 overflow-hidden">
                      <svg
                        className="inline align-text-top"
                        height="24px"
                        viewBox="0 0 24 24"
                        width="24px"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#000000"
                      >
                        <g>
                          <path
                            d="m4.88889,2.07407l14.22222,0l0,20l-14.22222,0l0,-20z"
                            fill="none"
                            id="svg_1"
                            stroke="null"
                          ></path>
                          <path
                            d="m7.07935,0.05664c-3.87,0 -7,3.13 -7,7c0,5.25 7,13 7,13s7,-7.75 7,-13c0,-3.87 -3.13,-7 -7,-7zm-5,7c0,-2.76 2.24,-5 5,-5s5,2.24 5,5c0,2.88 -2.88,7.19 -5,9.88c-2.08,-2.67 -5,-7.03 -5,-9.88z"
                            id="svg_2"
                          ></path>
                          <circle
                            cx="7.04807"
                            cy="6.97256"
                            r="2.5"
                            id="svg_3"
                          ></circle>
                        </g>
                      </svg>
                      <h1 className="inline text-2xl font-semibold leading-none">
                        Origin
                      </h1>
                    </div>
                  </div>
                  <div className="px-5 pb-5">
                    <div className="relative">
                      <div class="absolute z-10 inset-y-0 start-0 top-1 flex items-center ps-3.5 pointer-events-none">
                        <img src={addresOr} alt="" />
                      </div>
                      <input
                        id="direccion_origen"
                        name="direccion_origen"
                        type="text"
                        placeholder="Address"
                        value={formData.direccion_origen}
                        onChange={handleChange}
                        className="text-black ps-11 placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                      />
                    </div>

                    <div className="flex ">
                      <div className="flex-grow">
                        <div className="relative">
                          <div class="absolute z-10 inset-y-0 start-0 top-2 flex items-center ps-3.5 pointer-events-none">
                            <img src={city} alt="" />
                          </div>
                          <input
                            name="origen"
                            id="origen"
                            placeholder="City"
                            value={formData.origen}
                            onChange={handleChange}
                            className="text-black ps-11 placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                          />
                        </div>
                      </div>
                      <div className="flex-grow w-1/4 pr-2">
                        <div className="relative">
                          <div class="absolute z-10 inset-y-0 start-0 top-2 flex items-center ps-3.5 pointer-events-none">
                            <img src={map} alt="" />
                          </div>
                          <input
                            name="estado_origen"
                            id="estado_origen"
                            placeholder="State"
                            value={formData.estado_origen}
                            onChange={handleChange}
                            className="text-black ml-2 ps-9 placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                          />
                        </div>
                      </div>

                      <div className="flex-grow w-1/4 pr-2">
                        <div className="relative">
                          <div class="absolute z-10 inset-y-0 start-0 top-2 flex items-center ps-3.5 pointer-events-none">
                            <img src={cp} alt="" />
                          </div>
                          <input
                            name="cp_origen"
                            id="cp_origen"
                            placeholder="CP"
                            value={formData.cp_origen}
                            onChange={handleChange}
                            className="text-black ps-9 ml-2 placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="w-full h-[1px] bg-black mt-3 "></div>

                    <div className="info-utilities-1">
                      <div className="flex">
                        <div className="flex-grow">
                          <div className="relative">
                            <div class="absolute z-10 inset-y-0 start-0 top-2 flex items-center ps-3.5 pointer-events-none">
                              <img src={unidad} alt="" />
                            </div>
                            <select
                              name="unidad"
                              id="unidad"
                              placeholder="Unity"
                              value={formData.unidad}
                              onChange={handleChange}
                              className="text-black ps-10 placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                            >
                              <option value="">Select a unity</option>
                              <option value="53">53</option>
                              <option value="40">40</option>
                              <option value="Torton">Torton</option>
                              <option value="Rabon">Rabon</option>
                              <option value="3.5">3.5</option>
                              <option value="1.5 Ton">1.5 Ton</option>
                            </select>
                          </div>
                        </div>

                        <div className="flex-grow ml-2">
                          <div className="relative">
                            <div class="absolute z-10 inset-y-0 start-0 top-2 flex items-center ps-3.5 pointer-events-none">
                              <img src={unidad} alt="" />
                            </div>
                            <select
                              name="type_of_requirement"
                              id="type_of_requirement"
                              placeholder="Unity"
                              value={formData.type_of_requirement}
                              onChange={handleChange}
                              className="text-black ps-10 placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                            >
                              <option value="">Type requirement</option>
                              <option value="Single">Single</option>
                              <option value="Team driver">Team driver</option>
                            </select>
                          </div>
                        </div>

                        <div className="bg-gray-200 rounded flex-grow m-auto ml-2 px-4 py-2.5 mt-2 ">
                          <label>Hazmat:</label>
                          <input
                            className="ml-2"
                            type="radio"
                            name="hazmat"
                            value="false"
                            onChange={handleChange}
                          />{" "}
                          No
                          <input
                            className="ml-2  "
                            type="radio"
                            name="hazmat"
                            value="true"
                            onChange={handleChange}
                          />{" "}
                          Yes
                        </div>
                        {formData.hazmat === "true" ? (
                          <>
                            <div className="mb-1 mr-2">
                              <input
                                className="text-black  ml-2 ps-9 placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                                placeholder="UN"
                                id="un"
                                name="un"
                                type="text"
                                value={formData.un}
                                onChange={handleChange}
                                
                              />
                            </div>
                            <div className="mb-1">
                              <input
                                placeholder="Class"
                                id="clas"
                                name="clas"
                                type="text"
                                value={formData.clas}
                                onChange={handleChange}
                                className="text-black  ml-2 ps-9 placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                              />
                            </div>
                          </>
                        ) : null}
                      </div>
                    </div>

                    <div className="info-utilities ">
                      <div className="flex">
                        

                        <div className="flex-grow w-1/4 pr-2">
                          <div className="relative">
                            <div class="absolute z-10 inset-y-0 start-0 top-2 flex items-center ps-3.5 pointer-events-none">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="gray"
                                className="size-6"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M12 2.25a.75.75 0 0 1 .75.75v.756a49.106 49.106 0 0 1 9.152 1 .75.75 0 0 1-.152 1.485h-1.918l2.474 10.124a.75.75 0 0 1-.375.84A6.723 6.723 0 0 1 18.75 18a6.723 6.723 0 0 1-3.181-.795.75.75 0 0 1-.375-.84l2.474-10.124H12.75v13.28c1.293.076 2.534.343 3.697.776a.75.75 0 0 1-.262 1.453h-8.37a.75.75 0 0 1-.262-1.453c1.162-.433 2.404-.7 3.697-.775V6.24H6.332l2.474 10.124a.75.75 0 0 1-.375.84A6.723 6.723 0 0 1 5.25 18a6.723 6.723 0 0 1-3.181-.795.75.75 0 0 1-.375-.84L4.168 6.241H2.25a.75.75 0 0 1-.152-1.485 49.105 49.105 0 0 1 9.152-1V3a.75.75 0 0 1 .75-.75Zm4.878 13.543 1.872-7.662 1.872 7.662h-3.744Zm-9.756 0L5.25 8.131l-1.872 7.662h3.744Z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            </div>
                            <input
                              name="peso"
                              id="peso"
                              placeholder="Weight"
                              value={formData.peso}
                              onChange={handleChange}
                              className="text-black ps-10 ml-2 placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                            />
                          </div>
                        </div>

                        <div className="flex-grow w-1/4 pr-2">
                          <div className="relative">
                            <div class="absolute z-10 inset-y-0 start-0 top-2 flex items-center ps-3.5 pointer-events-none">
                              <img src={dimension} alt="" />
                            </div>
                            <input
                              name="dimensiones"
                              id="dimensiones"
                              placeholder="Dimensions"
                              value={formData.dimensiones}
                              onChange={handleChange}
                              className="text-black ps-9 ml-2 placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                            />
                          </div>
                        </div>
                        <div className="flex-grow w-1/4 pr-2">
                          <div className="relative">
                            <div class="absolute z-10 inset-y-0 start-0 top-2 flex items-center ps-3.5 pointer-events-none">
                              <img src={cantidad} alt="" />
                            </div>
                            <input
                              name="cantidad_skids"
                              id="cantidad_skids"
                              placeholder="Quantity"
                              value={formData.cantidad_skids}
                              onChange={handleChange}
                              className="text-black ps-9 ml-2 placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                            />
                          </div>
                        </div>
                        <div className="flex-grow">
                          <div className="text-black ps-1 flex ml-2 placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400">
                            <p className="w-[125px]">Fecha y hora: </p>
                            <input
                              name="fecha_hora_origen"
                              id="fecha_hora_origen"
                              type="datetime-local"
                              value={formData.fecha_hora_origen}
                              onChange={handleChange}
                              className="bg-gray-200"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex">
                    <div className="flex-1 py-5 pl-5 overflow-hidden">
                      <svg
                        className="inline align-text-top"
                        width="21"
                        height="20.5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#000000"
                      >
                        <g>
                          <path
                            d="m4.88889,2.07407l14.22222,0l0,20l-14.22222,0l0,-20z"
                            fill="none"
                            id="svg_1"
                            stroke="null"
                          ></path>
                          <path
                            d="m7.07935,0.05664c-3.87,0 -7,3.13 -7,7c0,5.25 7,13 7,13s7,-7.75 7,-13c0,-3.87 -3.13,-7 -7,-7zm-5,7c0,-2.76 2.24,-5 5,-5s5,2.24 5,5c0,2.88 -2.88,7.19 -5,9.88c-2.08,-2.67 -5,-7.03 -5,-9.88z"
                            id="svg_2"
                          ></path>
                          <circle
                            cx="7.04807"
                            cy="6.97256"
                            r="2.5"
                            id="svg_3"
                          ></circle>
                        </g>
                      </svg>
                      <h1 className="inline text-2xl font-semibold leading-none">
                        Destination
                      </h1>
                    </div>
                    <div className="flex-none pt-2.5 pr-2.5 pl-1"></div>
                  </div>
                  <div className="px-5 pb-5">
                    <div className="relative">
                      <div class="absolute z-10 inset-y-0 start-0 top-2 flex items-center ps-3.5 pointer-events-none">
                        <img src={addresOr} alt="" />
                      </div>

                      <input
                        name="direccion_destino"
                        id="direccion_destino"
                        placeholder="Address"
                        value={formData.direccion_destino}
                        onChange={handleChange}
                        className="text-black ps-11 placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                      />
                    </div>

                    <div className="flex">
                      

                      <div className="flex-grow">
                        <div className="relative">
                          <div class="absolute z-10 inset-y-0 start-0 top-2 flex items-center ps-3.5 pointer-events-none">
                            <img src={city} alt="" />
                          </div>
                          <input
                            name="destino"
                            id="destino"
                            placeholder="City"
                            value={formData.destino}
                            onChange={handleChange}
                            className="text-black ps-11 placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                          />
                        </div>
                      </div>
                      <div className="flex-grow w-1/4 pr-2">
                        <div className="relative">
                          <div class="absolute z-10 inset-y-0 start-0 top-2 flex items-center ps-3.5 pointer-events-none">
                            <img src={map} alt="" />
                          </div>
                          <input
                            name="estado_destino"
                            id="estado_destino"
                            placeholder="State"
                            value={formData.estado_destino}
                            onChange={handleChange}
                            className="text-black ps-9 ml-2 placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                          />
                        </div>
                      </div>

                      <div className="flex-grow w-1/4 pr-2">
                        <div className="relative">
                          <div class="absolute z-10 inset-y-0 start-0 top-2 flex items-center ps-3.5 pointer-events-none">
                            <img src={cp} alt="" />
                          </div>
                          <input
                            name="cp_destino"
                            id="cp_destino"
                            placeholder="CP"
                            value={formData.cp_destino}
                            onChange={handleChange}
                            className="text-black ps-9 ml-2 placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400"
                          />
                        </div>
                      </div>
                      <div className="flex-grow ml-2 ">
                        <div className="text-black ps-1 flex  placeholder-gray-600 w-full px-4 py-2.5 mt-2 text-base transition duration-500 ease-in-out transform border-transparent rounded-lg bg-gray-200 focus:border-blueGray-500 focus:bg-white focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2 ring-gray-400">
                          <p className="w-[125px]">Fecha y hora: </p>
                          <input
                            name="fecha_hora_destino"
                            id="fecha_hora_destino"
                            type="datetime-local"
                            value={formData.fecha_hora_destino}
                            onChange={handleChange}
                            className="bg-gray-200"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr className="mt-2" />
                  <div className="flex flex-row-reverse p-3">
                    <div className="flex-initial pl-3">
                      <button
                        type="submit"
                        className="flex items-center px-5 py-2.5 font-medium tracking-wide text-white capitalize bg-black rounded-md hover:bg-gray-800 focus:outline-none focus:bg-gray-900 transition duration-300 transform active:scale-95 ease-in-out"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="24px"
                          viewBox="0 0 24 24"
                          width="24px"
                          fill="#FFFFFF"
                        >
                          <path d="M0 0h24v24H0V0z" fill="none"></path>
                          <path
                            d="M5 5v14h14V7.83L16.17 5H5zm7 13c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm3-8H6V6h9v4z"
                            opacity=".3"
                          ></path>
                          <path d="M17 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V7l-4-4zm2 16H5V5h11.17L19 7.83V19zm-7-7c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM6 6h9v4H6z"></path>
                        </svg>
                        <span className="pl-2 mx-1">Save</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
