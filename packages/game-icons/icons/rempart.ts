import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsRempartIcon],svg[game-icons-rempart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18 27v467h476V304h-46v64h-80v-64h-64v64h-80v-64h-64v64H80V192h48zm97 373h18v64h-18zm144 0h18v64h-18zm144 0h18v64h-18z"></svg:path>`,
})
export class GameIconsRempartIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
