import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkRadarThreeIcon],svg[icon-park-radar-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path stroke-linecap="round" stroke-linejoin="round" d="M24 4L24 21"></svg:path><svg:path stroke-linecap="round" d="M24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44C35.0457 44 44 35.0457 44 24C44 19.3743 42.4296 15.1154 39.7929 11.7273"></svg:path><svg:path stroke-linecap="round" d="M24 13C17.9249 13 13 17.9249 13 24C13 30.0751 17.9249 35 24 35C30.0751 35 35 30.0751 35 24C35 21.4559 34.1363 19.1135 32.6861 17.25"></svg:path><svg:circle cx="24" cy="24" r="3"></svg:circle></svg:g>`,
})
export class IconParkRadarThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
