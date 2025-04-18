import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineHairBrushIcon],svg[icon-park-outline-hair-brush-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M18.197 31.424c3.124 3.124 10.722.592 16.97-5.657c6.249-6.248 8.781-13.846 5.657-16.97M27.389 6.675l1.414 1.415m-6.363 3.535l1.414 1.414m-5.658 4.243l1.414 1.414m-2.828 5.657l1.414 1.414M35.167 4.554l1.414 1.414m-2.828 7.072l2.828 2.828m-7.777 2.122l2.828 2.828m-8.485 1.414l2.828 2.828"></svg:path><svg:rect width="6" height="14" x="16.075" y="29.303" rx="3" transform="rotate(45 16.075 29.303)"></svg:rect></svg:g>`,
})
export class IconParkOutlineHairBrushIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
