import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMasterIcon],svg[icon-park-master-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M38 38V6C38 4.89543 37.1046 4 36 4H12C10.8954 4 10 4.89543 10 6V38"></svg:path><svg:rect width="28" height="12" x="10" y="32" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" rx="6"></svg:rect><svg:path fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4" d="M20 16L24 12L28 16L32 12L29 23H19L16 12L20 16Z"></svg:path><svg:circle cx="32" cy="38" r="2" fill="#fff"></svg:circle></svg:g>`,
})
export class IconParkMasterIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
