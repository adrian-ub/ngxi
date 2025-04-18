import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignHardDiskStorageFilledIcon],svg[tdesign-hard-disk-storage-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 2H2v20h20V2h-4.5v7.875h-11z"></svg:path><svg:path fill="currentColor" d="M15.5 2h-7v5.875h7zM14 4v3h-2V4z"></svg:path>`,
})
export class TdesignHardDiskStorageFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
