import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[flatColorIconsBullishIcon],svg[flat-color-icons-bullish-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#4CAF50" d="M40 21h4v23h-4zm-6 7h4v16h-4zm-6-5h4v21h-4zm-6 6h4v15h-4zm-6 3h4v12h-4zm-6-2h4v14h-4zm-6 4h4v10H4z"></svg:path><svg:g fill="#388E3C"><svg:path d="M40.1 9.1L34 15.2l-4-4l-10 10l-5-5L4.6 26.6l2.8 2.8l7.6-7.6l5 5l10-10l4 4l8.9-8.9z"></svg:path><svg:path d="M44 8h-9l9 9z"></svg:path></svg:g>`,
})
export class FlatColorIconsBullishIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
