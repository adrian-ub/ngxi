import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconBedIcon],svg[picon-bed-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 4L1 3l1-1l1 1M0 7V1h1v3h2V2h3q2 0 2 5L7 6H1"></svg:path>`,
})
export class PiconBedIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
