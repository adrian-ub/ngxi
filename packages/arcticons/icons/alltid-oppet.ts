import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAlltidOppetIcon],svg[arcticons-alltid-oppet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 8.813h-.1c-4.7-4.7-12.3-4.7-16.9 0c-4.7 4.7-4.7 12.3 0 16.9h0l17 17l17-17c4.7-4.7 4.7-12.3 0-16.9s-12.4-4.7-17 0"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.7 25.013h-3c-1.6 0-2.8-1.3-2.8-2.8v-10"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.7 27.713h-3.1c-2.9 0-5.3-2.4-5.3-5.3v-10.1m-11.2 12.7h3c1.6 0 2.8-1.3 2.8-2.8v-10"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.1 27.713h3.1c2.9 0 5.3-2.4 5.3-5.3v-10.1"></svg:path>`,
})
export class ArcticonsAlltidOppetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
