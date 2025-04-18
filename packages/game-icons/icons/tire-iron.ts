import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsTireIronIcon],svg[game-icons-tire-iron-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180 34.39c-9.2.1-18.2 2.89-26.1 7.41c-11.2 6.44-20.6 16.6-24 29.44L24.92 468.6l17.42 4.6L147.3 75.86c1.9-6.99 7.8-14.01 15.6-18.46c7.7-4.45 16.9-6.08 24-4.19l76.2 20.31l14.7 25.1l72.1 19.18L365 60.76l-72.1-19.19l-3.2 1.86l-22 12.69l-76.2-20.29c-3.2-.86-6.5-1.31-9.7-1.42H180zM327 157.5c-88.4 0-160 71.6-160 160c0 88.5 71.6 160.1 160 160.1c88.5 0 160.1-71.6 160.1-160.1c0-88.4-71.6-160-160.1-160m-.3 74h.3a86.06 86.06 0 0 1 86.1 86a86.06 86.06 0 0 1-86.1 86.1a86.06 86.06 0 0 1-86-86.1a86.06 86.06 0 0 1 85.7-86"></svg:path>`,
})
export class GameIconsTireIronIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
