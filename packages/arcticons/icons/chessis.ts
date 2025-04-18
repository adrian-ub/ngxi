import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[arcticonsChessisIcon],svg[arcticons-chessis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M10.036 42.5h27.928c-.34-6.049-.828-12.07-8.738-16.759c3.286-3.116 3.56-8.73-.958-11.8c1.267-2.78.03-8.272-4.239-8.438c-4.269-.165-6.296 5.634-4.558 8.438c-4.311 3.092-4.7 7.867-1.335 11.8c-8.732 5.587-7.554 11.173-8.1 16.759"></svg:path>`,
})
export class ArcticonsChessisIcon {
  readonly viewBox = input("0 0 48 48")
  readonly width = input("1em")
  readonly height = input("1em")
}
