import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableSimpleExclude16RegularIcon],svg[fluent-table-simple-exclude-16-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 1A2.5 2.5 0 0 0 1 3.5v6A2.5 2.5 0 0 0 3.5 12h3a.5.5 0 0 0 .5-.5V7h4.5a.5.5 0 0 0 .5-.5v-3A2.5 2.5 0 0 0 9.5 1zM6 7v4H3.5A1.5 1.5 0 0 1 2 9.5V7zm0-1H2V3.5A1.5 1.5 0 0 1 3.5 2H6zm1 0V2h2.5A1.5 1.5 0 0 1 11 3.5V6zm1.5 4.25c0-.966.784-1.75 1.75-1.75h3c.966 0 1.75.784 1.75 1.75v3A1.75 1.75 0 0 1 13.25 15h-3a1.75 1.75 0 0 1-1.75-1.75z"></svg:path>`,
})
export class FluentTableSimpleExclude16RegularIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
