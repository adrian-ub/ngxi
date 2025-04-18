import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkClothesPantsSweatIcon],svg[icon-park-clothes-pants-sweat-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 19L33 38H42L38 4H10L6 38H15L24 19Z"></svg:path><svg:path fill="#2F88FF" d="M34 38L35 44H41V38H34Z"></svg:path><svg:path fill="#2F88FF" d="M13 44H7V38H14L13 44Z"></svg:path><svg:path d="M24 4L28 11.5"></svg:path><svg:path d="M24 4L20 11.5"></svg:path></svg:g>`,
})
export class IconParkClothesPantsSweatIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
