import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentDeleteOff20FilledIcon],svg[fluent-delete-off-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3.293 4L2.146 2.854a.5.5 0 1 1 .708-.708l15 15a.5.5 0 0 1-.708.708l-1.998-2A3 3 0 0 1 12.272 18H7.728a3 3 0 0 1-2.98-2.656L3.554 5H2.5a.5.5 0 0 1 0-1zM12 12.707l-1-1V14a.5.5 0 0 0 1 0zm-3-3l-1-1V14a.5.5 0 0 0 1 0zM12 8v1.879l3.481 3.48L16.446 5H17.5a.5.5 0 0 0 0-1h-5a2.5 2.5 0 0 0-5 0H6.121L11 8.879V8a.5.5 0 0 1 1 0m-.5-4h-3a1.5 1.5 0 1 1 3 0"></svg:path>`,
})
export class FluentDeleteOff20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
