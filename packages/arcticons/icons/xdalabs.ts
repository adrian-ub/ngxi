import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsXdalabsIcon],svg[arcticons-xdalabs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.42 24.83v10.1"></svg:path><svg:rect width="5.05" height="6.72" x="21.37" y="28.21" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.52"></svg:rect><svg:rect width="5.05" height="6.72" x="28.85" y="28.21" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.52"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M33.9 28.21v6.72m-14.75-6.72l-5.05 6.72m5.05 0l-5.05-6.72m27.28-8.37h-7.86l-7.77-13a2 2 0 0 0-3.5 0l-7.77 13H6.62a3.12 3.12 0 0 0-3 3.93L8 40.08a2.84 2.84 0 0 0 2.74 2.1h26.5a2.84 2.84 0 0 0 2.76-2.1l4.41-16.31a3.12 3.12 0 0 0-3.03-3.93m-17.38-8l4.77 8h-9.54Zm-9.52 8h19.04"></svg:path>`,
})
export class ArcticonsXdalabsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
