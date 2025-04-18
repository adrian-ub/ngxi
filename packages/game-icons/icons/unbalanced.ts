import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsUnbalancedIcon],svg[game-icons-unbalanced-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M404.5 162.5c-26.1 0-47 20.9-47 47s20.9 47 47 47s47-20.9 47-47s-20.9-47-47-47m72.2 89.1l-447.99 176l6.58 16.8l448.01-176zM121.2 287l-87.28 35l29 72.4l87.28-35zM256 383l-78 104h156z"></svg:path>`,
})
export class GameIconsUnbalancedIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
