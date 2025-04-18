import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsBranchIcon],svg[proicons-branch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7 8.25a2.75 2.75 0 1 0 0-5.5a2.75 2.75 0 0 0 0 5.5m0 0v7.5m0-7.5c0 2.9 2.35 5.25 5.25 5.25h2M7 15.75a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5m7.25-2.25a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 0 0-5.5 0"></svg:path>`,
})
export class ProiconsBranchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
