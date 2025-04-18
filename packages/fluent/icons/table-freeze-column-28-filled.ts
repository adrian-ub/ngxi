import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableFreezeColumn28FilledIcon],svg[fluent-table-freeze-column-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.5 21.25a2.25 2.25 0 0 1-2.25 2.25H17v-5h-6V25h10.25A3.75 3.75 0 0 0 25 21.25V6.75A3.75 3.75 0 0 0 21.25 3H11v6.5h6v-5h4.25a2.25 2.25 0 0 1 2.25 2.25zM6.75 3H9.5v6.5H3V6.75A3.75 3.75 0 0 1 6.75 3M3 17v-6h6.5v6zm0 4.25V18.5h6.5V25H6.75A3.75 3.75 0 0 1 3 21.25M11 11v6h6v-6z"></svg:path>`,
})
export class FluentTableFreezeColumn28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
