import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laQuoteRightIcon],svg[la-quote-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 8v10h8c0 2.219-1.781 4-4 4v2c3.3 0 6-2.7 6-6V8zm14 0v10h8c0 2.219-1.781 4-4 4v2c3.3 0 6-2.7 6-6V8zM6 10h6v6H6zm14 0h6v6h-6z"></svg:path>`,
})
export class LaQuoteRightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
