import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSmartDockIcon],svg[arcticons-smart-dock-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M19.306 27.92c.924 1.202 2.083 1.65 3.695 1.65h2.232a3.76 3.76 0 0 0 3.76-3.76v-.015a3.76 3.76 0 0 0-3.76-3.76H22.77a3.764 3.764 0 0 1-3.763-3.763v0A3.77 3.77 0 0 1 22.78 14.5h2.219c1.612 0 2.77.448 3.695 1.651M20.5 33.5h7"></svg:path>`,
})
export class ArcticonsSmartDockIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
