import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixTrendDownwardIcon],svg[ix-trend-downward-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m120.987 90.805l199.016 199.012L320 192h42.667v170.667H192V320l97.774-.039L90.805 120.987z"></svg:path>`,
})
export class IxTrendDownwardIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
