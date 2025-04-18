import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableSimpleExclude28RegularIcon],svg[fluent-table-simple-exclude-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.75 2A3.75 3.75 0 0 0 2 5.75v12a3.75 3.75 0 0 0 3.75 3.75h5.75a1 1 0 0 0 1-1v-8h8a1 1 0 0 0 1-1V5.75A3.75 3.75 0 0 0 17.75 2zM11 12.5V20H5.75a2.25 2.25 0 0 1-2.25-2.25V12.5zm0-1.5H3.5V5.75A2.25 2.25 0 0 1 5.75 3.5H11zm1.5 0V3.5h5.25A2.25 2.25 0 0 1 20 5.75V11zm1.5 5.75A2.75 2.75 0 0 1 16.75 14h6.5A2.75 2.75 0 0 1 26 16.75v6.5A2.75 2.75 0 0 1 23.25 26h-6.5A2.75 2.75 0 0 1 14 23.25z"></svg:path>`,
})
export class FluentTableSimpleExclude28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
