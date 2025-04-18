import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riArchive2FillIcon],svg[ri-archive-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M22 20V7l-2-4H4L2 7.004V20a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1M5.236 5h13.528l1 2H4.237zM9 11h6v2H9z"></svg:path>`,
})
export class RiArchive2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
