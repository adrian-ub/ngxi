import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineMissedVideoCallIcon],svg[ic-baseline-missed-video-call-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11zM10 15l-3.89-3.89v2.55H5V9.22h4.44v1.11H6.89l3.11 3.1l4.22-4.22l.78.79z"></svg:path>`,
})
export class IcBaselineMissedVideoCallIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
