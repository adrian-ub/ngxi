import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignGitRepositoryCommitsFilledIcon],svg[tdesign-git-repository-commits-filled-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M7 1a4 4 0 0 0-4 4v14a4 4 0 0 0 4 4h3v-2H7.5a2.5 2.5 0 0 1 0-5h1.468a4.5 4.5 0 0 1 8.064 0H19v5h-3v2h5V1zm1 4h2.004v2.004H8zm0 3h2.004v2.004H8z"></svg:path><svg:path fill="currentColor" d="M16.914 18.364L13 14.615l-3.914 3.75l1.383 1.444L12 18.343V23h2v-4.657l1.531 1.466z"></svg:path>`,
})
export class TdesignGitRepositoryCommitsFilledIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
