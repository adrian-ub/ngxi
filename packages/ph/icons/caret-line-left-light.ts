import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCaretLineLeftLightIcon],svg[ph-caret-line-left-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M196.24 203.76a6 6 0 1 1-8.48 8.48l-80-80a6 6 0 0 1 0-8.48l80-80a6 6 0 0 1 8.48 8.48L120.49 128ZM72 42a6 6 0 0 0-6 6v160a6 6 0 0 0 12 0V48a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhCaretLineLeftLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
