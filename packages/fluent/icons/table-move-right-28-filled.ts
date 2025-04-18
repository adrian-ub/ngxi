import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableMoveRight28FilledIcon],svg[fluent-table-move-right-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.5 24.25a.75.75 0 0 0 1.5 0V3.75a.75.75 0 0 0-1.5 0zM11 3h5.5a.5.5 0 0 1 .5.5v6h-6zM6.75 3H9.5v6.5H3V6.75A3.75 3.75 0 0 1 6.75 3M3 17v-6h6.5v6zm0 4.25V18.5h6.5V25H6.75A3.75 3.75 0 0 1 3 21.25m14 3.25a.5.5 0 0 1-.5.5H11v-6.5h6zM11 11v6h6v-1.25h-1a1.75 1.75 0 1 1 0-3.5h1V11zm7.69 4.752l.89-1.002H16a.75.75 0 0 1 0-1.5h3.58l-.89-1.002a.75.75 0 0 1 1.12-.996l2 2.25a.75.75 0 0 1 0 .996l-2 2.25a.75.75 0 0 1-1.12-.996"></svg:path>`,
})
export class FluentTableMoveRight28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
