import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineGarlicIcon],svg[icon-park-outline-garlic-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M27 21c0 8 3 6 4 11c1.024 5.123-3.262 10-8.5 10c-5.239 0-9.5-4.775-9.5-10c0-4.61 2.5-7.5 5-9s5-3 5-7"></svg:path><svg:path d="M33 23c1 0 5.5 2 6 7c.452 4.523-2.5 11.5-15 12"></svg:path><svg:path d="M16.001 40c-7.847 0-11.999-4.703-12-10c0-5.705 8-11 10-12s3-2.952 3-5V9c0-1.38.62-2 2-2h9c1.14 0 2 1 2 2v3c0 2.051 1.27 3.673 3.087 4.578c.76.38 1.561.742 2.38 1.077c3.31 1.354 8.533 3.49 8.533 9.345c0 4.881-3.403 9-6 9"></svg:path></svg:g>`,
})
export class IconParkOutlineGarlicIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
