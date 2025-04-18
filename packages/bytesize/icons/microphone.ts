import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bytesizeMicrophoneIcon],svg[bytesize-microphone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 2c-4 0-4 4-4 4v10s0 4 4 4s4-4 4-4V6s0-4-4-4M8 17s0 7 8 7s8-7 8-7M13 29h6m-3-5v5"></svg:path>`,
})
export class BytesizeMicrophoneIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
