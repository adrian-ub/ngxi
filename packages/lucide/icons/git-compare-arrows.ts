import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[lucideGitCompareArrowsIcon],svg[lucide-git-compare-arrows-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><svg:circle cx="5" cy="6" r="3"></svg:circle><svg:path d="M12 6h5a2 2 0 0 1 2 2v7"></svg:path><svg:path d="m15 9l-3-3l3-3"></svg:path><svg:circle cx="19" cy="18" r="3"></svg:circle><svg:path d="M12 18H7a2 2 0 0 1-2-2V9"></svg:path><svg:path d="m9 15l3 3l-3 3"></svg:path></svg:g>`,
})
export class LucideGitCompareArrowsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
