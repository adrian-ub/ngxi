import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowBounce28FilledIcon],svg[fluent-arrow-bounce-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2 8a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H5.489l9.514 9.118l9.308-8.843a1 1 0 0 1 1.378 1.45l-10 9.5a1 1 0 0 1-1.38-.003L4 10.343V16a1 1 0 1 1-2 0z"></svg:path>`,
})
export class FluentArrowBounce28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
