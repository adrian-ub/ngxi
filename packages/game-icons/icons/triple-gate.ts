import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsTripleGateIcon],svg[game-icons-triple-gate-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M256 24L22 216v272h29.03V335.5c0-27.8 27.74-55.5 55.47-55.5c27.7 0 55.5 27.7 55.5 55.5V488h30V312c0-32 32-64 64-64s64 32 64 64v176h30V335.5c0-27.8 27.8-55.5 55.5-55.5s55.5 27.7 55.5 55.5V488h29V216zm-32 55h64v18h-64zm-64 64h192v18H160zm-64 64h320v18H96z"></svg:path>`,
})
export class GameIconsTripleGateIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
