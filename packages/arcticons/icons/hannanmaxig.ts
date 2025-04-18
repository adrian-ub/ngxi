import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsHannanmaxigIcon],svg[arcticons-hannanmaxig-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M18.68 42.429L5.38 34.75v-21.5L24 2.5l2.66 1.536v33.787"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="m29.32 5.571l13.3 7.679v21.5L24 45.5l-2.66-1.536V10.177"></svg:path><svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M26.66 10.178L31.98 24l5.32-7.68m0 0v15.359M10.7 16.32v15.359M21.34 24H10.699"></svg:path>`,
})
export class ArcticonsHannanmaxigIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
