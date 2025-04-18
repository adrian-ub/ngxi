import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentStarOneQuarter20FilledIcon],svg[fluent-star-one-quarter-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M8 5.137L7.174 6.81l-4.317.627a1 1 0 0 0-.554 1.706l3.124 3.044l-.738 4.3a1.002 1.002 0 0 0 1.038 1.17a1 1 0 0 0 .414-.117L8 16.565z"></svg:path>`,
})
export class FluentStarOneQuarter20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
