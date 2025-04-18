import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[proiconsGitlabIcon],svg[proicons-gitlab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21.063 12.052a3.19 3.19 0 0 1-1.058 3.606l-6.706 5.164a2.13 2.13 0 0 1-2.598 0l-6.706-5.164a3.19 3.19 0 0 1-1.058-3.606L5.915 3.73l2.37 6.621c.15.423.552.706 1.001.706h5.428c.45 0 .85-.283 1.002-.706l2.37-6.621z"></svg:path>`,
})
export class ProiconsGitlabIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
