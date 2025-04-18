import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFileCabinetIcon],svg[icon-park-file-cabinet-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M42 4H6V14H42V4Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M42 19H6V29H42V19Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" d="M42 34H6V44H42V34Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M21 9H27"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M21 24H27"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M21 39H27"></svg:path></svg:g>`,
})
export class IconParkFileCabinetIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
