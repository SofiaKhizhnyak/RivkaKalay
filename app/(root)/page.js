import About from "@/components/About";
import CustomerRecommend from "@/components/CustomerRecommend";
import TreatmentsGallery from "@/components/TreatmentsGallery";

export default function Home() {
  return (
    <div>
      <section>
        <About />
      </section>
      <section>
        <TreatmentsGallery />
      </section>
      <section>
        <CustomerRecommend />
      </section>
    </div>
  );
}
