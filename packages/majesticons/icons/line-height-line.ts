import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[majesticonsLineHeightLineIcon],svg[majesticons-line-height-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 10V5m0 0L4 7m2-2l2 2m-2 7v5m0 0l2-2m-2 2l-2-2m8-10h8m0 5h-8m0 5h8"></svg:path>`,
})
export class MajesticonsLineHeightLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
