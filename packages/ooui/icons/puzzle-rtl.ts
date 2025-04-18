import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[oouiPuzzleRtlIcon],svg[ooui-puzzle-rtl-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:circle cx="3" cy="10" r="3" fill="currentColor"></svg:circle><svg:path fill="currentColor" d="M9.42 3A2.94 2.94 0 0 0 9 4.5a3 3 0 0 0 6 0a2.94 2.94 0 0 0-.42-1.5H19v12a2 2 0 0 1-2 2H5V3z"></svg:path>`,
})
export class OouiPuzzleRtlIcon {
  readonly viewBox = input("0 0 20 20")
  readonly width = input("1em")
  readonly height = input("1em")
}
