import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMassageChairOneIcon],svg[icon-park-massage-chair-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M15 28V15.6522C15 13 18 10 24 10C30 10 33 13 33 15.6522V28"></svg:path><svg:path fill="#2F88FF" d="M12 34V28H36V34H12Z"></svg:path><svg:path d="M20 4H28"></svg:path><svg:path d="M8 16V28H40V16"></svg:path><svg:path d="M17 43L31 43"></svg:path><svg:path d="M24 34V43"></svg:path><svg:path d="M24 4V10"></svg:path></svg:g>`,
})
export class IconParkMassageChairOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
