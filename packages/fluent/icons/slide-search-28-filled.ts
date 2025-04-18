import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentSlideSearch28FilledIcon],svg[fluent-slide-search-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.254 4a3.25 3.25 0 0 0-3.25 3.25v6.555A6.48 6.48 0 0 1 6.5 12a6.47 6.47 0 0 1 3.466 1H20.25a.75.75 0 0 1 0 1.5h-8.626a6.5 6.5 0 0 1 1.202 2.5h5.424a.75.75 0 0 1 0 1.5H13a6.47 6.47 0 0 1-.835 3.19l2.31 2.31h8.276a3.25 3.25 0 0 0 3.25-3.25V7.25A3.25 3.25 0 0 0 22.751 4zM7 9.75A.75.75 0 0 1 7.75 9h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 7 9.75m3.883 12.073a5.5 5.5 0 1 0-1.06 1.06l2.897 2.897a.75.75 0 1 0 1.06-1.06zM10.5 18.5a4 4 0 1 1-8 0a4 4 0 0 1 8 0"></svg:path>`,
})
export class FluentSlideSearch28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
