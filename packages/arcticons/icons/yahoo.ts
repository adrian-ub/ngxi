import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsYahooIcon],svg[arcticons-yahoo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 15.27h7.299l4.25 10.874l4.305-10.873h7.107L17.76 41.01h-7.152l2.93-6.82z"></svg:path><svg:circle cx="29.591" cy="30.005" r="4.421" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M35.465 23.96h-7.96L34.57 6.987h7.93z"></svg:path>`,
})
export class ArcticonsYahooIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
