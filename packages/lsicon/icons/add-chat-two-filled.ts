import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconAddChatTwoFilledIcon],svg[lsicon-add-chat-two-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 8a5.5 5.5 0 0 1 10.943-.794l.99-.143a6.501 6.501 0 1 0-12.279 3.782v3.03l3.04-.01a6.54 6.54 0 0 0 3.889.546l-.166-.987a5.54 5.54 0 0 1-3.383-.506l-.107-.054l-2.273.008v-2.265L3.1 10.5A5.5 5.5 0 0 1 2.5 8m9.5-.5a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7m-.5 2v1h-1v1h1v1h1v-1h1v-1h-1v-1z" clip-rule="evenodd"></svg:path>`,
})
export class LsiconAddChatTwoFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
