import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[hugeiconsGitForkIcon],svg[hugeicons-git-fork-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M6 8a2 2 0 1 0 0-4a2 2 0 0 0 0 4m6 12a2 2 0 1 0 0-4a2 2 0 0 0 0 4m6-12a2 2 0 1 0 0-4a2 2 0 0 0 0 4m-11.983.741c0 1.674-.242 3.459 3.204 3.245h2.784m5.988-3.41c.133 3.41-1.073 3.19-2.207 3.41h-3.78m0 3.714v-3.714" color="currentColor"></svg:path>`,
})
export class HugeiconsGitForkIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
