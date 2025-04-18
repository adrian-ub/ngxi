import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqTaxIcon],svg[marketeq-tax-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="2" d="M43.75 12.5L31.25 25m-2.083 10.417H14.583zm-6.25-8.334h-8.334z"></svg:path><svg:path stroke="#344054" stroke-width="3" d="M32.188 13.542h.208m10.208 10.416h.209"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M37.5 33.333v8.334a2.083 2.083 0 0 1-2.083 2.083H8.333a2.083 2.083 0 0 1-2.083-2.083V8.333A2.083 2.083 0 0 1 8.333 6.25h14.584"></svg:path></svg:g>`,
})
export class MarketeqTaxIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
