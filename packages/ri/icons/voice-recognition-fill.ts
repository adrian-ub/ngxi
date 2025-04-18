import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riVoiceRecognitionFillIcon],svg[ri-voice-recognition-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20.998 3v18h-18V3zm-8 3h-2v12h2zm-4 3h-2v6h2zm8 0h-2v6h2z"></svg:path>`,
})
export class RiVoiceRecognitionFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
