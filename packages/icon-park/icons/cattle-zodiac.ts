import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCattleZodiacIcon],svg[icon-park-cattle-zodiac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M38 31L44 37"></svg:path><svg:path stroke-linejoin="round" d="M5 44V18C5 13 7 8 16 6L30 4"></svg:path><svg:path stroke-linejoin="round" d="M19 20C20.5 21.5 22.5 25 28 25C31.1667 25 38 26.5 38 33V44"></svg:path><svg:path stroke-linejoin="round" d="M16 6C22 6 25 9 25 16"></svg:path><svg:path d="M30 44C30 39.5817 26.4183 36 22 36C17.5817 36 14 39.5817 14 44"></svg:path></svg:g>`,
})
export class IconParkCattleZodiacIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
