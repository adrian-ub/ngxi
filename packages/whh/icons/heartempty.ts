import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[whhHeartemptyIcon],svg[whh-heartempty-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m805.694 724l-293 300l-294-300q-119-122-168.5-231T.694 256q0-106 75-181t181-75t181 75t75 181q0-106 75-181t181-75t181 75t75 181q0 127-49.5 236.5T805.695 724zm91-468q0-53-37.5-90.5t-90.5-37.5t-90.5 37.5t-37.5 90.5v1q0 17-40 40t-88 23q-50 0-89-22t-39-42q0-53-37.5-90.5t-90.5-37.5t-90.5 37.5t-37.5 90.5v1q0 106 36 190.5t127 190.5l221 226l220-226q92-107 128-191t36-191"></svg:path>`,
})
export class WhhHeartemptyIcon {
  readonly viewBox = input("0 0 1025 1024")
  readonly width = input("1.01em")
  readonly height = input("1em")
}
