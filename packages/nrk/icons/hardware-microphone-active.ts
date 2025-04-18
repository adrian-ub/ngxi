import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[nrkHardwareMicrophoneActiveIcon],svg[nrk-hardware-microphone-active-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M8 14V2h8v12z" clip-rule="evenodd"></svg:path><svg:path d="M6 12H4v6h7v2H8v2h8v-2h-3v-2h7v-6h-2v4H6z"></svg:path></svg:g>`,
})
export class NrkHardwareMicrophoneActiveIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
