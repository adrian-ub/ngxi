import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowUpRight48RegularIcon],svg[fluent-arrow-up-right-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22.25 6a1.25 1.25 0 1 0 0 2.5h15.482L6.366 39.866a1.25 1.25 0 0 0 1.768 1.768L39.5 10.268V25.75a1.25 1.25 0 1 0 2.5 0V7.25C42 6.56 41.44 6 40.75 6z"></svg:path>`,
})
export class FluentArrowUpRight48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
