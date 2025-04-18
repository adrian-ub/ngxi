import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phExclamationMarkBoldIcon],svg[ph-exclamation-mark-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M148 200a20 20 0 1 1-20-20a20 20 0 0 1 20 20m-20-40a12 12 0 0 0 12-12V48a12 12 0 0 0-24 0v100a12 12 0 0 0 12 12"></svg:path>`,
})
export class PhExclamationMarkBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
