import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineBookmarkIcon],svg[icon-park-outline-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4"><svg:path d="M10 44a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h28a2 2 0 0 1 2 2v36a2 2 0 0 1-2 2z"></svg:path><svg:path stroke-linecap="round" d="M21 22V4h12v18l-6-6.273z" clip-rule="evenodd"></svg:path><svg:path stroke-linecap="round" d="M10 4h28"></svg:path></svg:g>`,
})
export class IconParkOutlineBookmarkIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
