import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignChatClearIcon],svg[tdesign-chat-clear-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1.5 2h21v16H6.876L1.5 22.704zm2 2v14.296L6.124 16H20.5V4zm5.671 1.757L12 8.586l2.828-2.829l1.414 1.415L13.414 10l2.828 2.828l-1.414 1.415L12 11.414l-2.83 2.829l-1.414-1.415L10.585 10L7.757 7.172z"></svg:path>`,
})
export class TdesignChatClearIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
