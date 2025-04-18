import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkScorpioIcon],svg[icon-park-scorpio-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-width="4"><svg:path stroke-linejoin="round" d="M16 12C16 8.68629 13.3137 6 10 6C6.68629 6 4 8.68629 4 12"></svg:path><svg:path stroke-linejoin="round" d="M28 12C28 8.68629 25.3137 6 22 6C18.6863 6 16 8.68629 16 12"></svg:path><svg:path stroke-linejoin="round" d="M40 34C40 37.3137 37.3137 40 34 40C30.6863 40 28 37.3137 28 34"></svg:path><svg:path stroke-linejoin="round" d="M4 12V30"></svg:path><svg:path stroke-linejoin="round" d="M16 12V30"></svg:path><svg:path d="M28 12V34"></svg:path><svg:path d="M40 23V34"></svg:path><svg:path stroke-linejoin="round" d="M36 27L40 23L44 27"></svg:path></svg:g>`,
})
export class IconParkScorpioIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
