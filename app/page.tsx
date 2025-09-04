import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Globe, Send, Twitter } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Scrolling Ticker */}
      <div className="bg-[#1DA1F2] text-white py-2 overflow-hidden">
        <div className="animate-scroll whitespace-nowrap">
          <span className="inline-block px-8">
            $UTYA's green! • $UTYA shines, profits climb! • Green scenes, $UTYA dreams! • With $UTYA's rise, profits fly
            skies! • Green glows, $UTYA grows! • Blockchain boost, $UTYA's roost • #DYOR - Duck Your Own Research •
          </span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-[#1DA1F2] text-white min-h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-6xl lg:text-7xl font-bold mb-8 text-balance">UTYA Token</h1>
            <p className="text-xl lg:text-2xl mb-12 leading-relaxed text-balance">
              $UTYA is more than just a memecoin – it's a community-driven movement dedicated to spreading joy and
              positivity through the iconic Telegram Duck Emoji. $UTYA is seen by millions of people every year on
              Telegram, and so we thought it deserved a community to call its own on TON.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="bg-black text-white hover:bg-gray-800 px-8 py-6 text-lg font-semibold rounded-full">
                BUY NOW
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-[#1DA1F2] px-8 py-6 text-lg font-semibold rounded-full bg-transparent"
              >
                CHART
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="text-[300px] leading-none">🦆</div>
          </div>
        </div>
      </section>

      {/* Why SUTYA Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl lg:text-6xl font-bold text-[#1DA1F2] mb-8 text-balance">Why $UTYA?</h2>
          <p className="text-xl text-gray-700 mb-16 max-w-4xl mx-auto text-balance">
            Because we believe in the power of the $UTYA duck emoji to bring people together and create meaningful
            connections. Whether you're a seasoned crypto investor or new to the world of digital assets, UTYA offers an
            exciting opportunity to be part of something special.
          </p>

          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div className="text-center">
              <div className="text-8xl mb-6">🕵️‍♂️🦆</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Contract Renounced</h3>
              <p className="text-gray-600 text-balance">
                Utya's making a bold move! He's renounced the contract, setting a new course for unstoppable autonomy!
              </p>
            </div>
            <div className="text-center">
              <div className="text-8xl mb-6">🔥🦆</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Liquidity Burned</h3>
              <p className="text-gray-600 text-balance">
                Feeling the heat? Utya's fired up and burning through all the liquidity, making waves in the market!
              </p>
            </div>
            <div className="text-center">
              <div className="text-8xl mb-6">🔍🦆</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Zero Taxes</h3>
              <p className="text-gray-600 text-balance">
                Utya tried to find taxes, but couldn't succeed. Maybe you will have better luck.
              </p>
            </div>
          </div>

          <Button className="bg-[#1DA1F2] hover:bg-[#1a91da] text-white px-12 py-6 text-lg font-semibold rounded-full">
            Memepaper
          </Button>
        </div>
      </section>

      {/* How to Buy Section */}
      <section className="bg-[#1DA1F2] text-white py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 text-balance">How to Buy?</h2>
          <p className="text-xl mb-16 text-balance">
            Here you will find instructions on how to purchase the $UTYA token.
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <div className="text-[#1DA1F2] text-2xl">💳</div>
              </div>
              <h3 className="text-xl font-bold mb-4">Create a Wallet</h3>
              <p className="text-sm opacity-90 text-balance">Download Tonkeeper wallet extension.</p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <div className="text-[#1DA1F2] text-2xl">💎</div>
              </div>
              <h3 className="text-xl font-bold mb-4">Get Some TON</h3>
              <p className="text-sm opacity-90 text-balance">
                To buy $UTYA, first fund your TON wallet. You can buy TON on Bybit, OKX or other exchanges.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <div className="text-[#1DA1F2] text-2xl">🔄</div>
              </div>
              <h3 className="text-xl font-bold mb-4">Go to Ston.fi</h3>
              <p className="text-sm opacity-90 text-balance">
                Visit Ston.fi, connect your wallet, and paste the $UTYA token address. Select $UTYA, confirm, and sign
                when prompted by Tonkeeper.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <div className="text-[#1DA1F2] text-2xl">🦆</div>
              </div>
              <h3 className="text-xl font-bold mb-4">Swap TON to $UTYA</h3>
              <p className="text-sm opacity-90 text-balance">
                Swap TON for $UTYA with zero taxes. Slippage settings may be required during market volatility.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Socials Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl lg:text-6xl font-bold text-[#1DA1F2] mb-8 text-balance">Our Socials</h2>
          <p className="text-xl text-gray-700 mb-12 text-balance">
            Follow us on our social media channels to get the latest updates, engage with our community, and be part of
            our exciting journey.
          </p>

          <div className="flex justify-center gap-6">
            <Button size="lg" className="bg-[#1DA1F2] hover:bg-[#1a91da] text-white rounded-full w-16 h-16 p-0">
              <Globe className="w-6 h-6" />
            </Button>
            <Button size="lg" className="bg-[#1DA1F2] hover:bg-[#1a91da] text-white rounded-full w-16 h-16 p-0">
              <Send className="w-6 h-6" />
            </Button>
            <Button size="lg" className="bg-[#1DA1F2] hover:bg-[#1a91da] text-white rounded-full w-16 h-16 p-0">
              <Twitter className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-[#1DA1F2] text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl lg:text-6xl font-bold mb-8 text-balance">FAQ</h2>
            <p className="text-xl text-balance">Here you'll find all the answers to frequently asked questions.</p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border-white/20">
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
                What is the origin story of the $UTYA?
              </AccordionTrigger>
              <AccordionContent className="text-white/90 pb-6">
                $UTYA originated from the beloved Telegram duck emoji that has brought joy to millions of users
                worldwide. Our community decided to create a token that represents this iconic symbol of happiness and
                connection.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border-white/20">
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
                Why choose $UTYA?
              </AccordionTrigger>
              <AccordionContent className="text-white/90 pb-6">
                $UTYA offers a unique combination of community-driven development, zero taxes, burned liquidity, and a
                renounced contract. It's more than just a token - it's a movement that brings people together through
                the power of the duck emoji.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border-white/20">
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
                What is the contract address for $UTYA?
              </AccordionTrigger>
              <AccordionContent className="text-white/90 pb-6">
                The contract address will be provided once the token is officially launched. Please follow our official
                social media channels for the most up-to-date information.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border-white/20">
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
                What is the maximum supply of $UTYA tokens?
              </AccordionTrigger>
              <AccordionContent className="text-white/90 pb-6">
                The maximum supply details will be announced in our official documentation. Stay tuned to our social
                media channels for complete tokenomics information.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border-white/20">
              <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline py-6">
                How can I help?
              </AccordionTrigger>
              <AccordionContent className="text-white/90 pb-6">
                You can help by joining our community, spreading the word about $UTYA, participating in discussions, and
                following our social media channels. Every duck counts in building our community!
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-8">
            <div className="text-6xl">🦆</div>
          </div>
          <div className="flex justify-center space-x-8 mb-8 text-gray-600">
            <a href="#" className="hover:text-[#1DA1F2] transition-colors">
              About
            </a>
            <a href="#" className="hover:text-[#1DA1F2] transition-colors">
              Advantages
            </a>
            <a href="#" className="hover:text-[#1DA1F2] transition-colors">
              How to Buy
            </a>
            <a href="#" className="hover:text-[#1DA1F2] transition-colors">
              Socials
            </a>
            <a href="#" className="hover:text-[#1DA1F2] transition-colors">
              FAQ
            </a>
          </div>
          <div className="text-center text-gray-500">© 2024 UTYA Token. All Rights Reserved</div>
        </div>
      </footer>
    </div>
  )
}
