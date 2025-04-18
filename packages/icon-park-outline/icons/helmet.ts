import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineHelmetIcon],svg[icon-park-outline-helmet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M42.34 32c1.07-2.45 1.66-5.16 1.66-8c0-11.05-8.95-20-20-20S4 12.95 4 24h20l.01 8c0 3.87 3.13 7 7 7s7-3.13 7-7z"></svg:path><svg:path fill="currentColor" d="M31 34c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4" d="M24 32L6 36c2.23 3.17 4.45 6.37 8 8l12-7"></svg:path></svg:g>`,
})
export class IconParkOutlineHelmetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
