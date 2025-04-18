import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkFireTwoIcon],svg[icon-park-fire-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M36 21C36 28.1797 30.1797 34 23 34C15.8203 34 10 28.1797 10 21C10 13.8203 15 11 17 4C25 7.49989 25 18 25 18C25 18 27 12 33 10.5C33.5 16 36 17.9342 36 21Z"></svg:path><svg:path d="M7 36L39 44"></svg:path><svg:path d="M7 44L39 36"></svg:path></svg:g>`,
})
export class IconParkFireTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
