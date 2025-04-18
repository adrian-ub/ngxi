import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableSimpleExclude16FilledIcon],svg[fluent-table-simple-exclude-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.5 1H6v5H1V3.5A2.5 2.5 0 0 1 3.5 1M1 9.5V7h5v5H3.5A2.5 2.5 0 0 1 1 9.5M12 6V3.5A2.5 2.5 0 0 0 9.5 1H7v5zm-1.75 2.5a1.75 1.75 0 0 0-1.75 1.75v3c0 .966.784 1.75 1.75 1.75h3A1.75 1.75 0 0 0 15 13.25v-3a1.75 1.75 0 0 0-1.75-1.75z"></svg:path>`,
})
export class FluentTableSimpleExclude16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
