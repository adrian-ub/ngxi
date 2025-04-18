import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkMusicCdIcon],svg[icon-park-music-cd-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-width="4"><svg:path d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M26 14V28"></svg:path><svg:path fill="#2F88FF" stroke-linejoin="round" d="M14 28.6655C14 26.6411 15.9341 25 18.32 25H26V29.3345C26 31.3589 24.0659 33 21.68 33H18.32C15.9341 33 14 31.3589 14 29.3345V28.6655Z"></svg:path><svg:path stroke-linecap="round" stroke-linejoin="round" d="M32 15L26 14"></svg:path></svg:g>`,
})
export class IconParkMusicCdIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
