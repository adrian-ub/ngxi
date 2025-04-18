import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowUpRightDashes48RegularIcon],svg[fluent-arrow-up-right-dashes-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.25 6a1.25 1.25 0 1 0 0 2.5h15.482l-7.366 7.366a1.25 1.25 0 0 0 1.768 1.768l7.366-7.366V25.75a1.25 1.25 0 1 0 2.5 0V7.25C42 6.56 41.44 6 40.75 6zm-5.616 27.134a1.25 1.25 0 0 0-1.768-1.768l-8.5 8.5a1.25 1.25 0 0 0 1.768 1.768zm12-13.768a1.25 1.25 0 0 1 0 1.768l-8.5 8.5a1.25 1.25 0 0 1-1.768-1.768l8.5-8.5a1.25 1.25 0 0 1 1.768 0"></svg:path>`,
})
export class FluentArrowUpRightDashes48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
