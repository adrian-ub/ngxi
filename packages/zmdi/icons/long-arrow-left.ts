import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiLongArrowLeftIcon],svg[zmdi-long-arrow-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M384 171v42H82l76 77l-30 30L0 192L128 64l30 30l-76 77z"></svg:path>`,
})
export class ZmdiLongArrowLeftIcon {
  readonly viewBox = input("0 0 384 384")
  readonly width = input("1em")
  readonly height = input("1em")
}
