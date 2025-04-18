import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[riLinkedinBoxLineIcon],svg[ri-linkedin-box-line-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M4.001 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1h-16a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m1 2v14h14V5zm2.5 4a1.5 1.5 0 1 1 0-3a1.5 1.5 0 0 1 0 3m-1 1h2v7.5h-2zm5.5.43c.584-.565 1.266-.93 2-.93c2.071 0 3.5 1.679 3.5 3.75v4.25h-2v-4.25a1.75 1.75 0 1 0-3.5 0v4.25h-2V10h2z"></svg:path>`,
})
export class RiLinkedinBoxLineIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
