import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconOilIcon],svg[picon-oil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 1h3v1H4v1h4v1H6L5 6H1V4H0V2h1l1 1h1V2H2m5 4l1-1v3L7 7"></svg:path>`,
})
export class PiconOilIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
