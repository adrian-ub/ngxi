import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPrintDownUpCircleIcon],svg[pepicons-print-down-up-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"><svg:path d="M13.5 26C20.404 26 26 20.404 26 13.5S20.404 1 13.5 1S1 6.596 1 13.5S6.596 26 13.5 26m0-2C19.299 24 24 19.299 24 13.5S19.299 3 13.5 3S3 7.701 3 13.5S7.701 24 13.5 24" opacity=".2"></svg:path><svg:g opacity=".2"><svg:path d="M14.44 12.56a1.5 1.5 0 0 1 0-2.12l3-3a1.5 1.5 0 0 1 2.12 2.12l-3 3a1.5 1.5 0 0 1-2.12 0"></svg:path><svg:path d="M22.56 12.56a1.5 1.5 0 0 1-2.12 0l-3-3a1.5 1.5 0 0 1 2.12-2.12l3 3a1.5 1.5 0 0 1 0 2.12"></svg:path><svg:path d="M18.5 9a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-3 0v-8A1.5 1.5 0 0 1 18.5 9m-3.94 7.44a1.5 1.5 0 0 1 0 2.12l-3 3a1.5 1.5 0 0 1-2.12-2.12l3-3a1.5 1.5 0 0 1 2.12 0"></svg:path><svg:path d="M6.44 16.44a1.5 1.5 0 0 1 2.12 0l3 3a1.5 1.5 0 0 1-2.12 2.12l-3-3a1.5 1.5 0 0 1 0-2.12"></svg:path><svg:path d="M10.5 20A1.5 1.5 0 0 1 9 18.5v-8a1.5 1.5 0 1 1 3 0v8a1.5 1.5 0 0 1-1.5 1.5"></svg:path></svg:g><svg:path d="M13.646 10.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0"></svg:path><svg:path d="M20.354 10.354a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708l3 3a.5.5 0 0 1 0 .708"></svg:path><svg:path d="M17 7a.5.5 0 0 1 .5.5V17a.5.5 0 0 1-1 0V7.5A.5.5 0 0 1 17 7m-4.646 8.646a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708l3-3a.5.5 0 0 1 .708 0"></svg:path><svg:path d="M5.646 15.646a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708"></svg:path><svg:path d="M9 19a.5.5 0 0 1-.5-.5V9a.5.5 0 0 1 1 0v9.5a.5.5 0 0 1-.5.5"></svg:path><svg:path d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5"></svg:path></svg:g>`,
})
export class PepiconsPrintDownUpCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
