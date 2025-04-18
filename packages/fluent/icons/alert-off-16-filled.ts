import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentAlertOff16FilledIcon],svg[fluent-alert-off-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m11.293 12l2.853 2.854a.5.5 0 0 0 .708-.708l-13-13a.5.5 0 1 0-.708.708l2.765 2.764A4.5 4.5 0 0 0 3.5 6.5v2.401l-.964 2.414A.5.5 0 0 0 3 12zm2.171-.685l.016.043l-8.336-8.335A4.5 4.5 0 0 1 12.5 6.5v2.401zM8 14.5A2 2 0 0 1 6.063 13h3.874A2 2 0 0 1 8 14.5"></svg:path>`,
})
export class FluentAlertOff16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
