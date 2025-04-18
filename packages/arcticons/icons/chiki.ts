import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsChikiIcon],svg[arcticons-chiki-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M6.62 34.868s-3.04-4.812-1.838-9.223s8.532-6.705 14.257-3.152c5.67 3.553 5.804 10.003-.344 10.08c-6.639.082-9.791.143-12.03 2.295Z"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.777 20.957c.294-1.144 3.27-11.82 11.894-11.82c9.111 0 14.369 6.45 16.485 7.876a12.4 12.4 0 0 0 4.344 2.072a7.26 7.26 0 0 1-5.725 3.998"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M36.594 19.274s1.894 4.979 1.259 9.056c-.63 4.065 2.573 7.106 2.573 7.106s-3.955.516-4.868-.515m1.036 2.286a10.27 10.27 0 0 0-7.73.516c-3.509 1.927-12.921 2.05-17.042-4.79"></svg:path><svg:ellipse cx="18.724" cy="19.999" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="1.873" ry=".762" transform="rotate(-80.65 18.724 20)"></svg:ellipse><svg:ellipse cx="27.051" cy="20.602" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" rx="2.147" ry=".874" transform="rotate(-75 27.05 20.603)"></svg:ellipse>`,
})
export class ArcticonsChikiIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
