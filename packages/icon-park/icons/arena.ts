import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkArenaIcon],svg[icon-park-arena-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linejoin="round" stroke-miterlimit="2" stroke-width="4"><svg:path d="M44 26L24 36L4 26L24 16L44 26Z"></svg:path><svg:path d="M24 7L44 17L24 27L4 17L24 7Z"></svg:path><svg:path fill="#2F88FF" stroke-linecap="round" d="M44 26V34L24 44L4 34V26L24 36L44 26Z"></svg:path><svg:path stroke-linecap="round" d="M44 14V17V26"></svg:path><svg:path stroke-linecap="round" d="M4 26V17V14"></svg:path><svg:path stroke-linecap="round" d="M24 36V24"></svg:path><svg:path stroke-linecap="round" d="M24 16V4"></svg:path></svg:g>`,
})
export class IconParkArenaIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
