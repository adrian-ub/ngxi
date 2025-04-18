import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riCompassesLineIcon],svg[ri-compasses-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11 4.123V1.997h2v2.126a4.002 4.002 0 0 1 1.802 6.728l6.064 10.502l-1.732 1l-6.063-10.501a4 4 0 0 1-2.142 0L4.866 22.353l-1.732-1l6.063-10.502A4.002 4.002 0 0 1 11 4.123m1 5.874a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path>`,
})
export class RiCompassesLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
