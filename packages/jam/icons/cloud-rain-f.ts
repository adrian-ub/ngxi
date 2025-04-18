import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[jamCloudRainFIcon],svg[jam-cloud-rain-f-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M13 0a7 7 0 0 1 0 14H5a5 5 0 1 1 1.561-9.751A7 7 0 0 1 13 0"></svg:path><svg:rect width="2" height="4" x="5" y="15" rx="1"></svg:rect><svg:rect width="2" height="5" x="9" y="15" rx="1"></svg:rect><svg:rect width="2" height="3" x="13" y="15" rx="1"></svg:rect></svg:g>`,
})
export class JamCloudRainFIcon {
  readonly viewBox = input("-2 -2 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
