import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[marketeqInformationChatRightIcon],svg[marketeq-information-chat-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round"><svg:path stroke="#344054" stroke-width="3" d="M25.104 16.667h-.208"></svg:path><svg:path stroke="#344054" stroke-width="2" d="M25 33.333v-6.25"></svg:path><svg:path stroke="#306CFE" stroke-width="2" d="M6.5 28.063a18.75 18.75 0 0 0 27.083 13.583l7.063 1.458a2.083 2.083 0 0 0 2.458-2.458l-1.437-7.084a18.75 18.75 0 1 0-35.167-5.5"></svg:path></svg:g>`,
})
export class MarketeqInformationChatRightIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
