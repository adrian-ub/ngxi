import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[twemojiMusicalKeyboardIcon],svg[twemoji-musical-keyboard-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="#31373D" d="M2 36s-2 0-2-2V2s0-2 2-2h32.031C36 0 36 2 36 2v32s0 2-2 2z"></svg:path><svg:path fill="#E1E8ED" d="M19 33s0 1 1 1h5c1 0 1-1 1-1V5h-7zm9-28v28s0 1 1 1h4c1 0 1-1 1-1V5zM10 33s0 1 1 1h5c1 0 1-1 1-1V5h-7zm-8 0s0 1 1 1h4c1 0 1-1 1-1V5H2z"></svg:path><svg:path fill="#31373D" d="M30 23s0 1-1 1h-4c-1 0-1-1-1-1V3h6zm-9 0s0 1-1 1h-4c-1 0-1-1-1-1V3h6zm-9 0s0 1-1 1H7c-1 0-1-1-1-1V3h6z"></svg:path>`,
})
export class TwemojiMusicalKeyboardIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
