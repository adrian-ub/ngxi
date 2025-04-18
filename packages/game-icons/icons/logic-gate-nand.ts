import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsLogicGateNandIcon],svg[game-icons-logic-gate-nand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M105 105v302h151c148 0 148-302 0-302zm-89 46v18h71v-18zm400 82c-12.8 0-23 10.2-23 23s10.2 23 23 23s23-10.2 23-23s-10.2-23-23-23m40 14c.6 2.9 1 5.9 1 9s-.4 6.1-1 9h40v-18zM16 343v18h71v-18z"></svg:path>`,
})
export class GameIconsLogicGateNandIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
