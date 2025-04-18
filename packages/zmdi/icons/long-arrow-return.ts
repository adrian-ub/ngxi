import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[zmdiLongArrowReturnIcon],svg[zmdi-long-arrow-return-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M363 85h42v128H82l76 77l-30 30L0 192L128 64l30 30l-76 77h281z"></svg:path>`,
})
export class ZmdiLongArrowReturnIcon {
  readonly viewBox = input("0 0 408 384")
  readonly width = input("1.07em")
  readonly height = input("1em")
}
