import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineChatBubbleSquareBlockSolidIcon],svg[streamline-chat-bubble-square-block-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 0A1.5 1.5 0 0 0 1 1.5v8.919l-.974 2.923a.5.5 0 0 0 .595.643L4.561 13H12.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 12.5 0zm2.833 5.14A2.625 2.625 0 0 0 8.94 8.746zm-.54-1.334a3.875 3.875 0 0 0 5.48 5.48a1 1 0 0 0 .09-.09a3.875 3.875 0 0 0-5.48-5.48a.6.6 0 0 0-.09.09m1.424.45l3.606 3.606a2.625 2.625 0 0 0-3.606-3.606" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineChatBubbleSquareBlockSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
