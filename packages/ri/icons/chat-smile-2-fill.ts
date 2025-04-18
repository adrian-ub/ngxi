import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riChatSmile2FillIcon],svg[ri-chat-smile-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.291 20.824L2 22l1.176-5.291A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10a9.96 9.96 0 0 1-4.709-1.176M7 12a5 5 0 0 0 10 0h-2a3 3 0 1 1-6 0z"></svg:path>`,
})
export class RiChatSmile2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
