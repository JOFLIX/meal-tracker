import { Component } from '@angular/core';
import { Meal } from './meal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Let`s track our meals!';
   public MealsList: Meal[] = [
     new Meal("Pizza", "Circular", 450),
     new Meal("Tilapia", "Fresh", 780),
     new Meal("Chicken", "Fries", 250),
     new Meal("Beans", "Canned", 258)

 ];
 selectedMeal:Meal = null;
 addMeal(NewMeal:Meal){
   this.MealsList.push(NewMeal);
 }
 showDetails(clickedMeal: Meal){
     this.selectedMeal = clickedMeal;
 }
 finishedEditing() {
    this.selectedMeal = null;
  }
deleteMeal(MealToDel:Meal){
  var index: number = this.MealsList.indexOf(MealToDel);
  this.MealsList.splice(index, 1);
}
}
