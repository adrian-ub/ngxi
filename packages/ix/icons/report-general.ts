import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixReportGeneralIcon],svg[ix-report-general-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="m384 85.336l85.333 85.333v256H42.667V85.336zm-10.667 42.667h-288v256h341.334V181.336zM256 277.336h-42.667v64H256zm21.333-42.667H320v106.667h-42.667zm106.667 64h-42.667v42.667H384zm-234.667 0H192v42.667h-42.667zm106.667-128H128v42.667h128z" clip-rule="evenodd"></svg:path>`,
})
export class IxReportGeneralIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
