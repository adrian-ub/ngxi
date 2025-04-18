import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentColorChatMultiple24Icon],svg[fluent-color-chat-multiple-24-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="url(#fluentColorChatMultiple240)" fill-rule="evenodd" d="M22 13.5a7.5 7.5 0 1 0-4.411 6.836c1.258.29 2.613.54 3.236.652a.996.996 0 0 0 1.153-1.17a68 68 0 0 0-.681-3.143A7.5 7.5 0 0 0 22 13.5M14.517 18h-.034z" clip-rule="evenodd"></svg:path><svg:path fill="url(#fluentColorChatMultiple241)" fill-rule="evenodd" d="M2 10.5a7.5 7.5 0 1 1 4.411 6.836c-1.258.29-2.613.54-3.236.652a.996.996 0 0 1-1.153-1.17a68 68 0 0 1 .681-3.143A7.5 7.5 0 0 1 2 10.5M9.483 15h.034z" clip-rule="evenodd"></svg:path><svg:defs><svg:radialgradient id="fluentColorChatMultiple240" cx="0" cy="0" r="1" gradientTransform="matrix(6.90278 8.0094 -8.01592 6.9084 11.027 10.005)" gradientUnits="userSpaceOnUse"><svg:stop offset=".63" stop-color="#3D35B1"></svg:stop><svg:stop offset=".85" stop-color="#6553C9"></svg:stop><svg:stop offset="1" stop-color="#7660D3"></svg:stop></svg:radialgradient><svg:lineargradient id="fluentColorChatMultiple241" x1="2" x2="17.003" y1="3" y2="18" gradientUnits="userSpaceOnUse"><svg:stop stop-color="#0FAFFF"></svg:stop><svg:stop offset="1" stop-color="#2764E7"></svg:stop></svg:lineargradient></svg:defs></svg:g>`,
})
export class FluentColorChatMultiple24Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
