import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmGitCherryPickIcon],svg[charm-git-cherry-pick-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:circle cx="5" cy="8" r="2.25"></svg:circle><svg:path d="M5 10.75v3.5m0-12.5v3.5M11.75 8h1.5m-4.5-3.25h1.5l1 3.25l-1 3.25h-1.5"></svg:path></svg:g>`,
})
export class CharmGitCherryPickIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
