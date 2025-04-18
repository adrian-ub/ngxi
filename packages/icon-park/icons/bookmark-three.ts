import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkBookmarkThreeIcon],svg[icon-park-bookmark-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke-linejoin="round" stroke-width="4"><svg:path fill="#2F88FF" stroke="#000" d="M7 9C7 7.34315 8.34315 6 10 6H41V42H10C8.34315 42 7 40.6569 7 39V9Z"></svg:path><svg:path stroke="#fff" stroke-linecap="round" d="M7 34L41 34"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M7 30V38"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M41 30V38"></svg:path><svg:path fill="#43CCF8" stroke="#fff" d="M15 6H25V26L20 22L15 26V6Z"></svg:path><svg:path stroke="#000" stroke-linecap="round" d="M11 6L29 6"></svg:path></svg:g>`,
})
export class IconParkBookmarkThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
