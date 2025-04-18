import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRibbonOff16FilledIcon],svg[fluent-ribbon-off-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.38 4.086A5 5 0 0 0 3 6a5 5 0 0 0 2.204 4.146A4.97 4.97 0 0 0 8 11c.678 0 1.324-.135 1.914-.38l.754.756A6 6 0 0 1 8 12a6 6 0 0 1-3-.803V14.5a.5.5 0 0 0 .757.429L8 13.583l2.243 1.346A.5.5 0 0 0 11 14.5v-2.793l3.146 3.147a.5.5 0 0 0 .708-.708l-13-13a.5.5 0 1 0-.708.708zM13 6c0 1.35-.535 2.575-1.404 3.474l-7.07-7.07A5 5 0 0 1 13 6"></svg:path>`,
})
export class FluentRibbonOff16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
