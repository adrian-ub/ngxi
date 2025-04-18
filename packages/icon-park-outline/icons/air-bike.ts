import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineAirBikeIcon],svg[icon-park-outline-air-bike-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M4 44h40M28 30h6.19c2.27 0 6.81 1.344 6.81 6.72V44m-6-14l5-11l-6-13m-5 2l10-4"></svg:path><svg:circle cx="20" cy="30" r="8"></svg:circle><svg:path stroke-linecap="round" stroke-linejoin="round" d="M20 30h8m-7-8l-7-9m-4 0h8"></svg:path><svg:path d="M20 38a8 8 0 1 0 0-16"></svg:path></svg:g>`,
})
export class IconParkOutlineAirBikeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
