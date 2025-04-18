import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bytesizeSendIcon],svg[bytesize-send-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2 16L30 2L16 30l-4-10ZM30 2L12 20"></svg:path>`,
})
export class BytesizeSendIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
