import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeq2ndPlaceIcon],svg[marketeq-2nd-place-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M29.167 33.333h-8.334A8.33 8.33 0 0 1 25 26.208L27.083 25a4.17 4.17 0 0 0 2.084-3.604v-.563A4.167 4.167 0 0 0 25 16.667v0a4.167 4.167 0 0 0-4.167 4.166"></svg:path><svg:path stroke="#306CFE" d="M25 43.75c10.355 0 18.75-8.395 18.75-18.75S35.355 6.25 25 6.25S6.25 14.645 6.25 25S14.645 43.75 25 43.75"></svg:path></svg:g>`,
})
export class Marketeq2ndPlaceIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
