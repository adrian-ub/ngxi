import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riRadioLineIcon],svg[ri-radio-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 10V8h-2v2H5V6h14v4zM6 3V1h2v2h13.008c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3zM4 5v14h16V5zm4 13a3 3 0 1 1 0-6a3 3 0 0 1 0 6"></svg:path>`,
})
export class RiRadioLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
