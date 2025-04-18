import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconUpload24Icon],svg[octicon-upload-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 20.25V18a.75.75 0 0 1 1.5 0v2.25c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V18a.75.75 0 0 1 1.5 0v2.25A1.75 1.75 0 0 1 18.25 22H5.75A1.75 1.75 0 0 1 4 20.25"></svg:path><svg:path fill="currentColor" d="M5.22 9.53a.75.75 0 0 1 0-1.06l6.25-6.25a.75.75 0 0 1 1.06 0l6.25 6.25a.749.749 0 1 1-1.06 1.06l-4.97-4.969V16.75a.75.75 0 0 1-1.5 0V4.561L6.28 9.53a.75.75 0 0 1-1.06 0"></svg:path>`,
})
export class OcticonUpload24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
