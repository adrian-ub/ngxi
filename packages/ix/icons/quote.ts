import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixQuoteIcon],svg[ix-quote-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M176.61 254.781q-43.886-9.752-43.886-51.2q0-24.076 14.629-39.01q14.934-15.237 39.01-15.238q24.075 0 38.4 14.934q14.628 14.933 14.628 39.619q0 57.905-84.114 158.781l-24.076-18.286q35.961-48.762 45.409-89.6m142.019 0q-43.885-9.752-43.885-51.2q0-24.076 14.628-39.01q14.934-15.237 39.01-15.238q23.77 0 38.4 14.934q14.628 14.933 14.628 39.619q0 58.818-84.114 158.781l-24.076-18.286q35.962-48.457 45.409-89.6"></svg:path>`,
})
export class IxQuoteIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
