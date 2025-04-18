import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeCaretUpIcon],svg[prime-caret-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 16.75H6a.76.76 0 0 1-.67-.41a.75.75 0 0 1 .07-.79l6-8a.77.77 0 0 1 1.2 0l6 8a.75.75 0 0 1 .07.79a.76.76 0 0 1-.67.41m-10.5-1.5h9l-4.5-6Z"></svg:path>`,
})
export class PrimeCaretUpIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
