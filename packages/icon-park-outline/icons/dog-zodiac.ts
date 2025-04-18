import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineDogZodiacIcon],svg[icon-park-outline-dog-zodiac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 44V19c0-5 3.6-9.4 14-15v9h7v6"></svg:path><svg:path d="M16 25c4.013 1.78 11.354 5.124 13 15c.5 3 6 7 12 0c1.994-2.136 2.321-5.651-3.236-7.432"></svg:path><svg:path d="M28 36c-3.333-.377-11 1-11 8"></svg:path></svg:g>`,
})
export class IconParkOutlineDogZodiacIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
