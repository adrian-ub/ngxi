import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBabyTasteIcon],svg[icon-park-baby-taste-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C33.9411 44 42 35.9411 42 26C42 16.0589 33.9411 8 24 8C14.0589 8 6 16.0589 6 26C6 35.9411 14.0589 44 24 44Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M24 8C23.75 7 22 4 18 4"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M24 8C24.0833 7 24.6 4.8 26 4"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M31 33C31 33 29 37 24 37C19 37 17 33 17 33"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M31 33C31 33 32.5 29 30 29C27.5 29 27 36 27 36"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M33 21H29"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M17 19V23"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M4 24V28"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M44 24V28"></svg:path></svg:g>`,
})
export class IconParkBabyTasteIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
