import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableBottomRow16RegularIcon],svg[fluent-table-bottom-row-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.5 2A2.5 2.5 0 0 0 2 4.5v7A2.5 2.5 0 0 0 4.5 14h7a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 11.5 2zm5.5 9v2H6v-2zm-7 0h2v2h-.5A1.5 1.5 0 0 1 3 11.5zm0-1V4.5A1.5 1.5 0 0 1 4.5 3h7A1.5 1.5 0 0 1 13 4.5V10zm8 3v-2h2v.5a1.5 1.5 0 0 1-1.5 1.5z"></svg:path>`,
})
export class FluentTableBottomRow16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
