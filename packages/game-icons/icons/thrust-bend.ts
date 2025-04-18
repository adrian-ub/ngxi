import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsThrustBendIcon],svg[game-icons-thrust-bend-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128.842 62.334c-23.151 0-43.737 5.138-59.522 17.666c-104.521 82.955 16 400 16 400h400S62.472 282.86 142.142 144c36.264-63.205 188.819 28.358 236.457 59.102c-13.827 12.298-36.347 21.55-62.675 35.735c42.774 7.379 107.957-6.075 133.072-19.825c-16.707-54.737-41.265-98.913-83.787-123.87c12.637 27.463 22.197 50.35 23.248 70.883c-27.068-17.556-164.658-103.69-259.615-103.691"></svg:path>`,
})
export class GameIconsThrustBendIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
