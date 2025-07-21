import React from 'react';

const WorkoutDietPlans = () => {
  const menWorkoutPlan = [
    {
      day: 'Monday',
      workout: 'Chest and Triceps',
      diet: 'High protein breakfast, grilled chicken with vegetables for lunch, protein shake for dinner',
    },
    {
      day: 'Tuesday',
      workout: 'Back and Biceps',
      diet: 'Oatmeal with fruits for breakfast, fish with quinoa for lunch, protein bar for dinner',
    },
    {
      day: 'Wednesday',
      workout: 'Legs',
      diet: 'Scrambled eggs with whole wheat toast for breakfast, lean beef with brown rice for lunch, Greek yogurt for dinner',
    },
    {
      day: 'Thursday',
      workout: 'Shoulders and Abs',
      diet: 'Smoothie with spinach and protein powder for breakfast, grilled salmon with sweet potato for lunch, mixed nuts for dinner',
    },
    {
      day: 'Friday',
      workout: 'Cardio and Core',
      diet: 'Protein pancakes for breakfast, turkey sandwich with whole grain bread for lunch, cottage cheese for dinner',
    },
    // Add more days as needed
  ];

  const womenWorkoutPlan = [
    {
      day: 'Monday',
      workout: 'Legs and Glutes',
      diet: 'Smoothie with spinach and protein powder for breakfast, grilled salmon with sweet potato for lunch, Greek yogurt for dinner',
    },
    {
      day: 'Tuesday',
      workout: 'Shoulders and Abs',
      diet: 'Egg white omelette for breakfast, turkey sandwich with whole grain bread for lunch, mixed nuts for dinner',
    },
    {
      day: 'Wednesday',
      workout: 'Back and Biceps',
      diet: 'Oatmeal with fruits for breakfast, fish with quinoa for lunch, protein bar for dinner',
    },
    {
      day: 'Thursday',
      workout: 'Chest and Triceps',
      diet: 'High protein breakfast, grilled chicken with vegetables for lunch, protein shake for dinner',
    },
    {
      day: 'Friday',
      workout: 'Cardio and Core',
      diet: 'Protein pancakes for breakfast, tofu stir-fry with brown rice for lunch, Greek yogurt for dinner',
    },
    // Add more days as needed
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Workout and Diet Plans</h2>

      <div className="row">
        <div className="col-md-6">
          <h3 className="mb-3">Men's Plan</h3>
          <div className="accordion" id="menAccordion">
            {menWorkoutPlan.map((plan, index) => (
              <div className="accordion-item" key={index}>
                <h2 className="accordion-header" id={`menHeading${index}`}>
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#menCollapse${index}`} aria-expanded="true" aria-controls={`menCollapse${index}`}>
                    {plan.day}
                  </button>
                </h2>
                <div id={`menCollapse${index}`} className="accordion-collapse collapse" aria-labelledby={`menHeading${index}`} data-bs-parent="#menAccordion">
                  <div className="accordion-body">
                    <p><strong>Workout:</strong> {plan.workout}</p>
                    <p><strong>Diet:</strong> {plan.diet}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-md-6">
          <h3 className="mb-3">Women's Plan</h3>
          <div className="accordion" id="womenAccordion">
            {womenWorkoutPlan.map((plan, index) => (
              <div className="accordion-item" key={index}>
                <h2 className="accordion-header" id={`womenHeading${index}`}>
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#womenCollapse${index}`} aria-expanded="true" aria-controls={`womenCollapse${index}`}>
                    {plan.day}
                  </button>
                </h2>
                <div id={`womenCollapse${index}`} className="accordion-collapse collapse" aria-labelledby={`womenHeading${index}`} data-bs-parent="#womenAccordion">
                  <div className="accordion-body">
                    <p><strong>Workout:</strong> {plan.workout}</p>
                    <p><strong>Diet:</strong> {plan.diet}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDietPlans;
