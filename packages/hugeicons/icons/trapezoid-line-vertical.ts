import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsTrapezoidLineVerticalIcon],svg[hugeicons-trapezoid-line-vertical-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 5c2.665 0 3.998 0 4.945.627q.155.103.296.22c.86.714 1.048 1.844 1.425 4.103l.367 2.202c.531 3.186.797 4.78-.25 5.814S15.854 19 12.095 19h-.192c-3.76 0-5.639 0-6.687-1.034c-1.047-1.035-.781-2.628-.25-5.815l.368-2.201c.376-2.26.566-3.39 1.425-4.103q.141-.117.296-.22C8.002 5 9.335 5 12 5m0 17V2" color="currentColor"></svg:path>`,
})
export class HugeiconsTrapezoidLineVerticalIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
