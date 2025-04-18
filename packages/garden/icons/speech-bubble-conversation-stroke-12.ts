import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenSpeechBubbleConversationStroke12Icon],svg[garden-speech-bubble-conversation-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M6 .5H2C1.2.5.5 1.2.5 2c0 .6.4 1.2 1 1.4v1.9c0 .4.5.7.9.3l2.1-2.1H6c.8 0 1.5-.7 1.5-1.5S6.8.5 6 .5zm0 5h4c.8 0 1.5.7 1.5 1.5c0 .6-.4 1.2-1 1.4v1.9c0 .4-.5.7-.9.4L7.5 8.5H6c-.8 0-1.5-.7-1.5-1.5S5.2 5.5 6 5.5z"></svg:path>`,
})
export class GardenSpeechBubbleConversationStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
