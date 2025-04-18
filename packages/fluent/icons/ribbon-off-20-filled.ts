import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRibbonOff20FilledIcon],svg[fluent-ribbon-off-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.625 5.332a6 6 0 0 0 8.044 8.044l.74.74A6.97 6.97 0 0 1 10 15a6.97 6.97 0 0 1-4-1.255V17.5a.5.5 0 0 0 .79.407L10 16l3.21 1.907A.5.5 0 0 0 14 17.5v-2.793l3.146 3.147a.5.5 0 0 0 .708-.708l-15-15a.5.5 0 1 0-.708.708zm1.193-1.635l8.485 8.485a6 6 0 0 0-8.484-8.484"></svg:path>`,
})
export class FluentRibbonOff20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
