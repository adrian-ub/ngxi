import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorChatMultiple20Icon],svg[fluent-color-chat-multiple-20-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorChatMultiple200)" d="M11.5 5a6.5 6.5 0 0 1 5.675 9.672l.796 2.082a1 1 0 0 1-1.204 1.32l-2.488-.697A6.5 6.5 0 1 1 11.5 5"></svg:path><svg:path fill="url(#fluentColorChatMultiple201)" d="M8.538 2a6.5 6.5 0 0 0-5.674 9.672l-.796 2.082a1 1 0 0 0 1.204 1.32l2.487-.697A6.5 6.5 0 1 0 8.539 2"></svg:path><svg:defs><svg:radialgradient id="fluentColorChatMultiple200" cx="0" cy="0" r="1" gradientTransform="matrix(6 7 -7 6 8.5 8.5)" gradientUnits="userSpaceOnUse"><svg:stop offset=".63" stop-color="#3D35B1"></svg:stop><svg:stop offset=".85" stop-color="#6553C9"></svg:stop><svg:stop offset="1" stop-color="#7660D3"></svg:stop></svg:radialgradient><svg:lineargradient id="fluentColorChatMultiple201" x1="2" x2="15.112" y1="2" y2="15.038" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0FAFFF"></svg:stop><svg:stop offset="1" stop-color="#2764E7"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorChatMultiple20Icon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
