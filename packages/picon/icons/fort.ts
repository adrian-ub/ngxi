import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconFortIcon],svg[picon-fort-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 8V6c0-2 2-2 2 0v2h3V1H6v2H5V1H3v2H2V1H0v7"></svg:path>`,
})
export class PiconFortIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
