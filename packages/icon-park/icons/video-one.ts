import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkVideoOneIcon],svg[icon-park-video-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M4 10C4 8.89543 4.89543 8 6 8H34C35.1046 8 36 8.89543 36 10V19L44 13V36L36 30V38C36 39.1046 35.1046 40 34 40H6C4.89543 40 4 39.1046 4 38V10Z"></svg:path><svg:circle cx="17" cy="21" r="5" fill="#43CCF8" stroke="#fff"></svg:circle></svg:g>`,
})
export class IconParkVideoOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
