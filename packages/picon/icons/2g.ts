import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[picon2gIcon],svg[picon-2g-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 2V1h3v3H1v1h2v1H0V3h2V2m6 0H5v3h2V4H6V3h2v3H4V1h4"></svg:path>`,
})
export class Picon2gIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
