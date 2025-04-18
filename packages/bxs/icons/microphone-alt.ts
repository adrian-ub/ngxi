import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxsMicrophoneAltIcon],svg[bxs-microphone-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 12H4c0 4.072 3.061 7.436 7 7.931V22h2v-2.069c3.939-.495 7-3.858 7-7.931h-2c0 3.309-2.691 6-6 6s-6-2.691-6-6"></svg:path><svg:path fill="currentColor" d="M8 12c0 2.206 1.794 4 4 4s4-1.794 4-4h-2v-2h2V8h-2V6h2c0-2.217-1.785-4.021-3.979-4.021a1 1 0 0 0-.209.025A4.006 4.006 0 0 0 8 6h4v2H8v2h4v2z"></svg:path>`,
})
export class BxsMicrophoneAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
