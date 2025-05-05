import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconPowerIcon],svg[picon-power-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 1c3 0 3 7-2 7s-5-7-2-7v1C0 2 0 7 4 7s4-5 2-5M3 0h2v4H3"></svg:path>`,
})
export class PiconPowerIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
