import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentEmojiHighContrastSpeechBalloonIcon],svg[fluent-emoji-high-contrast-speech-balloon-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M30.36 12.703C28.498 9.756 23.863 4 16 4S3.503 9.756 1.64 12.703a4.27 4.27 0 0 0 0 4.594c.868 1.373 2.305 3.307 4.36 5.005v4.2a1.5 1.5 0 0 0 2.184 1.335l4.35-2.23A15.3 15.3 0 0 0 16 26c7.862 0 12.497-5.756 14.36-8.703a4.27 4.27 0 0 0 0-4.594M16 6c6.79 0 10.903 4.978 12.67 7.772a2.27 2.27 0 0 1 0 2.456C26.903 19.022 22.79 24 16 24c-1.2 0-2.311-.154-3.337-.422l-.37-.096L8 25.683v-4.349l-.384-.3c-2.022-1.58-3.44-3.468-4.286-4.806a2.27 2.27 0 0 1 0-2.456C5.097 10.978 9.21 6 16 6"></svg:path>`,
})
export class FluentEmojiHighContrastSpeechBalloonIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
