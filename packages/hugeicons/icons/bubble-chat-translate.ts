import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsBubbleChatTranslateIcon],svg[hugeicons-bubble-chat-translate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 11.567c0 5.283-4.478 9.566-10 9.566q-.977.001-1.935-.178c-.459-.087-.688-.13-.848-.105c-.16.024-.388.145-.842.386a6.5 6.5 0 0 1-4.224.657a5.3 5.3 0 0 0 1.087-2.348c.1-.53-.148-1.045-.52-1.422C3.034 16.411 2 14.105 2 11.567C2 6.284 6.478 2 12 2s10 4.284 10 9.567"></svg:path><svg:path d="M8 8.241h4m4 0h-1.429m-2.571 0h2.571m-2.571 0V7m2.571 1.241c-.469 1.698-1.45 3.303-2.571 4.713M9.143 16c.906-.844 1.929-1.878 2.857-3.046m0 0c-.571-.678-1.371-1.776-1.6-2.272m1.6 2.272l1.714 1.805"></svg:path></svg:g>`,
})
export class HugeiconsBubbleChatTranslateIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
