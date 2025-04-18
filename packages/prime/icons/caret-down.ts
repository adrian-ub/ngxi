import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeCaretDownIcon],svg[prime-caret-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 16.75a.74.74 0 0 1-.6-.3l-6-8a.75.75 0 0 1-.07-.79a.76.76 0 0 1 .67-.41h12a.76.76 0 0 1 .67.41a.75.75 0 0 1-.07.79l-6 8a.74.74 0 0 1-.6.3m-4.5-8l4.5 6l4.5-6Z"></svg:path>`,
})
export class PrimeCaretDownIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
