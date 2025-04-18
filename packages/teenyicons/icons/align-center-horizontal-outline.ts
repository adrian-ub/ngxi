import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[teenyiconsAlignCenterHorizontalOutlineIcon],svg[teenyicons-align-center-horizontal-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M7.5 0v3.5m0 8V15m0-8.5v2M4 3.5v3h7v-3zm-2.5 5v3h12v-3z"></svg:path>`,
})
export class TeenyiconsAlignCenterHorizontalOutlineIcon {
  readonly viewBox = input("0 0 15 15")
  readonly width = input("1em")
  readonly height = input("1em")
}
