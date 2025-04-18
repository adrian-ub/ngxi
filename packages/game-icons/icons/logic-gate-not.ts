import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsLogicGateNotIcon],svg[game-icons-logic-gate-not-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M105 111.3v289.4L365.5 256ZM16 247v18h71v-18zm400-14c-12.8 0-23 10.2-23 23s10.2 23 23 23s23-10.2 23-23s-10.2-23-23-23m40 14c.6 2.9 1 5.9 1 9s-.4 6.1-1 9h40v-18z"></svg:path>`,
})
export class GameIconsLogicGateNotIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
