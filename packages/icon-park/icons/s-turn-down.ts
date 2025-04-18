import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSTurnDownIcon],svg[icon-park-s-turn-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 17L24 13C24 8.99999 27 5.99999 31 5.99999C35 5.99999 38 8.99999 38 13L38 32"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10 6L10 35C10 39 13 42 17 42C21 42 24 39 24 35L24 17"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M15 11L10 6L5 11"></svg:path><svg:circle cx="38" cy="37" r="5" fill="#2F88FF"></svg:circle></svg:g>`,
})
export class IconParkSTurnDownIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
