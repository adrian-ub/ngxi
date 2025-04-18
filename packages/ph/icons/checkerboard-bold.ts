import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCheckerboardBoldIcon],svg[ph-checkerboard-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M228 48a20 20 0 0 0-20-20H48a20 20 0 0 0-20 20v160a20 20 0 0 0 20 20h160a20 20 0 0 0 20-20Zm-35 68l-53-53V52h11l53 53v11Zm-53-19l19 19h-19Zm64-26l-19-19h19Zm-88-19v64H52V52Zm-11 152l-53-53v-11h11l53 53v11Zm11-45l-19-19h19Zm-64 26l19 19H52Zm88 19v-64h64v64Z"></svg:path>`,
})
export class PhCheckerboardBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
