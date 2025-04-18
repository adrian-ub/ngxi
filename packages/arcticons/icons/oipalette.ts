import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOipaletteIcon],svg[arcticons-oipalette-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.5 5.5h-29a4 4 0 0 0-4 4v29a4 4 0 0 0 4 4h29a4 4 0 0 0 4-4v-29a4 4 0 0 0-4-4"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.331 35.876s6.923-1.06 6.923-3.49c.186-2.1-2.378-1.07-2.458-2.992s9.705-7.445 5.771-13.252s-14.081-5.317-19.45-1.389s-8.964 11.79-4.809 17.42c3.009 3.931 6.115 4.559 14.023 3.703l-10.366-14.32l6.256-4.904c4.901-3.204 11.177 4.442 5.877 8.441l-6.096 4.803"></svg:path>`,
})
export class ArcticonsOipaletteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
