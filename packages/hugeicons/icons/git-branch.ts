import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsGitBranchIcon],svg[hugeicons-git-branch-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" color="currentColor"><svg:path d="M7 19h6c2.828 0 4.243 0 5.121-.879C19 17.243 19 15.828 19 13v-3m0 0c.7 0 2.009 1.994 2.5 2.5M19 10c-.7 0-2.009 1.994-2.5 2.5M5 7v10"></svg:path><svg:circle cx="5" cy="5" r="2"></svg:circle><svg:circle cx="19" cy="5" r="2"></svg:circle><svg:circle cx="5" cy="19" r="2"></svg:circle></svg:g>`,
})
export class HugeiconsGitBranchIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
