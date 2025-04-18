import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableStackAbove28RegularIcon],svg[fluent-table-stack-above-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.75 3a.75.75 0 0 0 0 1.5h20.5a.75.75 0 0 0 0-1.5zm17.5 22A3.75 3.75 0 0 0 25 21.25V10.5a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v10.75A3.75 3.75 0 0 0 6.75 25zM9.5 11v6h-5v-6zm1.5 6v-6h6v6zm-1.5 1.5v5H6.75a2.25 2.25 0 0 1-2.25-2.25V18.5zm1.5 5v-5h6v5zm10.25 0H18.5v-5h5v2.75a2.25 2.25 0 0 1-2.25 2.25M23.5 17h-5v-6h5z"></svg:path>`,
})
export class FluentTableStackAbove28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
