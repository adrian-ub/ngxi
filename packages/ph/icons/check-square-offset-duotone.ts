import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phCheckSquareOffsetDuotoneIcon],svg[ph-check-square-offset-duotone-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="currentColor"><svg:path d="M216 48v160a8 8 0 0 1-8 8H64l-24-24V48a8 8 0 0 1 8-8h160a8 8 0 0 1 8 8" opacity=".2"></svg:path><svg:path d="M224 48v160a16 16 0 0 1-16 16h-72a8 8 0 0 1 0-16h72V48H48v96a8 8 0 0 1-16 0V48a16 16 0 0 1 16-16h160a16 16 0 0 1 16 16m-98.34 106.34a8 8 0 0 0-11.32 0L64 204.69l-18.34-18.35a8 8 0 0 0-11.32 11.32l24 24a8 8 0 0 0 11.32 0l56-56a8 8 0 0 0 0-11.32"></svg:path></svg:g>`,
})
export class PhCheckSquareOffsetDuotoneIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
