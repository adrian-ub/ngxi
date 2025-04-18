import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleDoubleRightDuotoneIcon],svg[ph-caret-circle-double-right-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M195.88 195.88a96 96 0 1 1 0-135.76a96 96 0 0 1 0 135.76" opacity=".2"></svg:path><svg:path d="M201.54 54.46A104 104 0 0 0 54.46 201.54A104 104 0 0 0 201.54 54.46m-11.31 135.77a88 88 0 1 1 0-124.46a88.11 88.11 0 0 1 0 124.46m-64.57-67.89a8 8 0 0 1 0 11.32l-32 32a8 8 0 0 1-11.32-11.32L108.69 128l-26.35-26.34a8 8 0 0 1 11.32-11.32Zm56 0a8 8 0 0 1 0 11.32l-32 32a8 8 0 0 1-11.32-11.32L164.69 128l-26.35-26.34a8 8 0 0 1 11.32-11.32Z"></svg:path></svg:g>`,
})
export class PhCaretCircleDoubleRightDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
