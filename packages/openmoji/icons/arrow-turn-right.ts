import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[openmojiArrowTurnRightIcon],svg[openmoji-arrow-turn-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#3f3f3f" d="M31.669 28.3c-8.116 0-13.92 5.321-13.92 15.52v18.87h-6.14v-19.2c0-13.5 7.748-20.794 20.248-20.794H51.84l-10.4-9.6l3.8-4.1l17.8 16.5l-17.8 16.5l-3.8-4.1l10.4-9.6Z"></svg:path><svg:path fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M31.669 28.3c-8.116 0-13.92 5.321-13.92 15.52v18.87h-6.14v-19.2c0-13.5 7.748-20.794 20.248-20.794H51.84l-10.4-9.6l3.8-4.1l17.8 16.5l-17.8 16.5l-3.8-4.1l10.4-9.6Z"></svg:path>`,
})
export class OpenmojiArrowTurnRightIcon {
  readonly viewBox = input("0 0 72 72")
  readonly width = input("1em")
  readonly height = input("1em")
}
