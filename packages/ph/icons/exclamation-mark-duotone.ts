import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phExclamationMarkDuotoneIcon],svg[ph-exclamation-mark-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 40v176a16 16 0 0 1-16 16H56a16 16 0 0 1-16-16V40a16 16 0 0 1 16-16h144a16 16 0 0 1 16 16" opacity=".2"></svg:path><svg:path d="M144 200a16 16 0 1 1-16-16a16 16 0 0 1 16 16m-16-40a8 8 0 0 0 8-8V48a8 8 0 0 0-16 0v104a8 8 0 0 0 8 8"></svg:path></svg:g>`,
})
export class PhExclamationMarkDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
