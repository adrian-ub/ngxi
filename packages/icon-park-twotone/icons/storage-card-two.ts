import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneStorageCardTwoIcon],svg[icon-park-twotone-storage-card-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTStorageCardTwo0"><svg:g fill="none" stroke="#fff" stroke-width="4"><svg:rect width="32" height="40" x="8" y="4" rx="2"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M14 4v10h20V4"></svg:path><svg:path fill="#555" stroke-linecap="round" stroke-linejoin="round" d="M14 24h20v20H14z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M14 32h20m0-3v6m-20-6v6"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTStorageCardTwo0)"></svg:path>`,
})
export class IconParkTwotoneStorageCardTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
