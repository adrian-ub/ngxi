import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsApptekaIcon],svg[arcticons-appteka-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="43.916" height="20.269" x="2.042" y="13.866" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="10.134" ry="10.134" transform="rotate(-45 24 24)"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m6.303 36.322l15.009-15.01l9.853 9.854"></svg:path>`,
})
export class ArcticonsApptekaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
