import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconAtIcon],svg[picon-at-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 5V2H1v4h6v1H2V1h4v3H5V3H3v2"></svg:path>`,
})
export class PiconAtIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
