import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkAlignTextRightIcon],svg[icon-park-align-text-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M42 9H6"></svg:path><svg:path d="M42 19H14"></svg:path><svg:path d="M42 29H6"></svg:path><svg:path d="M42 39H14"></svg:path></svg:g>`,
})
export class IconParkAlignTextRightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
