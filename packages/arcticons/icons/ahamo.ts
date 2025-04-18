import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsAhamoIcon],svg[arcticons-ahamo-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="37" height="37" x="5.5" y="5.5" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="4" ry="4"></svg:rect><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M21.652 16.041v9.433m0-3.891c0-1.302 1.051-2.358 2.348-2.358s2.348 1.055 2.348 2.358v3.891"></svg:path><svg:circle cx="34.566" cy="22.349" r="3.125" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M37.691 22.349v3.125m-3.125-6.25s-1.742.103-2.524-1.256"></svg:path><svg:circle cx="13.434" cy="22.349" r="3.125" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M16.559 22.349v3.125m-3.125-6.25s-1.742.103-2.524-1.256m19.949 10.749c-1.415 2.007-4.03 3.243-6.859 3.243c-2.83 0-5.444-1.236-6.859-3.243"></svg:path>`,
})
export class ArcticonsAhamoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
