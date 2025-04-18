import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkAdProductIcon],svg[icon-park-ad-product-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M44 14L24 4L4 14V34L24 44L44 34V14Z"></svg:path><svg:path stroke-linecap="round" d="M4 14L24 24"></svg:path><svg:path stroke-linecap="round" d="M24 44V24"></svg:path><svg:path stroke-linecap="round" d="M44 14L24 24"></svg:path><svg:path stroke-linecap="round" d="M34 9L14 19"></svg:path></svg:g>`,
})
export class IconParkAdProductIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
