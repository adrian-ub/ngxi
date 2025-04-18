import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkRockingHorseIcon],svg[icon-park-rocking-horse-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" d="M14 29C14 29 11 24 11 18H27C27 18 27 13.5 30 10C33 6.5 36 5 36 5L44 13.5V18.5L36 16C32 21 34 29 34 29H14Z"></svg:path><svg:path d="M30 29L35 41"></svg:path><svg:path d="M18 29L13 41"></svg:path><svg:path d="M4 37C4 37 10 43 24 43C38 43 44 37 44 37"></svg:path><svg:path d="M11 18C11 15 9 12 4 12"></svg:path></svg:g>`,
})
export class IconParkRockingHorseIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
