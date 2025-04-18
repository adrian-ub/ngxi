import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkEnergySocketIcon],svg[icon-park-energy-socket-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path d="M28 21V16"></svg:path><svg:path d="M20 21V16"></svg:path><svg:path fill="#2F88FF" d="M24 32C28.4183 32 32 28.4183 32 24V21H16V24C16 28.4183 19.5817 32 24 32Z"></svg:path><svg:path d="M24 44V32"></svg:path></svg:g>`,
})
export class IconParkEnergySocketIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
