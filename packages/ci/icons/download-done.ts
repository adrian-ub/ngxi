import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ciDownloadDoneIcon],svg[ci-download-done-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M19 19H5v-2h14v2Zm-9-4.58l-4-4l1.41-1.41L10 11.59L16.59 5L18 6.42l-8 8Z"></svg:path>`,
})
export class CiDownloadDoneIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
