import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsOutbankIcon],svg[arcticons-outbank-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M13.5 42.5c3 0 17-4 17-13m-17-24c3 0 17 4 17 13v11"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M34.5 42.5c-3 0-17-4-17-13m17-24c-3 0-17 4-17 13v11"></svg:path><svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect>`,
})
export class ArcticonsOutbankIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
