import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPauseOff20FilledIcon],svg[fluent-pause-off-20-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 3.707V16.5A1.5 1.5 0 0 0 4.5 18h2A1.5 1.5 0 0 0 8 16.5V8.707l4 4V16.5a1.5 1.5 0 0 0 1.5 1.5h2c.489 0 .923-.234 1.197-.596l.45.45a.5.5 0 0 0 .707-.708l-15-15a.5.5 0 1 0-.708.708zm9 6.172l5 5V3.5A1.5 1.5 0 0 0 15.5 2h-2A1.5 1.5 0 0 0 12 3.5zm-7.84-7.84L8 5.879V3.5A1.5 1.5 0 0 0 6.5 2h-2q-.175 0-.34.039"></svg:path>`,
})
export class FluentPauseOff20FilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
