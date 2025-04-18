import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTableStackLeft28RegularIcon],svg[fluent-table-stack-left-28-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 24.25a.75.75 0 0 0 1.5 0V3.75a.75.75 0 0 0-1.5 0zm22-17.5A3.75 3.75 0 0 0 21.25 3H10.5a1 1 0 0 0-1 1v20a1 1 0 0 0 1 1h10.75A3.75 3.75 0 0 0 25 21.25zM11 18.5h6v5h-6zm6-1.5h-6v-6h6zm1.5 1.5h5v2.75a2.25 2.25 0 0 1-2.25 2.25H18.5zm5-1.5h-5v-6h5zm0-10.25V9.5h-5v-5h2.75a2.25 2.25 0 0 1 2.25 2.25M17 4.5v5h-6v-5z"></svg:path>`,
})
export class FluentTableStackLeft28RegularIcon {
  readonly viewBox = input("0 0 28 28")
  readonly width = input("1em")
  readonly height = input("1em")
}
