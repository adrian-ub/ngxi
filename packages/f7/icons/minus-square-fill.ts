import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7MinusSquareFillIcon],svg[f7-minus-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.785 49.574h28.453c4.899 0 7.336-2.437 7.336-7.265V13.69c0-4.828-2.437-7.265-7.336-7.265H13.785c-4.875 0-7.36 2.414-7.36 7.265v28.62c0 4.851 2.485 7.265 7.36 7.265m4.336-19.523c-1.383 0-2.344-.727-2.344-2.04c0-1.335.914-2.085 2.344-2.085h19.805c1.43 0 2.32.75 2.32 2.086c0 1.312-.937 2.039-2.32 2.039Z"></svg:path>`,
})
export class F7MinusSquareFillIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
