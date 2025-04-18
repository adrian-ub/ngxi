import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[primeTelegramIcon],svg[prime-telegram-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 4a8 8 0 1 0 8 8a8 8 0 0 0-8-8m3.93 5.48l-1.31 6.19c-.1.44-.36.54-.73.34l-2-1.48l-1 .93a.51.51 0 0 1-.4.2l.14-2l3.7-3.35c.17-.14 0-.22-.24-.08l-4.54 2.85l-2-.62c-.43-.13-.44-.43.09-.63l7.71-3c.38-.11.7.11.58.65"></svg:path>`,
})
export class PrimeTelegramIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
