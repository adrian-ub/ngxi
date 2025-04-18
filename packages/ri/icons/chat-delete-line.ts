import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riChatDeleteLineIcon],svg[ri-chat-delete-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.455 19L2 22.5V4a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1zM4 18.385L5.763 17H20V5H4zM13.414 11l2.475 2.475l-1.414 1.414L12 12.414L9.525 14.89l-1.414-1.414L10.586 11L8.11 8.525l1.414-1.414L12 9.586l2.475-2.475l1.414 1.414z"></svg:path>`,
})
export class RiChatDeleteLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
