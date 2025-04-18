import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonExpandCategoriesIcon],svg[carbon-expand-categories-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 26h6v2h-6zm0-8h8v2h-8zm0-8h10v2H20zm-5-6h2v24h-2zm-4.414-.041L7 7.249L3.412 3.958L2 5.373L7 10l5-4.627z"></svg:path>`,
})
export class CarbonExpandCategoriesIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
