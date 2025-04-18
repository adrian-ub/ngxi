import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixReportBarchartIcon],svg[ix-report-barchart-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m384 85.333l85.334 85.333v256H42.667V85.333zM373.334 128h-288v256h341.333V181.333zm-224 42.666L149.333 320H384v21.334H128V170.666zm64 64v64h-42.667v-64zm64-42.666v106.666h-42.667V192zm64 64v42.666h-42.667V256z"></svg:path>`,
})
export class IxReportBarchartIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
