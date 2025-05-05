import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconFareneightIcon],svg[picon-fareneight-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 1H1v1h1m1 1H0V0h3m4 5H5v2H4V2h4L7 3H5v1h2"></svg:path>`,
})
export class PiconFareneightIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
