import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSTurnUpIcon],svg[icon-park-s-turn-up-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 31L24 35C24 39 21 42 17 42C13 42 10 39 10 35L10 16"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M38 42L38 13C38 8.99999 35 5.99999 31 5.99999C27 5.99999 24 8.99999 24 13L24 31"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M33 37L38 42L43 37"></svg:path><svg:circle cx="10" cy="11" r="5" fill="#2F88FF" transform="rotate(-180 10 11)"></svg:circle></svg:g>`,
})
export class IconParkSTurnUpIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
