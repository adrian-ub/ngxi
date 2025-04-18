import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmGitRequestCrossIcon],svg[charm-git-request-cross-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:circle cx="12.5" cy="12.5" r="1.75"></svg:circle><svg:circle cx="3.5" cy="12.5" r="1.75"></svg:circle><svg:circle cx="3.5" cy="3.5" r="1.75"></svg:circle><svg:path d="M12.25 7.25v3m-8.5-4.5v4.5m10.5-8.5l-3.5 3.5m0-3.5l3.5 3.5"></svg:path></svg:g>`,
})
export class CharmGitRequestCrossIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
