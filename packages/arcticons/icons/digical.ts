import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsDigicalIcon],svg[arcticons-digical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="39" height="27.368" x="4.5" y="10.316" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2" ry="2"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.267 14.639h5.131m-5.131 6.251h5.131m-5.131 6.251h5.131m-5.131 6.251h5.131m3.266-12.502h5.132m-5.132 6.251h5.132m-5.132 6.251h5.132m3.265-12.502h5.132m-13.529-6.251h5.132m3.265 0h5.132m-5.132 12.502h5.132M8.823 20.89h5.131m-5.131 6.251h5.131m-5.131 6.251h5.131"></svg:path>`,
})
export class ArcticonsDigicalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
