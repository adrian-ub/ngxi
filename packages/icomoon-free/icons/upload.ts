import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icomoonFreeUploadIcon],svg[icomoon-free-upload-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 9h2V5h3L8 1L4 5h3zm3-2.25v1.542L14.579 10L8 12.453L1.421 10L6 8.292V6.75L0 9v4l8 3l8-3V9z"></svg:path>`,
})
export class IcomoonFreeUploadIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
