import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineAdProductIcon],svg[icon-park-outline-ad-product-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M44 14L24 4L4 14v20l20 10l20-10z"></svg:path><svg:path stroke-linecap="round" d="m4 14l20 10m0 20V24m20-10L24 24M34 9L14 19"></svg:path></svg:g>`,
})
export class IconParkOutlineAdProductIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
