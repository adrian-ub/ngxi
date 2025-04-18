import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7SquareSplit2x1FillIcon],svg[f7-square-split-2x1-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M29.84 49.574h12.398c4.899 0 7.336-2.437 7.336-7.265V13.69c0-4.828-2.437-7.265-7.336-7.265H29.84Zm-16.055 0h12.398V6.426H13.785c-4.875 0-7.36 2.414-7.36 7.265V42.31c0 4.851 2.485 7.265 7.36 7.265"></svg:path>`,
})
export class F7SquareSplit2x1FillIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
