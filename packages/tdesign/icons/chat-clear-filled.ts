import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignChatClearFilledIcon],svg[tdesign-chat-clear-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.5 2v16H6.876L1.5 22.704V2zM12 8.586L9.17 5.757L7.757 7.172L10.585 10l-2.828 2.828l1.414 1.415L12 11.414l2.828 2.829l1.414-1.415L13.414 10l2.828-2.828l-1.414-1.415z"></svg:path>`,
})
export class TdesignChatClearFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
