import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentHexagon48RegularIcon],svg[fluent-hexagon-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15.427 8.5a.75.75 0 0 0-.655.385l-8.208 14.75a.75.75 0 0 0 0 .73l8.208 14.75a.75.75 0 0 0 .655.385h17.148a.75.75 0 0 0 .656-.385l8.207-14.75a.75.75 0 0 0 0-.73L33.23 8.885a.75.75 0 0 0-.656-.385zm-2.84-.83A3.25 3.25 0 0 1 15.427 6h17.148c1.18 0 2.267.64 2.84 1.67l8.208 14.75a3.25 3.25 0 0 1 0 3.16l-8.208 14.75a3.25 3.25 0 0 1-2.84 1.67H15.427a3.25 3.25 0 0 1-2.84-1.67L4.38 25.58a3.25 3.25 0 0 1 0-3.16z"></svg:path>`,
})
export class FluentHexagon48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
