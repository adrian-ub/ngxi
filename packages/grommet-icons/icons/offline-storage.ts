import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[grommetIconsOfflineStorageIcon],svg[grommet-icons-offline-storage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-width="2" d="M12 21a9 9 0 1 0 0-18a9 9 0 1 0 0 18Zm8-12h-8a3 3 0 0 0 0 6h8"></svg:path>`,
})
export class GrommetIconsOfflineStorageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
