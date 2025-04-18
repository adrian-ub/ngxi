import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsLockersIcon],svg[game-icons-lockers-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25 73v414h142V73zm160 0v414h142V73zm160 0v414h142V73zM39 112h18v23h78v-23h18v41H39zm160 0h18v23h78v-23h18v41H199zm160 0h18v23h78v-23h18v41H359zM39 176h18v23h78v-23h18v41H39zm160 0h18v23h78v-23h18v41H199zm160 0h18v23h78v-23h18v41H359zM64 279c13.7 0 25 11.3 25 25s-11.3 25-25 25s-25-11.3-25-25s11.3-25 25-25m160 0c13.7 0 25 11.3 25 25s-11.3 25-25 25s-25-11.3-25-25s11.3-25 25-25m160 0c13.7 0 25 11.3 25 25s-11.3 25-25 25s-25-11.3-25-25s11.3-25 25-25M64 297c-3.97 0-7 3-7 7s3.03 7 7 7s7-3 7-7s-3.03-7-7-7m160 0c-4 0-7 3-7 7s3 7 7 7s7-3 7-7s-3-7-7-7m160 0c-4 0-7 3-7 7s3 7 7 7s7-3 7-7s-3-7-7-7M48 407h96v18H48zm160 0h96v18h-96zm160 0h96v18h-96zM48 441h96v18H48zm160 0h96v18h-96zm160 0h96v18h-96z"></svg:path>`,
})
export class GameIconsLockersIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
