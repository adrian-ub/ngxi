import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconWorkstationIcon],svg[picon-workstation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m7 2l1 1l-1 1l-1-1m1 5L6 6H1L0 8m8-3V0H6v5M4 4V1H1v3M0 5V0h5v5"></svg:path>`,
})
export class PiconWorkstationIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
