import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCaretUpDownLightIcon],svg[ph-caret-up-down-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M180.24 171.76a6 6 0 0 1 0 8.48l-48 48a6 6 0 0 1-8.48 0l-48-48a6 6 0 0 1 8.48-8.48L128 215.51l43.76-43.75a6 6 0 0 1 8.48 0m-96-87.52L128 40.49l43.76 43.75a6 6 0 0 0 8.48-8.48l-48-48a6 6 0 0 0-8.48 0l-48 48a6 6 0 0 0 8.48 8.48"></svg:path>`,
})
export class PhCaretUpDownLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
