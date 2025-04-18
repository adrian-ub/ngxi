import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentFoodChickenLeg24FilledIcon],svg[fluent-food-chicken-leg-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 8a6 6 0 0 0-11.898-1.106c-.569 1.84-1.083 2.843-1.365 3.309L6.22 12.72a.75.75 0 0 0 .283 1.238L4.462 16a2.5 2.5 0 0 0-1.419 4.532c.162.116.309.263.425.425A2.5 2.5 0 0 0 8 19.533l2.04-2.04a.75.75 0 0 0 1.24.287l2.524-2.524c.473-.283 1.478-.795 3.315-1.36A6 6 0 0 0 22 8M8.583 14H10v1.412l-3.116 3.115a1.37 1.37 0 0 0-.384.973a1 1 0 0 1-1.813.582a3.4 3.4 0 0 0-.769-.769A1 1 0 0 1 4.5 17.5c.299 0 .673-.09.965-.382z"></svg:path>`,
})
export class FluentFoodChickenLeg24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
