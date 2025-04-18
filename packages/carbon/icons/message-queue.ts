import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonMessageQueueIcon],svg[carbon-message-queue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M28 28H4a2 2 0 0 1-2-2v-5h2v5h24v-5h2v5a2 2 0 0 1-2 2"></svg:path><svg:path fill="currentColor" d="M7 21h18v2H7zm0-5h18v2H7zm0-5h18v2H7zm0-5h18v2H7z"></svg:path>`,
})
export class CarbonMessageQueueIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
