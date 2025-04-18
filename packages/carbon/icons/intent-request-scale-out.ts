import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonIntentRequestScaleOutIcon],svg[carbon-intent-request-scale-out-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m19 20.4l1.4-1.4l7.6 7.6V20h2v10H20v-2h6.6zm-6 0L11.6 19L4 26.6V20H2v10h10v-2H5.4zm4-4.4h-2V5.8l-4.6 4.6L9 9l7-7l7 7l-1.4 1.4L17 5.8z"></svg:path>`,
})
export class CarbonIntentRequestScaleOutIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
