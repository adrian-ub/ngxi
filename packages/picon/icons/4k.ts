import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[picon4kIcon],svg[picon-4k-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6V1h1v2h2V1H6v5h1V4H5v2M0 4V1h1v2h1V1h1v5H2V4"></svg:path>`,
})
export class Picon4kIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
