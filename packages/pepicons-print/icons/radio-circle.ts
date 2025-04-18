import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPrintRadioCircleIcon],svg[pepicons-print-radio-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M13.5 26C20.404 26 26 20.404 26 13.5S20.404 1 13.5 1S1 6.596 1 13.5S6.596 26 13.5 26m0-2C19.299 24 24 19.299 24 13.5S19.299 3 13.5 3S3 7.701 3 13.5S7.701 24 13.5 24" clip-rule="evenodd" opacity=".2"></svg:path><svg:g opacity=".2"><svg:path d="M7 13a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v6a3 3 0 0 1-3 3H10a3 3 0 0 1-3-3z"></svg:path><svg:path fill-rule="evenodd" d="M19.67 5.665a.75.75 0 0 1-.335 1.006l-10 5a.75.75 0 0 1-.67-1.342l10-5a.75.75 0 0 1 1.006.336" clip-rule="evenodd"></svg:path></svg:g><svg:path fill-rule="evenodd" d="M18 10H8a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2M8 9a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-6a3 3 0 0 0-3-3z" clip-rule="evenodd"></svg:path><svg:path d="M13 15a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0"></svg:path><svg:path fill-rule="evenodd" d="M17.447 4.474a.5.5 0 0 1-.223.67l-10 5a.5.5 0 1 1-.448-.894l10-5a.5.5 0 0 1 .671.224M14 13.65a.35.35 0 0 1 .35-.35h3.3a.35.35 0 1 1 0 .7h-3.3a.35.35 0 0 1-.35-.35m0 1.5a.35.35 0 0 1 .35-.35h3.3a.35.35 0 1 1 0 .7h-3.3a.35.35 0 0 1-.35-.35m0 1.5a.35.35 0 0 1 .35-.35h3.3a.35.35 0 1 1 0 .7h-3.3a.35.35 0 0 1-.35-.35" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M13 24.5c6.351 0 11.5-5.149 11.5-11.5S19.351 1.5 13 1.5S1.5 6.649 1.5 13S6.649 24.5 13 24.5m0 1c6.904 0 12.5-5.596 12.5-12.5S19.904.5 13 .5S.5 6.096.5 13S6.096 25.5 13 25.5" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPrintRadioCircleIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
