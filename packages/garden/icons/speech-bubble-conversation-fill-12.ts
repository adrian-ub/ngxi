import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenSpeechBubbleConversationFill12Icon],svg[garden-speech-bubble-conversation-fill-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 6.29V3.72a1.985 1.985 0 0 1-.91-2.3C.35.55 1.22 0 2.12 0h3.41C6.88 0 7.8.68 7.96 1.66C8.18 2.91 7.21 4 6 4H4.5L1.85 6.65A.5.5 0 0 1 1 6.29M7.5 9H6.11c-1 0-1.92-.68-2.08-1.66C3.82 6.09 4.79 5 6 5h3.88c.91 0 1.78.55 2.04 1.42c.28.93-.14 1.86-.91 2.31v2.57c0 .45-.54.67-.85.35z"></svg:path>`,
})
export class GardenSpeechBubbleConversationFill12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
