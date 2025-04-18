import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarUsbBrokenIcon],svg[solar-usb-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="12" cy="20" r="2" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:circle cx="6" cy="6" r="1" stroke="currentColor" stroke-width="1.5"></svg:circle><svg:path fill="currentColor" d="M11.25 18a.75.75 0 0 0 1.5 0zM12 2l.624-.416a.75.75 0 0 0-1.248 0zm1.376 3.416a.75.75 0 1 0 1.248-.832zm-4-.832a.75.75 0 0 0 1.248.832zM11.25 6.5a.75.75 0 0 0 1.5 0zm1.5 3.25a.75.75 0 0 0-1.5 0zm-1.374-7.334l2 3l1.248-.832l-2-3zm0-.832l-2 3l1.248.832l2-3zM12.75 18v-3h-1.5v3zm0-11.5V2h-1.5v4.5zm0 8.5V9.75h-1.5V15z"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-width="1.5" d="M6 7v2.558a2 2 0 0 0 1.368 1.898l3.265 1.088A2 2 0 0 1 12 14.441V15m6-5v2.559a2 2 0 0 1-1.367 1.897l-3.265 1.088A2 2 0 0 0 12 17.442V18"></svg:path><svg:path stroke="currentColor" stroke-width="1.5" d="M17 9c0-.471 0-.707.146-.854C17.293 8 17.53 8 18 8s.707 0 .854.146C19 8.293 19 8.53 19 9s0 .707-.146.854C18.707 10 18.47 10 18 10s-.707 0-.854-.146C17 9.707 17 9.47 17 9Z"></svg:path></svg:g>`,
})
export class SolarUsbBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
