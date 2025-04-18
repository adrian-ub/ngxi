import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkLoadingThreeIcon],svg[icon-park-loading-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke="#fff" d="M24 12V15"></svg:path><svg:path stroke="#fff" d="M32.4852 15.5147L30.3639 17.636"></svg:path><svg:path stroke="#fff" d="M36 24H33"></svg:path><svg:path stroke="#fff" d="M32.4852 32.4853L30.3639 30.364"></svg:path><svg:path stroke="#fff" d="M24 36V33"></svg:path><svg:path stroke="#fff" d="M15.5148 32.4853L17.6361 30.364"></svg:path><svg:path stroke="#fff" d="M12 24H15"></svg:path><svg:path stroke="#fff" d="M15.5148 15.5147L17.6361 17.636"></svg:path></svg:g>`,
})
export class IconParkLoadingThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
