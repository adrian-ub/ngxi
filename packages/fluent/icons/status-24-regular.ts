import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentStatus24RegularIcon],svg[fluent-status-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M17.086 4.086a2 2 0 1 1 2.828 2.828l-6.06 6.06a1.25 1.25 0 0 1-.57.326l-3.488.904l.904-3.489a1.25 1.25 0 0 1 .326-.57zm3.889-1.061a3.5 3.5 0 0 0-4.95 0l-6.06 6.06a2.75 2.75 0 0 0-.717 1.254l-1.224 4.723a.75.75 0 0 0 .914.914l4.723-1.224a2.75 2.75 0 0 0 1.254-.718l6.06-6.06a3.5 3.5 0 0 0 0-4.949M12 3c.806 0 1.588.106 2.331.305l-1.27 1.27a7.5 7.5 0 1 0 6.364 6.364l1.27-1.27A9 9 0 1 1 12 3"></svg:path>`,
})
export class FluentStatus24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
