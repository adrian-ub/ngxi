import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[clarityTreeViewSolidIcon],svg[clarity-tree-view-solid-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:rect width="6" height="6" x="10" y="26" fill="currentColor" class="clr-i-solid clr-i-solid-path-1" rx="1" ry="1"></svg:rect><svg:path fill="currentColor" d="M15 16h-4a1 1 0 0 0-1 1v1.2H5.8V12H7a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1.2v17.8H11a.8.8 0 1 0 0-1.6H5.8v-8.4H10V21a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1" class="clr-i-solid clr-i-solid-path-2"></svg:path><svg:path fill="currentColor" d="M33 8H10v2h23a1 1 0 0 0 0-2" class="clr-i-solid clr-i-solid-path-3"></svg:path><svg:path fill="currentColor" d="M33 18H18v2h15a1 1 0 0 0 0-2" class="clr-i-solid clr-i-solid-path-4"></svg:path><svg:path fill="currentColor" d="M33 28H18v2h15a1 1 0 0 0 0-2" class="clr-i-solid clr-i-solid-path-5"></svg:path><svg:path fill="none" d="M0 0h36v36H0z"></svg:path>`,
})
export class ClarityTreeViewSolidIcon {
  readonly viewBox = input("0 0 36 36")
  readonly width = input("1em")
  readonly height = input("1em")
}
