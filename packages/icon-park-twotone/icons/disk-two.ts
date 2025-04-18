import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneDiskTwoIcon],svg[icon-park-twotone-disk-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTDiskTwo0"><svg:g fill="none"><svg:rect width="32" height="22" x="4" y="13" stroke="#fff" stroke-width="4" rx="2"></svg:rect><svg:path fill="#555" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M4 13h10v22H4z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M36 19h8v10h-8"></svg:path><svg:circle cx="30" cy="21" r="2" fill="#fff"></svg:circle><svg:circle cx="30" cy="27" r="2" fill="#fff"></svg:circle></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTDiskTwo0)"></svg:path>`,
})
export class IconParkTwotoneDiskTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
