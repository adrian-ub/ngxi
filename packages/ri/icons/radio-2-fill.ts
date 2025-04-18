import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riRadio2FillIcon],svg[ri-radio-2-fill-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6 3V1h2v2h13.008c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3zm3 12a3 3 0 1 0 0-6a3 3 0 0 0 0 6m5-6v2h4V9zm0 4v2h4v-2z"></svg:path>`,
})
export class RiRadio2FillIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
