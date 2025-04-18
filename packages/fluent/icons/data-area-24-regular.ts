import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDataArea24RegularIcon],svg[fluent-data-area-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.75 3a.75.75 0 0 1 .75.75v6.258l3.65-1.922a.75.75 0 0 1 .73.018l3.82 2.246l5.6-4.2a.75.75 0 0 1 1.2.6V19.5h.75a.75.75 0 0 1 0 1.5h-14A3.25 3.25 0 0 1 3 17.75v-14A.75.75 0 0 1 3.75 3M18 19.5V8.25l-4.8 3.6a.75.75 0 0 1-.83.046L8.48 9.609L4.5 11.703v6.047c0 .966.784 1.75 1.75 1.75z"></svg:path>`,
})
export class FluentDataArea24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
