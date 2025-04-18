import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiFlatEyeInSpeechBubbleIcon],svg[fluent-emoji-flat-eye-in-speech-bubble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="#321B41" d="M2.484 16.237C4.3 13.367 8.674 8 16 8s11.7 5.367 13.516 8.237a3.27 3.27 0 0 1 0 3.526c-.884 1.397-2.374 3.386-4.516 5.06v4.679a.5.5 0 0 1-.728.445l-4.683-2.401A14.2 14.2 0 0 1 16 28c-7.326 0-11.7-5.367-13.516-8.237a3.27 3.27 0 0 1 0-3.526"></svg:path><svg:path fill="#fff" d="M16 25a7 7 0 1 0 0-14a7 7 0 0 0 0 14m0-3a4 4 0 1 1 0-8a4 4 0 0 1 0 8"></svg:path></svg:g>`,
})
export class FluentEmojiFlatEyeInSpeechBubbleIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
