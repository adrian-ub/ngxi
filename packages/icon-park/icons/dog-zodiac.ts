import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkDogZodiacIcon],svg[icon-park-dog-zodiac-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 44V19C6 14 9.6 9.6 20 4V13H27V19"></svg:path><svg:path d="M16 25C20.0133 26.7807 27.354 30.1237 29 40C29.5 43 35 47 41 40C42.9943 37.8639 43.321 34.3488 37.7642 32.5681"></svg:path><svg:path d="M28 36.0005C24.6667 35.6227 17 37.0003 17 44"></svg:path></svg:g>`,
})
export class IconParkDogZodiacIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
