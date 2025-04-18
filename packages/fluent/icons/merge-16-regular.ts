import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMerge16RegularIcon],svg[fluent-merge-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.503 7.5H9.88a2.5 2.5 0 0 1-1.898-.873L6.478 4.873A2.5 2.5 0 0 0 4.58 4H2.5a.5.5 0 0 0 0 1h2.08a1.5 1.5 0 0 1 1.139.524l1.503 1.754c.247.288.537.53.855.722a3.5 3.5 0 0 0-.855.722L5.72 10.476A1.5 1.5 0 0 1 4.58 11H2.5a.5.5 0 0 0 0 1h2.08a2.5 2.5 0 0 0 1.898-.873l1.504-1.754A2.5 2.5 0 0 1 9.88 8.5h2.533l-2.293 2.675a.5.5 0 1 0 .76.65l3-3.5a.5.5 0 0 0 0-.65l-3-3.5a.5.5 0 1 0-.76.65L12.413 7.5z"></svg:path>`,
})
export class FluentMerge16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
