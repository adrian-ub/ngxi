import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkH3Icon],svg[icon-park-h3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 8V40"></svg:path><svg:path d="M24 8V40"></svg:path><svg:path d="M7 24H23"></svg:path><svg:path d="M32 20H42L35 29C39 29 42 31 42 35C42 39 39 40 37 40C34.619 40 33 39 32 37.9"></svg:path></svg:g>`,
})
export class IconParkH3Icon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
