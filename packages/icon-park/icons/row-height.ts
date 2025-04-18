import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkRowHeightIcon],svg[icon-park-row-height-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M16 35L10 41L4 35"></svg:path><svg:path d="M16 13L10 7L4 13"></svg:path><svg:path d="M10 7V41"></svg:path><svg:path d="M44 9H22"></svg:path><svg:path d="M36 19H22"></svg:path><svg:path d="M44 29H22"></svg:path><svg:path d="M36 39H22"></svg:path></svg:g>`,
})
export class IconParkRowHeightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
