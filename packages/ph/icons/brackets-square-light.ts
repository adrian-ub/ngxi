import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phBracketsSquareLightIcon],svg[ph-brackets-square-light-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M46 46v164h34a6 6 0 0 1 0 12H40a6 6 0 0 1-6-6V40a6 6 0 0 1 6-6h40a6 6 0 0 1 0 12Zm170-12h-40a6 6 0 0 0 0 12h34v164h-34a6 6 0 0 0 0 12h40a6 6 0 0 0 6-6V40a6 6 0 0 0-6-6"></svg:path>`,
})
export class PhBracketsSquareLightIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
