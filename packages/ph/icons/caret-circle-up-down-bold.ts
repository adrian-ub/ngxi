import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleUpDownBoldIcon],svg[ph-caret-circle-up-down-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 20a108 108 0 1 0 108 108A108.12 108.12 0 0 0 128 20m0 192a84 84 0 1 1 84-84a84.09 84.09 0 0 1-84 84m40.49-116.49a12 12 0 0 1-17 17L128 89l-23.51 23.52a12 12 0 0 1-17-17l32-32a12 12 0 0 1 17 0Zm0 48a12 12 0 0 1 0 17l-32 32a12 12 0 0 1-17 0l-32-32a12 12 0 0 1 17-17L128 167l23.51-23.52a12 12 0 0 1 16.98.03"></svg:path>`,
})
export class PhCaretCircleUpDownBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
