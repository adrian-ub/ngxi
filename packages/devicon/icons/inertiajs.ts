import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[deviconInertiajsIcon],svg[devicon-inertiajs-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:lineargradient id="deviconInertiajs0" x1="0" x2="128" y1="64" y2="64" gradientUnits="userSpaceOnUse"><svg:stop offset="0" stop-color="#9553e9"></svg:stop><svg:stop offset="1" stop-color="#6d74ed"></svg:stop></svg:lineargradient></svg:defs><svg:path fill="url(#deviconInertiajs0)" d="M92.433 28.433H55.625L91.192 64L55.625 99.567h36.808L128 64zm-55.625 0H0L35.567 64L0 99.567h36.808L72.375 64z"></svg:path>`,
})
export class DeviconInertiajsIcon {
  readonly viewBox = input("0 0 128 128")
  readonly width = input("1em")
  readonly height = input("1em")
}
