import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCatchUp20FilledIcon],svg[fluent-catch-up-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7.671 7.144a.25.25 0 0 1 .46.018l2.333 6.206c.545 1.448 2.564 1.529 3.222.128l1.223-2.603a.25.25 0 0 1 .226-.143H16.2a1.5 1.5 0 1 0 .001-1.5h-1.066a1.75 1.75 0 0 0-1.584 1.006l-1.222 2.602a.25.25 0 0 1-.46-.018L9.535 6.634c-.545-1.448-2.564-1.529-3.222-.128l-1.223 2.6a.25.25 0 0 1-.226.144H3.8a1.5 1.5 0 1 0 0 1.5h1.066A1.75 1.75 0 0 0 6.45 9.744z"></svg:path>`,
})
export class FluentCatchUp20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
