import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqChatLeft2Icon],svg[marketeq-chat-left-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path stroke="#344054" d="M14.583 41.667h-6.25a2.083 2.083 0 0 1-2.083-2.084V16.667"></svg:path><svg:path stroke="#306CFE" d="M41.667 8.333h-25a2.083 2.083 0 0 0-2.084 2.084V31.25a2.083 2.083 0 0 0 2.084 2.083h6.25v6.25l10.416-6.25h8.334a2.083 2.083 0 0 0 2.083-2.083V10.417a2.083 2.083 0 0 0-2.083-2.084"></svg:path></svg:g>`,
})
export class MarketeqChatLeft2Icon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
