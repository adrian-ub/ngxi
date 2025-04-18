import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsMonitorIcon],svg[pepicons-monitor-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M17.5 1h-15A2.5 2.5 0 0 0 0 3.5v10A2.5 2.5 0 0 0 2.5 16h15a2.5 2.5 0 0 0 2.5-2.5v-10A2.5 2.5 0 0 0 17.5 1ZM2 3.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5v-10Z" clip-rule="evenodd"></svg:path><svg:path fill-rule="evenodd" d="M11.5 14.5h-3a1 1 0 0 0-1 1V18a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-2.5a1 1 0 0 0-1-1Zm-2.5 3V16h2v1.5H9Z" clip-rule="evenodd"></svg:path><svg:path d="M5.5 19.5a1 1 0 1 1 0-2h9a1 1 0 1 1 0 2h-9ZM3.5 4h13a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-8a.5.5 0 0 1 .5-.5Z"></svg:path></svg:g>`,
})
export class PepiconsMonitorIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
