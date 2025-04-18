import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiInputPowerIcon],svg[zmdi-input-power-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M214 85q15 0 28.5 13.5T256 128v117l-75 75v64H75v-64L0 245V128q0-16 13.5-29.5T42 85h1V0h42v85h86V0h42z"></svg:path>`,
})
export class ZmdiInputPowerIcon {
  readonly viewBox = input("0 0 256 384")
  readonly width = input("0.67em")
  readonly height = input("1em")
}
