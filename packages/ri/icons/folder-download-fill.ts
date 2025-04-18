import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riFolderDownloadFillIcon],svg[ri-folder-download-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414zM13 13V9h-2v4H8l4 4l4-4z"></svg:path>`,
})
export class RiFolderDownloadFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
