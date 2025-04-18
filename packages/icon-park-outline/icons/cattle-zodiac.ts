import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineCattleZodiacIcon],svg[icon-park-outline-cattle-zodiac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="m38 31l6 6M5 44V18C5 13 7 8 16 6l14-2"></svg:path><svg:path stroke-linejoin="round" d="M19 20c1.5 1.5 3.5 5 9 5c3.167 0 10 1.5 10 8v11M16 6c6 0 9 3 9 10"></svg:path><svg:path d="M30 44a8 8 0 1 0-16 0"></svg:path></svg:g>`,
})
export class IconParkOutlineCattleZodiacIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
