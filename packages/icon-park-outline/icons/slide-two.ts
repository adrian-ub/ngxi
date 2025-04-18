import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineSlideTwoIcon],svg[icon-park-outline-slide-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M4 8h40"></svg:path><svg:path d="M8 8h32v26H8z" clip-rule="evenodd"></svg:path><svg:path d="m31 18l3 3l-3 3m-14 0l-3-3l3-3m-1 24l8-8l8 8"></svg:path></svg:g>`,
})
export class IconParkOutlineSlideTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
