import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineDirectionsRunIcon],svg[ic-baseline-directions-run-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.49 5.48c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2m-3.6 13.9l1-4.4l2.1 2v6h2v-7.5l-2.1-2l.6-3c1.3 1.5 3.3 2.5 5.5 2.5v-2c-1.9 0-3.5-1-4.3-2.4l-1-1.6c-.4-.6-1-1-1.7-1c-.3 0-.5.1-.8.1l-5.2 2.2v4.7h2v-3.4l1.8-.7l-1.6 8.1l-4.9-1l-.4 2z"></svg:path>`,
})
export class IcBaselineDirectionsRunIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
