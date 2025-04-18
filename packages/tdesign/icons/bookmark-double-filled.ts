import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignBookmarkDoubleFilledIcon],svg[tdesign-bookmark-double-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M23.003 18.419L23 0L10.001.002v2H21v14.413z"></svg:path><svg:path fill="currentColor" d="M19 4H3v19.943l8-5.714l8 5.714z"></svg:path>`,
})
export class TdesignBookmarkDoubleFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
