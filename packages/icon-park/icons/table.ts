import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTableIcon],svg[icon-park-table-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="32" height="40" x="8" y="4" fill="#2F88FF" stroke="#000" rx="2"></svg:rect><svg:path stroke="#fff" d="M14 16H34"></svg:path><svg:path stroke="#fff" d="M14 24H34"></svg:path><svg:path stroke="#fff" d="M14 32H34"></svg:path><svg:path stroke="#fff" d="M18 12V36"></svg:path></svg:g>`,
})
export class IconParkTableIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
