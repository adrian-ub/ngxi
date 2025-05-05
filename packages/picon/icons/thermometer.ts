import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconThermometerIcon],svg[picon-thermometer-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 1v1h1V1M4 4C0 8 9 8 5 4V1H4m2 3c4 5-7 5-3 0V0h4v3H6"></svg:path>`,
})
export class PiconThermometerIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
