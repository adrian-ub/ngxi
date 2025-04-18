import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phExclamationMarkThinIcon],svg[ph-exclamation-mark-thin-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M140 200a12 12 0 1 1-12-12a12 12 0 0 1 12 12m-12-44a4 4 0 0 0 4-4V48a4 4 0 0 0-8 0v104a4 4 0 0 0 4 4"></svg:path>`,
})
export class PhExclamationMarkThinIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
