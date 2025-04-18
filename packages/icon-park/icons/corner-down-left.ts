import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCornerDownLeftIcon],svg[icon-park-corner-down-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M16 18L8 26L16 34"></svg:path><svg:path d="M40 10V23C40 24.6569 38.6569 26 37 26H8"></svg:path></svg:g>`,
})
export class IconParkCornerDownLeftIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
