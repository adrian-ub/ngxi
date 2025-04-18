import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiLayoutSplitSideContentRightIcon],svg[gravity-ui-layout-split-side-content-right-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiLayoutSplitSideContentRight0)"><svg:path fill="currentColor" fill-rule="evenodd" d="M3 12.5h4.5a1 1 0 0 0 1-1v-7a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1M7.5 14H3a2.5 2.5 0 0 1-2.5-2.5v-7A2.5 2.5 0 0 1 3 2h4.5A2.5 2.5 0 0 1 10 4.5v7A2.5 2.5 0 0 1 7.5 14m5.5-1.5h.5a.5.5 0 0 0 .5-.5V4a.5.5 0 0 0-.5-.5H13a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5m.5 1.5H13a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h.5a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiLayoutSplitSideContentRight0"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiLayoutSplitSideContentRightIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
