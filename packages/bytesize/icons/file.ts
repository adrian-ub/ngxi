import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bytesizeFileIcon],svg[bytesize-file-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 2v28h20V10l-8-8Zm12 0v8h8"></svg:path>`,
})
export class BytesizeFileIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
