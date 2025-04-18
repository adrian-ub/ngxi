import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDataWaterfall24FilledIcon],svg[fluent-data-waterfall-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.75 3a.75.75 0 0 0 0 1.5H4v5.75a2.25 2.25 0 0 0 2.25 2.25h6.25v6.25A2.25 2.25 0 0 0 14.75 21h6.5a.75.75 0 0 0 0-1.5H20v-6.25A2.25 2.25 0 0 0 17.75 11H11.5V5.25A2.25 2.25 0 0 0 9.25 3z"></svg:path>`,
})
export class FluentDataWaterfall24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
