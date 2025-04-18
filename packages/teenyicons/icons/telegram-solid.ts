import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsTelegramSolidIcon],svg[teenyicons-telegram-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.993 1.582a.5.5 0 0 0-.661-.553l-14 5a.5.5 0 0 0-.056.918l4 2a.5.5 0 0 0 .501-.031l3.32-2.214L6.11 9.188a.5.5 0 0 0 .113.728l6 4a.5.5 0 0 0 .77-.334z"></svg:path>`,
})
export class TeenyiconsTelegramSolidIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
