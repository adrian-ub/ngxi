import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7DotSquareFillIcon],svg[f7-dot-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.785 49.574h28.453c4.899 0 7.336-2.437 7.336-7.265V13.69c0-4.828-2.437-7.265-7.336-7.265H13.785c-4.875 0-7.36 2.414-7.36 7.265v28.62c0 4.851 2.485 7.265 7.36 7.265m14.25-14.086c-4.172 0-7.57-3.351-7.57-7.547c0-4.148 3.398-7.523 7.57-7.523c4.149 0 7.547 3.375 7.547 7.523a7.54 7.54 0 0 1-7.547 7.547"></svg:path>`,
})
export class F7DotSquareFillIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
