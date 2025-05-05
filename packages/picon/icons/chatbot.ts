import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconChatbotIcon],svg[picon-chatbot-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 6H0V1h2V0h1v1h2V0h1v1h2v7M2 4v1h4V4M2 3h1V2H2m3 1h1V2H5"></svg:path>`,
})
export class PiconChatbotIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
