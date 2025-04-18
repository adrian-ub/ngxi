import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMagicHatIcon],svg[icon-park-magic-hat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10 10C10.5 13 11 14.5 11.5 18C11.9 20.8 12 25.1667 12 27C9.83333 28 5 30 5 34C5 38 10 43 24 43C38 43 43 38 43 34C43 30 36 27 36 27C36 27 36 21.5 36.5 18C37 14.5 37.5 13 38 10"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M36 27C36 31 35 35 23.5 35"></svg:path><svg:ellipse cx="24" cy="10" rx="14" ry="5"></svg:ellipse></svg:g>`,
})
export class IconParkMagicHatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
