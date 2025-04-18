import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentBattery1016FilledIcon],svg[fluent-battery-10-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 6.5h-.5V6c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v4c0 1.103.897 2 2 2h7.5c1.103 0 2-.897 2-2v-.5h.5a.5.5 0 0 0 .5-.5V7a.5.5 0 0 0-.5-.5M12 10a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5V6a.5.5 0 0 1 .5-.5h7.5a.5.5 0 0 1 .5.5z"></svg:path>`,
})
export class FluentBattery1016FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
