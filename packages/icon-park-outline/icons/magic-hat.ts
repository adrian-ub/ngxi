import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineMagicHatIcon],svg[icon-park-outline-magic-hat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M10 10c.5 3 1 4.5 1.5 8c.4 2.8.5 7.167.5 9c-2.167 1-7 3-7 7s5 9 19 9s19-5 19-9s-7-7-7-7s0-5.5.5-9s1-5 1.5-8"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M36 27c0 4-1 8-12.5 8"></svg:path><svg:ellipse cx="24" cy="10" rx="14" ry="5"></svg:ellipse></svg:g>`,
})
export class IconParkOutlineMagicHatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
