import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkAddMusicIcon],svg[icon-park-add-music-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M24 44C12.9543 44 4 35.0457 4 24C4 12.9543 12.9543 4 24 4C35.0457 4 44 12.9543 44 24"></svg:path><svg:path fill="#2F88FF" d="M20 24V17.0718L26 20.5359L32 24L26 27.4641L20 30.9282V24Z"></svg:path><svg:path stroke-linecap="round" d="M37.0508 32L37.0508 42"></svg:path><svg:path stroke-linecap="round" d="M42 36.9497L32 36.9497"></svg:path></svg:g>`,
})
export class IconParkAddMusicIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
