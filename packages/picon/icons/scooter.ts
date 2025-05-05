import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconScooterIcon],svg[picon-scooter-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 8L5 7l1-1l1 1M3 1H0V0h3M2 8L1 7l1-1l1 1M1 6V1h1v4h5v1"></svg:path>`,
})
export class PiconScooterIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
