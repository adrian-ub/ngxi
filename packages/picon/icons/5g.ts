import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[picon5gIcon],svg[picon-5g-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2H5v3h2V4H6V3h2v3H4V1h4M2 4H0V1h3v1H1v1h2v3H0V5h2"></svg:path>`,
})
export class Picon5gIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
