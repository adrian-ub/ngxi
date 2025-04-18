import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkChildrenCapIcon],svg[icon-park-children-cap-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 32C6 17 11 8 14 8C17 8 20 14 20 14H28C28 14 31 8 34 8C37 8 42 17 42 32"></svg:path><svg:rect width="40" height="8" x="4" y="32" fill="#2F88FF" rx="2"></svg:rect></svg:g>`,
})
export class IconParkChildrenCapIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
