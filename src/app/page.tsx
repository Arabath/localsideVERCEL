import BackgroundSection from "../components/template/BackgroundSection";
import BgGlassmorphism from "../components/template/BgGlassmorphism";
import SectionGridAuthorBox from "../components/template/SectionGridAuthorBox";
import SectionSliderNewCategories from "../components/template/SectionSliderNewCategories";
import SectionSubscribe2 from "../components/template/SectionSubscribe2";
import SectionHeroArchivePage from "../app/(server-components)/SectionHeroArchivePage";

const HomePage1 = () => {
  return (
    <div className={`nc-ListingStayPage relative `}>
      <BgGlassmorphism />

      {/* SECTION HERO */}
      <div className="container pt-10 pb-24 lg:pt-16 lg:pb-28">
        <SectionHeroArchivePage
          currentPage="Experiences"
          currentTab="Experiences"
          listingType={
            <>
              <i className="text-2xl las la-umbrella-beach"></i>
              <span className="ml-2.5">1599 experiences</span>
            </>
          }
        />
      </div>



      <div className="container overflow-hidden">
        {/* SECTION 1 */}
        <div className="relative py-16">
          <BackgroundSection />
          <SectionSliderNewCategories
            heading="Explore by types of stays"
            subHeading="Explore houses based on 10 types of stays"
            categoryCardType="card5"
            itemPerRow={5}
            sliderStyle="style2"
          />
        </div>

        {/* SECTION */}
        <SectionSubscribe2 className="py-24 lg:py-28" />

        {/* SECTION */}
        <div className="relative py-16 mb-24 lg:mb-28">
          <BackgroundSection className="bg-orange-50 dark:bg-black dark:bg-opacity-20 " />
          <SectionGridAuthorBox />
        </div>
      </div>
    </div>
  );
};

export default HomePage1;