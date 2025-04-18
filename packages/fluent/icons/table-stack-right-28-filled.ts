import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableStackRight28FilledIcon],svg[fluent-table-stack-right-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.5 24.25a.75.75 0 0 0 1.5 0V3.75a.75.75 0 0 0-1.5 0zM11 3h5a1 1 0 0 1 1 1v5.5h-6zM6.75 3H9.5v6.5H3V6.75A3.75 3.75 0 0 1 6.75 3M3 17v-6h6.5v6zm0 4.25V18.5h6.5V25H6.75A3.75 3.75 0 0 1 3 21.25M17 24a1 1 0 0 1-1 1h-5v-6.5h6zm-6-13v6h6v-6z"></svg:path>`,
})
export class FluentTableStackRight28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
