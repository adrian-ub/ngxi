import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkDiamondIcon],svg[icon-park-diamond-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M10.6364 5H37.3636L45 18.3L24 43L3 18.3L10.6364 5Z" clip-rule="evenodd"></svg:path><svg:path d="M10.6362 5L23.9999 43L37.3635 5"></svg:path><svg:path d="M3 18.3H45"></svg:path><svg:path d="M15.4092 18.3L24.0001 5L32.591 18.3"></svg:path></svg:g>`,
})
export class IconParkDiamondIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
