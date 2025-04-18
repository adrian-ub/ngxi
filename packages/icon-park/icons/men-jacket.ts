import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMenJacketIcon],svg[icon-park-men-jacket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 10L18 4H30L42 10L40 35H34V44H24H14V35H8L6 10Z"></svg:path><svg:path d="M14 35L14 20"></svg:path><svg:path d="M34 35V20"></svg:path><svg:path d="M24 10C27.3137 10 30 7.31371 30 4H18C18 7.31371 20.6863 10 24 10Z"></svg:path></svg:g>`,
})
export class IconParkMenJacketIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
