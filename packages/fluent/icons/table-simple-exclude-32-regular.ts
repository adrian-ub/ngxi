import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableSimpleExclude32RegularIcon],svg[fluent-table-simple-exclude-32-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.5 2A4.5 4.5 0 0 0 2 6.5V19a4.5 4.5 0 0 0 4.5 4.5H13a1 1 0 0 0 1-1V14h8.5a1 1 0 0 0 1-1V6.5A4.5 4.5 0 0 0 19 2zM12 14v7.5H6.5A2.5 2.5 0 0 1 4 19v-5zm0-2H4V6.5A2.5 2.5 0 0 1 6.5 4H12zm2 0V4h5a2.5 2.5 0 0 1 2.5 2.5V12zm2 7a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3h-8a3 3 0 0 1-3-3z"></svg:path>`,
})
export class FluentTableSimpleExclude32RegularIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
