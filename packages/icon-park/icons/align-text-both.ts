import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkAlignTextBothIcon],svg[icon-park-align-text-both-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M42 19H6"></svg:path><svg:path d="M42 9H6"></svg:path><svg:path d="M42 29H6"></svg:path><svg:path d="M42 39H6"></svg:path></svg:g>`,
})
export class IconParkAlignTextBothIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
