import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconSkullIcon],svg[picon-skull-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 4H5v2h2M1 4v2h2V4m5 3H6v1H2V7H0V3q0-3 4-3t4 3"></svg:path>`,
})
export class PiconSkullIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
