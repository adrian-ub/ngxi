import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiThumbUpIcon],svg[zmdi-thumb-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 432V176h85v256zm469-235v43q0 8-3 16l-64 150q-11 26-39 26H171q-18 0-30.5-12.5T128 389V176q0-18 13-30L281 5l23 23q9 9 9 22l-1 7l-20 98h135q17 0 29.5 12.5T469 197"></svg:path>`,
})
export class ZmdiThumbUpIcon {
  readonly viewBox = input("0 0 472 432")
  readonly width = input("1.1em")
  readonly height = input("1em")
}
