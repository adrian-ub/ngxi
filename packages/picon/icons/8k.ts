import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[picon8kIcon],svg[picon-8k-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4 6V1h1v2h2V1H6v5h1V4H5v2M1 2v1h1V2M1 4v1h1V4M0 6V1h3v5"></svg:path>`,
})
export class Picon8kIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
