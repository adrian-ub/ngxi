import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiCloudUploadIcon],svg[oi-cloud-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 0C3.29 0 2.23.86 2 2C.9 2 0 2.9 0 4c0 .37.11.71.28 1H2.5l2-2l2 2h1.41c.06-.16.09-.32.09-.5c0-.65-.42-1.29-1-1.5v-.5A2.5 2.5 0 0 0 4.5 0m0 4.5L2 7h2v.5a.5.5 0 1 0 1 0V7h2z"></svg:path>`,
})
export class OiCloudUploadIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
