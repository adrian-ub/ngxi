import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bytesizeEndIcon],svg[bytesize-end-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M24 2v14L10 2v28l14-14v14"></svg:path>`,
})
export class BytesizeEndIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
