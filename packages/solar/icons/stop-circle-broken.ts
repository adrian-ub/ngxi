import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarStopCircleBrokenIcon],svg[solar-stop-circle-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="M15.708 9a1.5 1.5 0 0 0-.294-.414C14.828 8 13.886 8 12 8s-2.828 0-3.414.586S8 10.114 8 12s0 2.828.586 3.414S10.114 16 12 16s2.828 0 3.414-.586c.472-.471.564-1.174.582-2.414"></svg:path><svg:path d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarStopCircleBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
