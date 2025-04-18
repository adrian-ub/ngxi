import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentTimerOff20FilledIcon],svg[fluent-timer-off-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.963 5.67L2.146 2.854a.5.5 0 1 1 .708-.708l15 15a.5.5 0 0 1-.708.708l-2.316-2.316A7 7 0 1 1 4.962 5.67M10 10.707l-1-1V11.5a.5.5 0 0 0 1 0zM10 6.5v1.379l5.919 5.918a7 7 0 0 0-9.216-9.216L9 6.88V6.5a.5.5 0 0 1 1 0m-3-4a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5m7.45 1.429a.5.5 0 0 1 .706 0l1.414 1.414a.5.5 0 1 1-.707.707L14.45 4.636a.5.5 0 0 1 0-.707"></svg:path>`,
})
export class FluentTimerOff20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
