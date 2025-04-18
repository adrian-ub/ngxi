import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineStorageCardTwoIcon],svg[icon-park-outline-storage-card-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:rect width="32" height="40" x="8" y="4" rx="2"></svg:rect><svg:path stroke-linecap="round" stroke-linejoin="round" d="M14 4v10h20V4M14 24h20v20H14zm0 8h20m0-3v6m-20-6v6"></svg:path></svg:g>`,
})
export class IconParkOutlineStorageCardTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
