import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[icBaselineLinkedCameraIcon],svg[ic-baseline-linked-camera-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="12" cy="14" r="3.2" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M16 3.33c2.58 0 4.67 2.09 4.67 4.67H22c0-3.31-2.69-6-6-6zM16 6c1.11 0 2 .89 2 2h1.33c0-1.84-1.49-3.33-3.33-3.33z"></svg:path><svg:path fill="currentColor" d="M17 9c0-1.11-.89-2-2-2V4H9L7.17 6H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9zm-5 10c-2.76 0-5-2.24-5-5s2.24-5 5-5s5 2.24 5 5s-2.24 5-5 5"></svg:path>`,
})
export class IcBaselineLinkedCameraIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
