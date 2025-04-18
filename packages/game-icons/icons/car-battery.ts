import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsCarBatteryIcon],svg[game-icons-car-battery-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M73 81v46h46V81zm320 0v46h46V81zM25 145v16h462v-16zm0 34v252h462V179zm382 21h18v23h23v18h-23v23h-18v-23h-23v-18h23zM64 223h64v18H64z"></svg:path>`,
})
export class GameIconsCarBatteryIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
