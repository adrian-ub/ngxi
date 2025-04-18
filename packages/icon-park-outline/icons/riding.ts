import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineRidingIcon],svg[icon-park-outline-riding-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-miterlimit="2" d="M33 14a5 5 0 1 0 0-10a5 5 0 0 0 0 10Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" d="M40 23h-7.63c-.56 0-1.1-.24-1.48-.65l-5.34-5.78a2.01 2.01 0 0 0-2.53-.36l-7.45 4.58a1 1 0 0 0 0 1.7l7.46 4.57c.59.36.96 1.01.96 1.71L24 38"></svg:path><svg:circle cx="36.5" cy="36.5" r="7.5"></svg:circle><svg:circle cx="11.5" cy="36.5" r="7.5"></svg:circle></svg:g>`,
})
export class IconParkOutlineRidingIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
