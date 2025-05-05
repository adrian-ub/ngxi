import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconOrIcon],svg[picon-or-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 6V0h6v2h2v6H2V6M1 1v4h2v2h4V3H5V1"></svg:path>`,
})
export class PiconOrIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
