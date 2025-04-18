import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riDownloadCloudFillIcon],svg[ri-download-cloud-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 20.981a6.5 6.5 0 0 1-2.936-12a8.001 8.001 0 0 1 15.872 0a6.5 6.5 0 0 1-2.936 12V21H7zM13 12V8h-2v4H8l4 5l4-5z"></svg:path>`,
})
export class RiDownloadCloudFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
