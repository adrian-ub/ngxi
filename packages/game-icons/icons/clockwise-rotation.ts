import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsClockwiseRotationIcon],svg[game-icons-clockwise-rotation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M263.09 50a206 206 0 0 0-35.857 3.13C142.026 68.156 75.156 135.026 60.13 220.233C45.108 305.44 85.075 391.15 160.005 434.41c32.782 18.927 69.254 27.996 105.463 27.553c46.555-.57 92.675-16.865 129.957-48.15l-30.855-36.768a157.85 157.85 0 0 1-180.566 15.797a157.85 157.85 0 0 1-76.603-164.274A157.85 157.85 0 0 1 235.571 100.4a157.84 157.84 0 0 1 139.17 43.862L327 192h128V64l-46.34 46.342C370.242 71.962 317.83 50.03 263.09 50"></svg:path>`,
})
export class GameIconsClockwiseRotationIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
