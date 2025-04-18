import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHanpingLiteIcon],svg[arcticons-hanping-lite-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M14.442 11.975c2.097 19.302 11.285 25.838 27.812 30.772m-8.695-30.772c-2.097 19.3-11.286 25.838-27.812 30.771M24 5.255v6.66m-18.5 0h37"></svg:path>`,
})
export class ArcticonsHanpingLiteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
