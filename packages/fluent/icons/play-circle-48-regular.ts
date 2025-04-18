import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPlayCircle48RegularIcon],svg[fluent-play-circle-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m33.766 22.713l-12.362-7.388c-1.5-.896-3.404.185-3.404 1.932v13.487c0 1.747 1.904 2.828 3.404 1.931l12.362-7.387a1.5 1.5 0 0 0 0-2.575M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20m0-37.5c9.665 0 17.5 7.835 17.5 17.5S33.665 41.5 24 41.5S6.5 33.665 6.5 24S14.335 6.5 24 6.5"></svg:path>`,
})
export class FluentPlayCircle48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
