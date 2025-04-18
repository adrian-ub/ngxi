import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkChickenZodiacIcon],svg[icon-park-chicken-zodiac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M31 31C30 26.5 31.4 17.6 41 14"></svg:path><svg:path d="M11 4L15 10"></svg:path><svg:path d="M38 31C38 33.8889 34.24 38.5556 28 40L26 44"></svg:path><svg:path d="M21 10.2738C15.1845 9.2518 3.86133 10.5366 5.09285 23.8519C5.09286 28.2319 7.37935 37.1968 16 40L18 44"></svg:path><svg:path d="M19 18C19.6957 21.8333 22.5 31 31 31H38C37.3043 28.6667 37.1565 23.4 43 21"></svg:path></svg:g>`,
})
export class IconParkChickenZodiacIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
