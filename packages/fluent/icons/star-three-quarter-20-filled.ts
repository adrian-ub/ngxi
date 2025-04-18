import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentStarThreeQuarter20FilledIcon],svg[fluent-star-three-quarter-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12 5.133l-1.102-2.234a1 1 0 0 0-1.794 0l-1.93 3.912l-4.317.627a1 1 0 0 0-.554 1.706l3.124 3.044l-.738 4.3a1 1 0 0 0 1.451 1.054l3.861-2.03L12 16.562z"></svg:path>`,
})
export class FluentStarThreeQuarter20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
