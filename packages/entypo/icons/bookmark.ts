import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[entypoBookmarkIcon],svg[entypo-bookmark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M14 2v17l-4-4l-4 4V2c0-.553.585-1.02 1-1h6c.689-.02 1 .447 1 1"></svg:path>`,
})
export class EntypoBookmarkIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
