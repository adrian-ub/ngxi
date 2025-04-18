import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineMenJacketIcon],svg[icon-park-outline-men-jacket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="m6 10l12-6h12l12 6l-2 25h-6v9H14v-9H8zm8 25V20m20 15V20"></svg:path><svg:path d="M24 10a6 6 0 0 0 6-6H18a6 6 0 0 0 6 6"></svg:path></svg:g>`,
})
export class IconParkOutlineMenJacketIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
