import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phExclamationMarkFillIcon],svg[ph-exclamation-mark-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M200 24H56a16 16 0 0 0-16 16v176a16 16 0 0 0 16 16h144a16 16 0 0 0 16-16V40a16 16 0 0 0-16-16m-72 136a12 12 0 1 1-12 12a12 12 0 0 1 12-12m-8-24V80a8 8 0 0 1 16 0v56a8 8 0 0 1-16 0"></svg:path>`,
})
export class PhExclamationMarkFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
