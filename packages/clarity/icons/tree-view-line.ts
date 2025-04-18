import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityTreeViewLineIcon],svg[clarity-tree-view-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M15 32h-4a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1m-3-2h2v-2h-2Z" class="clr-i-outline clr-i-outline-path-1"></svg:path><svg:path fill="currentColor" d="M15 16h-4a1 1 0 0 0-1 1v1.2H5.8V12H7a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1.2v17.8h6.36a.8.8 0 0 0 0-1.6H5.8v-8.4H10V21a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1M4 8h2v2H4Zm10 12h-2v-2h2Z" class="clr-i-outline clr-i-outline-path-2"></svg:path><svg:path fill="currentColor" d="M34 9a1 1 0 0 0-1-1H10v2h23a1 1 0 0 0 1-1" class="clr-i-outline clr-i-outline-path-3"></svg:path><svg:path fill="currentColor" d="M33 18H18v2h15a1 1 0 0 0 0-2" class="clr-i-outline clr-i-outline-path-4"></svg:path><svg:path fill="currentColor" d="M33 28H18v2h15a1 1 0 0 0 0-2" class="clr-i-outline clr-i-outline-path-5"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityTreeViewLineIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
