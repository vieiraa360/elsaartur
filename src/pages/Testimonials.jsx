import React from "react";
import { Star, Quote, Heart, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import Navigation from "../components/home/Navigation";
import Footer from "../components/home/Footer";
import MobileContactButton from "../components/home/MobileContactButton";

// Static testimonials data - retrieved from database
const staticTestimonials = [
  {
    id: "1",
    client_name: "Sharon",
    testimonial: "Words cannot express my gratitude for Elsas support. At the beginning of my sessions I was in turmoil, full of anger from the pain within. My inner child was locked away in a shed which I believed was her safe place for over 40 plus years Elsa opened my eyes to what was within which aloud me to start the process of change from the inside out, my inner child is finally free from the shed, I am free to live my new life. Thank you so much Elsa I am truly grateful for all that you have done for me. I have my power back, a beautiful life, and I choose to keep it, Elsa you are a true inspiration to all human beings.",
    rating: 5,
    featured: true,
    published: true,
    created_date: "2024-10-19"
  },
  {
    id: "2",
    client_name: "JD",
    testimonial: "I had the opportunity to work alongside this beautiful soul. who then became my mentor and personal counsellor.\n\nHer counselling style was exceptional, she is gentle and knew exactly what intervention to use to help you to your next phase of your journey.\n\nI learnt so much about myself and has an individual. I will always be grateful for knowledge and experiences with you.\n\nEspecially my inner child work that i did with you. That was a profound and an experience i will never forget",
    rating: 5,
    featured: true,
    published: true,
    created_date: "2024-10-19"
  },
  {
    id: "3",
    client_name: "Client from residential rehab",
    testimonial: "Elsa, what can I say to do justice to the changes you helped me make. In the 4 months I worked with you in a residential rehab facility you broke down the walls I had created to hide behind, you gave me the confidence to talk about things that I had always avoided, you always saw straight through my bullsh#t and even when I was incapable of behaving in the manner expected of me by the facility you always persevered with me and even came to continue our sessions when I was moved to a different rehab. You are a truly remarkable lady and your approach and technique to your work was 1000 times more powerful than my prior experience.\n\nA lady I found it impossible to lie to, you broke down my defensive front/character that I had \"acted\" since early teenage years and basically reset and rebuilt me to be my true self and achieve my true potential. I am honnered to write a testimonial for you, 2 years down the line and I can still here your voice in my head, the voice of reason!\n\nIt is no exaggeration to say you have been one of the most influential people in my life and I know that the life I have today and the happiness and freedom I have found is largely down to you and what you taught me about myself.\n\nA remarkable councilor and a wonderful lady.\n\nThank you for everything and to anyone considering starting sessions with Elsa, I urge you to give it a go, be patient and trust the process. I honestly believed there was no hope for me and today I am loving life and Elsa has been the author or everything positive that has happened in my life since working with her.",
    rating: 5,
    featured: true,
    published: true,
    created_date: "2024-10-19"
  },
  {
    id: "4",
    client_name: "AV",
    testimonial: "It's so freeing to allow the feelings release from their internal prison, and let their inner child out to grow into strong men with help of an angel called Elsa. Grazie per tutti. Mia vita molta brava!",
    rating: 5,
    featured: true,
    published: true,
    created_date: "2024-10-19"
  },
  {
    id: "5",
    client_name: "SM",
    testimonial: "I worked with Elsa with some past trauma that has been with me all along triggering over reacting behaviors.\n\nIt took me 3 sessions to soft it up and started to work together with her. She is very intuitive and also very clever and professional. She is honest and effective person and professional and that helped me to trust her with my inner journey. She asked me to do some brilliant home work which unlocked many of the traumatic layers that I have been carrying out with me since I was a baby.\n\nShe is a highly regarded psychotherapist and life coach and I am so grateful to Elsa that she facilitate her huge expertise on my case. Now I am happily discharged and It makes a massive difference in my life to be able to speak the truth and let the feelings come and go without any Taboos.\n\nThanks Elsa for your wonderful services. You are doing a big job helping us to be a better person at ease with ourselves. Becoming one as a whole and including all our parts has been the best thing that happened to me in a long time.",
    rating: 5,
    featured: true,
    published: true,
    created_date: "2024-10-19"
  },
  {
    id: "6",
    client_name: "Client in addiction recovery",
    testimonial: "I went to see Elsa midway through 2020 due to my drinking. I'd been sober before for a long time, but decided to try drinking again (only a short time before lockdown) and 9 months later was in an utter mess – suicidal, frightened to go out, drinking round the clock, and losing control of my business and my personal life. I didn't understand why it had gotten so bad so quickly, so I thought some counselling might help. What I didn't realise at that time was that I was in a highly abusive, controlling and volatile relationship, that I couldn't talk about my ex or my friends and family without bursting into tears, and I'd spent the last 4 years silently bubbling with anger, guilt, regret and emotion that I had no idea how to stop/overcome.\n\nI thought I needed counselling to fix my drinking but I now release I was drinking because everything else (both inside me and in my life around me) was falling apart and I didn't know how to cope except with a bottle. Bit by bit I learned how to like and then love myself, and put myself back together one piece at a time. I got sober (and will start 2022 by reaching my 1 year), I realised the awful relationship I was in and finally left him, I dealt with my past, and I put some things to rest that I am confident would still have been tearing me apart in 20 years if I hadn't found Elsa. I also learned a huge amount about myself as a person (that explained SO MUCH of my behaviours and emotions!) that I will use, build on and carry with me for the rest of my life.\n\nSome sessions were tough, I was used to not talking about my feelings and just trying to laugh them off or bury them because it was too painful, but I'm so glad I persisted because seeing Elsa has utterly transformed my life. I was going down a very self-destructive path and without Elsa's warmth, kindness, knowledge and guidance, I would still be on that path and goodness knows where I would be. Elsa – thank you for being so patient, for never getting frustrated when I had the odd slip or a bad week, for being such a reliable and trustworthy and highly skilled counsellor, and most of all for believing in me before I could do that for myself. To say I highly recommend you would be an understatement. You have changed (and probably saved) my life and I will be forever grateful.",
    rating: 5,
    featured: true,
    published: true,
    created_date: "2024-10-19"
  },
  {
    id: "7",
    client_name: "Online therapy client",
    testimonial: "Elsa offered me a consultation appointment online, to discuss my needs and to see if online felt comfortable (as I was apprehensive and thought I would prefer face to face).\n\nThis worked surprisingly well; it meant I remained in my own home, where I felt comfortable and safe anyway, and being online did not detract from forming an easy, open, therapeutic relationship.\n\nI spent a year in therapy with Elsa. I was encouraged to trust the process (as I have had therapy before and thought I 'knew what I needed').\n\nElsa is a gifted and highly skilled therapist, I trust her implicitly. She provided perspective I could not see, insight and understanding- I felt heard and seen thoroughly (sometimes that's quite uncomfortable!)\n\nSo much healing has taken place and our sessions have impacted my life profoundly. I have been able to move forward significantly with the issues I arrived with and continue my healing journey, better equipped and with a much deeper understanding of myself.\n\nI recommend Elsa wholeheartedly, and feel grateful for the time and space I was given, and gave to myself through this beautiful, challenging, life changing process.",
    rating: 5,
    featured: true,
    published: true,
    created_date: "2024-10-19"
  },
  {
    id: "8",
    client_name: "Client recovering from eating disorder",
    testimonial: "Elsa helped me begin to find positivity and light in my life again.\n\nI reached out to Elsa when I was struggling with an eating disorder and low self-esteem. This was a difficult moment in my recovery process because I had only begun to share my story with others and was on the waiting list for an appointment with the eating disorder service.\n\nI originally went to Elsa for advice on how to deal with my thoughts and feelings. Not only did Elsa help me through those thoughts, she showed me how to look at life from a different, more positive perspective.\n\nShe helped me understand, manage and begin to take control of my disordered feelings. With Elsa support, I connected with my old self again reminding me of the happier times in my life.\n\nWithout Elsa's wonderful support and wise words, I wouldn't be in the place I am today. I truly feel more free, happier and at peace with my mind and life.\n\nI absolutely recommend Elsa if you are struggling or need a friendly face to share your feelings!\n\nThank you for everything Elsa!",
    rating: 5,
    featured: true,
    published: true,
    created_date: "2024-10-19"
  },
  {
    id: "9",
    client_name: "Former Supervisee",
    testimonial: "Elsa was my supervisor for several years from before I qualified. She supported me through thick and thin, sharing her wisdom, helpful insights and ethical guidance.\n\nI appreciated her ability to step into a helicopter, where she had a far reaching view from above, giving me more clarity about my work.\n\nThank you Elsa, I have learnt so much from you.",
    rating: 5,
    featured: true,
    published: true,
    created_date: "2024-10-19"
  },
  {
    id: "10",
    client_name: "L (Parent of client)",
    testimonial: "Thank you Elsa for helping my son. I speak to him regularly and he is very pleased with your support. He says you are the best support he has received so far.\n\nI thank you and may you stay blessed.",
    rating: 5,
    featured: false,
    published: true,
    created_date: "2024-10-19"
  },
  {
    id: "11",
    client_name: "Professional colleague",
    testimonial: "It has always been a great pleasure working with you and I hope we will still maintain contact. The assistance and support you have given to C has been wonderful and she has made great positive changes whereby she has been able to take on the senior support worker role recently.",
    rating: 5,
    featured: false,
    published: true,
    created_date: "2024-10-19"
  },
  {
    id: "12",
    client_name: "Sarah M.",
    testimonial: "Working with Elsa has been transformative. Her trauma-informed approach helped me understand my patterns and find healing I didn't think was possible. I feel more confident and at peace than I have in years.",
    rating: 5,
    featured: false,
    published: true,
    created_date: "2024-10-19"
  },
  {
    id: "13",
    client_name: "James R.",
    testimonial: "Elsa's addiction recovery expertise gave me tools to stay on track when I thought I'd run out of options. Her compassionate, non-judgmental approach made all the difference.",
    rating: 5,
    featured: false,
    published: true,
    created_date: "2024-10-19"
  },
  {
    id: "14",
    client_name: "Anonymous",
    testimonial: "I appreciate how Elsa creates such a safe space. Being able to do therapy in Portuguese meant I could express myself fully. She truly understands cultural displacement.",
    rating: 5,
    featured: false,
    published: true,
    created_date: "2024-10-19"
  }
];

export default function Testimonials() {
  const featuredTestimonials = staticTestimonials.filter(t => t.featured && t.published);
  const regularTestimonials = staticTestimonials.filter(t => !t.featured && t.published);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#C5DDE0]/20 to-white pt-24">
      <Navigation />

      <div className="bg-gradient-to-br from-[#C5DDE0] via-white to-[#F4CCC8]/30 text-[#0D3D4D] py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-light mb-6">Stories of Healing</h1>
            <p className="text-xl font-light text-[#0D3D4D]/90 max-w-3xl mx-auto leading-relaxed">
              Real experiences from people who took the courageous step toward healing. Each journey is unique, each story a testament to the power of compassionate therapy.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {staticTestimonials.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 font-light text-lg">No testimonials yet.</p>
          </div>
        ) : (
          <>
            {featuredTestimonials.length > 0 && (
              <div className="mb-16">
                <div className="flex items-center justify-center gap-3 mb-12">
                  <Sparkles className="w-6 h-6 text-[#1B7A9C]" />
                  <h2 className="text-2xl font-light text-[#0D3D4D]">Featured Stories</h2>
                  <Sparkles className="w-6 h-6 text-[#1B7A9C]" />
                </div>
                
                <div className="space-y-8">
                  {featuredTestimonials.map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className="bg-gradient-to-br from-white to-[#C5DDE0]/20 rounded-3xl shadow-2xl p-10 md:p-12 relative border-2 border-[#1B7A9C]/30"
                    >
                      <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-[#1B7A9C] rounded-full flex items-center justify-center shadow-lg">
                        <Quote className="w-6 h-6 text-white" />
                      </div>

                      <div className="flex justify-center gap-1 mb-6 mt-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-6 h-6 ${
                              i < testimonial.rating
                                ? "fill-[#F4CCC8] text-[#F4CCC8]"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>

                      <blockquote className="text-gray-800 text-lg md:text-xl font-light leading-relaxed text-center mb-8 italic whitespace-pre-line">
                        "{testimonial.testimonial}"
                      </blockquote>

                      <div className="text-center">
                        <p className="text-[#0D3D4D] text-lg font-normal mb-1">
                          {testimonial.client_name}
                        </p>
                        {testimonial.created_date && (
                          <p className="text-gray-500 text-sm font-light">
                            {new Date(testimonial.created_date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {regularTestimonials.length > 0 && (
              <div>
                {featuredTestimonials.length > 0 && (
                  <h2 className="text-3xl font-light text-[#0D3D4D] text-center mb-12">
                    More Voices of Transformation
                  </h2>
                )}
                
                <div className="grid md:grid-cols-2 gap-8">
                  {regularTestimonials.map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className="bg-white rounded-2xl shadow-xl p-8 relative hover:shadow-2xl transition-shadow duration-300 border border-[#C5DDE0]/50"
                    >
                      <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#F4CCC8] to-[#C5DDE0] rounded-full flex items-center justify-center shadow-lg">
                        <Quote className="w-8 h-8 text-white" />
                      </div>

                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-5 h-5 ${
                              i < testimonial.rating
                                ? "fill-[#F4CCC8] text-[#F4CCC8]"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>

                      <blockquote className="text-gray-700 text-lg font-light leading-relaxed mb-6 italic whitespace-pre-line">
                        "{testimonial.testimonial}"
                      </blockquote>

                      <div className="pt-4 border-t border-[#C5DDE0]">
                        <p className="text-[#0D3D4D] text-lg font-normal mb-1">
                          {testimonial.client_name}
                        </p>
                        {testimonial.created_date && (
                          <p className="text-gray-500 text-sm font-light">
                            {new Date(testimonial.created_date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </>
        )}
      </div>

      <div className="max-w-5xl mx-auto px-6 pb-16">
        <div className="bg-gradient-to-br from-[#C5DDE0] via-white to-[#F4CCC8]/30 rounded-3xl p-12 text-center shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-light mb-4 text-[#0D3D4D]">
            Your story could be next
          </h2>
          <p className="text-lg font-light text-[#0D3D4D]/90 leading-relaxed mb-8 max-w-2xl mx-auto">
            Every healing journey begins with a single step. Take yours today with a free, no-obligation consultation.
          </p>
          <Link
            to={createPageUrl("Contact")}
            className="inline-block bg-[#1B7A9C] hover:bg-[#0D3D4D] text-white px-10 py-5 rounded-full font-normal text-lg tracking-wide transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Start Your Journey
          </Link>
        </div>
      </div>

      <div className="bg-gradient-to-br from-[#C5DDE0]/30 to-[#F4CCC8]/20 py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gray-700 font-light text-lg leading-relaxed mb-4">
            <strong className="font-normal text-[#0D3D4D]">Note:</strong> All testimonials are from real clients who have graciously shared their experiences. Names may be changed or anonymized to protect privacy and confidentiality.
          </p>
          <div className="flex items-center justify-center gap-6 mt-8">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#1B7A9C] rounded-full flex items-center justify-center">
                <Heart className="w-5 h-5 text-white" />
              </div>
              <span className="text-[#0D3D4D] font-light">20+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-[#0D3D4D] rounded-full flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-[#0D3D4D] font-light">BACP Accredited</span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center py-16">
        <Link
          to={createPageUrl("Home")}
          className="inline-block text-[#1B7A9C] hover:text-[#0D3D4D] font-light transition-colors text-lg"
        >
          ← Back to Home
        </Link>
      </div>

      <Footer />
      <MobileContactButton />
    </div>
  );
}