import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[pajamasMobileIssueCloseIcon],svg[pajamas-mobile-issue-close-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" fill-rule="evenodd" d="M12.78 4.62a.75.75 0 0 1 0 1.06l-6.097 6.097a.75.75 0 0 1-1.069-.009L3.211 9.284a.75.75 0 1 1 1.078-1.042l1.873 1.935L11.72 4.62a.75.75 0 0 1 1.06 0" clip-rule="evenodd"></svg:path>`,
})
export class PajamasMobileIssueCloseIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
