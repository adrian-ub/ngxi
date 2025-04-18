import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiSpeechBubbleAddRtlIcon],svg[ooui-speech-bubble-add-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 3v10c0 1.1.9 2 2 2h12l4 4V3c0-1.1-.9-2-2-2H3c-1.1 0-2 .9-2 2m4 4h4V3h2v4h4v2h-4v4H9V9H5z"></svg:path>`,
})
export class OouiSpeechBubbleAddRtlIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
