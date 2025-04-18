import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsKakaotalkIcon],svg[arcticons-kakaotalk-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M24 6C13.23 6 4.5 12.93 4.5 21.46c0 5.39 3.5 10.13 8.79 12.89l-1.76 7.06a.46.46 0 0 0 .68.51L21 36.7a24 24 0 0 0 3 .2c10.77 0 19.5-6.91 19.5-15.44S34.77 6 24 6"></svg:path><svg:circle cx="23.91" cy="21.46" r="2.71" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="33.65" cy="21.46" r="2.71" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle><svg:circle cx="14.18" cy="21.46" r="2.71" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"></svg:circle>`,
})
export class ArcticonsKakaotalkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
