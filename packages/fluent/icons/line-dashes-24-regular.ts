import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLineDashes24RegularIcon],svg[fluent-line-dashes-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.785 2.223a.75.75 0 0 1 0 1.06l-1 1.001a.75.75 0 1 1-1.061-1.06l1-1.001a.75.75 0 0 1 1.061 0m-4.008 4a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 0 1-1.06-1.06l1.5-1.5a.75.75 0 0 1 1.06 0M13.28 10.72a.75.75 0 0 1 0 1.06l-1.5 1.5a.75.75 0 1 1-1.06-1.06l1.5-1.5a.75.75 0 0 1 1.06 0m-4.503 5.563a.75.75 0 0 0-1.06-1.06l-1.5 1.5a.75.75 0 0 0 1.06 1.06zM4.281 20.78a.75.75 0 1 0-1.06-1.06l-1.001 1a.75.75 0 1 0 1.06 1.061z"></svg:path>`,
})
export class FluentLineDashes24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
