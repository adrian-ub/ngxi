import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[websymbolLockOpenIcon],svg[websymbol-lock-open-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M582 413v356q0 32-32 32H32q-32 0-32-32V413q0-33 32-33h389V186q0-51-37-74t-91-23q-53 0-92 25.5T162 191v125H65V188h1q9-87 74-140.5T293-6t151 63t71 151h1l2 172q4 0 14.5-.5t15 0t13 2t12 5t6.5 10t3 16.5"></svg:path>`,
})
export class WebsymbolLockOpenIcon {
  readonly viewBox = input("0 0 582 1000")
  readonly width = input("0.59em")
  readonly height = input("1em")
}
