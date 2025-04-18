import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[fluentLaptopBriefcase24RegularIcon],svg[fluent-laptop-briefcase-24-regular-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M6.25 4A2.25 2.25 0 0 0 4 6.25v7.5A2.25 2.25 0 0 0 6.25 16H11v-1.5H6.25a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 .75-.75h11.5a.75.75 0 0 1 .75.75V9h.75q.392.001.75.104V6.25A2.25 2.25 0 0 0 17.75 4zm-3.5 13.5H11V19H2.75a.75.75 0 0 1 0-1.5M14 13h-.5a1.5 1.5 0 0 0-1.5 1.5v5a1.5 1.5 0 0 0 1.5 1.5h8a1.5 1.5 0 0 0 1.5-1.5v-5a1.5 1.5 0 0 0-1.5-1.5H21v-1.25A1.75 1.75 0 0 0 19.25 10h-3.5A1.75 1.75 0 0 0 14 11.75zm1.5-1.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25V13h-4z"></svg:path>`,
})
export class FluentLaptopBriefcase24RegularIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
