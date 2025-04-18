import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTextColumnOne24RegularIcon],svg[fluent-text-column-one-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 5.75A.75.75 0 0 1 5.75 5h12.5a.75.75 0 0 1 0 1.5H5.75A.75.75 0 0 1 5 5.75m0 4A.75.75 0 0 1 5.75 9h12.5a.75.75 0 0 1 0 1.5H5.75A.75.75 0 0 1 5 9.75m0 4a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5H5.75a.75.75 0 0 1-.75-.75m0 4a.75.75 0 0 1 .75-.75h12.5a.75.75 0 0 1 0 1.5H5.75a.75.75 0 0 1-.75-.75"></svg:path>`,
})
export class FluentTextColumnOne24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
