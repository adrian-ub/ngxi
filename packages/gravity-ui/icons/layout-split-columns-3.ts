import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[gravityUiLayoutSplitColumns3Icon],svg[gravity-ui-layout-split-columns-3-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none"><svg:g clip-path="url(#gravityUiLayoutSplitColumns30)"><svg:path fill="currentColor" fill-rule="evenodd" d="M2.5 12.5H3a.5.5 0 0 0 .5-.5V4a.5.5 0 0 0-.5-.5h-.5A.5.5 0 0 0 2 4v8a.5.5 0 0 0 .5.5M3 14h-.5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2H3a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2m4.75-1.5h.5a.5.5 0 0 0 .5-.5V4a.5.5 0 0 0-.5-.5h-.5a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5m.5 1.5h-.5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h.5a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2m5.25-1.5H13a.5.5 0 0 1-.5-.5V4a.5.5 0 0 1 .5-.5h.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-.5.5M13 14h.5a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H13a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2" clip-rule="evenodd"></svg:path></svg:g><svg:defs><svg:clippath id="gravityUiLayoutSplitColumns30"><svg:path fill="currentColor" d="M0 0h16v16H0z"></svg:path></svg:clippath></svg:defs></svg:g>`,
})
export class GravityUiLayoutSplitColumns3Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
