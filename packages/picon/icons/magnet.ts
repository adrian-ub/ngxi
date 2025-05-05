import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconMagnetIcon],svg[picon-magnet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 1V0h2v1M0 1V0h2v1m5 4c0 4-7 4-7 0V2h2v2c0 2.5 3 2.5 3 0V2h2"></svg:path>`,
})
export class PiconMagnetIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
