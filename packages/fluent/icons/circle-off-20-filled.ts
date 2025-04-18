import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentCircleOff20FilledIcon],svg[fluent-circle-off-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m15.292 16l1.854 1.854a.5.5 0 0 0 .708-.708l-15-15a.5.5 0 1 0-.708.708l1.855 1.854A8 8 0 0 0 15.293 16M18 10c0 1.667-.51 3.215-1.382 4.496L5.504 3.382A8 8 0 0 1 18 10"></svg:path>`,
})
export class FluentCircleOff20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
