import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBubbleChatDownload02Icon],svg[hugeicons-bubble-chat-download-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 12c-.237 5.082-4.622 9.133-9.995 9.133q-.976.001-1.936-.178c-.459-.087-.689-.13-.849-.105c-.16.024-.387.145-.842.386a6.5 6.5 0 0 1-4.226.657a5.3 5.3 0 0 0 1.087-2.348c.1-.53-.147-1.045-.519-1.422C3.034 16.411 2 14.105 2 11.567C2 6.284 6.48 2 12.005 2q.762 0 1.495.106"></svg:path><svg:path d="M16 7.5c.491.506 1.8 2.5 2.5 2.5M21 7.5c-.491.506-1.8 2.5-2.5 2.5m0 0V2m-6.504 10h.008M8 12h.009"></svg:path></svg:g>`,
})
export class HugeiconsBubbleChatDownload02Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
