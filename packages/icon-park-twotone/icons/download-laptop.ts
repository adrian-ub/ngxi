import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneDownloadLaptopIcon],svg[icon-park-twotone-download-laptop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTDownloadLaptop0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M25 9H11a3 3 0 0 0-3 3v21h32v-8"></svg:path><svg:path fill="#555" d="M4 33h40v2a6 6 0 0 1-6 6H10a6 6 0 0 1-6-6z"></svg:path><svg:path stroke-linecap="round" d="m31 14l5 5l5-5m-5-7v12"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTDownloadLaptop0)"></svg:path>`,
})
export class IconParkTwotoneDownloadLaptopIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
