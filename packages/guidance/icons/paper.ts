import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[guidancePaperIcon],svg[guidance-paper-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" d="M13.5 1.5v7h7m-16-7v21h16V8l-.282-.126a12 12 0 0 1-6.092-6.092L14 1.5z"></svg:path>`,
})
export class GuidancePaperIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
