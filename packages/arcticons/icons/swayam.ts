import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsSwayamIcon],svg[arcticons-swayam-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.97 36.47C10.083 36.47 4.5 30.887 4.5 24s5.583-12.47 12.47-12.47h14.06c6.887 0 12.47 5.583 12.47 12.47s-5.583 12.47-12.47 12.47zm2.701-24.94v24.94m0-12.47H4.5"></svg:path>`,
})
export class ArcticonsSwayamIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
