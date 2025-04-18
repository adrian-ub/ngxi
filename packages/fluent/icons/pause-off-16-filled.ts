import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPauseOff16FilledIcon],svg[fluent-pause-off-16-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m13.147 13.854l1 1a.5.5 0 0 0 .707-.708l-13-13a.5.5 0 1 0-.708.708l1 1A1.5 1.5 0 0 0 2 3.5v9A1.5 1.5 0 0 0 3.5 14h2A1.5 1.5 0 0 0 7 12.5V7.707l2 2V12.5a1.5 1.5 0 0 0 1.5 1.5h2c.232 0 .45-.053.647-.146M9 6.879l5 5V3.5A1.5 1.5 0 0 0 12.5 2h-2A1.5 1.5 0 0 0 9 3.5zM4.121 2L7 4.879V3.5A1.5 1.5 0 0 0 5.5 2z"></svg:path>`,
})
export class FluentPauseOff16FilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
