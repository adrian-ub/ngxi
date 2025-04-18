import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsAccessibilityIcon],svg[proicons-accessibility-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M6.867 5.543a1.58 1.58 0 0 0-2.155.576a1.57 1.57 0 0 0 .577 2.15l2.63 1.515a1 1 0 0 1 .5.866v3.536a1 1 0 0 1-.134.5l-2.408 4.162a1.57 1.57 0 0 0 .577 2.15a1.58 1.58 0 0 0 2.156-.576l3.258-5.629h.258l3.258 5.629a1.58 1.58 0 0 0 2.156.576a1.57 1.57 0 0 0 .577-2.15l-2.402-4.15a1 1 0 0 1-.135-.502V10.65a1 1 0 0 1 .501-.866l2.63-1.514a1.57 1.57 0 0 0 .577-2.15a1.58 1.58 0 0 0-2.155-.577l-3.636 2.094a3 3 0 0 1-2.994 0z"></svg:path><svg:path d="M14.623 5.414a2.623 2.623 0 1 1-5.246 0a2.623 2.623 0 0 1 5.246 0"></svg:path></svg:g>`,
})
export class ProiconsAccessibilityIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
