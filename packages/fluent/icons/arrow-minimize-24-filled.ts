import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowMinimize24FilledIcon],svg[fluent-arrow-minimize-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.498 12.505a1 1 0 0 1 .993.884l.007.116v7.504a1 1 0 0 1-1.994.117l-.006-.117v-5.093l-5.791 5.792a1 1 0 0 1-1.32.083l-.095-.083a1 1 0 0 1-.083-1.32l.083-.095l5.788-5.788H2.996a1 1 0 0 1-.117-1.993l.117-.007zm3-10.505a1 1 0 0 1 .994.883l.007.117v5.087l5.793-5.794a1 1 0 0 1 1.32-.083l.095.083a1 1 0 0 1 .083 1.32l-.083.095l-5.797 5.795H21a1 1 0 0 1 .117 1.994l-.117.007h-7.5a1 1 0 0 1-.994-.883l-.006-.117V3a1 1 0 0 1 1-1"></svg:path>`,
})
export class FluentArrowMinimize24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
