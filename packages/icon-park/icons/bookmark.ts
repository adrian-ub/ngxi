import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBookmarkIcon],svg[icon-park-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M10 44C8.89543 44 8 43.1046 8 42V6C8 4.89543 8.89543 4 10 4H38C39.1046 4 40 4.89543 40 6V42C40 43.1046 39.1046 44 38 44H10Z"></svg:path><svg:path fill="#43CCF8" fill-rule="evenodd" stroke="#fff" stroke-linecap="round" d="M21 22V4H33V22L27 15.7273L21 22Z" clip-rule="evenodd"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M10 4H38"></svg:path></svg:g>`,
})
export class IconParkBookmarkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
