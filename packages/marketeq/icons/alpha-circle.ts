import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqAlphaCircleIcon],svg[marketeq-alpha-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M32.417 19.646S28.937 31.25 22.292 31.25c-4 0-5.98-2.292-5.521-5.333c.5-3.438 3.354-7.167 6.791-7.167c6.459 0 3.709 12.5 9.771 12.5"></svg:path><svg:path stroke="#306CFE" d="M25 43.75c10.355 0 18.75-8.395 18.75-18.75S35.355 6.25 25 6.25S6.25 14.645 6.25 25S14.645 43.75 25 43.75"></svg:path></svg:g>`,
})
export class MarketeqAlphaCircleIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
