import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFoodPizza20FilledIcon],svg[fluent-food-pizza-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 3.956c0-1.095.895-2.022 2.03-1.952c4.447.274 8.347 1.77 11.402 4.687c.867.827.696 2.178-.203 2.868l-.244.188l-.397-.441l-.007-.007C13.645 6.284 9.39 4.514 4.871 4.514H4zm0 1.557V16.5c0 1.232 1.406 1.938 2.395 1.201l1.608-1.198v.002a1 1 0 0 0 2 0v-2.002a.5.5 0 0 1 .996-.059v.56a1 1 0 0 0 2 0v-2.238c.825-.605 2.086-1.564 3.19-2.408l-.331-.369C13.119 7.181 9.13 5.513 4.87 5.513zm4.248 2.742a.747.747 0 1 1-1.495-.001a.747.747 0 0 1 1.495 0m2.975 2a.747.747 0 1 1-1.495 0a.747.747 0 0 1 1.495 0m-2.967 2.502a.751.751 0 1 1-1.503 0a.751.751 0 0 1 1.503 0"></svg:path>`,
})
export class FluentFoodPizza20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
