import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bytesizeExternalIcon],svg[bytesize-external-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 9H3v20h20V18M18 4h10v10m0-10L14 18"></svg:path>`,
})
export class BytesizeExternalIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
