import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBubbleChatEditIcon],svg[hugeicons-bubble-chat-edit-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M11.996 12h.008M8 12h.009M22 11.567c0 5.283-4.478 9.566-10 9.566q-.977.001-1.935-.178c-.459-.087-.688-.13-.848-.105c-.16.024-.388.145-.842.386a6.5 6.5 0 0 1-4.224.657a5.3 5.3 0 0 0 1.087-2.348c.1-.53-.148-1.045-.52-1.422C3.034 16.411 2 14.105 2 11.567C2 6.284 6.478 2 12 2q1.03.002 2 .191"></svg:path><svg:path d="m20.839 2.476l.692.693a1.5 1.5 0 0 1 0 2.121l-3.627 3.696a2 2 0 0 1-1.047.552l-2.249.488a.5.5 0 0 1-.595-.594l.479-2.235a2 2 0 0 1 .552-1.047l3.673-3.674a1.5 1.5 0 0 1 2.122 0"></svg:path></svg:g>`,
})
export class HugeiconsBubbleChatEditIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
