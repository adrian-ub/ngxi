import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riVoiceRecognitionLineIcon],svg[ri-voice-recognition-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.998 15v4h4v2h-6v-6zm16 0v6h-6v-2h4v-4zm-8-9v12h-2V6zm-4 3v6h-2V9zm8 0v6h-2V9zm-8-6v2h-4v4h-2V3zm12 0v6h-2V5h-4V3z"></svg:path>`,
})
export class RiVoiceRecognitionLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
