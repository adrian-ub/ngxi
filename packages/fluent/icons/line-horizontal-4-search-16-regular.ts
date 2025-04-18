import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLineHorizontal4Search16RegularIcon],svg[fluent-line-horizontal-4-search-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 8c.786 0 1.512-.26 2.096-.697l2.55 2.55a.5.5 0 1 0 .708-.707l-2.55-2.55A3.5 3.5 0 1 0 10.5 8m0-1a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5m3.288 2.909L12.878 9H2.5a.5.5 0 0 0 0 1h11a.5.5 0 0 0 .288-.091M6.758 7a4.5 4.5 0 0 1-.502-1H2.5a.5.5 0 0 0 0 1zm-.502-4q-.17.478-.229 1H2.5a.5.5 0 0 1 0-1zM2.5 12a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1z"></svg:path>`,
})
export class FluentLineHorizontal4Search16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
