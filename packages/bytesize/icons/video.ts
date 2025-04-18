import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bytesizeVideoIcon],svg[bytesize-video-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m22 13l8-5v16l-8-5ZM2 8v16h20V8Z"></svg:path>`,
})
export class BytesizeVideoIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
