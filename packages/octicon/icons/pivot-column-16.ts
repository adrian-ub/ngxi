import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconPivotColumn16Icon],svg[octicon-pivot-column-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M0 1.75C0 .784.784 0 1.75 0h12.5C15.217 0 16 .784 16 1.75v5.5a.75.75 0 0 1-1.5 0V6.5h-8v8h.75a.75.75 0 0 1 0 1.5h-5.5A1.75 1.75 0 0 1 0 14.25ZM1.5 6.5v7.75c0 .138.112.25.25.25H5v-8Zm5-1.5h8V1.75a.25.25 0 0 0-.25-.25H6.5ZM5 5V1.5H1.75a.25.25 0 0 0-.25.25V5Z"></svg:path><svg:path fill="currentColor" d="m11.017 9.89l-2.882 2.677a.25.25 0 0 0 0 .366l2.882 2.677a.25.25 0 0 0 .421-.183V13.5H12.5A3.5 3.5 0 0 0 16 10a.75.75 0 0 0-1.5 0a2 2 0 0 1-2 2h-1.062v-1.927a.25.25 0 0 0-.421-.183"></svg:path>`,
})
export class OcticonPivotColumn16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
