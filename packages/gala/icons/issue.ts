import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[galaIssueIcon],svg[gala-issue-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"><svg:circle cx="128" cy="128" r="40"></svg:circle><svg:circle cx="128" cy="128" r="112"></svg:circle></svg:g>`,
})
export class GalaIssueIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
