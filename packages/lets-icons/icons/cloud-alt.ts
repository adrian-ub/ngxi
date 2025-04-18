import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[letsIconsCloudAltIcon],svg[lets-icons-cloud-alt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path fill="currentColor" d="m10.528 8l.745.667l-.298.333h-.447zM15 7c-1.48 0-2.81.642-3.727 1.667l-1.49-1.334A7 7 0 0 1 15 5zm5 5a5 5 0 0 0-5-5V5a7 7 0 0 1 7 7zm-5 5a5 5 0 0 0 5-5h2a7 7 0 0 1-7 7zm-7 0h7v2H8zm-4-4a4 4 0 0 0 4 4v2a6 6 0 0 1-6-6zm4-4a4 4 0 0 0-4 4H2a6 6 0 0 1 6-6zm2.528 0H8V7h2.528z"></svg:path><svg:path stroke="currentColor" stroke-width="2" d="M16.318 17.854A6 6 0 1 0 9 12.024"></svg:path></svg:g>`,
})
export class LetsIconsCloudAltIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
