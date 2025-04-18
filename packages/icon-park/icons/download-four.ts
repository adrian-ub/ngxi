import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkDownloadFourIcon],svg[icon-park-download-four-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" stroke-linejoin="round" d="M23.9999 29.0001L12 17.0001L19.9999 17.0001L19.9999 6.00011L27.9999 6.00011L27.9999 17.0001L35.9999 17.0001L23.9999 29.0001Z" clip-rule="evenodd"></svg:path><svg:path d="M42 37L6 37"></svg:path><svg:path d="M34 44H14"></svg:path></svg:g>`,
})
export class IconParkDownloadFourIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
