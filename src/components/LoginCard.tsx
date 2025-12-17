"use client"

import { useState } from "react";
import CardWrapping from "./CardWrapping"

export default function LoginCard() {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
    <CardWrapping>
      <form
        onSubmit={handleSubmit}
        className="py-8 px-12 width-[600px]"
      >
        <h1 className="max-w-[24ch] text-center text-3xl font-bold text-white">
          Inicie sesión o cree una cuenta para empezar
        </h1>
        <CardWrapping
          cornerPosition={['top-left', 'bottom-right']}
          typeCorner="square"
          className="mt-12"
        >
          <button
            title="Iniciar sesión con GitHub"
            className="flex items-center justify-center py-5 w-full gap-3 cursor-pointer"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 16 16"
              strokeLinejoin="round"
              className="text-gray-300"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M8 0C3.58 0 0 3.579 0 7.997a7.992 7.992 0 0 0 5.47 7.588c.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.939-.82-1.129-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.949 0-.87.31-1.589.82-2.149-.08-.2-.36-1.02.08-2.12 0 0 .67-.209 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.039 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.068-1.87 3.748-3.65 3.948.29.25.54.73.54 1.48 0 1.07-.01 1.929-.01 2.199 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 7.997 7.996 7.996 0 0 0 8 0Z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-white text-lg font-medium">Iniciar sesión con GitHub</span>
          </button>
        </CardWrapping>
        <div className="mt-13 flex flex-col gap-2">
          <label htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className="w-full border border-primary py-4 px-6"
            placeholder="example@game.com"
          />
        </div>
        <div className="mt-6 flex flex-col gap-2">
          <label htmlFor="password">
            Contraseña:
          </label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              name="password"
              id="password"
              className="w-full border border-primary py-4 px-6"
              placeholder="******"
            />
            <button
              title={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
              className="absolute right-4 top-1/2 transform -translate-y-1/2"
              onClick={handleShowPassword}
            >
              {
                showPassword ? (
                  <svg
                    width="16"
                    height="16"
                    strokeLinejoin="round"
                    style={{ color: "currentColor" }}
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="M4.022 4.77a5.25 5.25 0 0 1 7.956 0L14.76 8l-2.782 3.23a5.25 5.25 0 0 1-7.956 0L1.24 8l2.782-3.23Zm9.093-.98C10.422.664 5.578.664 2.885 3.79L-.318 7.51v.98l3.203 3.72c2.693 3.127 7.537 3.127 10.23 0l3.203-3.72v-.98l-3.203-3.72ZM6.5 8a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM8 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    width="16"
                    height="16"
                    strokeLinejoin="round"
                    style={{ color: "currentColor" }}
                  >
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      d="m.191 2.062.56.499 13.5 12 .561.498.997-1.121-.56-.499-1.81-1.607 2.88-3.343v-.978l-3.204-3.72C10.645.92 6.365.685 3.594 3.08L1.748 1.44 1.188.94.19 2.062ZM14.761 8l-2.442 2.835-1.65-1.465a3.001 3.001 0 0 0-4.342-3.86l-1.6-1.422a5.253 5.253 0 0 1 7.251.681L14.76 8ZM7.526 6.576l1.942 1.727a1.499 1.499 0 0 0-1.942-1.727Zm-7.845.935 1.722-2 1.137.978L1.24 8l2.782 3.23A5.251 5.251 0 0 0 9.9 12.703l.54 1.399a6.75 6.75 0 0 1-7.555-1.892L-.318 8.49v-.978Z"
                      clipRule="evenodd"
                    />
                  </svg>
                )
              }
            </button>
          </div>
        </div>
        <CardWrapping
          cornerPosition={['top-left', 'bottom-right']}
          typeCorner="square"
          className="mt-12"
        >
          <label htmlFor="submit" className="sr-only">
            Iniciar sesión
          </label>
          <input
            type="submit"
            value="Iniciar sesión"
            className="text-white text-2xl font-bold py-5 w-full cursor-pointer"
            id="submit"
          />
        </CardWrapping>
      </form>
    </CardWrapping>
  )
}