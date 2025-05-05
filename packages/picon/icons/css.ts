import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconCssIcon],svg[picon-css-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m1 7l3 1l3-1l1-7H0m1.5 3H5l.5-1H1V1h6L6 6H2V5h3V4H1.5"></svg:path>`,
})
export class PiconCssIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
