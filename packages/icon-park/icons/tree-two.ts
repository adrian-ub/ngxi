import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTreeTwoIcon],svg[icon-park-tree-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M11 24C11 24 8.00001 26 8 30C7.99998 36 18 38 18 38"></svg:path><svg:path stroke-linejoin="round" d="M37 24C37 24 40 26 40 30C40 36 30 38 30 38"></svg:path><svg:path stroke-linejoin="round" d="M24 15.999L24 43.999"></svg:path><svg:path d="M19.126 13.5C18.4174 12.5149 18 11.3062 18 10C18 6.68629 20.6863 4 24 4C27.3137 4 30 6.68629 30 10C30 11.3062 29.5826 12.5149 28.874 13.5"></svg:path><svg:path stroke-linejoin="round" d="M13 13C13 13 9 15.5 9 19C9 22.5 12 25 12 25"></svg:path><svg:path stroke-linejoin="round" d="M35 13C35 13 39 15.5 39 19C39 22.5 36 25 36 25"></svg:path></svg:g>`,
})
export class IconParkTreeTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
