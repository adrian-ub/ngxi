import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsCloudIcon],svg[proicons-cloud-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M18.268 11c0 .3.21.563.497.65a3.502 3.502 0 0 1-1.015 6.85H7.375q-.09 0-.178-.005q-.098.005-.197.005A4.25 4.25 0 0 1 7 10a.445.445 0 0 0 .431-.334A5.5 5.5 0 0 1 18.268 11"></svg:path>`,
})
export class ProiconsCloudIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
