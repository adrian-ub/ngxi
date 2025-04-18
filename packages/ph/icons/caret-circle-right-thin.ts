import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleRightThinIcon],svg[ph-caret-circle-right-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28m0 192a92 92 0 1 1 92-92a92.1 92.1 0 0 1-92 92m26.83-94.83a4 4 0 0 1 0 5.66l-40 40a4 4 0 0 1-5.66-5.66L146.34 128l-37.17-37.17a4 4 0 0 1 5.66-5.66Z"></svg:path>`,
})
export class PhCaretCircleRightThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
