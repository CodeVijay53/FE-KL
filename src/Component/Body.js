import * as React from "react";
import Copy from "../Images/Body/Copy.svg";
import Flower from "../Images/Body/flower.svg";
import Globe from "../Images/Body/globe.svg";
import Link from "../Images/Body/Link.svg";
import Swap from "../Images/Body/Swap.png";
import Trade from "../Images/Body/Trade.png";
import Tryperps from "../Images/Body/Tryperps.png";
import Tryoperps from "../Images/Body/Tryperps.png";
import Sdk from "../Images/Body/sdk.svg";

const NavItem = ({ text, icon }) => (
  <div className="flex gap-2 px-6 py-4 text-lg font-extrabold leading-7 text-white whitespace-nowrap max-md:px-5">
    <div className="flex-1">{text}</div>
    <img
      loading="lazy"
      src={icon}
      alt=""
      className="shrink-0 my-auto w-4 aspect-square"
    />
  </div>
);

const FeatureCard = ({ title, description, buttonText, imageSrc }) => (
  <section className="flex justify-center items-center px-16 py-8 mt-4 rounded-3xl bg-neutral-900 max-md:px-5 max-md:max-w-full">
    <div className="w-full max-w-[1054px] max-md:pr-5 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
          <div className="flex flex-col justify-center self-stretch my-auto max-md:mt-10 max-md:max-w-full">
            <h3 className="text-3xl leading-10 text-white max-md:max-w-full">
              {title}
            </h3>
            <p className="mt-2 text-white">{description}</p>
            <button className="justify-center self-start px-6 py-4 mt-4 text-base font-extrabold leading-6 text-teal-400 rounded-2xl border border-teal-600 border-solid shadow-md bg-zinc-900 max-md:px-5">
              {buttonText}
            </button>
          </div>
        </div>
        <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
          <img
            loading="lazy"
            src={imageSrc}
            alt={title}
            className="grow w-full aspect-[1.15] max-md:mt-10 max-md:max-w-full"
          />
        </div>
      </div>
    </div>
  </section>
);

const SdkInstallation = ({ packageName }) => (
  <div className="flex flex-col p-4 mt-14 w-full text-base leading-6 rounded-2xl border border-solid bg-zinc-900 border-white border-opacity-10 text-neutral-300 max-md:mt-10">
    <div className="flex gap-2 p-4 rounded-2xl border border-solid backdrop-blur-lg bg-neutral-900 border-white border-opacity-10">
      <div className="flex-1">npm install {packageName}</div>
      <img
        loading="lazy"
        src={Copy}
        alt=""
        className="shrink-0 my-auto w-6 aspect-square"
      />
    </div>
    <div className="mt-4 leading-[150%]">or</div>
    <div className="flex gap-2 p-4 mt-4 rounded-2xl border border-solid backdrop-blur-lg bg-neutral-900 border-white border-opacity-10">
      <div className="flex-1">yarn add {packageName}</div>
      <img
        loading="lazy"
        src={Copy}
        alt=""
        className="shrink-0 my-auto w-6 aspect-square"
      />
    </div>
  </div>
);

export default function Body() {
  return (
    <div className="flex flex-col bg-black">
      <main className="flex flex-col px-20 mt-4 w-full max-md:px-5 max-md:max-w-full">
        <section className="flex flex-col self-center w-full max-w-[1110px] max-md:max-w-full">
          <div className="max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-[24%] max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src={Flower}
                  alt=""
                  className="shrink-0 max-w-full aspect-square w-[204px] max-md:mt-10"
                />
              </div>
              <div className="flex flex-col ml-5 w-[56%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow mt-24 max-md:mt-10 max-md:max-w-full">
                  <div className="flex flex-col max-w-[571px]">
                    <h1 className="text-8xl font-bold tracking-tighter bg-clip-text leading-[84px] max-md:max-w-full text-blue-600/75 max-md:text-4xl max-md:leading-10">
                      Connected and <br /> simplified web3
                    </h1>
                    <p className="self-center mt-11 text-lg font-medium leading-5 text-white max-md:mt-10">
                      Where Chains & Experiences Unite
                    </p>
                  </div>
                  <div className="flex gap-4 justify-center self-center mt-9 text-base font-extrabold leading-6 text-teal-400">
                    <button className="justify-center px-6 py-4 rounded-2xl border border-teal-600 border-solid shadow-md bg-zinc-900 max-md:px-5">
                      Launch App
                    </button>
                    <button className="justify-center px-6 py-4 rounded-2xl max-md:px-5">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-1/5 max-md:ml-0 max-md:w-full">
                <img
                  loading="lazy"
                  src={Globe}
                  alt=""
                  className="shrink-0 mt-28 max-w-full aspect-[0.74] w-[200px] max-md:mt-10"
                />
              </div>
            </div>
          </div>
          <nav className="self-center mt-32 w-full max-w-[1008px] max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              {[
                { text: "Trade", description: "Lorem ipsum dolor sit amet" },
                { text: "Swap", description: "Try the new Cross-chain swap" },
                { text: "Perps", description: "Lorem ipsum dolor sit amet" },
                { text: "OPerps", description: "Lorem ipsum dolor sit amet" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full"
                >
                  <div className="flex flex-col grow mx-auto w-full rounded-2xl border border-solid shadow-sm bg-neutral-900 border-white border-opacity-10 max-md:mt-4">
                    <div className="px-8 pt-10 pb-4 text-xl leading-8 bg-zinc-900 text-neutral-500 max-md:px-5">
                      {item.description}
                    </div>
                    <NavItem text={item.text} icon={Link} />
                  </div>
                </div>
              ))}
            </div>
          </nav>
        </section>

        <FeatureCard
          title="Cross-chain swap"
          description="Swap tokens natively using across Solana, Aptos, Ethereum, zksync, Arbitrum, Sui, Optimism, Polygon and more!"
          buttonText="Swap now"
          imageSrc={Swap}
        />

        <FeatureCard
          title="Trade"
          description="Spot Trading. Buy and Sell with limit and market order-books. Built on Aptos."
          buttonText="Trade now"
          imageSrc={Trade}
        />

        <FeatureCard
          title="Trade with leverage"
          description=""
          buttonText="Try Perps"
          imageSrc={Tryperps}
        />

        <FeatureCard
          title="OPerps - Derivatives Token"
          description="A derivatives token for trading and hedging."
          buttonText="Try OPerps"
          imageSrc={Tryoperps}
        />

        <section className="flex flex-col mt-36 max-md:mt-10 max-md:max-w-full">
          <div className="flex justify-center items-center px-16 py-14 max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col max-w-full w-[250px]">
              <h2 className="text-4xl font-bold text-center text-white">
                For Developers
              </h2>
              <button className="justify-center self-center px-4 py-2 mt-2 text-xs font-extrabold leading-5 text-teal-400 rounded-lg border border-teal-400 border-solid bg-zinc-900">
                Explore Documentation
              </button>
            </div>
          </div>
          <div className="justify-center mt-4 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex grow justify-center items-center px-16 py-8 w-full rounded-3xl bg-neutral-900 max-md:px-5 max-md:mt-4 max-md:max-w-full">
                  <div className="flex flex-col mt-4 max-w-full w-[402px]">
                    <div className="flex flex-col justify-center">
                      <div className="flex flex-col justify-center">
                        <h3 className="text-4xl font-bold text-white">
                          Mirai SDK
                        </h3>
                        <p className="mt-2 text-base leading-7 text-center text-white">
                          integrate with other dApps
                        </p>
                      </div>
                      <button className="justify-center px-4 py-2 mt-4 text-xs font-extrabold leading-5 text-teal-400 rounded-lg border border-teal-400 border-solid bg-zinc-900">
                        Read Documentation
                      </button>
                    </div>
                    <SdkInstallation packageName="@kanalabs/paymaster-sdk" />
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex grow justify-center items-center px-16 py-8 w-full rounded-3xl bg-neutral-900 max-md:px-5 max-md:mt-4 max-md:max-w-full">
                  <div className="flex flex-col mt-4 max-w-full w-[402px]">
                    <div className="flex flex-col justify-center">
                      <div className="flex flex-col">
                        <h3 className="text-4xl font-bold text-white">
                          Cross-chain Swap
                        </h3>
                        <p className="mt-2 text-base leading-7 text-center text-white">
                          integrate with other dApps
                        </p>
                      </div>
                      <button className="justify-center px-4 py-2 mt-4 text-xs font-extrabold leading-5 text-teal-400 rounded-lg border border-teal-400 border-solid bg-zinc-900">
                        Read Documentation
                      </button>
                    </div>
                    <SdkInstallation packageName="@kanalabs/paymaster-sdk" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <img
        loading="lazy"
        src={Sdk}
        alt=""
        className="self-end mt-10 shadow-lg aspect-square w-[50px]"
      />
    </div>
  );
}
