import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDismiss12RegularIcon],svg[fluent-dismiss-12-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m2.089 2.216l.057-.07a.5.5 0 0 1 .638-.057l.07.057L6 5.293l3.146-3.147a.5.5 0 1 1 .708.708L6.707 6l3.147 3.146a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.638.057l-.07-.057L6 6.707L2.854 9.854a.5.5 0 0 1-.708-.708L5.293 6L2.146 2.854a.5.5 0 0 1-.057-.638l.057-.07z"></svg:path>`,
})
export class FluentDismiss12RegularIcon {
  readonly viewBox = input("0 0 12 12")
  readonly width = input("1em")
  readonly height = input("1em")
}
