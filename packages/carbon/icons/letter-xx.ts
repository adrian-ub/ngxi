import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonLetterXxIcon],svg[carbon-letter-xx-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 9h-2l-2 6l-2-6H7l2.75 7L7 23h2l2-6l2 6h2l-2.76-7zm10 4h-2l-2 3.9l-2-3.9h-2l2.91 5L17 23h2l2-3.8l2 3.8h2l-2.9-5z"></svg:path>`,
})
export class CarbonLetterXxIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
