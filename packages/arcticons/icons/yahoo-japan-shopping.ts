import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsYahooJapanShoppingIcon],svg[arcticons-yahoo-japan-shopping-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="14.069" cy="38.699" r="1.729" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="29.792" cy="38.699" r="1.729" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M5.5 11.685h31.203l-4.65 20.788H10.15zm26.552 20.788v3.93H11.33m25.373-24.718l.92-4.113H42.5m-21.4 11.66v5.695m4.812-5.695v5.695m-9.622-5.695v5.695"></svg:path>`,
})
export class ArcticonsYahooJapanShoppingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
