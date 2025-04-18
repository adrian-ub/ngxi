import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsJoystickIcon],svg[game-icons-joystick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M307.723 39.623c-25.627-.292-48.63 17.365-54.246 43.44c-6.418 29.8 12.39 58.93 42.19 65.347c29.798 6.417 58.927-12.39 65.345-42.19c6.417-29.798-12.39-58.928-42.188-65.345a55.8 55.8 0 0 0-11.1-1.252zm-37.543 117.88L237.123 311h47.055l30.97-143.81a72.55 72.55 0 0 1-44.968-9.686zM198.486 329l-10 30h135.028l-10-30zM73 377v30h30v-30zm93.486 0l-10 30h199.028l-10-30zM409 377v30h30v-30zM57 425v62h398v-62z"></svg:path>`,
})
export class GameIconsJoystickIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
