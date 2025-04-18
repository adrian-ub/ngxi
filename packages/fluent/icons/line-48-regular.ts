import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLine48RegularIcon],svg[fluent-line-48-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M43.634 4.366a1.25 1.25 0 0 1 0 1.768l-37.5 37.5a1.25 1.25 0 0 1-1.768-1.768l37.5-37.5a1.25 1.25 0 0 1 1.768 0"></svg:path>`,
})
export class FluentLine48RegularIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
