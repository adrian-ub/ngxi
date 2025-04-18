import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[iconoirGitCompareIcon],svg[iconoir-git-compare-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"><svg:path d="M18 21a2 2 0 1 0 0-4a2 2 0 0 0 0 4M6 7a2 2 0 1 0 0-4a2 2 0 0 0 0 4m12 10V7s0-2-2-2h-3M6 7v10s0 2 2 2h3"></svg:path><svg:path d="M15 7.5L12.5 5L15 2.5m-6.5 14L11 19l-2.5 2.5"></svg:path></svg:g>`,
})
export class IconoirGitCompareIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
