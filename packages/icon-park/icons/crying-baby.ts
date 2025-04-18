import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkCryingBabyIcon],svg[icon-park-crying-baby-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C33.9411 44 42 35.9411 42 26C42 16.0589 33.9411 8 24 8C14.0589 8 6 16.0589 6 26C6 35.9411 14.0589 44 24 44Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M24 8C23.75 7 22 4 18 4"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M24 8C24.0833 7 24.6 4.8 26 4"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M31 35C31 35 29 31 24 31C19 31 17 35 17 35"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M34 20L28 19"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M20 19L14 20"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M15 20V25"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M33 20V25"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M4 24V28"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M44 24V28"></svg:path></svg:g>`,
})
export class IconParkCryingBabyIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
