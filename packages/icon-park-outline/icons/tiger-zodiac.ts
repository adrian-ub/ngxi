import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineTigerZodiacIcon],svg[icon-park-outline-tiger-zodiac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 44V15c0-1.5 1-5.2 5-8L8.5 4c1.667 0 5.6.6 8 3c4.167-.333 13.5 2 10 8c-.89 1.335-2.5 2-5.5 2"></svg:path><svg:path d="M19 24c4 0 12 5 12 14c0 2 1 4.883 5.134 4.401C39 42.067 41.627 40.052 43 35.877"></svg:path><svg:path d="M17 44c0-4 2-9 10-9h3"></svg:path></svg:g>`,
})
export class IconParkOutlineTigerZodiacIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
