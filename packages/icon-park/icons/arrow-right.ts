import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkArrowRightIcon],svg[icon-park-arrow-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M41.9999 24H5.99994"></svg:path><svg:path d="M30 12L42 24L30 36"></svg:path></svg:g>`,
})
export class IconParkArrowRightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
