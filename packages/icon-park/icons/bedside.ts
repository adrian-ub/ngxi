import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBedsideIcon],svg[icon-park-bedside-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="40" height="12" x="4" y="18" fill="#2F88FF" stroke="#000"></svg:rect><svg:rect width="40" height="12" x="4" y="30" fill="#2F88FF" stroke="#000"></svg:rect><svg:path stroke="#fff" d="M22 24H26"></svg:path><svg:path stroke="#fff" d="M22 36H26"></svg:path><svg:path stroke="#000" d="M8 42V46"></svg:path><svg:path stroke="#000" d="M40 42V46"></svg:path><svg:path stroke="#000" d="M24 18V10"></svg:path><svg:path stroke="#000" d="M32 10H16"></svg:path></svg:g>`,
})
export class IconParkBedsideIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
