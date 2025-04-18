import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gameIconsBatteryPackAltIcon],svg[game-icons-battery-pack-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M226 16c-24.93 0-45 13.38-45 30v15h-45c-29.547 0-60 30.453-60 60v315c0 29.547 30.453 60 60 60h240c29.547 0 60-30.453 60-60V121c0-29.547-30.453-60-60-60h-45V46c0-16.62-20.07-30-45-30zm-90 105h240v315H136zm120 30v105h-75l75 150V301h75z"></svg:path>`,
})
export class GameIconsBatteryPackAltIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
