import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkGpsIcon],svg[icon-park-gps-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" fill-rule="evenodd" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z" clip-rule="evenodd"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M24 13L17 34L24 29L31 34L24 13Z"></svg:path></svg:g>`,
})
export class IconParkGpsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
