import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHeyfunIcon],svg[arcticons-heyfun-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.647 5.5c6.703 0 12.146 5.443 12.146 12.147v12.146H5.5V17.647C5.5 10.942 10.943 5.5 17.647 5.5"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M17.086 29.793c0 7.018 5.689 12.707 12.707 12.707S42.5 36.81 42.5 29.793s-5.689-12.707-12.707-12.707"></svg:path><svg:circle cx="10.421" cy="37.641" r="3.426" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="12.342" cy="16.224" r="2.222" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="22.268" cy="16.224" r="2.222" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="35.228" cy="27.571" r="2.222" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m34.589 11.604l4.859-4.858m-4.859 0l4.859 4.858"></svg:path>`,
})
export class ArcticonsHeyfunIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
