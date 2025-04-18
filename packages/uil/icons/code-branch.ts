import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[uilCodeBranchIcon],svg[uil-code-branch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17 6.06a3 3 0 0 0-1.15 5.77A2 2 0 0 1 14 13.06h-4a3.9 3.9 0 0 0-2 .56V7.88a3 3 0 1 0-2 0v8.36a3 3 0 1 0 2.16.05A2 2 0 0 1 10 15.06h4a4 4 0 0 0 3.91-3.16A3 3 0 0 0 17 6.06m-10-2a1 1 0 1 1-1 1a1 1 0 0 1 1-1m0 16a1 1 0 1 1 1-1a1 1 0 0 1-1 1m10-10a1 1 0 1 1 1-1a1 1 0 0 1-1 1"></svg:path>`,
})
export class UilCodeBranchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
