import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[piconTshirtIcon],svg[picon-tshirt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8V3H0V1h2l2 1l2-1h2v2H6v5"></svg:path>`,
})
export class PiconTshirtIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
