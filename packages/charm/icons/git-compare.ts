import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[charmGitCompareIcon],svg[charm-git-compare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:circle cx="12.5" cy="12.5" r="1.75"></svg:circle><svg:circle cx="3.5" cy="3.5" r="1.75"></svg:circle><svg:path d="M3.75 5.75v5q0 1.5 1.5 1.5h2m-.5 2l1.5-2l-1.5-2m5.5 0v-5q0-1.5-1.5-1.5h-2m.5-2l-1.5 2l1.5 2"></svg:path></svg:g>`,
})
export class CharmGitCompareIcon {
  readonly viewBox = input("0 0 16 16")
  readonly width = input("1em")
  readonly height = input("1em")
}
