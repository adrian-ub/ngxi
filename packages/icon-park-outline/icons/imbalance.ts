import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineImbalanceIcon],svg[icon-park-outline-imbalance-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 19V4M12 22l12-3l12-3m-8 14l8-14m8 14l-8-14M20 36l-8-14M4 36l8-14"></svg:path><svg:path d="M12 44a8 8 0 0 0 8-8H4a8 8 0 0 0 8 8m24-6a8 8 0 0 0 8-8H28a8 8 0 0 0 8 8" clip-rule="evenodd"></svg:path></svg:g>`,
})
export class IconParkOutlineImbalanceIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
