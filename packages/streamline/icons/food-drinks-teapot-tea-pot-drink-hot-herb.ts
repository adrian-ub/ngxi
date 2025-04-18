import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFoodDrinksTeapotTeaPotDrinkHotHerbIcon],svg[streamline-food-drinks-teapot-tea-pot-drink-hot-herb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M8 6a5.51 5.51 0 0 0-4.46 2.28L1.5 7l-1 1l2 3.5v1a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1v-1A5.5 5.5 0 0 0 8 6Zm0 0V4.5"></svg:path><svg:path d="M4 7.73V4.5a4 4 0 0 1 8 0v3.23"></svg:path></svg:g>`,
})
export class StreamlineFoodDrinksTeapotTeaPotDrinkHotHerbIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
