import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[faSolidVoicemailIcon],svg[fa-solid-voicemail-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M496 128a144 144 0 0 0-119.74 224H263.74A144 144 0 1 0 144 416h352a144 144 0 0 0 0-288M64 272a80 80 0 1 1 80 80a80 80 0 0 1-80-80m432 80a80 80 0 1 1 80-80a80 80 0 0 1-80 80"></svg:path>`,
})
export class FaSolidVoicemailIcon {
  readonly viewBox = input("0 0 640 512")
  readonly width = input("1.25em")
  readonly height = input("1em")
}
