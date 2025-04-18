import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixReportTextIcon],svg[ix-report-text-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m384 85.333l85.334 85.333v256H42.667V85.333zM373.334 128h-288v256h341.333V181.333zM192 320v32h-64v-32zm192 0v32H234.667v-32zm-192-64v32h-64v-32zm192 0v32H234.667v-32zm-192-64v32h-64v-32zm192 0v32H234.667v-32z"></svg:path>`,
})
export class IxReportTextIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
