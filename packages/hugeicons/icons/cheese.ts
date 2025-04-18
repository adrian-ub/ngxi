import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsCheeseIcon],svg[hugeicons-cheese-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M22 10v3.711c0 2.683 0 4.024-.776 4.915c-.693.796-1.792.988-3.851 1.21c-.249.027-.473-.139-.58-.364c-.328-.685-1.008-1.156-1.793-1.156c-.929 0-1.71.659-1.935 1.55c-.06.24-.244.444-.49.47l-3.978.413c-3.082.32-4.623.48-5.61-.448S2 17.763 2 14.543V11.04"></svg:path><svg:path d="m6.93 11.918l11.539-.484c2.741-.115 4.4-.919 3.054-3.775c-.935-1.984-2.617-3.573-4.7-4.433c-1.349-.557-2.41.011-3.527.67c-.381.225-.217.662-.217 1.014a2.02 2.02 0 0 1-2.017 2.026c-.49 0-.94-.176-1.29-.468c-.952-.796-8.1 3.854-7.76 4.925c.228.72 1.791.655 4.918.524m9.078-3.707h-.01m1.01 7h-.01M7 16.21a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0"></svg:path></svg:g>`,
})
export class HugeiconsCheeseIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
