import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkRingsIcon],svg[icon-park-rings-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4"><svg:path fill="#2F88FF" stroke-linecap="round" d="M13 43C17.42 43 21 39.42 21 35C21 30.58 17.42 27 13 27C8.58 27 5 30.58 5 35C5 39.42 8.58 43 13 43Z"></svg:path><svg:path fill="#2F88FF" stroke-linecap="round" d="M35 43C39.42 43 43 39.42 43 35C43 30.58 39.42 27 35 27C30.58 27 27 30.58 27 35C27 39.42 30.58 43 35 43Z"></svg:path><svg:path stroke-linecap="round" d="M6 5H42"></svg:path><svg:path stroke-linecap="square" d="M13 27V5"></svg:path><svg:path stroke-linecap="square" d="M35 27V5"></svg:path><svg:path stroke-linecap="round" d="M9 19H17"></svg:path><svg:path stroke-linecap="round" d="M31 19H39"></svg:path></svg:g>`,
})
export class IconParkRingsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
