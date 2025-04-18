import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonDrillThroughIcon],svg[carbon-drill-through-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 30A14.016 14.016 0 0 1 2 16h2A12 12 0 1 0 16 4V2a14 14 0 0 1 0 28"></svg:path><svg:path fill="currentColor" d="M4 12v-2h4.586L2 3.414L3.414 2L10 8.586V4h2v8zm12-2v6h-6a6 6 0 1 0 6-6"></svg:path>`,
})
export class CarbonDrillThroughIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
