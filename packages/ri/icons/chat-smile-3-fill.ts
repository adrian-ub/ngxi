import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riChatSmile3FillIcon],svg[ri-chat-smile-3-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10H2l2.929-2.929A9.97 9.97 0 0 1 2 12C2 6.477 6.477 2 12 2m4 11H8a4 4 0 0 0 8 0"></svg:path>`,
})
export class RiChatSmile3FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
