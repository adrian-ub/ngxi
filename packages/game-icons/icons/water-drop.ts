import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsWaterDropIcon],svg[game-icons-water-drop-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M406.043 316c24.11 96.443-50.59 180-150 180s-174.405-82.38-150-180c15-60 90-150 150-300c60 150 135 240 150 300"></svg:path>`,
})
export class GameIconsWaterDropIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
