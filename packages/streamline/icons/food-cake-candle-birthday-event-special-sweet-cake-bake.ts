import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineFoodCakeCandleBirthdayEventSpecialSweetCakeBakeIcon],svg[streamline-food-cake-candle-birthday-event-special-sweet-cake-bake-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:rect width="13" height="8" x=".5" y="5.5" rx="1"></svg:rect><svg:path d="M3 3.5v-2m4 2v-2m4 2v-2m2.5 8.5H13a2 2 0 0 1-2-2a2 2 0 0 1-4 0a2 2 0 0 1-4 0a2 2 0 0 1-2 2H.5"></svg:path></svg:g>`,
})
export class StreamlineFoodCakeCandleBirthdayEventSpecialSweetCakeBakeIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
