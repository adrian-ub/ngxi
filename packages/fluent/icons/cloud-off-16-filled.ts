import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCloudOff16FilledIcon],svg[fluent-cloud-off-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m12.254 12.961l1.892 1.893a.5.5 0 0 0 .708-.708l-13-13a.5.5 0 1 0-.708.708L4.45 5.156c-.215.414-.36.87-.419 1.351A3.25 3.25 0 0 0 4.25 13h7.5q.257 0 .504-.039M15 9.75c0 .867-.34 1.654-.892 2.237l-8.32-8.32a4 4 0 0 1 6.182 2.84A3.25 3.25 0 0 1 15 9.75"></svg:path>`,
})
export class FluentCloudOff16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
