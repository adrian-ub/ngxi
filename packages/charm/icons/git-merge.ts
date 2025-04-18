import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmGitMergeIcon],svg[charm-git-merge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:circle cx="4.5" cy="3.5" r="1.75"></svg:circle><svg:circle cx="4.5" cy="12.5" r="1.75"></svg:circle><svg:circle cx="12.5" cy="8.5" r="1.75"></svg:circle><svg:path d="M4.75 10.25v-4.5c1 2 2 3 5.5 3"></svg:path></svg:g>`,
})
export class CharmGitMergeIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
