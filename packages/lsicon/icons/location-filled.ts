import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lsiconLocationFilledIcon],svg[lsicon-location-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M8 1a5 5 0 0 0-5 5c0 1.14.56 2.488 1.377 3.934c.827 1.463 1.967 3.107 3.216 4.857l.407.57l.407-.57c1.25-1.75 2.389-3.394 3.216-4.857C12.44 8.488 13 7.14 13 6a5 5 0 0 0-5-5m0 2.5a2.5 2.5 0 1 0 0 5a2.5 2.5 0 0 0 0-5" clip-rule="evenodd"></svg:path>`,
})
export class LsiconLocationFilledIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
