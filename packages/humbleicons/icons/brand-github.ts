import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[humbleiconsBrandGithubIcon],svg[humbleicons-brand-github-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.5 21c2-2-.5-6 3.5-6m0 0c-3 0-7-1-7-5c0-1.445.116-2.89.963-4V3L9 4.283C9.821 4.101 10.81 4 12 4s2.178.1 3 .283L18 3v2.952c.88 1.116 1 2.582 1 4.048c0 4-4 5-7 5m0 0c4 0 1.5 4 3.5 6M3 15c3 0 1.5 4 6 3"></svg:path>`,
})
export class HumbleiconsBrandGithubIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
