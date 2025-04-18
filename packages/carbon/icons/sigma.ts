import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonSigmaIcon],svg[carbon-sigma-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24 5H7v2.414L15.586 16L7 24.586V27h17v-2H9.414l9-9l-9-9H24z"></svg:path>`,
})
export class CarbonSigmaIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
