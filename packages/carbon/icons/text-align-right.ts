import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonTextAlignRightIcon],svg[carbon-text-align-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 6h14v2H6zm4 6h10v2H10zm-4 6h14v2H6zm4 6h10v2H10zM24 4h2v24h-2z"></svg:path>`,
})
export class CarbonTextAlignRightIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
