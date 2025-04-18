import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsWireFlowIcon],svg[arcticons-wire-flow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m4.5 14.117l12.962 19.766m12.962-19.766l-4.041 6.163m-4.992 7.612l-3.93 5.991m.115-19.766l12.962 19.766M43.5 14.117L30.538 33.883"></svg:path>`,
})
export class ArcticonsWireFlowIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
