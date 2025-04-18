import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCaretDoubleLeftLightIcon],svg[ph-caret-double-left-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M204.24 203.76a6 6 0 1 1-8.48 8.48l-80-80a6 6 0 0 1 0-8.48l80-80a6 6 0 0 1 8.48 8.48L128.49 128ZM48.49 128l75.75-75.76a6 6 0 0 0-8.48-8.48l-80 80a6 6 0 0 0 0 8.48l80 80a6 6 0 1 0 8.48-8.48Z"></svg:path>`,
})
export class PhCaretDoubleLeftLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
