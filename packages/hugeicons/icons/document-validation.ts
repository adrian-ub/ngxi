import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsDocumentValidationIcon],svg[hugeicons-document-validation-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M14.98 7.016s.5.5 1 1.5c0 0 1.589-2.5 3-3M9.995 2.021c-2.499-.105-4.429.182-4.429.182c-1.219.088-3.555.77-3.555 4.762c0 3.956-.025 8.834 0 10.779c0 1.188.736 3.96 3.282 4.108c3.095.18 8.67.219 11.228 0c.684-.039 2.964-.576 3.252-3.056c.299-2.57.24-4.355.24-4.78"></svg:path><svg:path d="M22 7.016c0 2.761-2.24 5-5.005 5a5 5 0 0 1-5.005-5c0-2.762 2.241-5 5.005-5a5 5 0 0 1 5.005 5m-15.02 6h4m-4 4h8"></svg:path></svg:g>`,
})
export class HugeiconsDocumentValidationIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
