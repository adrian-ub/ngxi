import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonContinueIcon],svg[carbon-continue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 28a1 1 0 0 1-1-1V5a1 1 0 0 1 1.501-.865l19 11a1 1 0 0 1 0 1.73l-19 11A1 1 0 0 1 10 28m1-21.266v18.532L27 16zM4 4h2v24H4z"></svg:path>`,
})
export class CarbonContinueIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
