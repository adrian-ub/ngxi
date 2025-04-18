import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenHorizontalRuleStroke16Icon],svg[garden-horizontal-rule-stroke-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" d="M.5 8.5h15"></svg:path>`,
})
export class GardenHorizontalRuleStroke16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
