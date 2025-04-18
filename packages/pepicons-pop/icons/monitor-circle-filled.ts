import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopMonitorCircleFilledIcon],svg[pepicons-pop-monitor-circle-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:defs><svg:mask id="pepiconsPopMonitorCircleFilled0"><svg:path fill="#fff" d="M0 0h26v26H0z"></svg:path><svg:g fill="#000"><svg:path fill-rule="evenodd" d="M20.5 4h-15A2.5 2.5 0 0 0 3 6.5v10A2.5 2.5 0 0 0 5.5 19h15a2.5 2.5 0 0 0 2.5-2.5v-10A2.5 2.5 0 0 0 20.5 4M5 6.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5z" clip-rule="evenodd"></svg:path><svg:path d="M13 16.75a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5"></svg:path><svg:path fill-rule="evenodd" d="M14.5 17.5h-3a1 1 0 0 0-1 1V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-2.5a1 1 0 0 0-1-1m-2.5 3V19h2v1.5z" clip-rule="evenodd"></svg:path><svg:path d="M8.5 22.5a1 1 0 1 1 0-2h9a1 1 0 1 1 0 2z"></svg:path><svg:path fill-rule="evenodd" d="M22 15H4v-1h18z" clip-rule="evenodd"></svg:path></svg:g></svg:mask></svg:defs><svg:circle cx="13" cy="13" r="13" fill="currentColor" mask="url(#pepiconsPopMonitorCircleFilled0)"></svg:circle></svg:g>`,
})
export class PepiconsPopMonitorCircleFilledIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
