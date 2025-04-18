import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiBlockIcon],svg[zmdi-block-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.5 3q88.5 0 151 62.5T427 216t-62.5 150.5t-151 62.5t-151-62.5T0 216T62.5 65.5T213.5 3M43 216q0 59 36 105L318 81q-46-36-105-36q-70 0-120 50T43 216m170 171q71 0 121-50t50-121q0-59-36-105L109 351q46 36 104 36"></svg:path>`,
})
export class ZmdiBlockIcon {
  readonly viewBox = input("0 0 432 432")
  readonly width = input("1em")
  readonly height = input("1em")
}
