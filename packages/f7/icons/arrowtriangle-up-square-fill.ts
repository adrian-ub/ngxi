import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7ArrowtriangleUpSquareFillIcon],svg[f7-arrowtriangle-up-square-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.785 49.574h28.453c4.899 0 7.336-2.437 7.336-7.265V13.69c0-4.828-2.437-7.265-7.336-7.265H13.785c-4.875 0-7.36 2.414-7.36 7.265v28.62c0 4.851 2.485 7.265 7.36 7.265m22.852-14.578H20.535c-1.125 0-1.617-1.289-.984-2.32l7.804-13.149c.54-.96 1.922-1.007 2.485 0l7.781 13.149c.633 1.101.117 2.32-.984 2.32"></svg:path>`,
})
export class F7ArrowtriangleUpSquareFillIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
