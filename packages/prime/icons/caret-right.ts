import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeCaretRightIcon],svg[prime-caret-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 18.75a.8.8 0 0 1-.33-.08a.75.75 0 0 1-.42-.67V6a.75.75 0 0 1 .42-.67a.74.74 0 0 1 .78.07l8 6a.75.75 0 0 1 0 1.2l-8 6a.74.74 0 0 1-.45.15M8.75 7.5v9l6-4.5Z"></svg:path>`,
})
export class PrimeCaretRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
