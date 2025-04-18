import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phArrowLineUpLeftBoldIcon],svg[ph-arrow-line-up-left-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M236 208a12 12 0 0 1-12 12H48a12 12 0 0 1 0-24h176a12 12 0 0 1 12 12M72 156a12 12 0 0 0 12-12V77l91.51 91.52a12 12 0 0 0 17-17L101 60h67a12 12 0 0 0 0-24H72a12 12 0 0 0-12 12v96a12 12 0 0 0 12 12"></svg:path>`,
})
export class PhArrowLineUpLeftBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
