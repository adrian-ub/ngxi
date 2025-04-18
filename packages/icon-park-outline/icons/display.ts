import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineDisplayIcon],svg[icon-park-outline-display-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:rect width="36" height="20" x="6" y="6" rx="2"></svg:rect><svg:path stroke-linecap="round" d="M14 13h8m-8 6h20M8 44l4.889-6h21.778L40 44M24 26v18"></svg:path></svg:g>`,
})
export class IconParkOutlineDisplayIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
