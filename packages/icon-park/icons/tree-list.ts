import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTreeListIcon],svg[icon-park-tree-list-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M38 20H18V28H38V20Z"></svg:path><svg:path fill="#2F88FF" d="M32 6H18V14H32V6Z"></svg:path><svg:path fill="#2F88FF" d="M44 34H18V42H44V34Z"></svg:path><svg:path stroke-linecap="round" d="M17 10H5"></svg:path><svg:path stroke-linecap="round" d="M17 24H5"></svg:path><svg:path stroke-linecap="round" d="M17 38H5"></svg:path><svg:path stroke-linecap="round" d="M5 44V4"></svg:path></svg:g>`,
})
export class IconParkTreeListIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
