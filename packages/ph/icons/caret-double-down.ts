import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCaretDoubleDownIcon],svg[ph-caret-double-down-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M213.66 130.34a8 8 0 0 1 0 11.32l-80 80a8 8 0 0 1-11.32 0l-80-80a8 8 0 0 1 11.32-11.32L128 204.69l74.34-74.35a8 8 0 0 1 11.32 0m-91.32 11.32a8 8 0 0 0 11.32 0l80-80a8 8 0 0 0-11.32-11.32L128 124.69L53.66 50.34a8 8 0 0 0-11.32 11.32Z"></svg:path>`,
})
export class PhCaretDoubleDownIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
