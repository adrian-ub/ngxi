import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhFormIcon],svg[whh-form-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M896.428 768h-768q-53 0-90.5-37.5T.428 640V128q0-53 37.5-90.5t90.5-37.5h768q53 0 90.5 37.5t37.5 90.5v512q0 53-37.5 90.5t-90.5 37.5m0-576q0-26-19-45t-45-19h-640q-27 0-45.5 19t-18.5 45v128q0 26 18.5 45t45.5 19h640q27 0 45.5-19t18.5-45zm-64 320h-640q-27 0-45.5 18.5t-18.5 45.5t18.5 45.5t45.5 18.5h640q27 0 45.5-19t18.5-45.5t-18.5-45t-45.5-18.5m-576 384h192q26 0 45 18.5t19 45t-19 45.5t-45 19h-192q-27 0-45.5-19t-18.5-45.5t18.5-45t45.5-18.5m384 0h256q26 0 45 18.5t19 45t-19 45.5t-45 19h-256q-27 0-45.5-19t-18.5-45.5t18.5-45t45.5-18.5"></svg:path>`,
})
export class WhhFormIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
