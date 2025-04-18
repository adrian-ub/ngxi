import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsElectricWhipIcon],svg[game-icons-electric-whip-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.484 39.262c49.142 2.758 98.444 7.823 147.96 15.924l-6.188-37.095L298.61 124.75l8.177-41.976L421.17 255.672l32.39-29.328l-4.658 171.826l45.943 6.657l-128.062 62.762l28.438 25.59l-234.395-2.697c405.34-23.83 225.85-392.453-143.335-451.22z"></svg:path>`,
})
export class GameIconsElectricWhipIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
