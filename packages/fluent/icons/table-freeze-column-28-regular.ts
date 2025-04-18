import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableFreezeColumn28RegularIcon],svg[fluent-table-freeze-column-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M21.25 25A3.75 3.75 0 0 0 25 21.25V6.75A3.75 3.75 0 0 0 21.25 3H6.75A3.75 3.75 0 0 0 3 6.75v14.5A3.75 3.75 0 0 0 6.75 25zM17 4.5v5h-6v-5zM11 17v-6h6v6zM9.5 4.5v5h-5V6.75A2.25 2.25 0 0 1 6.75 4.5zM4.5 17v-6h5v6zm2.25 6.5a2.25 2.25 0 0 1-2.25-2.25V18.5h5v5zm10.25 0h-6v-5h6zm4.25-19a2.25 2.25 0 0 1 2.25 2.25v14.5a2.25 2.25 0 0 1-2.25 2.25H18.5v-19z"></svg:path>`,
})
export class FluentTableFreezeColumn28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
