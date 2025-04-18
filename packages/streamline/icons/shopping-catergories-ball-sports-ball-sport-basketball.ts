import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineShoppingCatergoriesBallSportsBallSportBasketballIcon],svg[streamline-shopping-catergories-ball-sports-ball-sport-basketball-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:circle cx="7" cy="7" r="6.5"></svg:circle><svg:path d="M7 .5v13m-4.9-2.23A5 5 0 0 0 4.5 7a5 5 0 0 0-2.4-4.27m9.8 0a5 5 0 0 0 0 8.54"></svg:path></svg:g>`,
})
export class StreamlineShoppingCatergoriesBallSportsBallSportBasketballIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
