import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkOutlineFileDisplayOneIcon],svg[icon-park-outline-file-display-one-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M40 23v-9L31 4H10a2 2 0 0 0-2 2v36a2 2 0 0 0 2 2h12"></svg:path><svg:path stroke="currentColor" stroke-linejoin="round" stroke-width="4" d="M33 41c4.97 0 9-6 9-6s-4.03-6-9-6s-9 6-9 6s4.03 6 9 6Z"></svg:path><svg:path fill="currentColor" d="M33 37a2 2 0 1 0 0-4a2 2 0 0 0 0 4"></svg:path><svg:path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" d="M30 4v10h10"></svg:path></svg:g>`,
})
export class IconParkOutlineFileDisplayOneIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
