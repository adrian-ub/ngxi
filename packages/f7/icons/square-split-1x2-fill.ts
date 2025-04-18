import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7SquareSplit1x2FillIcon],svg[f7-square-split-1x2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M42.238 6.426H13.785c-4.875 0-7.36 2.414-7.36 7.265v12.422h43.15V13.691c0-4.828-2.438-7.265-7.337-7.265M13.785 49.574h28.453c4.899 0 7.336-2.437 7.336-7.265V29.816H6.426V42.31c0 4.851 2.484 7.265 7.36 7.265"></svg:path>`,
})
export class F7SquareSplit1x2FillIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
