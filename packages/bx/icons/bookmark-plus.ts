import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxBookmarkPlusIcon],svg[bx-bookmark-plus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 14v-3h3V9h-3V6h-2v3H8v2h3v3z"></svg:path><svg:path fill="currentColor" d="M20 22V4c0-1.103-.897-2-2-2H6c-1.103 0-2 .897-2 2v18l8-4.572zM6 10V4h12v14.553l-6-3.428l-6 3.428z"></svg:path>`,
})
export class BxBookmarkPlusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
