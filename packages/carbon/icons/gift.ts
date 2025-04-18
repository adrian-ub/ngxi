import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonGiftIcon],svg[carbon-gift-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M26 10h-2.762A4.487 4.487 0 0 0 16 4.707A4.487 4.487 0 0 0 8.762 10H6a2.003 2.003 0 0 0-2 2v4a2.003 2.003 0 0 0 2 2v10a2.003 2.003 0 0 0 2 2h16a2.003 2.003 0 0 0 2-2V18a2.003 2.003 0 0 0 2-2v-4a2.003 2.003 0 0 0-2-2m-9-2.5a2.5 2.5 0 1 1 2.5 2.5H17ZM12.5 5A2.503 2.503 0 0 1 15 7.5V10h-2.5a2.5 2.5 0 0 1 0-5M6 12h9v4H6Zm2 6h7v10H8Zm16.001 10H17V18h7ZM17 16v-4h9l.001 4Z"></svg:path>`,
})
export class CarbonGiftIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
