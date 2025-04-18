import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSpikedshoesIcon],svg[icon-park-spikedshoes-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4"><svg:path stroke="#000" d="M44 6H28V14H44V6Z"></svg:path><svg:path fill="#2F88FF" stroke="#000" d="M44 14V36C44 37.11 43.11 38 42 38H8C5.79 38 4 36.21 4 34V28C4 23.58 7.58 20 12 20H28V14H44Z"></svg:path><svg:path stroke="#fff" d="M14 26V20"></svg:path><svg:path stroke="#fff" d="M21 26V20"></svg:path><svg:path stroke="#000" d="M15 42V38"></svg:path><svg:path stroke="#000" d="M8 42V38"></svg:path><svg:path stroke="#000" d="M22 42V38"></svg:path><svg:path stroke="#000" d="M34 42V38"></svg:path><svg:path stroke="#000" d="M41 42V38"></svg:path><svg:path stroke="#000" d="M23 20L12 20"></svg:path></svg:g>`,
})
export class IconParkSpikedshoesIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
