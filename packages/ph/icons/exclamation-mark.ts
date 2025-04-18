import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phExclamationMarkIcon],svg[ph-exclamation-mark-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M144 200a16 16 0 1 1-16-16a16 16 0 0 1 16 16m-16-40a8 8 0 0 0 8-8V48a8 8 0 0 0-16 0v104a8 8 0 0 0 8 8"></svg:path>`,
})
export class PhExclamationMarkIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
