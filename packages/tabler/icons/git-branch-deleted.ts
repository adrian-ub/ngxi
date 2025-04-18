import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerGitBranchDeletedIcon],svg[tabler-git-branch-deleted-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5 18a2 2 0 1 0 4 0a2 2 0 1 0-4 0M5 6a2 2 0 1 0 4 0a2 2 0 1 0-4 0m2 2v8m2 2h6a2 2 0 0 0 2-2v-5"></svg:path><svg:path d="m14 14l3-3l3 3M15 4l4 4m-4 0l4-4"></svg:path></svg:g>`,
})
export class TablerGitBranchDeletedIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
