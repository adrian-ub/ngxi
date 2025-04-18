import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmGitBranchIcon],svg[charm-git-branch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:circle cx="4.5" cy="3.5" r="1.75"></svg:circle><svg:circle cx="11.5" cy="3.5" r="1.75"></svg:circle><svg:circle cx="4.5" cy="12.5" r="1.75"></svg:circle><svg:path d="M5.25 8.25c3 0 6 .5 6-2.5m-6.5 4.5v-4.5"></svg:path></svg:g>`,
})
export class CharmGitBranchIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
