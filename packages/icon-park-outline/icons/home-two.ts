import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineHomeTwoIcon],svg[icon-park-outline-home-two-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M44 44V20L24 4L4 20v24h12V26h16v18z"></svg:path><svg:path stroke-linecap="round" d="M24 44V34"></svg:path></svg:g>`,
})
export class IconParkOutlineHomeTwoIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
