import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsPlatformIcon],svg[game-icons-platform-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m318 123.645l-61.5 35.7l-61.76-35.7l61.76-35.7zm93.68 54.19l-61.76 35.7l61.76 35.7l61.5-35.7zm-294.39 80.64l61.76 35.7l61.5-35.7l-61.5-35.7zm139.52-80.57l-61.76 35.7l61.76 35.7l61.5-35.7zM31 298.365l62 35.69v-71l-62-35.65v71zm373-26l-62 35.69v70.94l62-35.66zm-225.11-139.4l-61.76 35.7l61.76 35.7l61.5-35.7zM109 343.305l62 35.69v-70.94l-62-35.69v71zm225.41-120.45l-61.76 35.7l61.76 35.7l61.5-35.7zM249 353.055l-62-35.7v71l62 35.7zm77-35.67l-61 35.67v70.94l61-35.66zm8.07-184.5l-61.76 35.7l61.76 35.7l61.5-35.7zm-232.6 44.95l-61.77 35.7l61.76 35.7l61.5-35.7zM481 227.565l-61 35.66v70.94l61-35.66zm-286.11 75.93l61.76 35.7l61.5-35.7l-61.5-35.7z"></svg:path>`,
})
export class GameIconsPlatformIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
