import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPaddingRight24RegularIcon],svg[fluent-padding-right-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.75 4.5a.75.75 0 0 1 .75.75v13a.75.75 0 0 1-1.5 0v-13a.75.75 0 0 1 .75-.75m18.5 0a.75.75 0 0 1 .75.75v.867a.75.75 0 0 1-1.5 0V5.25a.75.75 0 0 1 .75-.75m0 3.467a.75.75 0 0 1 .75.75v1.733a.75.75 0 0 1-1.5 0V8.717a.75.75 0 0 1 .75-.75m0 4.333a.75.75 0 0 1 .75.75v1.733a.75.75 0 0 1-1.5 0V13.05a.75.75 0 0 1 .75-.75m0 4.333a.75.75 0 0 1 .75.75v.867a.75.75 0 0 1-1.5 0v-.867a.75.75 0 0 1 .75-.75m-2.47-4.353a.75.75 0 0 0 0-1.06l-5-5a.75.75 0 1 0-1.06 1.06L16.44 11H5.75a.75.75 0 0 0 0 1.5h10.69l-3.72 3.72a.75.75 0 1 0 1.06 1.06z"></svg:path>`,
})
export class FluentPaddingRight24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
