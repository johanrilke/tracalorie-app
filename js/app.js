class CalorieTracker {
    constructor() {
        // Base variables

        this._calorieLimit = 2000;
        this._totalCalories = 0;
        this._meals = [];
        this._workouts = [];

        // Run Methods upon Class Instantiation
        
        this._displayCaloriesLimit();
        this._displayCaloriesTotal();
        this._displayCaloriesConsumed();
        this._displayCaloriesBurned();
        this._displayCaloriesRemaining();
        this._displayCaloriesProgress();

    }

    // Public Methods

    addMeal(meal) {
        this._meals.push(meal);
        this._totalCalories += meal.calories;
        this._render();
    }

    addWorkout(workout) {
        this._workouts.push(workout);
        this._totalCalories -= workout.calories;
        this._render();
    }

    // Private Methods
    
    _displayCaloriesTotal() {
        const totalCaloriesEl = document.querySelector('#calories-total');
        totalCaloriesEl.innerHTML = this._totalCalories;
    }

    _displayCaloriesLimit() {
        const calorieLimitEl = document.querySelector('#calories-limit');
        calorieLimitEl.innerHTML = this._calorieLimit;
    }

    _displayCaloriesConsumed() {
        const caloriesConsumedEl = document.querySelector('#calories-consumed');

        const consumed = this._meals.reduce((total, meal) => total + meal.calories, 0);

        caloriesConsumedEl.innerHTML = consumed;
    }

    _displayCaloriesBurned() {
        const caloriesBurnedEl = document.querySelector('#calories-burned');

        const burned = this._workouts.reduce((total, workout) => total + workout.calories, 0);

        caloriesBurnedEl.innerHTML = burned;
    }

    _displayCaloriesRemaining() {
        const caloriesRemainingEl = document.querySelector('#calories-remaining');

        const remaining = this._calorieLimit - this._totalCalories;

        caloriesRemainingEl.innerHTML = remaining;
    }

    _displayCaloriesProgress() {
        const progressEl = document.getElementById('calorie-progress');
        const percentage = (this._totalCalories / this._calorieLimit) * 100;
        const width = Math.min(percentage, 100);
        progressEl.style.width = `${width}%`;
    }

    _render() {
        this._displayCaloriesTotal();
        this._displayCaloriesConsumed();
        this._displayCaloriesBurned();
        this._displayCaloriesRemaining();
        this._displayCaloriesProgress();
    }
}

class Meal {
    constructor(name, calories) {
        this.id = Math.random().toString(16).slice(2);
        this.name = name;
        this.calories = calories;
    }
}

class Workout {
    constructor(name, calories) {
        this.id = Math.random().toString(16).slice(2);
        this.name = name;
        this.calories = calories;
    }
}

const tracker = new CalorieTracker();

const breakfast = new Meal('Breakfast', 400);
tracker.addMeal(breakfast);
const lunch = new Meal('Lunch', 750);
tracker.addMeal(lunch);

const run = new Workout('Morning Run', 320);
tracker.addWorkout(run);
