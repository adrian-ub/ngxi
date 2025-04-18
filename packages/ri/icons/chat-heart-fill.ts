import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riChatHeartFillIcon],svg[ri-chat-heart-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zm5.563-4.3l3.358-3.359a2.25 2.25 0 1 0-3.181-3.182l-.177.177l-.177-.177a2.25 2.25 0 0 0-3.182 3.182z"></svg:path>`,
})
export class RiChatHeartFillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
