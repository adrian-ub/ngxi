import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentArrowSwap16RegularIcon],svg[fluent-arrow-swap-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.354 1.646a.5.5 0 0 0-.708.708L11.293 4H3.5a.5.5 0 0 0 0 1h7.793L9.646 6.646a.5.5 0 1 0 .708.708l2.5-2.5a.5.5 0 0 0 0-.708zm-4 7.708a.5.5 0 1 0-.708-.708l-2.5 2.5a.5.5 0 0 0 0 .708l2.5 2.5a.5.5 0 0 0 .708-.708L4.707 12H12.5a.5.5 0 0 0 0-1H4.707z"></svg:path>`,
})
export class FluentArrowSwap16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
