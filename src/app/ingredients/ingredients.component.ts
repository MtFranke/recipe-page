import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {

  grahamCrackerCrustArr: string[] = [
    '1 and 1/2 cups (150g) <b>graham cracker crumbs</b> (about 10 full sheet graham crackers)',
    '5 Tablespoons (70g) <b>unsalted butter</b>, melted',
    '1/4 cup (50g) <b>granulated sugar</b>'
  ];
  cheeseCakeArr: string[] = [
    'four 8-ounce blocks (904g) full-fat <b>cream cheese<b>, softened to room temperature',
    '1 cup (200g) <b>granulated sugar</b>',
    '1 cup (240g) full-fat <b>sour cream<b>, at room temperature',
    '1 teaspoon <b>pure vanilla extract</b>',
    '2 teaspoons <b>fresh lemon juice</b> (optional, but recommended)',
    '3 large <b>eggs</b>, at room temperature',
    'topping suggestions: <i>salted caramel, lemon curd, strawberry topping, chocolate ganache, red wine chocolate ganache, fresh fruit, whipped cream, or raspberry sauce</i> (recipe in notes)'
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
