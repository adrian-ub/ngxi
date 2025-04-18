import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkRugbyOneIcon],svg[icon-park-rugby-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4"><svg:path d="M4 24C6.2922 32.63 14.3769 39 24 39C33.6231 39 41.7078 32.63 44 24C41.7078 15.37 33.6231 9 24 9C14.3769 9 6.2922 15.37 4 24Z"></svg:path><svg:path stroke-linecap="round" d="M40 24H44"></svg:path><svg:path stroke-linecap="round" d="M14 24H34"></svg:path><svg:path stroke-linecap="round" d="M4 24H8"></svg:path><svg:path stroke-linecap="round" d="M17 20V28"></svg:path><svg:path stroke-linecap="round" d="M31 20V28"></svg:path><svg:path stroke-linecap="round" d="M24 20V28"></svg:path></svg:g>`,
})
export class IconParkRugbyOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
