import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[heroiconsSolidChatBubbleOvalLeftEllipsisIcon],svg[heroicons-solid-chat-bubble-oval-left-ellipsis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M10 3c-4.31 0-8 3.033-8 7c0 2.024.978 3.825 2.499 5.085a3.478 3.478 0 0 1-.522 1.756a.75.75 0 0 0 .584 1.143a5.976 5.976 0 0 0 3.936-1.108c.487.082.99.124 1.503.124c4.31 0 8-3.033 8-7s-3.69-7-8-7Zm0 8a1 1 0 1 0 0-2a1 1 0 0 0 0 2Zm-2-1a1 1 0 1 1-2 0a1 1 0 0 1 2 0Zm5 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2Z" clip-rule="evenodd"></svg:path>`,
})
export class HeroiconsSolidChatBubbleOvalLeftEllipsisIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
