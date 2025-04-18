import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsDetonatorIcon],svg[game-icons-detonator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25 41v46h94V41zm368 0v46h94V41zM137 55v18h110v110h18V73h110V55zM73 201v30h366v-30zm32 48v190h302V249zm151 17l96 150H160zm-9 38v64h18v-64zm9 75a12 12 0 0 0-12 12a12 12 0 0 0 12 12a12 12 0 0 0 12-12a12 12 0 0 0-12-12M73 457v30h366v-30z"></svg:path>`,
})
export class GameIconsDetonatorIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
