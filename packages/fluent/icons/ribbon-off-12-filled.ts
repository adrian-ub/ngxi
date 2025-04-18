import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentRibbonOff12FilledIcon],svg[fluent-ribbon-off-12-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M2.68 3.388A3.5 3.5 0 0 0 7.112 7.82l.732.73A4 4 0 0 1 6 9a4 4 0 0 1-2-.535V10.5a.5.5 0 0 0 .777.416L6 10.101l1.223.815A.5.5 0 0 0 8 10.5V8.707l2.146 2.147a.5.5 0 0 0 .708-.708l-9-9a.5.5 0 1 0-.708.708zM9.5 4.5c0 .808-.274 1.552-.734 2.145l-4.91-4.911A3.5 3.5 0 0 1 9.5 4.5"></svg:path>`,
})
export class FluentRibbonOff12FilledIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
