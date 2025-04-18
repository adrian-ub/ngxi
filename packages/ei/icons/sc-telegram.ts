import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[eiScTelegramIcon],svg[ei-sc-telegram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M37.1 13L9.4 24c-.9.3-.8 1.6.1 1.9l7 2.2l2.8 8.8c.2.7 1.1.9 1.6.4l4.1-3.8l7.8 5.7c.6.4 1.4.1 1.6-.6l5.4-23.2c.3-1.7-1.2-3-2.7-2.4M20.9 29.8L20 35l-2-7.2L37.5 15z"></svg:path>`,
})
export class EiScTelegramIcon {
  readonly viewBox = input("0 0 50 50")
  readonly width = input("1em")
  readonly height = input("1em")
}
