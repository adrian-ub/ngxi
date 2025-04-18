import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlinePublicToiletIcon],svg[icon-park-outline-public-toilet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:circle cx="15" cy="10" r="4"></svg:circle><svg:circle cx="33" cy="10" r="4"></svg:circle><svg:path d="M10 20h10l-2 22h-6zm18 0h10l2 11h-3l-1 11h-6l-1-11h-3z"></svg:path></svg:g>`,
})
export class IconParkOutlinePublicToiletIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
