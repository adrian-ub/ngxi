import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiSpeechBubbleRtlIcon],svg[ooui-speech-bubble-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 14h6v6z"></svg:path><svg:rect width="20" height="16" fill="currentColor" rx="2"></svg:rect>`,
})
export class OouiSpeechBubbleRtlIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
