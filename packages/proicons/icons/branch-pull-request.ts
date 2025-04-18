import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsBranchPullRequestIcon],svg[proicons-branch-pull-request-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M8.25 5.5a2.75 2.75 0 1 1-5.5 0a2.75 2.75 0 0 1 5.5 0m13 13a2.75 2.75 0 1 1-5.5 0a2.75 2.75 0 0 1 5.5 0m-13 0a2.75 2.75 0 1 1-5.5 0a2.75 2.75 0 0 1 5.5 0M5.5 8.25v7.5"></svg:path><svg:path d="M18.5 15.75V8.5a3 3 0 0 0-3-3h-4.336M13.25 8l-1.793-1.793a1 1 0 0 1-.293-.707M13.25 3l-1.793 1.793a1 1 0 0 0-.293.707"></svg:path></svg:g>`,
})
export class ProiconsBranchPullRequestIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
