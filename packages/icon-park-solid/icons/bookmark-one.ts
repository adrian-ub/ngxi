import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkSolidBookmarkOneIcon],svg[icon-park-solid-bookmark-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path stroke-linecap="round" d="M34 10V4H8v34l6-3"></svg:path><svg:path fill="currentColor" d="M14 44V10h26v34l-13-6.273z"></svg:path></svg:g>`,
})
export class IconParkSolidBookmarkOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
