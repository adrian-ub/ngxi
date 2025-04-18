import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTextAlignCenterIcon],svg[carbon-text-align-center-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 6h20v2H6zm4 6h12v2H10zm-4 6h20v2H6zm4 6h12v2H10z"></svg:path>`,
})
export class CarbonTextAlignCenterIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
