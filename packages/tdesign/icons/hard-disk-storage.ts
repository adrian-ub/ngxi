import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignHardDiskStorageIcon],svg[tdesign-hard-disk-storage-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 2h20v20H2zm2 2v16h16V4h-2.5v7.875h-11V4zm4.5 0v5.875h7V4zM14 6v3h-2V6z"></svg:path>`,
})
export class TdesignHardDiskStorageIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
