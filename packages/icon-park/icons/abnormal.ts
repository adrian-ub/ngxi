import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkAbnormalIcon],svg[icon-park-abnormal-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M40 16.3977V6C40 4.89543 39.1046 4 38 4H10C8.89543 4 8 4.89543 8 6V42C8 43.1046 8.89543 44 10 44H20"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M16 14H29"></svg:path><svg:path stroke="#000" stroke-linecap="round" stroke-width="4" d="M16 21H21"></svg:path><svg:circle cx="34" cy="34" r="10" fill="#2F88FF" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" transform="rotate(90 34 34)"></svg:circle><svg:path stroke="#fff" stroke-linecap="round" stroke-width="4" d="M34 36L34 39"></svg:path><svg:circle cx="34" cy="30" r="2" fill="#fff"></svg:circle></svg:g>`,
})
export class IconParkAbnormalIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
