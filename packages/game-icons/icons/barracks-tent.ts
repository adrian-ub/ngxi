import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsBarracksTentIcon],svg[game-icons-barracks-tent-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M247 28v80h18V28zm35 0v64l80-32zm-26 96c-48 48-144 112-192 128c0 64-16 208-32 240h160c16-16 64-144 64-192c0 48 48 176 64 192h160c-16-32-32-176-32-240c-48-16-144-80-192-128M112 300h80v80h-80z"></svg:path>`,
})
export class GameIconsBarracksTentIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
