import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineChatBubbleSquareWriteSolidIcon],svg[streamline-chat-bubble-square-write-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M9.88 8.388a1.25 1.25 0 0 1-.664.348l-3 .54A1.25 1.25 0 0 1 4.76 7.843l.5-3.04a1.25 1.25 0 0 1 .351-.683L9.75 0H2.5A1.5 1.5 0 0 0 1 1.5v8.919l-.974 2.923a.5.5 0 0 0 .595.643L4.561 13H12.5a1.5 1.5 0 0 0 1.5-1.5V4.25zM12.319.077a1 1 0 0 0-1.095.219l-4.73 4.71l-.5 3.04l3-.54l4.71-4.73a1 1 0 0 0 0-1.42l-1.06-1.06a1 1 0 0 0-.325-.22Z" clip-rule="evenodd"></svg:path>`,
})
export class StreamlineChatBubbleSquareWriteSolidIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
