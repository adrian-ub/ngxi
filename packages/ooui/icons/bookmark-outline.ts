import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiBookmarkOutlineIcon],svg[ooui-bookmark-outline-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 1a2 2 0 0 0-2 2v16l7-5l7 5V3a2 2 0 0 0-2-2zm10 14.25l-5-3.5l-5 3.5V3h10z"></svg:path>`,
})
export class OouiBookmarkOutlineIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
