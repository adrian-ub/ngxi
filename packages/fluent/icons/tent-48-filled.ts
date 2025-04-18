import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTent48FilledIcon],svg[fluent-tent-48-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25.002 6.02a1.25 1.25 0 0 0-1.92 0c-2.992 3.59-8.895 7.85-12.29 9.746a1.25 1.25 0 0 0-.628.92L7.434 36.5H5.25a1.25 1.25 0 0 0 0 2.5h37.5a1.25 1.25 0 1 0 0-2.5h-2.1l-2.73-19.813a1.25 1.25 0 0 0-.63-.92c-3.394-1.897-9.297-6.158-12.288-9.747M17.787 36.5c2.097-3.048 4.261-6.965 6.213-13.152c1.764 5.581 3.732 9.44 6.213 13.152z"></svg:path>`,
})
export class FluentTent48FilledIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
