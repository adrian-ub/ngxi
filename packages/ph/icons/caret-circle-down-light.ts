import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCaretCircleDownLightIcon],svg[ph-caret-circle-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M128 26a102 102 0 1 0 102 102A102.12 102.12 0 0 0 128 26m0 192a90 90 0 1 1 90-90a90.1 90.1 0 0 1-90 90m44.24-110.24a6 6 0 0 1 0 8.48l-40 40a6 6 0 0 1-8.48 0l-40-40a6 6 0 0 1 8.48-8.48L128 143.51l35.76-35.75a6 6 0 0 1 8.48 0"></svg:path>`,
})
export class PhCaretCircleDownLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
