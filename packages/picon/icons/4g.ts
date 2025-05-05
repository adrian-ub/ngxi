import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[picon4gIcon],svg[picon-4g-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 2H5v3h2V4H6V3h2v3H4V1h4M2 4H0V1h1v2h1V2h1v4H2"></svg:path>`,
})
export class Picon4gIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
