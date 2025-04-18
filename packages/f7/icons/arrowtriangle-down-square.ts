import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[f7ArrowtriangleDownSquareIcon],svg[f7-arrowtriangle-down-square-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13.785 49.574h28.453c4.899 0 7.336-2.437 7.336-7.265V13.69c0-4.828-2.437-7.265-7.336-7.265H13.785c-4.875 0-7.36 2.414-7.36 7.265v28.62c0 4.851 2.485 7.265 7.36 7.265m.07-3.773c-2.343 0-3.656-1.242-3.656-3.68V13.88c0-2.438 1.313-3.68 3.656-3.68h28.313c2.32 0 3.633 1.242 3.633 3.68v28.24c0 2.438-1.313 3.68-3.633 3.68Zm21.82-24.797h-15.35c-1.079 0-1.5 1.242-.938 2.203l7.43 12.54c.538.89 1.827.913 2.366 0l7.43-12.54c.61-1.031.117-2.203-.937-2.203"></svg:path>`,
})
export class F7ArrowtriangleDownSquareIcon {
  readonly viewBox = input("0 0 56 56")
  readonly width = input("1em")
  readonly height = input("1em")
}
