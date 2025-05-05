import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconBattery3Icon],svg[picon-battery3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 4V2H3v2M2 8V1h1V0h2v1h1v7"></svg:path>`,
})
export class PiconBattery3Icon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
