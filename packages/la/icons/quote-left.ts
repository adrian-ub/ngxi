import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[laQuoteLeftIcon],svg[la-quote-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.219 1.781-4 4-4zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.219 1.781-4 4-4zM6 16h6v6H6zm14 0h6v6h-6z"></svg:path>`,
})
export class LaQuoteLeftIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
