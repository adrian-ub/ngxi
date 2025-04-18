import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiSpeechBubblesLtrIcon],svg[ooui-speech-bubbles-ltr-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 4v7a2 2 0 0 1-2 2H4v1a2 2 0 0 0 2 2h10l4 4V6a2 2 0 0 0-2-2zM6 10H0v6z"></svg:path><svg:rect width="16" height="12" fill="currentColor" rx="2"></svg:rect>`,
})
export class OouiSpeechBubblesLtrIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
