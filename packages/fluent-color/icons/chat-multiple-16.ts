import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorChatMultiple16Icon],svg[fluent-color-chat-multiple-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorChatMultiple160)" d="M9 4a5 5 0 0 1 4.533 7.113l.457 2.289a.5.5 0 0 1-.588.588l-2.288-.457A5 5 0 1 1 9 4"></svg:path><svg:path fill="url(#fluentColorChatMultiple161)" d="M7 2a5 5 0 0 0-4.533 7.113l-.457 2.289a.5.5 0 0 0 .588.588l2.288-.457A5 5 0 1 0 7 2"></svg:path><svg:defs><svg:radialgradient id="fluentColorChatMultiple160" cx="0" cy="0" r="1" gradientTransform="matrix(4.60184 5.3384 -5.34296 4.60577 6.684 6.67)" gradientUnits="userSpaceOnUse"><svg:stop offset=".63" stop-color="#3D35B1"></svg:stop><svg:stop offset=".85" stop-color="#6553C9"></svg:stop><svg:stop offset="1" stop-color="#7660D3"></svg:stop></svg:radialgradient><svg:lineargradient id="fluentColorChatMultiple161" x1="2" x2="12" y1="2" y2="12" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0FAFFF"></svg:stop><svg:stop offset="1" stop-color="#2764E7"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorChatMultiple16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
