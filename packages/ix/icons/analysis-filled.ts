import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixAnalysisFilledIcon],svg[ix-analysis-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M448 64H64v234.666h82.815l55.852-111.703l49.381 98.763l58.098-174.294l57.61 187.234H448zm0 277.332H336.244l-27.723-90.1l-48.569 145.707l-57.285-114.571l-29.482 58.964H64V448h384z" clip-rule="evenodd"></svg:path>`,
})
export class IxAnalysisFilledIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
