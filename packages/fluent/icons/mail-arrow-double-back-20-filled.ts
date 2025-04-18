import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentMailArrowDoubleBack20FilledIcon],svg[fluent-mail-arrow-double-back-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.5 11c1.33 0 2.55-.472 3.5-1.257V14.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 2 14.5V7.373l7.747 4.558a.5.5 0 0 0 .507 0l2.23-1.312A5.5 5.5 0 0 0 14.5 11m-10-7h4.707a5.5 5.5 0 0 0 2.235 6.072L10 10.92L2.015 6.223A2.5 2.5 0 0 1 4.5 4m10 6a4.5 4.5 0 1 0 0-9a4.5 4.5 0 0 0 0 9m-1.146-6.354a.5.5 0 0 1 0 .708L12.207 5.5l1.147 1.146a.5.5 0 0 1-.708.708l-1.5-1.5a.5.5 0 0 1 0-.708l1.5-1.5a.5.5 0 0 1 .708 0m2.5.708L15.207 5H17a1 1 0 0 1 1 1v.5a.5.5 0 0 1-1 0V6h-1.793l.647.646a.5.5 0 0 1-.708.708l-1.5-1.5a.5.5 0 0 1 0-.708l1.5-1.5a.5.5 0 0 1 .708.708"></svg:path>`,
})
export class FluentMailArrowDoubleBack20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
