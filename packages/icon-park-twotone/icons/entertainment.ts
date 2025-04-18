import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneEntertainmentIcon],svg[icon-park-twotone-entertainment-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTEntertainment0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="M16 24c5.523 0 10-4.477 10-10S21.523 4 16 4S6 8.477 6 14s4.477 10 10 10Z"></svg:path><svg:path stroke-linecap="round" d="M26 15.202q.021.021 14.126 17.764a1 1 0 0 1-.062 1.346l-4.084 4.084a1 1 0 0 1-1.346.062L17.822 24m8.648.47l2.829 2.829"></svg:path><svg:path stroke-linecap="round" d="M17 44.086q2.876-3.747 6.99-3.747c4.116 0 8.973 5.17 13.116 4.459c4.144-.712 5.33-4.798 2.78-7.06"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTEntertainment0)"></svg:path>`,
})
export class IconParkTwotoneEntertainmentIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
