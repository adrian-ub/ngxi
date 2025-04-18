import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCopyrightIcon],svg[icon-park-copyright-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:circle cx="24" cy="24" r="20" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"></svg:circle><svg:path fill="#2F88FF" d="M24 17H20V24H23H24C27 24 28 22 28 20.5C28 19 27 17 24 17Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M20 31V24M20 24L20 17H24C27 17 28 19 28 20.5C28 22 27 24 24 24H23M20 24H23M28 31L23 24"></svg:path></svg:g>`,
})
export class IconParkCopyrightIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
