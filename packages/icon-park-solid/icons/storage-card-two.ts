import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidStorageCardTwoIcon],svg[icon-park-solid-storage-card-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipSStorageCardTwo0"><svg:g fill="none" stroke-width="4"><svg:rect width="32" height="40" x="8" y="4" stroke="#fff" rx="2"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M14 4v10h20V4"></svg:path><svg:path fill="#fff" stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M14 24h20v20H14z"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" d="M14 32h20"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M34 29v6m-20-6v6"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipSStorageCardTwo0)"></svg:path>`,
})
export class IconParkSolidStorageCardTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
