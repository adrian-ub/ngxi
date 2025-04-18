import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowSwap16FilledIcon],svg[fluent-arrow-swap-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.28 1.72a.75.75 0 1 0-1.06 1.06L10.44 4H3.75a.75.75 0 0 0 0 1.5h6.69L9.22 6.72a.75.75 0 0 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06zm-3.5 7.56a.75.75 0 0 0-1.06-1.06l-2.5 2.5a.75.75 0 0 0 0 1.06l2.5 2.5a.75.75 0 0 0 1.06-1.06L5.56 12h6.69a.75.75 0 0 0 0-1.5H5.56z"></svg:path>`,
})
export class FluentArrowSwap16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
