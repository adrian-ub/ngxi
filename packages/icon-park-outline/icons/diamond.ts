import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineDiamondIcon],svg[icon-park-outline-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M10.636 5h26.728L45 18.3L24 43L3 18.3z" clip-rule="evenodd"></svg:path><svg:path d="M10.636 5L24 43L37.364 5M3 18.3h42"></svg:path><svg:path d="M15.41 18.3L24 5l8.591 13.3"></svg:path></svg:g>`,
})
export class IconParkOutlineDiamondIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
