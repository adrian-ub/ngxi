import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowSprint20RegularIcon],svg[fluent-arrow-sprint-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10 6a3.501 3.501 0 1 0 0 7h7.293l-1.147-1.146a.5.5 0 0 1 .708-.708l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L17.293 14H10a4.5 4.5 0 1 1 3.742-2H12.45A3.5 3.5 0 0 0 10 6m-7.5 7h3.257c.314.38.677.716 1.08 1H2.5a.5.5 0 0 1 0-1"></svg:path>`,
})
export class FluentArrowSprint20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
