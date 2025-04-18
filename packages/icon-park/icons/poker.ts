import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkPokerIcon],svg[icon-park-poker-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M42 4H12V44H42V4Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M4 11.7895L12 10V44L4 11.7895Z" clip-rule="evenodd"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M27 18L22 24L27 30L32 24L27 18Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M18 10V14"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M36 34V38"></svg:path></svg:g>`,
})
export class IconParkPokerIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
