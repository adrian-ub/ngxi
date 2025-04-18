import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDataScatter24RegularIcon],svg[fluent-data-scatter-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.75 3a.75.75 0 0 1 .75.75v14c0 .966.784 1.75 1.75 1.75h14a.75.75 0 0 1 0 1.5h-14A3.25 3.25 0 0 1 3 17.75v-14A.75.75 0 0 1 3.75 3M14 7a3 3 0 1 1 6 0a3 3 0 0 1-6 0m3-1.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M9 6a3 3 0 1 0 0 6a3 3 0 0 0 0-6M7.5 9a1.5 1.5 0 1 1 3 0a1.5 1.5 0 0 1-3 0m4.5 6a3 3 0 1 1 6 0a3 3 0 0 1-6 0m3-1.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"></svg:path>`,
})
export class FluentDataScatter24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
