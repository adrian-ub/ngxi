import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarTennisBrokenIcon],svg[solar-tennis-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="1.5"><svg:path d="M13.196 2.071s-.232 3.599 2.268 7.93s5.733 5.928 5.733 5.928M2.803 8.071s3.233 1.599 5.733 5.93s2.268 7.928 2.268 7.928"></svg:path><svg:path stroke-linecap="round" d="M7 3.338A9.95 9.95 0 0 1 12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12c0-1.821.487-3.53 1.338-5"></svg:path></svg:g>`,
})
export class SolarTennisBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
