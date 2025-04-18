import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideGitlabIcon],svg[lucide-gitlab-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m22 13.29l-3.33-10a.4.4 0 0 0-.14-.18a.38.38 0 0 0-.22-.11a.4.4 0 0 0-.23.07a.4.4 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.4.4 0 0 0-.1-.18a.38.38 0 0 0-.26-.08a.4.4 0 0 0-.23.07a.4.4 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83"></svg:path>`,
})
export class LucideGitlabIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
