import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkDiskTwoIcon],svg[icon-park-disk-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:rect width="32" height="22" x="4" y="13" stroke="#000" stroke-width="4" rx="2"></svg:rect><svg:path fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 13H14V35H4V13Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M36 19H44V29H36"></svg:path><svg:circle cx="30" cy="21" r="2" fill="#000"></svg:circle><svg:circle cx="30" cy="27" r="2" fill="#000"></svg:circle></svg:g>`,
})
export class IconParkDiskTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
