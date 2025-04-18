import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phMathOperationsFillIcon],svg[ph-math-operations-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-61.66 45.66a8 8 0 0 1 11.32-11.32L168 76.69l10.34-10.35a8 8 0 0 1 11.32 11.32L179.31 88l10.35 10.34a8 8 0 0 1-11.32 11.32L168 99.31l-10.34 10.35a8 8 0 0 1-11.32-11.32L156.69 88ZM112 176H96v16a8 8 0 0 1-16 0v-16H64a8 8 0 0 1 0-16h16v-16a8 8 0 0 1 16 0v16h16a8 8 0 0 1 0 16m0-80H64a8 8 0 0 1 0-16h48a8 8 0 0 1 0 16m80 96h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 0 16m0-32h-48a8 8 0 0 1 0-16h48a8 8 0 0 1 0 16"></svg:path>`,
})
export class PhMathOperationsFillIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
