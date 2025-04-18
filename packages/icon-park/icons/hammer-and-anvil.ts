import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkHammerAndAnvilIcon],svg[icon-park-hammer-and-anvil-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="#2F88FF" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path d="M6 14C6 4 14 4 14 4V24H6C6 24 6 24 6 14Z"></svg:path><svg:rect width="28" height="6" x="14" y="10"></svg:rect><svg:path d="M6 30H42C42 30 42 38 36 38C30 38 29 38 29 38L31 44H13L15 38H6V30Z"></svg:path></svg:g>`,
})
export class IconParkHammerAndAnvilIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
