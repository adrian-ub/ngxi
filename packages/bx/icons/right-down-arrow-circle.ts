import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxRightDownArrowCircleIcon],svg[bx-right-down-arrow-circle-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M12 2.007a9.93 9.93 0 0 0-7.071 2.922c-3.899 3.899-3.899 10.243 0 14.143A9.93 9.93 0 0 0 12 21.995a9.93 9.93 0 0 0 7.071-2.923c3.899-3.899 3.899-10.243 0-14.143A9.93 9.93 0 0 0 12 2.007m5.657 15.65A7.95 7.95 0 0 1 12 19.994c-2.141 0-4.15-.83-5.657-2.337c-3.119-3.119-3.119-8.195 0-11.314A7.94 7.94 0 0 1 12 4.007c2.141 0 4.15.829 5.657 2.336c3.119 3.119 3.119 8.195 0 11.314"></svg:path><svg:path fill="currentColor" d="M9.661 8.247L8.247 9.661l3.214 3.214L9.336 15H15V9.337l-2.125 2.124z"></svg:path>`,
})
export class BxRightDownArrowCircleIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
