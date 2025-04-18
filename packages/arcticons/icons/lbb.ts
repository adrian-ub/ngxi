import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsLbbIcon],svg[arcticons-lbb-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m25.967 37.048l8.966 6.029c1.534 1.032 3.232.058 3.232-1.673V6.66a2.16 2.16 0 0 0-2.16-2.16h-24a2.16 2.16 0 0 0-2.17 2.15v34.755c0 1.73 1.699 2.704 3.234 1.673l8.965-6.03c1.34-.9 2.594-.9 3.934 0z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M38.165 14.379L18.643 29.566c-.976.759-2.772.8-3.713 0l-5.095-4.33"></svg:path>`,
})
export class ArcticonsLbbIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
