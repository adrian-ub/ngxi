import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerGitMergeIcon],svg[tabler-git-merge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:path d="M5 18a2 2 0 1 0 4 0a2 2 0 1 0-4 0M5 6a2 2 0 1 0 4 0a2 2 0 1 0-4 0m10 6a2 2 0 1 0 4 0a2 2 0 1 0-4 0M7 8v8"></svg:path><svg:path d="M7 8a4 4 0 0 0 4 4h4"></svg:path></svg:g>`,
})
export class TablerGitMergeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
