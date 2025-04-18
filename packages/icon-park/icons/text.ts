import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTextIcon],svg[icon-park-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="36" x="6" y="6" fill="#2F88FF" stroke="#000" rx="3"></svg:rect><svg:path stroke="#fff" stroke-linecap="round" d="M16 19V16H32V19"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M22 34H26"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M24 18L24 34"></svg:path></svg:g>`,
})
export class IconParkTextIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
