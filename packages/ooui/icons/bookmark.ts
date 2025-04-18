import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiBookmarkIcon],svg[ooui-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5 1a2 2 0 0 0-2 2v16l7-5l7 5V3a2 2 0 0 0-2-2z"></svg:path>`,
})
export class OouiBookmarkIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
