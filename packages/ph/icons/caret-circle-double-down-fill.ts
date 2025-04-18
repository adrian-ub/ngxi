import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleDoubleDownFillIcon],svg[ph-caret-circle-double-down-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M201.57 54.43A104.15 104.15 0 1 0 232 128a104.17 104.17 0 0 0-30.43-73.57m-35.9 95.24l-32 32a8 8 0 0 1-11.32 0l-32-32a8 8 0 1 1 11.32-11.32L128 164.71l26.35-26.36a8 8 0 1 1 11.32 11.32m0-56l-32 32a8 8 0 0 1-11.32 0l-32-32a8 8 0 1 1 11.32-11.32L128 108.68l26.35-26.36a8 8 0 1 1 11.32 11.32Z"></svg:path>`,
})
export class PhCaretCircleDoubleDownFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
