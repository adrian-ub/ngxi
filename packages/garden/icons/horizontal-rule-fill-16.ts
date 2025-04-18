import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gardenHorizontalRuleFill16Icon],svg[garden-horizontal-rule-fill-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M1 8h14"></svg:path>`,
})
export class GardenHorizontalRuleFill16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
