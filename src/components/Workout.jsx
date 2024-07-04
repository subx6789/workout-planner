import SectionWrapper from "./SectionWrapper";
import ExerciseCard from "./ExerciseCard";
import Button from "./Button";
export default function Workout({ workout }) {
  return (
    <SectionWrapper
      id={"workout"}
      header={"Welcome to"}
      title={["The", "Danger", "Zone"]}
    >
      <div className="flex flex-col gap-4">
        {workout.map((exercise, i) => {
          return <ExerciseCard exercise={exercise} index={i} key={i} />;
        })}
      </div>
      <Button func={()=>{
        window.location.href="#generate"
      }} text={"Start Over"}/>
    </SectionWrapper>
  );
}
