import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhCherryaltIcon],svg[whh-cherryalt-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M800 1024q-93 0-158.5-65.5T576 800q0-81 51-142.5T756 580q-25-160-91-286T512 128q-87 40-153 166t-91 286q78 16 129 77.5T448 800q0 93-65.5 158.5T224 1024T65.5 958.5T0 800q0-85 56.5-148T197 579q13-142 64-259.5T390 128h-6q-27 0-45.5-19T320 63.5t18.5-45T384 0h256q27 0 45.5 18.5t18.5 45t-18.5 45.5t-45.5 19h-6q78 74 129 191.5T827 579q84 10 140.5 73t56.5 148q0 93-65.5 158.5T800 1024"></svg:path>`,
})
export class WhhCherryaltIcon {
  readonly viewBox = input("0 0 1024 1024")
  readonly width = input("1em")
  readonly height = input("1em")
}
