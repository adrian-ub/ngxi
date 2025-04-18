import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tablerGitCherryPickIcon],svg[tabler-git-cherry-pick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12a3 3 0 1 0 6 0a3 3 0 1 0-6 0m3-9v6m0 6v6m6-14h2.5l1.5 5l-1.5 5H13m4-5h3"></svg:path>`,
})
export class TablerGitCherryPickIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
