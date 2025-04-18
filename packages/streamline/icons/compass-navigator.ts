import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineCompassNavigatorIcon],svg[streamline-compass-navigator-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><svg:path d="M11.04 1.605a1.099 1.099 0 0 1 1.355 1.355l-1.902 6.772a1.1 1.1 0 0 1-.76.761L2.96 12.395a1.099 1.099 0 0 1-1.355-1.355l1.902-6.772c.103-.37.392-.658.76-.761z"></svg:path><svg:path d="M5.689 5.689a1.854 1.854 0 1 0 2.622 2.622a1.854 1.854 0 1 0-2.622-2.622"></svg:path></svg:g>`,
})
export class StreamlineCompassNavigatorIcon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
