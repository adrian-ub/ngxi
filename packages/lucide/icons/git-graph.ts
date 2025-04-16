import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideGitGraphIcon],svg[lucide-git-graph-icon]',
  host: {
    'role': 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="5" cy="6" r="3"></svg:circle><svg:path d="M5 9v6"></svg:path><svg:circle cx="5" cy="18" r="3"></svg:circle><svg:path d="M12 3v18"></svg:path><svg:circle cx="19" cy="6" r="3"></svg:circle><svg:path d="M16 15.7A9 9 0 0 0 19 9"></svg:path></svg:g>`,
})
export class LucideGitGraphIcon {
  readonly viewBox = input('0 0 24 24')
  readonly width = input('1em')
  readonly height = input('1em')
}
