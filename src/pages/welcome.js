import { createStyles, makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles(() =>
    createStyles({
        heading: {
            background: "linear-gradient(180deg, #3F3B4A, #383345)",
            borderColor: "#FEDF6F",
            borderStyle: 'Solid'
        },
        headState: {
            color: "#F1CB9C"
        },
        descOutBox: {
            background: "linear-gradient(to bottom, #FEDF6F, #FEB041)",
            color: "3F3B4A",
        },
        joinBox: {
            backgroundColor: "#333333",
            fontFamily: "Luckiest Guy"
        },
        blueColor: {
            color: "#4CB699"
        },
        footerText: {
            fontFamily: "Inter"
        }
    }),
);

function WelcomePage() {
    const classes = useStyles();

    return (
        <div className='w-full'>
            {/* Head Section */}
            <div className={clsx(classes.heading, "flex justify-center border-b-8")}>
                <div className="w-full max-w-screen-xl">
                    <div className="relative">
                        <img src="/assets/imgs/chow_bg.png" alt='' className="max-h-screen w-full md:w-1/2 z-0"></img>
                        <div className='absolute right-8 top-8'>
                            <p className={clsx(classes.headState, "font-Inter text-2xl font-bold")}>JOIN OUR COMMUNITY</p>
                            <div className='flex justify-end mt-4'>
                                <button>
                                    <img className="w-8 h-8 mr-4" src="/assets/imgs/x_icon.png" alt=""></img>
                                </button>
                                <button>
                                    <img className="w-8 h-8" src="/assets/imgs/tg_icon.png" alt=""></img>
                                </button>
                            </div>
                        </div>

                        <div className='absolute top-1/3 md:top-20 lg:top-24 xl:top-32 left-1/4 md:left-1/2 -ml-20'>
                            <img src="/assets/imgs/chow.png" alt="" className="h-40 lg:h-72 xl:h-80"></img>
                            <div className='flex justify-end w-full'>
                                <img src="/assets/imgs/$CHOW.png" alt="" className="-mr-20 h-12 lg:h-16"></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* JOIN Description Section */}
            <div className="w-full -mt-12 md:-mt-16 flex justify-center z-10">
                <div className="w-full max-w-screen-xl flex flex-col items-center">
                    <div className={clsx(classes.descOutBox, "rounded-2xl p-2 z-20")}>
                        <div className={clsx(classes.joinBox, "w-full rounded-xl h-full text-white text-2xl md:text-4xl px-3 py-1 md:px-8 md:py-2")}>
                        JOIN THE PRESALE
                        </div>
                    </div>
                    <div className={clsx(classes.descOutBox, "w-5/6 max-w-3xl z-10 rounded-3xl p-3 md:p-4 -mt-10")}>
                        <div className="w-full rounded-2xl bg-white h-full px-10 pt-14 pb-10 md:px-16 md:pt-24 md:pb-16">
                            <p className={clsx(classes.blueColor, "text-xl font-bold text-left")}>
                                We're raising for a Chow Chow ($CHOW) liquidity pool, CEX listings and marketing! It’s the greatest Asian canine of all times. Full meme, no utility, degens only. Why not?
                            </p>
                            <br></br>
                            <p className="text-left">
                                CEX listings are expensive and demanding, so we're raising a lot. The devs are connected to tier-1 listing teams at Gate and Kucoin and know the procedures.
                            </p>
                            <br></br>
                            <p className="text-left">
                                Why? Emphasising loyalty, charm, and the breed's distinct appearance to create a relatable connection and embrace a meme culture that revolves around Chow Chows. What’s not to love?
                            </p>
                            <br></br>
                            <p className="text-left">
                                <span className="font-bold text-black">90% community owned.</span> 7% for listings, 3% for core contributors. Fair enough? No banks, no taxes, no insiders, no rigs. Only fame, fluff and fairness. Liquidity locked, contract renounced. 
                            </p>
                            <br></br>
                            <p className='text-left'>Woof. Are you in?</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Section */}
            <div className="w-full flex flex-col items-center mb-16">
                <div className="w-full flex justify-center">
                    <button>
                        <img src="/assets/imgs/pinksale_icon.png" className='w-40 md:w-72' alt=""></img>
                    </button>
                    <button>
                        <img src="/assets/imgs/ether_icon.png" className='w-40 md:w-72' alt=""></img>
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