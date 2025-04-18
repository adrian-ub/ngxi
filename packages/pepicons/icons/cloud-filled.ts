import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pepiconsCloudFilledIcon],svg[pepicons-cloud-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:rect width="16" height="8" x="2" y="6" rx="4"></svg:rect><svg:rect width="9" height="8" x="6" y="3" rx="4"></svg:rect><svg:rect width="16" height="8" x="2" y="6" rx="4"></svg:rect><svg:rect width="9" height="8" x="6" y="3" rx="4"></svg:rect></svg:g>`,
})
export class PepiconsCloudFilledIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
