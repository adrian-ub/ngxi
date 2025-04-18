import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxLeftTopArrowCircleIcon],svg[bx-left-top-arrow-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M11.993 2.007a9.93 9.93 0 0 0-7.071 2.922c-3.899 3.899-3.899 10.243 0 14.143a9.93 9.93 0 0 0 7.071 2.923a9.93 9.93 0 0 0 7.071-2.923c3.899-3.899 3.899-10.243 0-14.143a9.93 9.93 0 0 0-7.071-2.922m5.657 15.65a7.95 7.95 0 0 1-5.657 2.337c-2.141 0-4.15-.83-5.657-2.337c-3.119-3.119-3.119-8.195 0-11.314a7.95 7.95 0 0 1 5.657-2.336c2.142 0 4.15.829 5.657 2.336c3.12 3.119 3.12 8.195 0 11.314"></svg:path><svg:path fill="currentColor" d="M14.657 9H8.993v5.663l2.125-2.124l3.215 3.214l1.414-1.414l-3.215-3.214z"></svg:path>`,
})
export class BxLeftTopArrowCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
