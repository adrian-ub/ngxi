import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[emojioneMonotoneBrightButtonIcon],svg[emojione-monotone-bright-button-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29 50.54h6V62h-6zM29 2h6v11.46h-6zm21.539 27H62v6H50.539zM2 29h11.461v6H2zm10.909 26.335l-4.242-4.243l8.104-8.102l4.242 4.243zM51.091 8.666l4.242 4.243l-8.104 8.102l-4.242-4.243zm-.004 46.669l-8.104-8.104l4.243-4.243l8.104 8.104zM16.769 21.013l-8.104-8.104l4.242-4.243l8.104 8.104zM32 17c-8.284 0-15 6.716-15 15s6.716 15 15 15s15-6.716 15-15s-6.716-15-15-15m0 25c-5.522 0-10-4.478-10-10s4.478-10 10-10s10 4.478 10 10s-4.478 10-10 10"></svg:path>`,
})
export class EmojioneMonotoneBrightButtonIcon {
  readonly viewBox = input("0 0 64 64")
  readonly width = input("1em")
  readonly height = input("1em")
}
