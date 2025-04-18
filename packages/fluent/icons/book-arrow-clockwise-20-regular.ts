import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBookArrowClockwise20RegularIcon],svg[fluent-book-arrow-clockwise-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.5 3.48a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-1 0v.758a4.5 4.5 0 1 0 2 3.742a.5.5 0 0 0-1 0a3.5 3.5 0 1 1-1.696-3H15.5a.5.5 0 0 0 0 1zM16 10.773a5.5 5.5 0 0 1-1 .185V15H5V4a1 1 0 0 1 1-1h3.59c.18-.358.4-.693.651-1H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h9.5a.5.5 0 0 0 0-1H6a1 1 0 0 1-1-1h10a1 1 0 0 0 1-1z"></svg:path>`,
})
export class FluentBookArrowClockwise20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
