import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[ixAnalysisIcon],svg[ix-analysis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M64 64h384v384H64zm42.667 277.332v64.001h298.666v-64.001h-69.089l-27.723-90.1l-48.569 145.707l-57.285-114.571l-29.482 58.964zm298.666-42.666h-37.577l-57.61-187.234l-58.098 174.294l-49.381-98.763l-55.852 111.703h-40.148V106.667h298.666z" clip-rule="evenodd"></svg:path>`,
})
export class IxAnalysisIcon {
  readonly viewBox = input("0 0 512 512")
  readonly width = input("1em")
  readonly height = input("1em")
}
