import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsCloudOffIcon],svg[proicons-cloud-off-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.5"><svg:path d="m2.75 21.25l18.5-18.5"></svg:path><svg:path stroke-linejoin="round" d="M16.772 7.229A5.48 5.48 0 0 1 18.268 11c0 .3.21.563.497.65a3.502 3.502 0 0 1-1.015 6.85H7.375q-.09 0-.178-.005a4.3 4.3 0 0 1-1.495-.197m-2.387-1.93A4.25 4.25 0 0 1 7 10a.445.445 0 0 0 .431-.333A5.5 5.5 0 0 1 14 5.638"></svg:path></svg:g>`,
})
export class ProiconsCloudOffIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
