import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBasketballStandIcon],svg[icon-park-basketball-stand-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:rect width="40" height="28" x="4" y="5" rx="2"></svg:rect><svg:path d="M31 22V15H17V22"></svg:path><svg:path d="M18 39H30"></svg:path><svg:path d="M17 33H31"></svg:path><svg:path d="M32 27L30 39L31 43"></svg:path><svg:path d="M16 27L18 39L17 43"></svg:path><svg:path d="M24 27L24 43"></svg:path><svg:path d="M34 27L14 27"></svg:path></svg:g>`,
})
export class IconParkBasketballStandIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
