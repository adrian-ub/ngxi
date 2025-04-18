import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[solarBoneBoldIcon],svg[solar-bone-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14.137 2.738c-.743.743-1.128 2.038-.848 3.052c.149.536.173 1.185-.22 1.579l-5.7 5.7c-.394.393-1.043.369-1.58.22c-1.013-.28-2.308.105-3.051.848A2.519 2.519 0 0 0 6.3 17.7a2.519 2.519 0 0 0 3.563 3.562c.743-.743 1.128-2.038.848-3.052c-.149-.536-.173-1.185.22-1.579l5.7-5.7c.394-.393 1.043-.369 1.58-.22c1.013.28 2.308-.105 3.051-.848A2.519 2.519 0 0 0 17.7 6.3a2.519 2.519 0 0 0-3.563-3.562"></svg:path>`,
})
export class SolarBoneBoldIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
