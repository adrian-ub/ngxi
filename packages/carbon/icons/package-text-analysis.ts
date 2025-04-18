import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[carbonPackageTextAnalysisIcon],svg[carbon-package-text-analysis-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M13 22h6v2h-6z"></svg:path><svg:path fill="currentColor" d="M2 18v2h2v8c0 1.103.897 2 2 2h20c1.103 0 2-.897 2-2v-8h2v-2zm24 10H6v-8h20zm3-12h-5c-1.102 0-2-.897-2-2V8c0-1.103.898-2 2-2h5v2h-5v6h5zM18 6h-4V2h-2v14h6c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2m-4 8V8h4v6zM8 6H3v2h5v2H4a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h6V8c0-1.103-.897-2-2-2m0 8H4v-2h4z"></svg:path>`,
})
export class CarbonPackageTextAnalysisIcon {
  readonly viewBox = input("0 0 32 32")
  readonly width = input("1em")
  readonly height = input("1em")
}
