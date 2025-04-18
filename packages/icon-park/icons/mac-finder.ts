import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMacFinderIcon],svg[icon-park-mac-finder-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M44 38V10C44 8.89543 43.1046 8 42 8H6C4.89543 8 4 8.89543 4 10V38C4 39.1046 4.89543 40 6 40H42C43.1046 40 44 39.1046 44 38Z"></svg:path><svg:path stroke="#fff" d="M24.9999 8C24.9999 8 19.9999 18 20.9999 25H26.9999L27.9999 40"></svg:path><svg:path stroke="#000" d="M34 40H22"></svg:path><svg:path stroke="#000" d="M30 8H18"></svg:path><svg:path stroke="#fff" d="M34 16V18"></svg:path><svg:path stroke="#fff" d="M14 16V18"></svg:path><svg:path stroke="#fff" d="M13 29C13 29 17.1905 32 24 32C30.8095 32 35 29 35 29"></svg:path></svg:g>`,
})
export class IconParkMacFinderIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
