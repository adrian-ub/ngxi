import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentStar48FilledIcon],svg[fluent-star-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.803 6.085c.899-1.82 3.495-1.82 4.394 0l4.852 9.832l10.85 1.577c2.01.292 2.813 2.762 1.358 4.179l-7.85 7.653l1.853 10.807c.343 2-1.758 3.527-3.555 2.582L24 37.613l-9.705 5.102c-1.797.945-3.898-.581-3.555-2.583l1.854-10.806l-7.851-7.653c-1.455-1.417-.652-3.887 1.357-4.179l10.85-1.577z"></svg:path>`,
})
export class FluentStar48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
