import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonRecommendIcon],svg[carbon-recommend-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M16 2a9 9 0 0 0-6 15.69V30l6-4l6 4V17.69A9 9 0 0 0 16 2m4 24.26l-2.89-1.92L16 23.6l-1.11.74L12 26.26v-7.21a8.88 8.88 0 0 0 8 0ZM20.89 16A7 7 0 1 1 23 11a7 7 0 0 1-2.11 5"></svg:path>`,
})
export class CarbonRecommendIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
