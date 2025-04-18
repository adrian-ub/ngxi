import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneMusicIcon],svg[icon-park-twotone-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTMusic0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="M30 34.5a3.5 3.5 0 0 1 3.5-3.5H41v3.4a3.6 3.6 0 0 1-3.6 3.6h-3.9a3.5 3.5 0 0 1-3.5-3.5Zm-24 4A3.5 3.5 0 0 1 9.5 35H16v3.4a3.6 3.6 0 0 1-3.6 3.6H9.5A3.5 3.5 0 0 1 6 38.5Z"></svg:path><svg:path stroke-linecap="round" d="m16 18.044l25-5.919M16 38V10l25-6v29.692"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTMusic0)"></svg:path>`,
})
export class IconParkTwotoneMusicIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
