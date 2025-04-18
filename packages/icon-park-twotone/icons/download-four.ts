import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneDownloadFourIcon],svg[icon-park-twotone-download-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTDownloadFour0"><svg:g fill="none" stroke="#fff" stroke-linecap="round" stroke-width="4"><svg:path fill="#555" fill-rule="evenodd" stroke-linejoin="round" d="M24 29L12 17h8V6h8v11h8z" clip-rule="evenodd"></svg:path><svg:path d="M42 37H6m28 7H14"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTDownloadFour0)"></svg:path>`,
})
export class IconParkTwotoneDownloadFourIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
