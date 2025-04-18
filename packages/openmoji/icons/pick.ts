import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiPickIcon],svg[openmoji-pick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#a57939" d="m37.5 11.5l-.1 31.1l1.2 3.6v15.7h-6V46.2l1.2-3.6V11.5z"></svg:path><svg:path fill="#d0cfce" d="M58.6 23.3c-2-4.7-11.3-8.2-22.6-8.2c-11.4 0-20.8 3.6-22.7 8.3l8-1.5a80.7 80.7 0 0 1 29.4-.1Z"></svg:path><svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="m37.5 20.4l-.1 21.9l1.2 3.7v15.7h-6V46l1.2-3.7V20.4zm0-8.7l-.1 3.2h-3.6v-3.2z"></svg:path><svg:path d="M58.6 23.1c-2-4.7-11.3-8.2-22.6-8.2c-11.4 0-20.8 3.6-22.7 8.3l8-1.5a80.7 80.7 0 0 1 29.4-.1Z"></svg:path></svg:g>`,
})
export class OpenmojiPickIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
