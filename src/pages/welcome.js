import { createStyles, makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles(() =>
    createStyles({
        heading: {
            background: "linear-gradient(180deg, #3F3B4A, #383345)",
            borderColor: "#FEDF6F",
            borderStyle: 'Solid'
        },
        chowBg: {
            maxWidth: "480px",
            maxHeight: "480px"
        },
        headState: {
            "@media (min-width: 640px)": {
                color: "#F1CB9C"    
            }
        },
        descOutBox: {
            background: "linear-gradient(to bottom, #FEDF6F, #FEB041)",
            color: "3F3B4A",
        },
        joinBox: {
            backgroundColor: "#333333",
            fontFamily: "Luckiest Guy",
            fontWeight: "400"
        },
        blueColor: {
            color: "#4CB699"
        },
        footerText: {
            fontFamily: "Inter"
        },
    }),
);

function WelcomePage() {
    const classes = useStyles();

    const isWindows = navigator.platform.toUpperCase().indexOf('WIN') >= 0;

    return (
        <div className='w-full'>
            {/* Head Section */}
            <div className={clsx(classes.heading, "flex justify-center border-b-8")}>
                <div className="w-full max-w-screen-xl">
                    <div className="relative">
                        <img src="/assets/imgs/chow_bg.svg" alt='' className="max-h-96 md:max-h-screen opacity-50 sm:opacity-100 md:w-1/2 z-0"></img>
                        <div className='absolute right-8 top-8'>
                            <p className={clsx(classes.headState, "font-Inter text-xl font-bold text-white")}>JOIN OUR COMMUNITY</p>
                            <div className='flex justify-end mt-4'>
                                <a href="https://twitter.com/chowchowdegen" target="_blank" rel="noreferrer">
                                    <img className="w-7 h-7 sm:w-8 sm:h-8 mr-4" src="/assets/imgs/x_icon.svg" alt=""></img>
                                </a>
                                <a href="https://t.me/chowchowofficialannouncements" target="_blank" rel="noreferrer">
                                    <img className="w-7 h-7 sm:w-8 sm:h-8" src="/assets/imgs/tg_icon.svg" alt=""></img>
                                </a>
                            </div>
                        </div>

                        <div className='hidden sm:block sm:absolute sm:top-24 lg:top-32 sm:right-auto sm:left-1/2 lg:-mt-2 xl:mt-0 -ml-20 xl:-ml-24'>
                            <img src="/assets/imgs/cc.png" alt="" className="h-48 md:h-56 lg:h-72 xl:h-80"></img>
                            <div className='flex justify-end w-full'>
                                <img src="/assets/imgs/$CHOW.svg" alt="" className="-mr-10 h-10 lg:h-16"></img>
                            </div>
                        </div>

                        <div className="absolute sm:hidden top-0 left-0 w-full h-full">
                            <div className="flex justify-center items-center w-full h-full flex-col pt-10">
                                <img src="/assets/imgs/cc.png" alt="" className="h-40"></img>
                                <img src="/assets/imgs/$CHOW.svg" alt="" className="ml-52 h-10"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* JOIN Description Section */}
            <div className="w-full -mt-12 md:-mt-16 flex justify-center z-10">
                <div className="w-full max-w-screen-xl flex flex-col items-center">
                    <div className={clsx(classes.descOutBox, "rounded-xl sm:rounded-2xl p-1 sm:p-1.5 md:p-2 z-20 ")}>
                        <button className={clsx(classes.joinBox, "w-full rounded-lg sm:rounded-xl text-white h-9 md:h-12 px-4 md:px-8 hover:bg-white hover:text-black hover:transition-all flex justify-center items-center")}>
                            {
                                !isWindows ?
                                <p className={clsx(classes.joinText, "text-2xl md:text-4xl mac-join")}>JOIN THE PRESALE</p>:
                                <p className={clsx(classes.joinText, "text-2xl md:text-4xl")}>JOIN THE PRESALE</p>
                            }
                            
                        </button>
                    </div>
                    <div className={clsx(classes.descOutBox, "w-full sm:w-5/6 max-w-3xl z-10 rounded-3xl p-2 sm:p-3 md:p-4 -mt-7 sm:-mt-8 md:-mt-10")}>
                        <div className="w-full rounded-2xl bg-white h-full px-8 pt-10 pb-8 sm:px-10 sm:pt-14 sm:pb-10 md:px-16 md:pt-20 md:pb-16">
                            <p className={clsx(classes.blueColor, "text-xl md:text-2xl font-bold text-left")}>
                                We're raising for a Chow Chow ($CHOW) liquidity pool, CEX listings and marketing! It’s the greatest Asian canine of all times. Full meme, no utility, degens only. Why not?
                            </p>
                            <br></br>
                            <p className="text-left md:text-xl">
                                CEX listings are expensive and demanding, so we're raising a lot. The devs are connected to tier-1 listing teams at Gate and Kucoin and know the procedures.
                            </p>
                            <br></br>
                            <p className="text-left md:text-xl">
                                Why? Emphasising loyalty, charm, and the breed's distinct appearance to create a relatable connection and embrace a meme culture that revolves around Chow Chows. What’s not to love?
                            </p>
                            <br></br>
                            <p className="text-left md:text-xl">
                                <span className="font-bold text-black">90% community owned.</span> 7% for listings, 3% for core contributors. Fair enough? No banks, no taxes, no insiders, no rigs. Only fame, fluff and fairness. Liquidity locked, contract renounced. 
                            </p>
                            <br></br>
                            <p className='text-left md:text-xl'>Woof. Are you in?</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <div className="w-full flex flex-col items-center mb-16">
                <div className="w-full flex justify-center">
                    <button>
                        <img src="/assets/imgs/pinksale_icon.webp" className='w-40 md:w-72' alt=""></img>
                    </button>
                    <button>
                        <img src="/assets/imgs/ether_icon.svg" className='w-40 md:w-72' alt=""></img>
                    </button>
                </div>
                <p className={clsx(classes.footerText, "opacity-50 text-sm px-3")}>
                    We’re serious about making this happen. Built on Ethereum. Made with Woof, for Degens. PinkSale T&C’s apply.
                </p>
            </div>
        </div>
    );
}

export default WelcomePage;