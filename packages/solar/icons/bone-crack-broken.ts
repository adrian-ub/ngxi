import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarBoneCrackBrokenIcon],svg[solar-bone-crack-broken-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M13.29 5.79c.148.536.172 1.185-.221 1.579l-5.7 5.7c-.394.393-1.043.369-1.58.22c-1.013-.28-2.308.105-3.051.848A2.519 2.519 0 0 0 6.3 17.7a2.519 2.519 0 0 0 3.563 3.562m4.274-18.524A2.519 2.519 0 0 1 17.7 6.3a2.519 2.519 0 0 1 3.562 3.563c-.743.743-2.038 1.128-3.052.848c-.536-.149-1.185-.173-1.579.22l-5.7 5.7c-.393.394-.369 1.043-.22 1.58"></svg:path><svg:path d="M10.232 10.232v2.122l2.122-.707v1.414L15 12.5"></svg:path></svg:g>`,
})
export class SolarBoneCrackBrokenIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
