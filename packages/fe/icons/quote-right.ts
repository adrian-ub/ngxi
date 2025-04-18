import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[feQuoteRightIcon],svg[fe-quote-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M17 11a4 4 0 1 1 4-4q0 2.21-4 14h-2zM7 11a4 4 0 1 1 4-4q0 2.21-4 14H5z"></svg:path>`,
})
export class FeQuoteRightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
