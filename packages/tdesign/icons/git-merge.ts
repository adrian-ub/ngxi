import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignGitMergeIcon],svg[tdesign-git-merge-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M5.5 4.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3M2 6a3.5 3.5 0 1 1 4.667 3.3A2 2 0 0 0 8.5 10.5h7a4 4 0 0 1 4 4v.145a3.502 3.502 0 0 1-1 6.855a3.5 3.5 0 0 1-1-6.855V14.5a2 2 0 0 0-2-2h-7a4 4 0 0 1-2-.535v2.68a3.502 3.502 0 0 1-1 6.855a3.5 3.5 0 0 1-1-6.855v-5.29A3.5 3.5 0 0 1 2 6m16.5 10.5a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3m-13 0a1.5 1.5 0 1 0 0 3a1.5 1.5 0 0 0 0-3"></svg:path>`,
})
export class TdesignGitMergeIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
