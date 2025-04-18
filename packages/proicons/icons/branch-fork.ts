import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsBranchForkIcon],svg[proicons-branch-fork-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 8.25a2.75 2.75 0 1 0 0-5.5a2.75 2.75 0 0 0 0 5.5m0 0V12m0 3.75a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5m0 0V12m10-3.75a2.75 2.75 0 1 0 0-5.5a2.75 2.75 0 0 0 0 5.5m0 0V9a3 3 0 0 1-3 3H7"></svg:path>`,
})
export class ProiconsBranchForkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
