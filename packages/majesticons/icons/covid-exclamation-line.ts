import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsCovidExclamationLineIcon],svg[majesticons-covid-exclamation-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12a7 7 0 0 1 7-7m-7 7H2m3 0c0 1.933.784 3.683 2.05 4.95L4.5 19.5M12 5V2m0 3c1.933 0 3.683.784 4.95 2.05L19.5 4.5M12 2h2m-2 0h-2M2 12v-2m0 2v2m17.5-9.5L18 3m1.5 1.5L21 6M4.5 4.5L6 3M4.5 4.5L3 6m1.5-1.5L7 7M4.5 19.5L6 21m-1.5-1.5L3 18m13 1h.001M9 10.5A1.5 1.5 0 0 1 10.5 9m5.501 7L16 13m6 3a6 6 0 1 1-12 0a6 6 0 0 1 12 0"></svg:path>`,
})
export class MajesticonsCovidExclamationLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
