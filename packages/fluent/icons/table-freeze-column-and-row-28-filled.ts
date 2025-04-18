import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableFreezeColumnAndRow28FilledIcon],svg[fluent-table-freeze-column-and-row-28-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M25 6.75A3.75 3.75 0 0 0 21.25 3H6.75A3.75 3.75 0 0 0 3 6.75V17h6.5v-6h-5V6.75A2.25 2.25 0 0 1 6.75 4.5h14.5a2.25 2.25 0 0 1 2.25 2.25v14.5a2.25 2.25 0 0 1-2.25 2.25H17v-5h-6V25h10.25A3.75 3.75 0 0 0 25 21.25zM3 21.25V18.5h6.5V25H6.75A3.75 3.75 0 0 1 3 21.25M11 17h6v-6h-6z"></svg:path>`,
})
export class FluentTableFreezeColumnAndRow28FilledIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
