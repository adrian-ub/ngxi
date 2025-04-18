import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextIndentDecreaseLtr20RegularIcon],svg[fluent-text-indent-decrease-ltr-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 4.5a.5.5 0 0 1 .5-.5h8a.5.5 0 1 1 0 1h-8a.5.5 0 0 1-.5-.5M3.56 7.732a.5.5 0 0 1 .708.707L3.208 9.5l1.06 1.06a.5.5 0 1 1-.707.708L2.146 9.854a.5.5 0 0 1 0-.708zM6.5 9a.5.5 0 0 0 0 1h11a.5.5 0 1 0 0-1zM6 14.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5"></svg:path>`,
})
export class FluentTextIndentDecreaseLtr20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
