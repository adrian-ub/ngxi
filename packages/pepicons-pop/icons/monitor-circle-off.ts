import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsPopMonitorCircleOffIcon],svg[pepicons-pop-monitor-circle-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path fill-rule="evenodd" d="M20.5 4h-15A2.5 2.5 0 0 0 3 6.5v10A2.5 2.5 0 0 0 5.5 19h15a2.5 2.5 0 0 0 2.5-2.5v-10A2.5 2.5 0 0 0 20.5 4M5 6.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5h-15a.5.5 0 0 1-.5-.5z" clip-rule="evenodd"></svg:path><svg:path d="M13 16.75a.75.75 0 1 1 0-1.5a.75.75 0 0 1 0 1.5"></svg:path><svg:path fill-rule="evenodd" d="M14.5 17.5h-3a1 1 0 0 0-1 1V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-2.5a1 1 0 0 0-1-1m-2.5 3V19h2v1.5z" clip-rule="evenodd"></svg:path><svg:path d="M8.5 22.5a1 1 0 1 1 0-2h9a1 1 0 1 1 0 2z"></svg:path><svg:path fill-rule="evenodd" d="M22 15H4v-1h18z" clip-rule="evenodd"></svg:path><svg:path d="M4.293 5.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z"></svg:path><svg:path fill-rule="evenodd" d="M13 24c6.075 0 11-4.925 11-11S19.075 2 13 2S2 6.925 2 13s4.925 11 11 11m0 2c7.18 0 13-5.82 13-13S20.18 0 13 0S0 5.82 0 13s5.82 13 13 13" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class PepiconsPopMonitorCircleOffIcon {
  readonly viewBox = input("0 0 26 26")
  readonly width = input("1em")
  readonly height = input("1em")
}
