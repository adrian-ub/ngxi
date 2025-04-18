import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkDataIcon],svg[icon-park-data-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M44.0001 11C44.0001 11 44 36.0623 44 38C44 41.3137 35.0457 44 24 44C12.9543 44 4.00003 41.3137 4.00003 38C4.00003 36.1423 4 11 4 11"></svg:path><svg:path d="M44 29C44 32.3137 35.0457 35 24 35C12.9543 35 4 32.3137 4 29"></svg:path><svg:path d="M44 20C44 23.3137 35.0457 26 24 26C12.9543 26 4 23.3137 4 20"></svg:path><svg:ellipse cx="24" cy="10" fill="#2F88FF" rx="20" ry="6"></svg:ellipse></svg:g>`,
})
export class IconParkDataIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
