import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiClampIcon],svg[twemoji-clamp-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="13" cy="33" r="3" fill="#67757F"></svg:circle><svg:circle cx="32" cy="33" r="3" fill="#67757F"></svg:circle><svg:path fill="#67757F" d="M13 32h19v2H13z"></svg:path><svg:path fill="#9AAAB4" d="M20 15.502c0-1.381 1.119-1.5 2.5-1.5s2.5.119 2.5 1.5V33.5a2.5 2.5 0 1 1-5 0z"></svg:path><svg:path fill="#67757F" d="M27 15.002a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2c0-1.105.896-1 2-1h5c1.104 0 2-.104 2 1"></svg:path><svg:path fill="#DA2F47" d="M28 27a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2zm0-22a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2z"></svg:path><svg:path fill="#DA2F47" d="M13 22a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h15V4a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v19a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4v-1z"></svg:path><svg:path fill="#E75A70" d="M9 20a2 2 0 0 1-4 0V7a2 2 0 0 1 4 0z"></svg:path>`,
})
export class TwemojiClampIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
