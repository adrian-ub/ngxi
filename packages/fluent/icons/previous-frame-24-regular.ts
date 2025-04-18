import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPreviousFrame24RegularIcon],svg[fluent-previous-frame-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M18.5 3.75a.75.75 0 0 1 1.5 0v16.5a.75.75 0 0 1-1.5 0zm-6.239-.44c1.162-.796 2.74.035 2.74 1.443v14.495c0 1.413-1.59 2.244-2.75 1.437L1.753 13.383a1.75 1.75 0 0 1 .01-2.88zm1.24 1.443a.25.25 0 0 0-.392-.206L2.611 11.74a.25.25 0 0 0-.002.412l10.499 7.301a.25.25 0 0 0 .392-.205z"></svg:path>`,
})
export class FluentPreviousFrame24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
