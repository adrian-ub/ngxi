import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentPauseOff20RegularIcon],svg[fluent-pause-off-20-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m3 3.707l-.854-.853a.5.5 0 1 1 .708-.708l15 15a.5.5 0 0 1-.708.708l-.449-.45A1.5 1.5 0 0 1 15.5 18h-2a1.5 1.5 0 0 1-1.5-1.5v-3.793l-4-4V16.5A1.5 1.5 0 0 1 6.5 18h-2A1.5 1.5 0 0 1 3 16.5zm4 4l-3-3V16.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5zm6 6V16.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .468-.325zM7 3.5v1.379l1 1V3.5A1.5 1.5 0 0 0 6.5 2h-2q-.175 0-.34.039L5.121 3H6.5a.5.5 0 0 1 .5.5m5 6.379l1 1V3.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v10.379l1 1V3.5A1.5 1.5 0 0 0 15.5 2h-2A1.5 1.5 0 0 0 12 3.5z"></svg:path>`,
})
export class FluentPauseOff20RegularIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
