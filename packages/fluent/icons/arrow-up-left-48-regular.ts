import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowUpLeft48RegularIcon],svg[fluent-arrow-up-left-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25.75 6a1.25 1.25 0 1 1 0 2.5H10.268l31.366 31.366a1.25 1.25 0 0 1-1.768 1.768L8.5 10.268V25.75a1.25 1.25 0 1 1-2.5 0V7.25C6 6.56 6.56 6 7.25 6z"></svg:path>`,
})
export class FluentArrowUpLeft48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
