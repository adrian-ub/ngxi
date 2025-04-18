import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[mdiFormatAnnotationMinusIcon],svg[mdi-format-annotation-minus-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M10.5 7h-2L3 21h2.2l1.1-3h6.2l1.1 3H16zm-3.4 9l2.4-6.3l2.4 6.3zM22 7h-8V5h8z"></svg:path>`,
})
export class MdiFormatAnnotationMinusIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
