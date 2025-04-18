import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenHorizontalRuleStroke12Icon],svg[garden-horizontal-rule-stroke-12-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M.5 6.5h11"></svg:path>`,
})
export class GardenHorizontalRuleStroke12Icon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
