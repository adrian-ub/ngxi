import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[phGitDiffBoldIcon],svg[ph-git-diff-bold-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M112 148a12 12 0 0 0-12 12v19l-30.83-30.8a4 4 0 0 1-1.17-2.83V97.94a36 36 0 1 0-24 0v47.43a27.8 27.8 0 0 0 8.2 19.8L83 196H64a12 12 0 0 0 0 24h48a12 12 0 0 0 12-12v-48a12 12 0 0 0-12-12M56 52a12 12 0 1 1-12 12a12 12 0 0 1 12-12m156 106.06v-47.43a27.8 27.8 0 0 0-8.2-19.8L173 60h19a12 12 0 0 0 0-24h-48a12 12 0 0 0-12 12v48a12 12 0 0 0 24 0V77l30.83 30.83a4 4 0 0 1 1.17 2.83v47.43a36 36 0 1 0 24 0ZM200 204a12 12 0 1 1 12-12a12 12 0 0 1-12 12"></svg:path>`,
})
export class PhGitDiffBoldIcon {
  readonly viewBox = input("0 0 256 256")
  readonly width = input("1em")
  readonly height = input("1em")
}
