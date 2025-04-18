import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixReportLinechartIcon],svg[ix-report-linechart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m384 85.333l85.334 85.333v256H42.667V85.333zM373.334 128h-288v256h341.333V181.333zm-224 42.666v132.258l61.057-76.321l65.215 32.597l47.925-43.129l14.272 15.857l-58.737 52.863l-62.81-31.394l-53.265 66.602h221.01v21.334H128V170.666z"></svg:path>`,
})
export class IxReportLinechartIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
