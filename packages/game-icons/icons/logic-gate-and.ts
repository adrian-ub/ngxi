import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsLogicGateAndIcon],svg[game-icons-logic-gate-and-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M105 105v302h151c148 0 148-302 0-302zm-89 46v18h71v-18zm368.8 96q.3 9 0 18H496v-18zM16 343v18h71v-18z"></svg:path>`,
})
export class GameIconsLogicGateAndIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
