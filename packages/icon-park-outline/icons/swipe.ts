import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineSwipeIcon],svg[icon-park-outline-swipe-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="m6 15l13.371 10.538C20.5 26.5 22.828 28 25 26c2.29-2.108.5-4.5 0-5l-8-6M4 8h23l11 10M9 33l35 .02"></svg:path><svg:path d="M9 18v22h35V18H22"></svg:path></svg:g>`,
})
export class IconParkOutlineSwipeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
