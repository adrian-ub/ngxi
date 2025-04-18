import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkToBottomIcon],svg[icon-park-to-bottom-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="#000" stroke-linecap="round" stroke-linejoin="round" stroke-width="4"><svg:path d="M24.0083 33.8995V6"></svg:path><svg:path d="M36 22L24 34L12 22"></svg:path><svg:path d="M36 42H12"></svg:path></svg:g>`,
})
export class IconParkToBottomIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
