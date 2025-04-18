import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[streamlineShrinkHorizontal1Icon],svg[streamline-shrink-horizontal-1-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M11 4.5L8.5 7L11 9.5m-8-5L5.5 7L3 9.5M.5.5v13m13-13v13"></svg:path>`,
})
export class StreamlineShrinkHorizontal1Icon {
  readonly viewBox = input("0 0 14 14")
  readonly width = input("1em")
  readonly height = input("1em")
}
