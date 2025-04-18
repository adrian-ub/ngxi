import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oiMinusIcon],svg[oi-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 3v2h8V3z"></svg:path>`,
})
export class OiMinusIcon {
  readonly viewBox = input("0 0 8 8")
  readonly width = input("1em")
  readonly height = input("1em")
}
