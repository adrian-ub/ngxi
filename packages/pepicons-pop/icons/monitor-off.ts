import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopMonitorOffIcon],svg[pepicons-pop-monitor-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M17.5 1h-15A2.5 2.5 0 0 0 0 3.5v10A2.5 2.5 0 0 0 2.5 16h15a2.5 2.5 0 0 0 2.5-2.5v-10A2.5 2.5 0 0 0 17.5 1M2 3.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5z" clip-rule="evenodd"></svg:path><svg:path d="M10 13.75a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5"></svg:path><svg:path fill-rule="evenodd" d="M11.5 14.5h-3a1 1 0 0 0-1 1V18a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-2.5a1 1 0 0 0-1-1m-2.5 3V16h2v1.5z" clip-rule="evenodd"></svg:path><svg:path d="M5.5 19.5a1 1 0 1 1 0-2h9a1 1 0 1 1 0 2z"></svg:path><svg:path fill-rule="evenodd" d="M19 12H1v-1h18z" clip-rule="evenodd"></svg:path><svg:path d="M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path></svg:g>`,
})
export class PepiconsPopMonitorOffIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
