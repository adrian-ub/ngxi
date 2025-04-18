import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentGas20FilledIcon],svg[fluent-gas-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.084 2.223A.5.5 0 0 1 11.5 2h3a.5.5 0 0 1 .5.5v3c.607.456 1 1.182 1 2v7a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 4 14.5v-7A2.5 2.5 0 0 1 6.5 5h.415A1.5 1.5 0 0 0 5.5 4h-1a.5.5 0 0 1 0-1h1a2.5 2.5 0 0 1 2.45 2h1.282zM14 3h-2.232l-1.334 2H13.5q.257 0 .5.05zm-1.146 5.146a.5.5 0 0 0-.708 0L10 10.293L7.854 8.146a.5.5 0 1 0-.708.708L9.293 11l-2.147 2.146a.5.5 0 0 0 .708.708L10 11.707l2.146 2.147a.5.5 0 0 0 .708-.708L10.707 11l2.147-2.146a.5.5 0 0 0 0-.708"></svg:path>`,
})
export class FluentGas20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
