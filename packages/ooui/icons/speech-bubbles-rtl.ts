import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiSpeechBubblesRtlIcon],svg[ooui-speech-bubbles-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m0 20l4-4h10c1.1 0 2-.9 2-2v-1H5c-1.1 0-2-.9-2-2V4H2C.9 4 0 4.9 0 6zm14-10h6v6z"></svg:path><svg:rect width="16" height="12" x="4" fill="currentColor" rx="2"></svg:rect>`,
})
export class OouiSpeechBubblesRtlIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
