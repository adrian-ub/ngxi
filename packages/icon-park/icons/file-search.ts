import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFileSearchIcon],svg[icon-park-file-search-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M40 20.8421V6C40 4.89543 39.1046 4 38 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H26"></svg:path><svg:path d="M14 17H20"></svg:path><svg:path d="M28 17H34"></svg:path><svg:path d="M14 28H20"></svg:path><svg:path d="M14 34H20"></svg:path><svg:path d="M17 20L17 14"></svg:path><svg:path d="M37.728 37.728L41.9707 41.9707"></svg:path><svg:circle cx="33.485" cy="33.485" r="6" fill="#2F88FF" stroke-linejoin="round" transform="rotate(45 33.485 33.485)"></svg:circle></svg:g>`,
})
export class IconParkFileSearchIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
