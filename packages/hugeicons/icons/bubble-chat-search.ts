import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBubbleChatSearchIcon],svg[hugeicons-bubble-chat-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 12.995c-.724 4.606-4.98 8.138-9.995 8.138q-.976 0-1.936-.18c-.459-.085-.689-.129-.849-.104c-.16.024-.387.145-.842.387a6.5 6.5 0 0 1-4.226.657a5.3 5.3 0 0 0 1.087-2.35c.1-.53-.147-1.045-.519-1.422C3.034 16.408 2 14.1 2 11.56C2 6.435 6.21 2.25 11.5 2"></svg:path><svg:path d="M20.017 8.023L22 10m-.947-4.473a3.527 3.527 0 1 0-7.053 0a3.527 3.527 0 0 0 7.053 0M11.996 12h.008m3.987 0H16m-8 0h.009"></svg:path></svg:g>`,
})
export class HugeiconsBubbleChatSearchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
