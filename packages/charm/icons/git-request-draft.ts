import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmGitRequestDraftIcon],svg[charm-git-request-draft-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:circle cx="12.5" cy="12.5" r="1.75"></svg:circle><svg:circle cx="3.5" cy="12.5" r="1.75"></svg:circle><svg:circle cx="3.5" cy="3.5" r="1.75"></svg:circle><svg:path d="M7.75 2.75h.5m2.5 0h.5m1.5 2.5v-.5m0 3v.5m-9-2.5v4.5"></svg:path></svg:g>`,
})
export class CharmGitRequestDraftIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
