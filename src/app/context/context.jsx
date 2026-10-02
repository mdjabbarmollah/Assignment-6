'use client';

import React, { createContext, useState } from 'react';
import toast from 'react-hot-toast';
export const workoutContext = createContext({});

const Contextprovider = ({children}) => {

  const [selectedworkouts, setSelectedWorkouts] = useState([]);

  const [selectedworkoutsforsave, setSelectedWorkoutsforsave] = useState([]);

  const addWorkout = (workout) => {

    if (selectedworkouts.some((item) => item.id === workout.id)) {
      toast.error("Already added today's plan")
      return;
    }
    if (selectedworkouts.length >= 5) {
      toast.error('Your plan is full.Maximum limit 5')
      return;
    }

    setSelectedWorkouts((prev) => [...prev, workout]);
    toast.success("Added to today's plan")
  };

  const removedWorkout = (id) => {
    setSelectedWorkouts((prev) => prev.filter((item) => item.id !== id));
    toast.success('Remove from plan')
  };

  const forsave = (workout) => {
    if (selectedworkoutsforsave.some((item) => item.id === workout.id)) {
      toast.error('Already added');
      return;
    }
    
    setSelectedWorkoutsforsave((prev) => [...prev, workout]);
    toast.success("Saved for later")

  };

  const removedsaved = (id) => {
    setSelectedWorkoutsforsave((prev) => prev.filter((item) => item.id !== id))
    toast.success("Removed")
  };
  
  const markdone = (id) => {
    setSelectedWorkouts((prev) =>
      prev.map((item) => {

        if (item.id === id){
          const updatedItem = { ...item, done: true };
          return updatedItem;
        }
        else {
          return item;
        }
      })
    );
    toast.success('Marked as done');
  }
  
  const metrics = {
    exercises: selectedworkouts.length,
    minutes: selectedworkouts.reduce((total, item) => total + (item.duration || 0), 0),
    calories: selectedworkouts.reduce((total, item) => total + (item.caloriesBurned || 0),0),

  };

  const sharedataforcomponent = {
 selectedworkoutsforsave,
    selectedworkouts,
    addWorkout,
    forsave,
    removedWorkout,
    removedsaved,
    markdone,
    metrics,
  }

  return <workoutContext.Provider value={sharedataforcomponent}>
    {children}
  </workoutContext.Provider>

};

export default Contextprovider;
