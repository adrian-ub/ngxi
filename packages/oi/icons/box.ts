import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiBoxIcon],svg[oi-box-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 0v1h8V0zm0 2v5.91c0 .05.04.09.09.09H7.9c.05 0 .09-.04.09-.09V2H5.02v1.03H2.99V2h-3z"></svg:path>`,
})
export class OiBoxIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
