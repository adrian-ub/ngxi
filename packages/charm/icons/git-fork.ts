import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmGitForkIcon],svg[charm-git-fork-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:circle cx="8" cy="12.5" r="1.75"></svg:circle><svg:circle cx="4.5" cy="3.5" r="1.75"></svg:circle><svg:circle cx="11.5" cy="3.5" r="1.75"></svg:circle><svg:path d="M8 8.75v1.5m-3.25-4.5c0 3.5 6.5 3.5 6.5 0"></svg:path></svg:g>`,
})
export class CharmGitForkIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
