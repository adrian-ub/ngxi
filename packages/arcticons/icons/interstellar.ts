import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsInterstellarIcon],svg[arcticons-interstellar-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M7.673 36.283a7.15 7.15 0 0 1-2.111-2.275c-3.308-5.728 2.266-15.137 12.45-21.017s21.119-6.002 24.426-.274q0 0 0 0h0c3.308 5.728-2.266 15.138-12.45 21.017c-4.656 2.689-9.712 4.287-14.153 4.473"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.02 18.044c.714 3.641-2.766 8.58-8.294 11.772c-6.364 3.675-13.192 3.764-15.25.2c-1.165-2.019-.577-4.895 1.59-7.773"></svg:path><svg:circle cx="11.606" cy="37.903" r="1.597" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="34.157" cy="14.227" r="1.597" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="23.597" cy="21.385" r="5.855" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsInterstellarIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
