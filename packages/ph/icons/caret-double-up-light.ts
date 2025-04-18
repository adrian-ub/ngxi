import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCaretDoubleUpLightIcon],svg[ph-caret-double-up-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M212.24 195.76a6 6 0 1 1-8.48 8.48L128 128.49l-75.76 75.75a6 6 0 0 1-8.48-8.48l80-80a6 6 0 0 1 8.48 0Zm-160-71.52L128 48.49l75.76 75.75a6 6 0 0 0 8.48-8.48l-80-80a6 6 0 0 0-8.48 0l-80 80a6 6 0 0 0 8.48 8.48"></svg:path>`,
})
export class PhCaretDoubleUpLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
