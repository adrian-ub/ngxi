import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkVolkswagenIcon],svg[icon-park-volkswagen-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M7 14L16 37L22 26H26L32 37L41 14"></svg:path><svg:path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" d="M16 6L22 19H26L32 6"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M44 24C44 18.0265 41.3812 12.6647 37.2291 9C33.7035 5.88818 29.0722 4 24 4C18.9278 4 14.2965 5.88818 10.7709 9C6.61877 12.6647 4 18.0265 4 24"></svg:path></svg:g>`,
})
export class IconParkVolkswagenIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
