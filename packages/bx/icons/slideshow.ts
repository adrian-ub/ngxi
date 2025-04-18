import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[bxSlideshowIcon],svg[bx-slideshow-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M20 3H4c-1.103 0-2 .897-2 2v10c0 1.103.897 2 2 2h7v3H8v2h8v-2h-3v-3h7c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2M4 15V5h16l.001 10z"></svg:path><svg:path fill="currentColor" d="m10 13l5-3l-5-3z"></svg:path>`,
})
export class BxSlideshowIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
