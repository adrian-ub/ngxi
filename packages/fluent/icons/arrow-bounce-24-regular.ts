import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowBounce24RegularIcon],svg[fluent-arrow-bounce-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.003 6.75a.75.75 0 0 0-.75-.75H2.751a.75.75 0 0 0-.75.75v7.5a.75.75 0 0 0 1.5 0V8.56l8.718 8.72a.75.75 0 0 0 1.06 0l8.5-8.5a.75.75 0 1 0-1.06-1.06l-7.97 7.97L4.562 7.5h5.69a.75.75 0 0 0 .75-.75"></svg:path>`,
})
export class FluentArrowBounce24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
