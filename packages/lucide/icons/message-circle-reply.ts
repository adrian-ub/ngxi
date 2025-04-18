import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideMessageCircleReplyIcon],svg[lucide-message-circle-reply-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></svg:path><svg:path d="m10 15l-3-3l3-3"></svg:path><svg:path d="M7 12h7a2 2 0 0 1 2 2v1"></svg:path></svg:g>`,
})
export class LucideMessageCircleReplyIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
