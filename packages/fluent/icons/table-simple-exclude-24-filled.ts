import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableSimpleExclude24FilledIcon],svg[fluent-table-simple-exclude-24-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.25 2H9.5v7.5H2V5.25A3.25 3.25 0 0 1 5.25 2M2 11v4.25a3.25 3.25 0 0 0 3.25 3.25H9.5V11zm16.5-1.5V5.25A3.25 3.25 0 0 0 15.25 2H11v7.5zm-6 5.25a2.25 2.25 0 0 1 2.25-2.25h5A2.25 2.25 0 0 1 22 14.75v5A2.25 2.25 0 0 1 19.75 22h-5a2.25 2.25 0 0 1-2.25-2.25z"></svg:path>`,
})
export class FluentTableSimpleExclude24FilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
