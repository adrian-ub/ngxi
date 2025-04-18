import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsBranchFork2Icon],svg[proicons-branch-fork-2-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6.5 8.25a2.75 2.75 0 1 0 0-5.5a2.75 2.75 0 0 0 0 5.5m0 0V10a2 2 0 0 0 2 2h3m6-3.75a2.75 2.75 0 1 0 0-5.5a2.75 2.75 0 0 0 0 5.5m0 0V10a2 2 0 0 1-2 2h-4m0 0v3.75m0 0a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5"></svg:path>`,
})
export class ProiconsBranchFork2Icon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
