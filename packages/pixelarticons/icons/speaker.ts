import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pixelarticonsSpeakerIcon],svg[pixelarticons-speaker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 2H3v20h18V2zm15 2v16H5V4zm-6 2h-2v2h2zm-5 4h8v6h-2v-4h-4v4H8zm8 6H8v2h8z"></svg:path>`,
})
export class PixelarticonsSpeakerIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
