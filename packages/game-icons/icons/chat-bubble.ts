import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsChatBubbleIcon],svg[game-icons-chat-bubble-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M229.7 22.66A155.2 235.6 80.24 0 0 23.81 215.6A155.2 235.6 80.24 0 0 236.7 333.4c23.8 55.6-17.1 109.3-83.6 161.1c86.2-28.3 176.2-94.4 179.7-178.7a155.2 235.6 80.24 0 0 155.4-180.1A155.2 235.6 80.24 0 0 229.7 22.66"></svg:path>`,
})
export class GameIconsChatBubbleIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
