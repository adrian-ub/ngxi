import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[octiconRepoLocked16Icon],svg[octicon-repo-locked-16-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M1 2.5A2.5 2.5 0 0 1 3.5 0h8.75a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0V1.5h-8a1 1 0 0 0-1 1v6.708A2.5 2.5 0 0 1 3.5 9h2.75a.75.75 0 0 1 0 1.5H3.5a1 1 0 1 0 0 2h2.75a.75.75 0 0 1 0 1.5H3.5A2.5 2.5 0 0 1 1 11.5z"></svg:path><svg:path fill="currentColor" d="M9 10.168V9a3 3 0 1 1 6 0v1.168c.591.281 1 .884 1 1.582v2.5A1.75 1.75 0 0 1 14.25 16h-4.5A1.75 1.75 0 0 1 8 14.25v-2.5c0-.698.409-1.3 1-1.582M13.5 10V9a1.5 1.5 0 0 0-3 0v1Z"></svg:path>`,
})
export class OcticonRepoLocked16Icon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
