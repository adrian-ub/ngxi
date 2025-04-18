import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsDownloadLightIcon],svg[lets-icons-download-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.5 11.258a4.5 4.5 0 0 0-1.608 1.902l-.002.006q-.119.265-.193.423a2 2 0 0 1-.157.284c-.107.15-.23.29-.398.398a1.5 1.5 0 0 1-.526.2c-.149.03-.336.03-.562.03H6a2.5 2.5 0 0 0 0 5h12a2.5 2.5 0 1 0 0-5h-.054c-.226 0-.413 0-.562-.03a1.5 1.5 0 0 1-.526-.2a1.5 1.5 0 0 1-.398-.399a2 2 0 0 1-.157-.283q-.074-.158-.193-.423l-.002-.006a4.5 4.5 0 0 0-1.608-1.902V10.1a5.52 5.52 0 0 1 2.52 2.65c.083.184.141.315.186.41l.052.104l.016.028a.5.5 0 0 0 .127.14a.5.5 0 0 0 .18.059c.036.007.11.01.419.01a3.5 3.5 0 0 1 0 7H6a3.5 3.5 0 1 1 0-7c.309 0 .383-.003.418-.01a.5.5 0 0 0 .18-.06a.5.5 0 0 0 .144-.167q.02-.035.052-.104c.045-.095.103-.226.186-.41A5.52 5.52 0 0 1 9.5 10.1z" clip-rule="evenodd"></svg:path><svg:path fill="currentColor" d="m12 3l-.354-.354l.354-.353l.354.353zm.5 10a.5.5 0 0 1-1 0zM7.646 6.646l4-4l.708.708l-4 4zm4.708-4l4 4l-.708.708l-4-4zM12.5 3v10h-1V3z"></svg:path>`,
})
export class LetsIconsDownloadLightIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
