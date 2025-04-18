import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiLayoutSplitSideContentLeftIcon],svg[gravity-ui-layout-split-side-content-left-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiLayoutSplitSideContentLeft0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M3 12.5h-.5A.5.5 0 0 1 2 12V4a.5.5 0 0 1 .5-.5H3a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5M2.5 14H3a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-.5a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2M13 12.5H8.5a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1H13a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1M8.5 14H13a2.5 2.5 0 0 0 2.5-2.5v-7A2.5 2.5 0 0 0 13 2H8.5A2.5 2.5 0 0 0 6 4.5v7A2.5 2.5 0 0 0 8.5 14" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiLayoutSplitSideContentLeft0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiLayoutSplitSideContentLeftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
