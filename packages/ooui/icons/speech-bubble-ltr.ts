import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiSpeechBubbleLtrIcon],svg[ooui-speech-bubble-ltr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 14H0v6z"></svg:path><svg:rect width="20" height="16" fill="currentColor" rx="2"></svg:rect>`,
})
export class OouiSpeechBubbleLtrIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
