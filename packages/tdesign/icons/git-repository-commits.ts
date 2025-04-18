import { Component, input } from '@angular/core'

@Component({
  standalone: true,
  selector: 'svg[tdesignGitRepositoryCommitsIcon],svg[tdesign-git-repository-commits-icon]',
  host: {
    role: 'img',
    '[attr.viewBox]': 'viewBox()',
    '[attr.width]': 'width()',
    '[attr.height]': 'height()',
  },
  template: `<svg:path fill="currentColor" d="M3 5.5A4.5 4.5 0 0 1 7.5 1H21v22h-5v-2h3v-5h-2.5v-2H19V3H7.5A2.5 2.5 0 0 0 5 5.5v9.258A4.5 4.5 0 0 1 7.5 14h2v2h-2a2.5 2.5 0 0 0 0 5H10v2H7.5A4.5 4.5 0 0 1 3 18.5zM8 5h2.004v2.004H8zm0 3h2.004v2.004H8zm5 6.615l3.914 3.75l-1.384 1.444L14 18.343V23h-2v-4.657l-1.53 1.466l-1.384-1.445z"></svg:path>`,
})
export class TdesignGitRepositoryCommitsIcon {
  readonly viewBox = input("0 0 24 24")
  readonly width = input("1em")
  readonly height = input("1em")
}
