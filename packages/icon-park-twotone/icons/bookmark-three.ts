import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconParkTwotoneBookmarkThreeIcon],svg[icon-park-twotone-bookmark-three-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:defs><svg:mask id="ipTBookmarkThree0"><svg:g fill="none" stroke="#fff" stroke-linejoin="round" stroke-width="4"><svg:path fill="#555" d="M7 9a3 3 0 0 1 3-3h31v36H10a3 3 0 0 1-3-3z"></svg:path><svg:path stroke-linecap="round" d="M7 34h34M7 30v8m34-8v8"></svg:path><svg:path fill="#555" d="M15 6h10v20l-5-4l-5 4z"></svg:path><svg:path stroke-linecap="round" d="M11 6h18"></svg:path></svg:g></svg:mask></svg:defs><svg:path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTBookmarkThree0)"></svg:path>`,
})
export class IconParkTwotoneBookmarkThreeIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
