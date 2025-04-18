import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqChatAltIcon],svg[marketeq-chat-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="#306CFE" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M43.75 8.333v27.084a2.083 2.083 0 0 1-2.083 2.083H31.25L25 43.75l-6.25-6.25H8.333a2.083 2.083 0 0 1-2.083-2.083V8.333A2.083 2.083 0 0 1 8.333 6.25h33.334a2.083 2.083 0 0 1 2.083 2.083"></svg:path>`,
})
export class MarketeqChatAltIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
