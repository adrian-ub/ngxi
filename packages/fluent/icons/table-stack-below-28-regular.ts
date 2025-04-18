import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableStackBelow28RegularIcon],svg[fluent-table-stack-below-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M24.25 25a.75.75 0 0 0 0-1.5H3.75a.75.75 0 0 0 0 1.5zM6.75 3A3.75 3.75 0 0 0 3 6.75V17.5a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1V6.75A3.75 3.75 0 0 0 21.25 3zM18.5 17v-6h5v6zM17 11v6h-6v-6zm1.5-1.5v-5h2.75a2.25 2.25 0 0 1 2.25 2.25V9.5zm-1.5-5v5h-6v-5zm-10.25 0H9.5v5h-5V6.75A2.25 2.25 0 0 1 6.75 4.5M4.5 11h5v6h-5z"></svg:path>`,
})
export class FluentTableStackBelow28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
