import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixProductIcon],svg[ix-product-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m256 34.347l192 110.851v221.703L256 477.752L64 366.901V145.198zm-64.001 206.918L192 391.536l42.667 24.635V265.899zM106.667 192v150.267l42.666 24.635V216.633zm233.324-59.894l-125.578 72.836L256 228.952l125.867-72.669zM256 83.614l-125.867 72.67l41.662 24.052l125.579-72.835z"></svg:path>`,
})
export class IxProductIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
