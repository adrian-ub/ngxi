import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTrousersBellBottomsIcon],svg[icon-park-trousers-bell-bottoms-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M16 12L18 4H30L32 12V24L36 41L24 44L12 41L16 24V12Z"></svg:path><svg:path stroke="#fff" d="M24 44V16"></svg:path><svg:path stroke="#000" d="M12 41L24 44L36 41"></svg:path></svg:g>`,
})
export class IconParkTrousersBellBottomsIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
