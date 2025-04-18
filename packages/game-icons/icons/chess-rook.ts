import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsChessRookIcon],svg[game-icons-chess-rook-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M406 484.7H106v-60h300zm-56.67-330.83h-50.05V91.3h-82.39v62.57h-54.22V91.3h-54.23v113.67h295.12V91.3h-54.23zm23.35 67.23H139.32v187.6h233.36z"></svg:path>`,
})
export class GameIconsChessRookIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
