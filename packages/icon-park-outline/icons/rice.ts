import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineRiceIcon],svg[icon-park-outline-rice-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path d="M24 38c9.389 0 17-7.059 17-17H7c0 9.941 7.611 17 17 17Zm6-17c0-5.523-4.253-10-9.5-10S11 15.477 11 21"></svg:path><svg:path d="M39 21c0-3.314-2.766-6-6.178-6c-1.443 0-2.77.48-3.822 1.286"></svg:path><svg:path stroke-linecap="round" d="m33 15l3-10m2 13l4-7"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="m18 37l-2 6h16l-2-6"></svg:path></svg:g>`,
})
export class IconParkOutlineRiceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
