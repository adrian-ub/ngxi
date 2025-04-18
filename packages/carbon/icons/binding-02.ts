import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonBinding02Icon],svg[carbon-binding-02-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="m25 8l-1.628 1.162L28.542 16l-5.156 6.838L25.014 24L31 16z"></svg:path><svg:path fill="currentColor" d="m20 8l-1.628 1.162L23.542 16l-5.156 6.838L20.014 24L26 16zM8.628 9.162L7 8l-6 8l5.986 8l1.628-1.162L3.458 16z"></svg:path><svg:path fill="currentColor" d="m12 8l-6 8l5.986 8l1.628-1.162L8.458 16l5.17-6.838z"></svg:path>`,
})
export class CarbonBinding02Icon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
