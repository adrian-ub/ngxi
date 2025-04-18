import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsMetalBarIcon],svg[game-icons-metal-bar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M322.248 85.684L61.432 224.717l-41.145 109.94l7.233 3.85l153.673 81.8l308.495-164.215l-37.752-99.903zm119.035 95.187l25.11 66.45l-102.56 54.594L430.39 186.64l10.893-5.77zm-89.576 47.417L284.957 343.9l-41.67 22.182l72.195-118.62l36.225-19.175zM72.38 248.78l28.21 14.933l-54.012 54.012zm210.827 15.767L211.19 382.87l.26.16l-17.208 9.16l5.795-83.618zm-165.334 8.312l16.963 8.98l-60.445 60.445l-16.93-9.012zM181.42 306.9l-6.174 89.07l-54.1-28.798z"></svg:path>`,
})
export class GameIconsMetalBarIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
